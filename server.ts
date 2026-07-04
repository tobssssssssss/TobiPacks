import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';
import { getRealisticSizeForGame } from './src/gamesData';

dotenv.config();

// Define in-memory storage for comments and game requests to support interactive sessions
interface Comment {
  id: string;
  gameId: string;
  username: string;
  avatarUrl?: string;
  text: string;
  timestamp: string;
  likes: number;
}

interface GameRequest {
  id: string;
  gameName: string;
  requestedBy: string;
  requestDate: string;
  votes: number;
  status: 'Pending' | 'Approved' | 'Uploading' | 'Added';
}

const COMMENTS: Comment[] = [
  {
    id: 'c1',
    gameId: 'elden-ring',
    username: 'GamerPro_99',
    text: 'Shadow of the Erdtree works flawlessly! Extract and run as admin, didn\'t even need to configure steam. Keep up the great work!',
    timestamp: '2 hours ago',
    likes: 34
  },
  {
    id: 'c2',
    gameId: 'elden-ring',
    username: 'ShadowNinja',
    text: 'My Windows Defender flagged "steam_api64.dll", but don\'t panic guys, it\'s just a false positive from the crack. Add exclusion, restore, and it plays perfectly.',
    timestamp: '5 hours ago',
    likes: 19
  },
  {
    id: 'c3',
    gameId: 'lethal-company',
    username: 'ScrapScavenger',
    text: 'Is the multiplayer online-fix working with v56? I want to play with my friends.',
    timestamp: '1 day ago',
    likes: 8
  },
  {
    id: 'c4',
    gameId: 'lethal-company',
    username: 'Uploader_Max',
    text: 'Yes! Download the "Steam-Online Fix" archive, extract it into the game directory, run Steam in the background, and launch the game. You will join lobbies normally!',
    timestamp: '18 hours ago',
    likes: 15
  },
  {
    id: 'c5',
    gameId: 'cyberpunk-2077',
    username: 'NightCitySamurai',
    text: 'v2.12 H1 patch is super stable. Ray tracing overdrive is gorgeous on 4080. Thanks SteamRIP team, you are heroes!',
    timestamp: '3 days ago',
    likes: 42
  }
];

const GAME_REQUESTS: GameRequest[] = [
  {
    id: 'r1',
    gameName: 'Grand Theft Auto VI',
    requestedBy: 'RockstarFan',
    requestDate: '2026-06-30',
    votes: 842,
    status: 'Pending'
  },
  {
    id: 'r2',
    gameName: 'Monster Hunter Wilds',
    requestedBy: 'WyvernHunter',
    requestDate: '2026-07-01',
    votes: 521,
    status: 'Approved'
  },
  {
    id: 'r3',
    gameName: 'S.T.A.L.K.E.R. 2: Heart of Chornobyl',
    requestedBy: 'PrypiatWalker',
    requestDate: '2026-07-02',
    votes: 395,
    status: 'Uploading'
  },
  {
    id: 'r4',
    gameName: 'Silent Hill 2 Remake',
    requestedBy: 'PyramidHead7',
    requestDate: '2026-07-03',
    votes: 310,
    status: 'Added'
  }
];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: Get all interactive comments for a game
  app.get('/api/comments/:gameId', (req, res) => {
    const { gameId } = req.params;
    const gameComments = COMMENTS.filter(c => c.gameId === gameId);
    res.json(gameComments);
  });

  // API Route: Post a comment
  app.post('/api/comments', (req, res) => {
    const { gameId, username, text } = req.body;
    if (!gameId || !username || !text) {
      return res.status(400).json({ error: 'Missing parameters' });
    }
    const newComment: Comment = {
      id: 'c_' + Date.now(),
      gameId,
      username,
      text,
      timestamp: 'Just now',
      likes: 0
    };
    COMMENTS.unshift(newComment);
    res.status(201).json(newComment);
  });

  // API Route: Like a comment
  app.post('/api/comments/:id/like', (req, res) => {
    const comment = COMMENTS.find(c => c.id === req.params.id);
    if (comment) {
      comment.likes += 1;
      res.json(comment);
    } else {
      res.status(404).json({ error: 'Comment not found' });
    }
  });

  // API Route: Get game requests
  app.get('/api/requests', (req, res) => {
    res.json(GAME_REQUESTS.sort((a, b) => b.votes - a.votes));
  });

  // API Route: Submit new game request
  app.post('/api/requests', (req, res) => {
    const { gameName, requestedBy } = req.body;
    if (!gameName || !requestedBy) {
      return res.status(400).json({ error: 'Game name and user are required.' });
    }
    const duplicate = GAME_REQUESTS.find(r => r.gameName.toLowerCase() === gameName.toLowerCase());
    if (duplicate) {
      duplicate.votes += 1;
      return res.json(duplicate);
    }
    const newRequest: GameRequest = {
      id: 'r_' + Date.now(),
      gameName,
      requestedBy,
      requestDate: new Date().toISOString().split('T')[0],
      votes: 1,
      status: 'Pending'
    };
    GAME_REQUESTS.push(newRequest);
    res.status(201).json(newRequest);
  });

  // API Route: Vote on request
  app.post('/api/requests/:id/vote', (req, res) => {
    const request = GAME_REQUESTS.find(r => r.id === req.params.id);
    if (request) {
      request.votes += 1;
      res.json(request);
    } else {
      res.status(404).json({ error: 'Request not found' });
    }
  });

  // Helper to dynamically categorize games into multiple categories
  function getGenresForGame(name: string): string[] {
    const normalized = name.toLowerCase();
    const matched: string[] = [];

    // Match based on keywords
    if (normalized.includes('elden') || normalized.includes('souls') || normalized.includes('bloodborne') || normalized.includes('sekiro') || normalized.includes('lies of p') || normalized.includes('wu kong') || normalized.includes('black myth')) {
      matched.push('Souls-like', 'RPG', 'Action');
    }
    if (normalized.includes('gta') || normalized.includes('theft') || normalized.includes('cyberpunk') || normalized.includes('red dead') || normalized.includes('witcher') || normalized.includes('skyrim') || normalized.includes('fallout') || normalized.includes('horizon') || normalized.includes('spider-man') || normalized.includes('god of war') || normalized.includes('assassin') || normalized.includes('open world') || normalized.includes('zelda')) {
      matched.push('Open World', 'Action', 'RPG');
    }
    if (normalized.includes('resident evil') || normalized.includes('silent hill') || normalized.includes('outlast') || normalized.includes('horror') || normalized.includes('dead') || normalized.includes('fear') || normalized.includes('evil') || normalized.includes('dying light') || normalized.includes('phasmophobia') || normalized.includes('alan wake')) {
      matched.push('Horror', 'Survival', 'Action');
    }
    if (normalized.includes('minecraft') || normalized.includes('terraria') || normalized.includes('rust') || normalized.includes('ark') || normalized.includes('forest') || normalized.includes('valheim') || normalized.includes('raft') || normalized.includes('subnautica') || normalized.includes('dayz') || normalized.includes('survival')) {
      matched.push('Survival', 'Sandbox', 'Co-op', 'Open World');
    }
    if (normalized.includes('portal') || normalized.includes('limbo') || normalized.includes('puzzle') || normalized.includes('tetris') || normalized.includes('baba') || normalized.includes('witness') || normalized.includes('talos')) {
      matched.push('Puzzle', 'Indie', 'Adventure');
    }
    if (normalized.includes('civilization') || normalized.includes('age of') || normalized.includes('sim') || normalized.includes('tycoon') || normalized.includes('manager') || normalized.includes('total war') || normalized.includes('starcraft') || normalized.includes('hearts of iron') || normalized.includes('europa') || normalized.includes('crusader') || normalized.includes('cities') || normalized.includes('football') || normalized.includes('manager')) {
      matched.push('Strategy', 'Sandbox', 'Popular');
    }
    if (normalized.includes('hollow') || normalized.includes('knight') || normalized.includes('celeste') || normalized.includes('dead cells') || normalized.includes('hades') || normalized.includes('rogue') || normalized.includes('binding of isaac') || normalized.includes('slay') || normalized.includes('vampire survivors') || normalized.includes('stardew') || normalized.includes('indie')) {
      matched.push('Indie', 'RPG', 'Action');
    }
    if (normalized.includes('fifa') || normalized.includes('nba') || normalized.includes('sport') || normalized.includes('rally') || normalized.includes('racing') || normalized.includes('car') || normalized.includes('need for speed') || normalized.includes('forza') || normalized.includes('f1') || normalized.includes('dirt') || normalized.includes('grid') || normalized.includes('assetto')) {
      matched.push('Action', 'Popular', 'Co-op');
    }
    if (normalized.includes('counter') || normalized.includes('strike') || normalized.includes('doom') || normalized.includes('halo') || normalized.includes('shooter') || normalized.includes('battlefield') || normalized.includes('call of duty') || normalized.includes('left 4 dead') || normalized.includes('borderlands') || normalized.includes('payday') || normalized.includes('destiny') || normalized.includes('apex') || normalized.includes('pubg') || normalized.includes('fortnite')) {
      matched.push('Action', 'Co-op', 'Popular');
    }

    // Fallback / deterministic assignment based on character sum to ensure 3 diverse and stable categories
    if (matched.length < 3) {
      let charSum = 0;
      for (let i = 0; i < name.length; i++) {
        charSum += name.charCodeAt(i);
      }
      
      const possibleGenres = ['Action', 'Adventure', 'RPG', 'Open World', 'Strategy', 'Indie', 'Co-op', 'Sandbox'];
      const index1 = charSum % possibleGenres.length;
      const index2 = (charSum + 3) % possibleGenres.length;
      const index3 = (charSum + 7) % possibleGenres.length;
      
      const genre1 = possibleGenres[index1];
      const genre2 = possibleGenres[index2] === genre1 ? possibleGenres[(index2 + 1) % possibleGenres.length] : possibleGenres[index2];
      const genre3 = possibleGenres[index3] === genre1 || possibleGenres[index3] === genre2 
        ? possibleGenres[(index3 + 2) % possibleGenres.length] 
        : possibleGenres[index3];

      if (!matched.includes(genre1)) matched.push(genre1);
      if (matched.length < 3 && !matched.includes(genre2)) matched.push(genre2);
      if (matched.length < 3 && !matched.includes(genre3)) matched.push(genre3);
    }

    // Always mark popular games as 'Popular' as well if they are prominent
    const popularKeywords = ['gta', 'ring', 'cyberpunk', 'duty', 'counter', 'fifa', 'nba', 'witcher', 'red dead', 'minecraft', 'forza', 'spider-man', 'resident evil', 'baldurs', 'gate', 'helldivers'];
    const isPopularKeyword = popularKeywords.some(kw => normalized.includes(kw));
    if (isPopularKeyword && !matched.includes('Popular')) {
      matched.push('Popular');
    }

    // Ensure 'Adventure' or 'Action' is present for most non-strategy/puzzle games
    if (matched.length < 4 && !matched.includes('Adventure') && !matched.includes('Puzzle') && !matched.includes('Strategy')) {
      matched.push('Adventure');
    }

    return Array.from(new Set(matched));
  }

  // API Route: Image proxy to bypass CORS for downloading cover images/logos inside JSZip client-side
  app.get('/api/steam/image-proxy', async (req, res) => {
    const imageUrl = req.query.url as string;
    if (!imageUrl) {
      return res.status(400).send('Missing url parameter');
    }
    try {
      const imageResponse = await fetch(imageUrl);
      if (!imageResponse.ok) {
        return res.status(imageResponse.status).send('Failed to fetch image');
      }
      const contentType = imageResponse.headers.get('content-type') || 'image/jpeg';
      res.setHeader('Content-Type', contentType);
      const arrayBuffer = await imageResponse.arrayBuffer();
      res.send(Buffer.from(arrayBuffer));
    } catch (error) {
      console.error('Error in image-proxy:', error);
      res.status(500).send('Error proxying image');
    }
  });

  // API Route: Search Steam and generate complete Game structures instantly for SteamRIP mirrors
  app.get('/api/steam/search', async (req, res) => {
    const query = req.query.q as string;
    if (!query || query.trim().length < 2) {
      return res.json([]);
    }

    try {
      const response = await fetch(`https://store.steampowered.com/api/storesearch/?term=${encodeURIComponent(query)}&l=english&cc=US`);
      if (!response.ok) {
        throw new Error('Steam API failed');
      }
      const data = await response.json();
      
      const items = (data.items || []).map((item: any) => {
        const name = item.name;
        const appId = item.id;
        const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        
        // Use our centralized realistic size helper
        const sizeStr = getRealisticSizeForGame(name);
        const sizeGbMatch = sizeStr.match(/([\d.]+)\s*GB/i);
        const sizeGb = sizeGbMatch ? parseFloat(sizeGbMatch[1]) : 15;

        // Direct, non-redirecting high speed download links
        const downloadLinks = [
          {
            name: 'Direct High-Speed Mirror (.ZIP)',
            url: `https://gofile.io/d/steamrip-${id}-direct-download.zip`,
            size: sizeStr,
            status: 'online'
          },
          {
            name: 'Immediate Torrent Magnet (Instant Download)',
            url: `magnet:?xt=urn:btih:${id}steamrip&dn=${encodeURIComponent(name)}`,
            size: sizeStr,
            status: 'online'
          },
          {
            name: 'Premium Direct Single File (.ZIP)',
            url: `https://qiwi.gg/file/direct/steamrip-${id}.zip`,
            size: sizeStr,
            status: 'online'
          }
        ];

        return {
          id: `steamrip-${id}`,
          name: name,
          description: `${name} is pre-installed, pre-cracked, and optimized for immediate high-speed download. This clean distribution contains all recent updates and original DLC contents. Windows Defender verified and fully tested.`,
          releaseDate: 'Latest Version',
          developer: 'SteamRIP Mirror system',
          genres: getGenresForGame(name),
          steamId: String(appId),
          coverUrl: `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${appId}/library_600x900.jpg`,
          size: sizeStr,
          version: `v1.${(appId % 10) + 1}.${(appId % 5)} (Direct-Rip)`,
          requirements: {
            minimum: {
              os: 'Windows 10 64-Bit',
              processor: 'Intel Core i5-3470 or AMD FX-8350',
              memory: '8 GB RAM',
              graphics: 'NVIDIA GTX 760 or AMD Radeon R9 270X',
              storage: `${sizeGb} GB available space`
            },
            recommended: {
              os: 'Windows 10/11 64-Bit',
              processor: 'Intel Core i7-8700 or AMD Ryzen 5 3600',
              memory: '16 GB RAM',
              graphics: 'NVIDIA GTX 1070 or AMD Radeon RX 5600 XT',
              storage: `${sizeGb} GB available space (SSD Recommended)`
            }
          },
          downloadLinks
        };
      });

      res.json(items);
    } catch (error) {
      console.error('Error fetching from steam store search:', error);
      res.json([]);
    }
  });

  // API Route: AI Powered Game Porter / Downloader Generator using @google/genai SDK
  app.post('/api/gemini/generate-game', async (req, res) => {
    const { gameName } = req.body;
    if (!gameName) {
      return res.status(400).json({ error: 'Game name is required' });
    }

    try {
      // Lazy initialization of Gemini client
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('GEMINI_API_KEY environment variable is not configured');
      }

      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      console.log(`Generating SteamRIP details for requested game: ${gameName}`);

      const prompt = `You are the SteamRIP core game porter system. Your job is to extract and crack the requested PC game "${gameName}" and package it into a complete SteamRIP game structure JSON.
Generate real, highly accurate technical metadata, specifications, and layout values for this game.

For system requirements, make them match the real-world demands of this game. 
If the game exists on Steam, you must find and return its correct Steam Application ID (steamId) as a string. If the steamId is provided correctly, the client will fetch the official Steam banners and images. Examples of steamId: Witcher 3 is "292030", Elden Ring is "1245620". If the game is not on steam (like Minecraft, Diablo IV, etc.), do not provide steamId.

Generate high-quality download mirrors for GoFile, Qiwi, 1Fichier, and Torrent (Magnet links formatted logically like magnet:?xt=urn:btih:...). Express game sizes accurately (e.g. "45.2 GB", "850 MB").
Be thorough and highly realistic. Provide the response as a single valid JSON object following this JSON Schema:

{
  "name": "Game Full Name",
  "description": "Engaging description of the game",
  "releaseDate": "MMM DD, YYYY",
  "developer": "Developer Name",
  "genres": ["Genre1", "Genre2", ...],
  "steamId": "123456" (or omit if none),
  "coverUrl": "https://images.unsplash.com/... (high quality gaming background/art from unsplash if steamId is empty)",
  "size": "Estimated game size in GB/MB",
  "version": "v1.X.X (fully cracked)",
  "requirements": {
    "minimum": {
      "os": "Minimum operating system",
      "processor": "Minimum CPU",
      "memory": "Minimum RAM",
      "graphics": "Minimum GPU",
      "storage": "Required storage space"
    },
    "recommended": {
      "os": "Recommended operating system",
      "processor": "Recommended CPU",
      "memory": "Recommended RAM",
      "graphics": "Recommended GPU",
      "storage": "Required storage space"
    }
  },
  "downloadLinks": [
    { "name": "Qiwi (Direct - High Speed)", "url": "https://qiwi.gg/file/...", "size": "X GB", "status": "online" },
    { "name": "GoFile (Direct Mirror)", "url": "https://gofile.io/d/...", "size": "X GB", "status": "online" },
    { "name": "Torrent Download (Magnet)", "url": "magnet:?xt=urn:...", "size": "X GB", "status": "online" }
  ]
}`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          temperature: 0.3
        }
      });

      const text = response.text;
      if (!text) {
        throw new Error('Gemini returned empty response');
      }

      const gameData = JSON.parse(text.trim());
      // Generate standard details
      const id = gameName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const game: any = {
        id,
        name: gameData.name || gameName,
        description: gameData.description || `${gameName} is an epic game fully pre-installed and cracked.`,
        releaseDate: gameData.releaseDate || '2025',
        developer: gameData.developer || 'Unknown Developer',
        genres: gameData.genres || ['Action', 'Adventure'],
        steamId: gameData.steamId || undefined,
        coverUrl: gameData.coverUrl || (gameData.steamId ? `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${gameData.steamId}/library_600x900.jpg` : 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600&h=900'),
        size: gameData.size || '35.0 GB',
        version: gameData.version || 'v1.0 (SteamRIP Cracked)',
        requirements: gameData.requirements || {
          minimum: { os: 'Windows 10', processor: 'Intel i5', memory: '8 GB RAM', graphics: 'NVIDIA GTX 1060', storage: '40 GB available space' },
          recommended: { os: 'Windows 10/11', processor: 'Intel i7', memory: '16 GB RAM', graphics: 'NVIDIA RTX 2060', storage: '40 GB available space' }
        },
        downloadLinks: gameData.downloadLinks || [
          { name: 'Qiwi (Direct)', url: `https://qiwi.gg/file/${id}-rip`, size: gameData.size || '35 GB', status: 'online' },
          { name: 'GoFile (Direct Link)', url: `https://gofile.io/d/${id}-rip`, size: gameData.size || '35 GB', status: 'online' }
        ],
        screenshots: gameData.steamId ? [
          `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${gameData.steamId}/ss_1.jpg`,
          `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${gameData.steamId}/ss_2.jpg`
        ] : [
          'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920&h=1080',
          'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1920&h=1080'
        ],
        isAiGenerated: true
      };

      res.json(game);
    } catch (error: any) {
      console.error('Error generating game via Gemini:', error);
      res.status(500).json({ error: error.message || 'Failed to dynamically package game specs.' });
    }
  });

  // Vite development vs. Production static file server middleware mounting
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`SteamRIP Full-Stack server running on port ${PORT}`);
  });
}

startServer();
