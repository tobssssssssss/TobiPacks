import { Game, FAQItem } from './types';

export const STATIC_GAMES: Game[] = [
  {
    id: 'elden-ring',
    name: 'Elden Ring: Shadow of the Erdtree',
    description: 'The Golden Order has been broken. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between. In the Shadow of the Erdtree expansion, players step into the Land of Shadow to explore a new adventure full of mysteries and danger.',
    releaseDate: 'Jun 21, 2024',
    developer: 'FromSoftware Inc.',
    genres: ['Action', 'RPG', 'Open World', 'Souls-like'],
    steamId: '1245620',
    coverUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/library_600x900.jpg',
    size: '58.2 GB',
    version: 'v1.12.3 (incl. DLC)',
    requirements: {
      minimum: {
        os: 'Windows 10 (64-bit)',
        processor: 'Intel Core i5-8400 or AMD Ryzen 3 3300X',
        memory: '12 GB RAM',
        graphics: 'NVIDIA GeForce GTX 1060 3GB or AMD Radeon RX 580 4GB',
        storage: '60 GB available space (SSD recommended)'
      },
      recommended: {
        os: 'Windows 10/11 (64-bit)',
        processor: 'Intel Core i7-8700K or AMD Ryzen 5 3600X',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GeForce GTX 1070 8GB or AMD Radeon RX Vega 56 8GB',
        storage: '60 GB available space (SSD recommended)'
      }
    },
    downloadLinks: [
      { name: 'Qiwi (Direct - High Speed)', url: 'https://qiwi.gg/file/elden-ring-shadow-of-the-erdtree-rip', size: '58.2 GB', status: 'online' },
      { name: 'GoFile (Direct - No limits)', url: 'https://gofile.io/d/elden-ring-shadow-erdtree', size: '58.2 GB', status: 'online' },
      { name: '1Fichier (High Speed Premium)', url: 'https://1fichier.com/?eldenring-shadow-rip', size: '58.2 GB', status: 'online' },
      { name: 'Torrent Download (Magnet)', url: 'magnet:?xt=urn:btih:eldenringshadowoferdtreecrackedsteamrip', size: '58.2 GB', status: 'online' }
    ],
    screenshots: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/ss_4cb900609b5526cf54483ef311746c10b4887309.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/ss_0c4959a4b5ff54388e678edb7ef07a977ccba9e6.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/ss_8e7f12e84c98ca4859a7a5f64ee373507ea96a60.1920x1080.jpg'
    ]
  },
  {
    id: 'cyberpunk-2077',
    name: 'Cyberpunk 2077: Ultimate Edition',
    description: 'Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Upgraded with next-gen in mind and featuring brand-new free content, customize your character and playstyle as you take on jobs, build a reputation, and unlock upgrades.',
    releaseDate: 'Dec 5, 2023',
    developer: 'CD PROJEKT RED',
    genres: ['Action', 'RPG', 'Open World', 'Sci-fi', 'FPS'],
    steamId: '1091500',
    coverUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/library_600x900.jpg',
    size: '76.4 GB',
    version: 'v2.12 H1 (Ultimate Edition)',
    requirements: {
      minimum: {
        os: 'Windows 10 (64-bit)',
        processor: 'Intel Core i7-6700 or AMD Ryzen 5 1600',
        memory: '12 GB RAM',
        graphics: 'NVIDIA GeForce GTX 1060 6GB or AMD Radeon RX 580 8GB',
        storage: '70 GB available space (SSD Required)'
      },
      recommended: {
        os: 'Windows 10/11 (64-bit)',
        processor: 'Intel Core i7-12700 or AMD Ryzen 7 7800X3D',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GeForce RTX 2060 SUPER or AMD Radeon RX 5700 XT',
        storage: '70 GB available space (SSD Required)'
      }
    },
    downloadLinks: [
      { name: 'Qiwi (Direct - High Speed)', url: 'https://qiwi.gg/file/cyberpunk-2077-v212-steamrip', size: '76.4 GB', status: 'online' },
      { name: 'GoFile (Direct - No limits)', url: 'https://gofile.io/d/cyberpunk-2077-v212', size: '76.4 GB', status: 'online' },
      { name: 'Mega (Mirror Link)', url: 'https://mega.nz/folder/cyberpunk-2077-ultimate', size: '76.4 GB', status: 'online' },
      { name: 'Torrent Download (Magnet)', url: 'magnet:?xt=urn:btih:cyberpunk2077ultimateeditioncracked', size: '76.4 GB', status: 'online' }
    ],
    screenshots: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/ss_eeef14e1378877ff1990c0087799ff2468351543.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/ss_dd09b552fa775d5ec426e200388e63b65287e07d.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/ss_c394c506cf2c78a10b42df3fa8d451a9bf19d85d.1920x1080.jpg'
    ]
  },
  {
    id: 'baldurs-gate-3',
    name: 'Baldurs Gate 3',
    description: 'Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power. Mysterious abilities are awakening within you, drawn from a mind flayer parasite planted in your brain. Resist, and turn darkness against itself. Or embrace corruption, and become ultimate evil.',
    releaseDate: 'Aug 3, 2023',
    developer: 'Larian Studios',
    genres: ['RPG', 'Strategy', 'Turn-Based', 'Fantasy'],
    steamId: '1086940',
    coverUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/library_600x900.jpg',
    size: '124.3 GB',
    version: 'v4.1.1 (Patch 7)',
    requirements: {
      minimum: {
        os: 'Windows 10 (64-bit)',
        processor: 'Intel I5 4690 or AMD FX 8350',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 970 or RX 480 (4GB+ of VRAM)',
        storage: '150 GB available space (SSD Required)'
      },
      recommended: {
        os: 'Windows 10/11 (64-bit)',
        processor: 'Intel i7 8700K or AMD r5 3600',
        memory: '16 GB RAM',
        graphics: 'NVIDIA RTX 2060 Super or RX 5700 XT (8GB+ of VRAM)',
        storage: '150 GB available space (SSD Required)'
      }
    },
    downloadLinks: [
      { name: 'Qiwi (Part 1 - 50GB)', url: 'https://qiwi.gg/file/bg3-part1', size: '50.0 GB', status: 'online' },
      { name: 'Qiwi (Part 2 - 50GB)', url: 'https://qiwi.gg/file/bg3-part2', size: '50.0 GB', status: 'online' },
      { name: 'Qiwi (Part 3 - 24.3GB)', url: 'https://qiwi.gg/file/bg3-part3', size: '24.3 GB', status: 'online' },
      { name: 'GoFile (Direct Link)', url: 'https://gofile.io/d/baldurs-gate-3-patch7', size: '124.3 GB', status: 'online' },
      { name: 'Torrent Download (Magnet)', url: 'magnet:?xt=urn:btih:baldursgate3fullcracksteamrip', size: '124.3 GB', status: 'online' }
    ],
    screenshots: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/ss_891e4a1913d8d5df990e54d3df19f5dfebfa9e93.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/ss_cb3be3028d703714ec5a73e6a9ee86cb15f793b5.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/ss_f8350d53c301c3bf79320e8b28f8f9024f0c4bb2.1920x1080.jpg'
    ]
  },
  {
    id: 'black-myth-wukong',
    name: 'Black Myth: Wukong',
    description: 'Black Myth: Wukong is an action RPG rooted in Chinese mythology. The story is based on Journey to the West, one of the Four Great Classical Novels of Chinese literature. You shall set out as the Destined One to venture into the challenges and marvels ahead, to uncover the obscured truth beneath the veil of a glorious legend from the past.',
    releaseDate: 'Aug 20, 2024',
    developer: 'Game Science',
    genres: ['Action', 'RPG', 'Souls-like', 'Adventure'],
    steamId: '2358720',
    coverUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/library_600x900.jpg',
    size: '118.0 GB',
    version: 'v1.0.8.14822',
    requirements: {
      minimum: {
        os: 'Windows 10 (64-bit)',
        processor: 'Intel Core i5-8400 or AMD Ryzen 5 1600',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GeForce GTX 1060 6GB or AMD Radeon RX 590 8GB',
        storage: '130 GB available space (SSD Required)'
      },
      recommended: {
        os: 'Windows 10/11 (64-bit)',
        processor: 'Intel Core i7-9700 or AMD Ryzen 5 5500',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GeForce RTX 2060 or AMD Radeon RX 5700 XT or INTEL Arc A750',
        storage: '130 GB available space (SSD Required)'
      }
    },
    downloadLinks: [
      { name: 'GoFile (Direct)', url: 'https://gofile.io/d/blackmythwukongcrack', size: '118.0 GB', status: 'online' },
      { name: 'Qiwi (Part 1 - 60GB)', url: 'https://qiwi.gg/file/wukong-part1', size: '60.0 GB', status: 'online' },
      { name: 'Qiwi (Part 2 - 58GB)', url: 'https://qiwi.gg/file/wukong-part2', size: '58.0 GB', status: 'online' },
      { name: 'Torrent Download (Magnet)', url: 'magnet:?xt=urn:btih:blackmythwukongsteamripcrack', size: '118.0 GB', status: 'online' }
    ],
    screenshots: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/ss_8bf8d023bf7f1e784534efd0340b6154b03657ff.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/ss_9122fb27ba308a405a3f9e8023df29f12dfcb67b.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/ss_bcae1c070444391b10a21087e504ff89617d12f3.1920x1080.jpg'
    ]
  },
  {
    id: 'grand-theft-auto-v',
    name: 'Grand Theft Auto V',
    description: 'When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the underworld, the U.S. government and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody, least of all each other.',
    releaseDate: 'Apr 14, 2015',
    developer: 'Rockstar North',
    genres: ['Action', 'Open World', 'Shooter', 'Crime'],
    steamId: '271590',
    coverUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/271590/library_600x900.jpg',
    size: '109.5 GB',
    version: 'v1.0.3095 (incl. Online DLCs)',
    requirements: {
      minimum: {
        os: 'Windows 10 (64-bit)',
        processor: 'Intel Core 2 Quad CPU Q6600 @ 2.40GHz or AMD Phenom 9850 Quad-Core @ 2.5GHz',
        memory: '4 GB RAM',
        graphics: 'NVIDIA 9800 GT 1GB or AMD HD 4870 1GB',
        storage: '110 GB available space'
      },
      recommended: {
        os: 'Windows 10/11 (64-bit)',
        processor: 'Intel Core i5 3470 @ 3.2GHz or AMD X8 FX-8350 @ 4GHz',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 660 2GB or AMD HD 7870 2GB',
        storage: '110 GB available space'
      }
    },
    downloadLinks: [
      { name: 'Qiwi (Direct - High Speed)', url: 'https://qiwi.gg/file/gtav-steamrip-v3095', size: '109.5 GB', status: 'online' },
      { name: 'GoFile (Mirror Link)', url: 'https://gofile.io/d/gta-v-v3095', size: '109.5 GB', status: 'online' },
      { name: 'Torrent Download (Magnet)', url: 'magnet:?xt=urn:btih:gta5fullpcgamecrackedsteamrip', size: '109.5 GB', status: 'online' }
    ],
    screenshots: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/271590/ss_6ccf400b467ec69fe618b1c4b78df150e79ec364.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/271590/ss_26da68a183d6995663737526ae7976e107dfccf3.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/271590/ss_db61dbf8072186835a6439247f154569f1092671.1920x1080.jpg'
    ]
  },
  {
    id: 'ghost-of-tsushima',
    name: 'Ghost of Tsushima DIRECTOR\'S CUT',
    description: 'In the late 13th century, the Mongol empire has laid waste to entire nations along their campaign to conquer the East. Tsushima Island is all that stands between mainland Japan and a massive Mongol invasion fleet led by the ruthless and cunning general, Khotun Khan. As the island burns in the wake of the first wave of the Mongol assault, courageous samurai warrior Jin Sakai stands resolute.',
    releaseDate: 'May 16, 2024',
    developer: 'Sucker Punch Productions',
    genres: ['Action', 'Adventure', 'Open World', 'Hack & Slash'],
    steamId: '2215430',
    coverUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2215430/library_600x900.jpg',
    size: '59.1 GB',
    version: 'v1053.3.0612 (Directors Cut)',
    requirements: {
      minimum: {
        os: 'Windows 10 (64-bit)',
        processor: 'Intel Core i3-7100 or AMD Ryzen 3 1200',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GeForce GTX 960 4GB or AMD Radeon RX 5500 XT',
        storage: '75 GB available space (SSD Recommended)'
      },
      recommended: {
        os: 'Windows 10/11 (64-bit)',
        processor: 'Intel Core i5-8600 or AMD Ryzen 5 3600',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GeForce RTX 2060 or AMD Radeon RX 5600 XT',
        storage: '75 GB available space (SSD Required)'
      }
    },
    downloadLinks: [
      { name: 'Qiwi (Direct Link)', url: 'https://qiwi.gg/file/ghost-of-tsushima-directors-cut-steamrip', size: '59.1 GB', status: 'online' },
      { name: 'GoFile (High Speed Direct)', url: 'https://gofile.io/d/tsushima-directors-cut', size: '59.1 GB', status: 'online' },
      { name: 'Torrent Download (Magnet)', url: 'magnet:?xt=urn:btih:ghostofstushimacrackedsteamrip', size: '59.1 GB', status: 'online' }
    ],
    screenshots: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2215430/ss_8257088b693e5c700fa32b85e0539f37c38fc7bf.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2215430/ss_cd94e75618778f2441c2c2f74112e4b3c4f92ce1.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2215430/ss_b84d12976b3cfd29255ecf365ae7da0700078028.1920x1080.jpg'
    ]
  },
  {
    id: 'hades-2',
    name: 'Hades II',
    description: 'Battle beyond the Underworld using dark magic to take on the Titan of Time in this bewitching sequel to the award-winning rogue-like dungeon crawler. Developed by Supergiant Games, this sequel brings incredible replayability, stunning artistic direction, and high-octane slashing.',
    releaseDate: 'May 6, 2024',
    developer: 'Supergiant Games',
    genres: ['Action', 'Indie', 'Rogue-like', 'RPG'],
    steamId: '1145350',
    coverUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145350/library_600x900.jpg',
    size: '4.8 GB',
    version: 'v0.92381 (Early Access)',
    requirements: {
      minimum: {
        os: 'Windows 10 (64-bit)',
        processor: 'Dual Core 2.4 GHz',
        memory: '8 GB RAM',
        graphics: 'GeForce GTX 950 or Radeon R7 360 or Intel HD Graphics 630',
        storage: '10 GB available space'
      },
      recommended: {
        os: 'Windows 10/11 (64-bit)',
        processor: 'Quad Core 3.0 GHz',
        memory: '16 GB RAM',
        graphics: 'GeForce GTX 1060 or Radeon RX 580',
        storage: '10 GB available space (SSD Recommended)'
      }
    },
    downloadLinks: [
      { name: 'Qiwi (Direct)', url: 'https://qiwi.gg/file/hades2-earlyaccess-steamrip', size: '4.8 GB', status: 'online' },
      { name: 'GoFile (Direct Link)', url: 'https://gofile.io/d/hades-ii-ea', size: '4.8 GB', status: 'online' },
      { name: 'Torrent Download (Magnet)', url: 'magnet:?xt=urn:btih:hades2earlyaccesscrackpc', size: '4.8 GB', status: 'online' }
    ],
    screenshots: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145350/ss_925ebca97e79927b231ff3d6a7d5fb0d288d0bda.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145350/ss_691e813a116f39d1b54a88ae3eb28ecb34a66bd2.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145350/ss_b831e13ff83a3754942095ee8ec823e20ec689ea.1920x1080.jpg'
    ]
  },
  {
    id: 'stray',
    name: 'Stray',
    description: 'Lost, alone and separated from family, a stray cat must untangle an ancient mystery to escape a long-forgotten cybercity. Stray is a third-person cat adventure game set amidst the detailed, neon-lit alleys of a decaying cybercity and the murky environments of its seedy underbelly. Roam surroundings high and low, defend against unforeseen threats and solve the mysteries of this unwelcoming place inhabited by curious droids and dangerous creatures.',
    releaseDate: 'Jul 19, 2022',
    developer: 'BlueTwelve Studio',
    genres: ['Adventure', 'Indie', 'Atmospheric', 'Sci-fi'],
    steamId: '1332010',
    coverUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1332010/library_600x900.jpg',
    size: '6.5 GB',
    version: 'v1.4.382 (Pre-installed)',
    requirements: {
      minimum: {
        os: 'Windows 10 (64-bit)',
        processor: 'Intel Core i5-2300 or AMD FX-6350',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GeForce GTX 650 Ti 2GB or AMD Radeon R7 360 2GB',
        storage: '10 GB available space'
      },
      recommended: {
        os: 'Windows 10/11 (64-bit)',
        processor: 'Intel Core i5-8400 or AMD Ryzen 5 2600',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GeForce GTX 780 3GB or AMD Radeon R9 290X 4GB',
        storage: '10 GB available space'
      }
    },
    downloadLinks: [
      { name: 'Qiwi (Direct Link)', url: 'https://qiwi.gg/file/stray-v14382-steamrip', size: '6.5 GB', status: 'online' },
      { name: 'GoFile (Direct Mirror)', url: 'https://gofile.io/d/stray-cat-game', size: '6.5 GB', status: 'online' },
      { name: 'Torrent Download (Magnet)', url: 'magnet:?xt=urn:btih:straycatgamecracksteamrip', size: '6.5 GB', status: 'online' }
    ],
    screenshots: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1332010/ss_2b3967817eb6bc799f92d6e409b300302b1f86d8.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1332010/ss_b831e13ff83a3754942095ee8ec823e20ec689ea.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1332010/ss_dd29b47e8bbefdf7ba27cc789a912df082a5c4cc.1920x1080.jpg'
    ]
  },
  {
    id: 'lethal-company',
    name: 'Lethal Company',
    description: 'A co-op horror game about scavenging at abandoned moons to sell scrap to the Company. Work together with your crew to reach the daily quotas, use flashlights, walkie-talkies, and scan for valuable scrap, but beware of what lurking inside the shadows of these industrialized installations.',
    releaseDate: 'Oct 23, 2023',
    developer: 'Zeekerss',
    genres: ['Action', 'Co-op', 'Horror', 'Indie'],
    steamId: '1966720',
    coverUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1966720/library_600x900.jpg',
    size: '850 MB',
    version: 'v56 (Multiplayer online-fix)',
    requirements: {
      minimum: {
        os: 'Windows 10 (64-bit)',
        processor: 'Intel Core i5-7400 or AMD Ryzen 3 1200',
        memory: '4 GB RAM',
        graphics: 'NVIDIA GeForce GTX 1050 or AMD Radeon RX 550',
        storage: '1 GB available space'
      },
      recommended: {
        os: 'Windows 10/11 (64-bit)',
        processor: 'Intel Core i7-8700 or AMD Ryzen 5 3600',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GeForce GTX 1060 6GB or AMD Radeon RX 580',
        storage: '1 GB available space'
      }
    },
    downloadLinks: [
      { name: 'Qiwi (Direct - SteamRIP)', url: 'https://qiwi.gg/file/lethal-company-v56-onlinefix', size: '850 MB', status: 'online' },
      { name: 'GoFile (Direct High-Speed)', url: 'https://gofile.io/d/lethalcompanyv56', size: '850 MB', status: 'online' },
      { name: 'Steam-Online Fix (Lobby Joinable)', url: 'https://gofile.io/d/lethalcompany-onlinefix', size: '12 MB', status: 'online' }
    ],
    screenshots: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1966720/ss_eeef14e1378877ff1990c0087799ff2468351543.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1966720/ss_9122fb27ba308a405a3f9e8023df29f12dfcb67b.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1966720/ss_bcae1c070444391b10a21087e504ff89617d12f3.1920x1080.jpg'
    ]
  },
  {
    id: 'red-dead-redemption-2',
    name: 'Red Dead Redemption 2',
    description: 'Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.',
    releaseDate: 'Dec 5, 2019',
    developer: 'Rockstar Games',
    genres: ['Action', 'Adventure', 'Open World', 'Atmospheric'],
    steamId: '1174180',
    coverUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/library_600x900.jpg',
    size: '119.4 GB',
    version: 'v1.0.1491.50',
    requirements: {
      minimum: {
        os: 'Windows 10 - April 2018 Update (v1803)',
        processor: 'Intel Core i5-2500K or AMD FX-6300',
        memory: '8 GB RAM',
        graphics: 'Nvidia GeForce GTX 770 2GB or AMD Radeon R9 280 3GB',
        storage: '150 GB available space'
      },
      recommended: {
        os: 'Windows 10/11 - Latest Update',
        processor: 'Intel Core i7-4770K or AMD Ryzen 5 1500X',
        memory: '12 GB RAM',
        graphics: 'Nvidia GeForce GTX 1060 6GB or AMD Radeon RX 480 4GB',
        storage: '150 GB available space (SSD Recommended)'
      }
    },
    downloadLinks: [
      { name: 'Qiwi (Part 1 - 60GB)', url: 'https://qiwi.gg/file/rdr2-part1', size: '60.0 GB', status: 'online' },
      { name: 'Qiwi (Part 2 - 59.4GB)', url: 'https://qiwi.gg/file/rdr2-part2', size: '59.4 GB', status: 'online' },
      { name: 'GoFile (Direct High Speed)', url: 'https://gofile.io/d/rdr2-build-1491', size: '119.4 GB', status: 'online' },
      { name: 'Torrent Download (Magnet)', url: 'magnet:?xt=urn:btih:reddeadredemption2crackedsteamrip', size: '119.4 GB', status: 'online' }
    ],
    screenshots: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/ss_fc947387b693e5c700fa32b85e0539f37c38fc7bf.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/ss_26da68a183d6995663737526ae7976e107dfccf3.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/ss_db61dbf8072186835a6439247f154569f1092671.1920x1080.jpg'
    ]
  },
  {
    id: 'minecraft',
    name: 'Minecraft (incl. Java & Bedrock)',
    description: 'Explore infinite worlds and build everything from the simplest of homes to the grandest of castles. Play in creative mode with unlimited resources or mine deep into the world in survival mode, crafting weapons and armor to fend off dangerous mobs. Build, create, and explore alone or with friends on mobile devices or Windows 10.',
    releaseDate: 'Nov 18, 2011',
    developer: 'Mojang Studios',
    genres: ['Survival', 'Sandbox', 'Open World', 'Indie'],
    coverUrl: 'https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&q=80&w=600&h=900',
    size: '1.2 GB',
    version: 'v1.21.1 (Java & Bedrock Multi)',
    requirements: {
      minimum: {
        os: 'Windows 10/11 (64-bit)',
        processor: 'Intel Core i3-3210 or AMD A8-7600 APU',
        memory: '4 GB RAM',
        graphics: 'Intel HD Graphics 4000 or AMD Radeon R5 series',
        storage: '4 GB available space'
      },
      recommended: {
        os: 'Windows 10/11 (64-bit)',
        processor: 'Intel Core i5-4690 or AMD A10-7800 APU',
        memory: '8 GB RAM',
        graphics: 'GeForce 700 Series or AMD Radeon Rx 200 Series',
        storage: '4 GB available space'
      }
    },
    downloadLinks: [
      { name: 'Qiwi Launcher + Pre-installed v1.21.1', url: 'https://qiwi.gg/file/minecraft-java-bedrock-steamrip', size: '1.2 GB', status: 'online' },
      { name: 'GoFile (Direct Mirror)', url: 'https://gofile.io/d/minecraft-multiversion', size: '1.2 GB', status: 'online' }
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1607988795691-3d0147b43231?auto=format&fit=crop&q=80&w=1920&h=1080',
      'https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&q=80&w=1920&h=1080'
    ]
  },
  {
    id: 'witcher-3',
    name: 'The Witcher 3: Wild Hunt - Complete Edition',
    description: 'You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract? Tracking down Ciri — the Child of Prophecy, a living weapon that can alter the shape of the world. The Complete Edition includes the base game, offering a huge over 100-hour open-world adventure, as well as both massive story expansions: Hearts of Stone & Blood and Wine!',
    releaseDate: 'Dec 14, 2022',
    developer: 'CD PROJEKT RED',
    genres: ['RPG', 'Action', 'Open World', 'Fantasy'],
    steamId: '292030',
    coverUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/library_600x900.jpg',
    size: '51.3 GB',
    version: 'v4.04 (Next-Gen Update)',
    requirements: {
      minimum: {
        os: 'Windows 10 (64-bit)',
        processor: 'Intel CPU Core i5-2500K 3.3GHz or AMD A10-5800K APU',
        memory: '6 GB RAM',
        graphics: 'Nvidia GPU GeForce GTX 660 or AMD GPU Radeon HD 7870',
        storage: '50 GB available space'
      },
      recommended: {
        os: 'Windows 10/11 (64-bit)',
        processor: 'Intel CPU Core i7 3770 3.4 GHz or AMD CPU FX-8350 4 GHz',
        memory: '8 GB RAM',
        graphics: 'Nvidia GPU GeForce GTX 770 or AMD GPU Radeon R9 290',
        storage: '50 GB available space (SSD Recommended)'
      }
    },
    downloadLinks: [
      { name: 'Qiwi (Direct - Full Next Gen)', url: 'https://qiwi.gg/file/witcher3-v404-steamrip', size: '51.3 GB', status: 'online' },
      { name: 'GoFile (Direct No Speed Limits)', url: 'https://gofile.io/d/witcher3-nextgen-v404', size: '51.3 GB', status: 'online' },
      { name: 'Torrent Download (Magnet)', url: 'magnet:?xt=urn:btih:witcher3wildhuntnextgencracksteamrip', size: '51.3 GB', status: 'online' }
    ],
    screenshots: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/ss_f8350d53c301c3bf79320e8b28f8f9024f0c4bb2.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/ss_8e7f12e84c98ca4859a7a5f64ee373507ea96a60.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/ss_0c4959a4b5ff54388e678edb7ef07a977ccba9e6.1920x1080.jpg'
    ]
  },
  {
    id: 'stardew-valley',
    name: 'Stardew Valley',
    description: 'You\'ve inherited your grandfather\'s old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? Create the farm of your dreams, raise animals, go fishing, explore caves, and join the local Pelican Town community!',
    releaseDate: 'Feb 26, 2016',
    developer: 'ConcernedApe',
    genres: ['Indie', 'RPG', 'Simulation', 'Casual', 'Co-op'],
    steamId: '413150',
    coverUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413150/library_600x900.jpg',
    size: '650 MB',
    version: 'v1.6.8 (Pre-installed)',
    requirements: {
      minimum: {
        os: 'Windows 10 (64-bit)',
        processor: '2.0 GHz',
        memory: '2 GB RAM',
        graphics: '256 mb video memory, shader model 3.0+',
        storage: '1 GB available space'
      },
      recommended: {
        os: 'Windows 10/11 (64-bit)',
        processor: '2.4 GHz',
        memory: '4 GB RAM',
        graphics: '512 mb video memory, shader model 3.0+',
        storage: '1 GB available space'
      }
    },
    downloadLinks: [
      { name: 'Qiwi (Direct Download)', url: 'https://qiwi.gg/file/stardewvalley-v168-steamrip', size: '650 MB', status: 'online' },
      { name: 'GoFile (Direct Mirror)', url: 'https://gofile.io/d/stardewvalley-v168', size: '650 MB', status: 'online' }
    ],
    screenshots: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413150/ss_9122fb27ba308a405a3f9e8023df29f12dfcb67b.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413150/ss_eeef14e1378877ff1990c0087799ff2468351543.1920x1080.jpg'
    ]
  },
  {
    id: 'hollow-knight',
    name: 'Hollow Knight',
    description: 'Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.',
    releaseDate: 'Feb 24, 2017',
    developer: 'Team Cherry',
    genres: ['Action', 'Indie', 'Metroidvania', 'Souls-like'],
    steamId: '367520',
    coverUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/library_600x900.jpg',
    size: '1.4 GB',
    version: 'v1.5.78.11833 (incl. Godmaster)',
    requirements: {
      minimum: {
        os: 'Windows 7 (64-bit)',
        processor: 'Intel Core 2 Duo E8400 or AMD Athlon 64 X2 5600+',
        memory: '4 GB RAM',
        graphics: 'NVIDIA GeForce 9800 GTX or AMD Radeon HD 4870',
        storage: '9 GB available space'
      },
      recommended: {
        os: 'Windows 10/11 (64-bit)',
        processor: 'Intel Core i5',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GeForce GTX 560 or AMD Radeon HD 6950',
        storage: '9 GB available space'
      }
    },
    downloadLinks: [
      { name: 'Qiwi (Direct Download)', url: 'https://qiwi.gg/file/hollowknight-steamrip', size: '1.4 GB', status: 'online' },
      { name: 'GoFile (Direct Link)', url: 'https://gofile.io/d/hollowknight', size: '1.4 GB', status: 'online' }
    ],
    screenshots: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/ss_c394c506cf2c78a10b42df3fa8d451a9bf19d85d.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/ss_eeef14e1378877ff1990c0087799ff2468351543.1920x1080.jpg'
    ]
  },
  {
    id: 'portal-2',
    name: 'Portal 2',
    description: 'Portal 2 draws from the award-winning formula of innovative gameplay, story, and music that earned the original Portal over 70 industry accolades and created a cult following. The single-player portion of Portal 2 introduces a cast of dynamic new characters, a host of fresh puzzle elements, and a much larger set of devious test chambers.',
    releaseDate: 'Apr 18, 2011',
    developer: 'Valve',
    genres: ['Puzzle', 'Co-op', 'Sci-fi', 'First-Person'],
    steamId: '620',
    coverUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/620/library_600x900.jpg',
    size: '7.2 GB',
    version: 'v2023.11.20 (incl. Co-op)',
    isPopular: true,
    requirements: {
      minimum: {
        os: 'Windows 7 / Vista / XP',
        processor: '3.0 GHz P4, Dual Core 2.0 or AMD64X2',
        memory: '2 GB RAM',
        graphics: '128 MB video card with support for Pixel Shader 2.0b (ATI Radeon X800 / NVIDIA GeForce 7600)',
        storage: '8 GB available space'
      },
      recommended: {
        os: 'Windows 10/11 (64-bit)',
        processor: 'Intel Core 2 Duo or AMD Athlon 64 X2',
        memory: '4 GB RAM',
        graphics: 'DirectX 9 compatible video card with 512 MB VRAM',
        storage: '8 GB available space'
      }
    },
    downloadLinks: [
      { name: 'Qiwi (Direct High Speed)', url: 'https://qiwi.gg/file/portal2-steamrip', size: '7.2 GB', status: 'online' },
      { name: 'GoFile (Direct Link)', url: 'https://gofile.io/d/portal2-updated', size: '7.2 GB', status: 'online' }
    ],
    screenshots: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/620/ss_26da68a183d6995663737526ae7976e107dfccf3.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/620/ss_eeef14e1378877ff1990c0087799ff2468351543.1920x1080.jpg'
    ]
  },
  {
    id: 'spider-man-2',
    name: 'Marvels Spider-Man 2',
    description: 'Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvels Spider-Man franchise. Swing, jump and utilize the new Web Wings to travel across Marvels New York, quickly switching between Peter Parker and Miles Morales to experience different stories and epic new powers, as the iconic villain Venom threatens to destroy their lives, their city and the ones they love.',
    releaseDate: 'Jan 30, 2025',
    developer: 'Insomniac Games, Nixxes Software',
    genres: ['Action', 'Adventure', 'Open World'],
    steamId: '2643800',
    coverUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2643800/library_600x900.jpg',
    size: '86.4 GB',
    version: 'v1.3.1 (Pre-installed)',
    isPopular: true,
    requirements: {
      minimum: {
        os: 'Windows 10 (64-bit)',
        processor: 'Intel Core i5-8400 or AMD Ryzen 5 1600',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GeForce GTX 1660 Super or AMD Radeon RX 5500 XT',
        storage: '90 GB available space (SSD Required)'
      },
      recommended: {
        os: 'Windows 10/11 (64-bit)',
        processor: 'Intel Core i5-11600K or AMD Ryzen 5 5600X',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GeForce RTX 3060 or AMD Radeon RX 6600 XT',
        storage: '90 GB available space (SSD Required)'
      }
    },
    downloadLinks: [
      { name: 'Qiwi (Part 1 - 45GB)', url: 'https://qiwi.gg/file/spiderman2-part1', size: '45.0 GB', status: 'online' },
      { name: 'Qiwi (Part 2 - 41.4GB)', url: 'https://qiwi.gg/file/spiderman2-part2', size: '41.4 GB', status: 'online' },
      { name: 'GoFile (Direct High Speed)', url: 'https://gofile.io/d/spiderman2-pc-rip', size: '86.4 GB', status: 'online' },
      { name: 'Torrent Download (Magnet)', url: 'magnet:?xt=urn:btih:spiderman2pccrackedsteamrip', size: '86.4 GB', status: 'online' }
    ],
    screenshots: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2643800/ss_8bf8d023bf7f1e784534efd0340b6154b03657ff.1920x1080.jpg',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2643800/ss_9122fb27ba308a405a3f9e8023df29f12dfcb67b.1920x1080.jpg'
    ]
  },
  {
    id: 'alan-wake-2',
    name: 'Alan Wake II',
    description: 'A string of ritualistic murders threatens Bright Falls, an eerie small-town community surrounded by the Pacific Northwest wilderness. Saga Anderson, an accomplished FBI agent, arrives to investigate. Meanwhile, Alan Wake, a trapped writer writing a dark story to shape the reality around him, tries to escape his nightmare. Anderson and Wake are two heroes on two desperate journeys in two separate realities, connected in ways neither can understand.',
    releaseDate: 'Oct 27, 2023',
    developer: 'Remedy Entertainment',
    genres: ['Action', 'Horror', 'Adventure'],
    coverUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=600&h=900',
    size: '68.0 GB',
    version: 'v1.1.5 (Deluxe Edition)',
    isPopular: true,
    requirements: {
      minimum: {
        os: 'Windows 10/11 (64-bit)',
        processor: 'Intel i5-7600K or AMD equivalent',
        memory: '16 GB RAM',
        graphics: 'GeForce RTX 2060 or Radeon RX 6600 (6GB VRAM)',
        storage: '90 GB available space (SSD Required)'
      },
      recommended: {
        os: 'Windows 10/11 (64-bit)',
        processor: 'Ryzen 7 3700X or Intel equivalent',
        memory: '16 GB RAM',
        graphics: 'GeForce RTX 3060 or Radeon RX 6700 XT (8GB VRAM)',
        storage: '90 GB available space (SSD Required)'
      }
    },
    downloadLinks: [
      { name: 'Qiwi (Direct Link)', url: 'https://qiwi.gg/file/alan-wake-2-deluxe-steamrip', size: '68.0 GB', status: 'online' },
      { name: 'GoFile (Direct Mirror)', url: 'https://gofile.io/d/alanwake2-deluxe', size: '68.0 GB', status: 'online' },
      { name: 'Torrent Download (Magnet)', url: 'magnet:?xt=urn:btih:alanwake2deluxesteamrip', size: '68.0 GB', status: 'online' }
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=1920&h=1080'
    ]
  },
  {
    id: 'god-of-war-ragnarok',
    name: 'God of War Ragnarok',
    description: 'From Santa Monica Studio and brought to PC in partnership with Jetpack Interactive comes God of War Ragnarök, an epic and heartfelt journey that follows Kratos and Atreus as they struggle with holding on and letting go. Fimbulwinter is well underway. Kratos and Atreus must journey to each of the Nine Realms in search of answers as Asgardian forces prepare for a prophesied battle that will end the world.',
    releaseDate: 'Sep 19, 2024',
    developer: 'Santa Monica Studio',
    genres: ['Action', 'RPG', 'Adventure'],
    steamId: '2322010',
    coverUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2322010/library_600x900.jpg',
    size: '175.0 GB',
    version: 'v1.0.3 (incl. Valhalla DLC)',
    isPopular: true,
    requirements: {
      minimum: {
        os: 'Windows 10 (64-bit)',
        processor: 'Intel Core i5-4670K or AMD Ryzen 3 1200',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 1060 6GB or AMD RX 580 8GB',
        storage: '190 GB available space (SSD Required)'
      },
      recommended: {
        os: 'Windows 10/11 (64-bit)',
        processor: 'Intel Core i5-8600 or AMD Ryzen 5 3600',
        memory: '16 GB RAM',
        graphics: 'NVIDIA RTX 2060 Super or AMD RX 5700',
        storage: '190 GB available space (SSD Required)'
      }
    },
    downloadLinks: [
      { name: 'Qiwi (Part 1 - 60GB)', url: 'https://qiwi.gg/file/gow-ragnarok-p1', size: '60.0 GB', status: 'online' },
      { name: 'Qiwi (Part 2 - 60GB)', url: 'https://qiwi.gg/file/gow-ragnarok-p2', size: '60.0 GB', status: 'online' },
      { name: 'Qiwi (Part 3 - 55GB)', url: 'https://qiwi.gg/file/gow-ragnarok-p3', size: '55.0 GB', status: 'online' },
      { name: 'GoFile (Direct Link)', url: 'https://gofile.io/d/gow-ragnarok-valhalla', size: '175.0 GB', status: 'online' },
      { name: 'Torrent Download (Magnet)', url: 'magnet:?xt=urn:btih:godofwarragnarokcracksteamrip', size: '175.0 GB', status: 'online' }
    ]
  },
  {
    id: 'forza-horizon-5',
    name: 'Forza Horizon 5',
    description: 'Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the worlds greatest cars. Lead breathtaking expeditions across a world of striking contrast and beauty while discovering living deserts, lush jungles, historic cities, hidden ruins, pristine beaches, vast canyons and a towering snow-capped volcano.',
    releaseDate: 'Nov 9, 2021',
    developer: 'Playground Games',
    genres: ['Racing', 'Open World', 'Simulation'],
    steamId: '1551360',
    coverUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1551360/library_600x900.jpg',
    size: '132.8 GB',
    version: 'v1.634.371.0 (Premium Edition)',
    isPopular: true,
    requirements: {
      minimum: {
        os: 'Windows 10 (64-bit)',
        processor: 'Intel i5-4460 or AMD Ryzen 3 1200',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 970 or AMD RX 470',
        storage: '140 GB available space'
      },
      recommended: {
        os: 'Windows 10/11 (64-bit)',
        processor: 'Intel i7-10700K or AMD Ryzen 7 3800XT',
        memory: '16 GB RAM',
        graphics: 'NVIDIA RTX 3070 or AMD RX 6800',
        storage: '140 GB available space (SSD Recommended)'
      }
    },
    downloadLinks: [
      { name: 'GoFile (Direct High Speed)', url: 'https://gofile.io/d/forzahorizon5premium', size: '132.8 GB', status: 'online' },
      { name: 'Torrent Download (Magnet)', url: 'magnet:?xt=urn:btih:forzahorizon5premiumsteamrip', size: '132.8 GB', status: 'online' }
    ]
  },
  {
    id: 'terraria',
    name: 'Terraria',
    description: 'Dig, Fight, Explore, Build: The very world is at your fingertips as you fight for survival, fortune, and glory. Will you delve deep into cavernous expanses in search of treasure and raw materials with which to craft ever-evolving gear, machinery, and aesthetics? Perhaps you will choose instead to seek out ever-greater foes to test your mettle in combat? Maybe you will decide to construct your own city to house the host of mysterious allies you may encounter on your travels?',
    releaseDate: 'May 16, 2011',
    developer: 'Re-Logic',
    genres: ['Sandbox', 'Survival', 'Indie', 'Co-op'],
    steamId: '105600',
    coverUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/105600/library_600x900.jpg',
    size: '520 MB',
    version: 'v1.4.4.9 (Multiplayer Fix)',
    isPopular: true,
    requirements: {
      minimum: {
        os: 'Windows 7, 8/8.1, 10',
        processor: '2.0 Ghz',
        memory: '2.5 GB RAM',
        graphics: '128MB Video Memory, capable of Shader Model 2.0+',
        storage: '500 MB available space'
      },
      recommended: {
        os: 'Windows 10/11 (64-bit)',
        processor: 'Dual Core 3.0 Ghz',
        memory: '4 GB RAM',
        graphics: '256MB Video Memory, capable of Shader Model 3.0+',
        storage: '500 MB available space'
      }
    },
    downloadLinks: [
      { name: 'Qiwi (Direct)', url: 'https://qiwi.gg/file/terraria-v1449-steamrip', size: '520 MB', status: 'online' },
      { name: 'GoFile (Direct Link)', url: 'https://gofile.io/d/terraria-latest', size: '520 MB', status: 'online' }
    ]
  },
  {
    id: 'factorio',
    name: 'Factorio',
    description: 'Factorio is a game about building and creating automated factories to produce items of increasing complexity, within an infinite 2D world. Use your imagination to design factories, combine simple elements into ingenious structures, and finally protect your creations from creatures who do not particularly like you.',
    releaseDate: 'Aug 14, 2020',
    developer: 'Wube Software LTD.',
    genres: ['Strategy', 'Sandbox', 'Indie'],
    steamId: '427520',
    coverUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/427520/library_600x900.jpg',
    size: '2.1 GB',
    version: 'v1.1.104',
    requirements: {
      minimum: {
        os: 'Windows 10, 8, 7 (64-bit)',
        processor: 'Dual core 3Ghz+',
        memory: '4 GB RAM',
        graphics: 'DirectX 10.1 capable GPU with 512MB VRAM',
        storage: '3 GB available space'
      },
      recommended: {
        os: 'Windows 11, 10 (64-bit)',
        processor: 'Quad core 3Ghz+',
        memory: '8 GB RAM',
        graphics: 'DirectX 11 capable GPU with 2GB VRAM',
        storage: '3 GB available space'
      }
    },
    downloadLinks: [
      { name: 'Qiwi (Direct)', url: 'https://qiwi.gg/file/factorio-v11104-steamrip', size: '2.1 GB', status: 'online' },
      { name: 'GoFile (Direct Mirror)', url: 'https://gofile.io/d/factorio-v11104', size: '2.1 GB', status: 'online' }
    ]
  },
  {
    id: 'skyrim',
    name: 'The Elder Scrolls V: Skyrim Special Edition',
    description: 'Winner of more than 200 Game of the Year Awards, Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features like remastered art and effects, volumetric god rays, dynamic depth of field, screen-space reflections, and more.',
    releaseDate: 'Oct 27, 2016',
    developer: 'Bethesda Game Studios',
    genres: ['RPG', 'Open World', 'Fantasy'],
    steamId: '489830',
    coverUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/489830/library_600x900.jpg',
    size: '12.5 GB',
    version: 'v1.6.1170 (Anniversary Edition)',
    isPopular: true,
    requirements: {
      minimum: {
        os: 'Windows 7/8.1/10 (64-bit Version)',
        processor: 'Intel i5-750 or AMD Phenom II X4-945',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 470 1GB or AMD HD 7870 2GB',
        storage: '12 GB available space'
      },
      recommended: {
        os: 'Windows 10/11 (64-bit Version)',
        processor: 'Intel i7-3770 or AMD FX-8350',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 780 3GB or AMD R9 290 4GB',
        storage: '12 GB available space (SSD Recommended)'
      }
    },
    downloadLinks: [
      { name: 'Qiwi (Direct)', url: 'https://qiwi.gg/file/skyrim-se-anniversary-steamrip', size: '12.5 GB', status: 'online' },
      { name: 'GoFile (Direct Link)', url: 'https://gofile.io/d/skyrim-se-v161170', size: '12.5 GB', status: 'online' },
      { name: 'Torrent Download (Magnet)', url: 'magnet:?xt=urn:btih:skyrimspecialeditionanniversarycrack', size: '12.5 GB', status: 'online' }
    ]
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'general',
    question: 'What is TobiPack?',
    answer: 'TobiPack is an online community that provides pre-installed PC games. This means the games are already cracked, extracted, and patched. You do not need to install them using custom setup executables — you simply extract the ZIP/RAR archive, run the game as an administrator, and start playing!'
  },
  {
    category: 'safety',
    question: 'Is TobiPack completely safe to use?',
    answer: 'Yes! All TobiPack releases are heavily tested, pre-installed, and completely clean of malicious code. We do not use intrusive miners or third-party wrappers. However, because games are pre-cracked, some antivirus programs (like Windows Defender) might flag game crack files (like steam_api64.dll or steamclient64.dll) as "False Positives". We recommend adding an exclusion to your antivirus folder before extracting the game.'
  },
  {
    category: 'downloads',
    question: 'How do I download and play games from this site?',
    answer: '1. Choose your preferred download server (Qiwi, GoFile, or Torrent).\n2. Download the full archive (.zip or .rar) of the game.\n3. Turn off your antivirus or add an exclusion to the folder where you intend to extract the game.\n4. Use WinRAR or 7-Zip to extract the game archive.\n5. Open the extracted folder, find the main game launcher executable (.exe file).\n6. Right-click the .exe file and select "Run as Administrator" (crucial for loading save states correctly!).\n7. Enjoy playing!'
  },
  {
    category: 'errors',
    question: 'What should I do if a game crashes or says "Missing DLL"?',
    answer: 'Most game launch issues are caused by missing runtime redistributables. \n1. Look inside the game folder for a folder called "_Redist", "CommonRedist", or similar, and run all installer executables inside (DirectX, Visual C++ Redistributable Package, etc.).\n2. Make sure you are running the game as Administrator.\n3. Make sure your graphics card drivers are fully up to date.\n4. Check if your Antivirus quarantined one of the game crack files (e.g. steam_api64.dll) and restore it.'
  },
  {
    category: 'downloads',
    question: 'What is the "Online-Fix" or multiplayer patch?',
    answer: 'Some games include an "Online-Fix" download or version. This is a special multiplayer crack that enables online lobbies over TobiPack / Steam. When using Online-Fix releases: 1. You must have the official TobiPack / Steam client running in the background. 2. Log into a dummy/secondary TobiPack / Steam account (never use your main account to prevent ban risks). 3. Launch the game, and you will be able to invite other friends or join multiplayer lobbies!'
  },
  {
    category: 'general',
    question: 'Can I request a game?',
    answer: 'Absolutely! Navigate to our "Request a Game" portal where you can request any game. Other members of the community can vote on requests. Once a requested game receives enough votes, our uploaders crack, test, pre-install, and upload it to our servers!'
  }
];

export const GENRES_LIST = [
  'All Games',
  'Popular',
  'Action',
  'Adventure',
  'RPG',
  'Open World',
  'Strategy',
  'Souls-like',
  'Indie',
  'Co-op',
  'Horror',
  'Survival',
  'Sandbox',
  'Puzzle'
];

export const STEAMRIP_INDEX_PRESETS: string[] = [
  "Minecraft Dungeons",
  "Minecraft Legends",
  "Minecraft Story Mode",
  "Minecraft Story Mode: Season Two",
  "Grand Theft Auto V",
  "Grand Theft Auto IV",
  "Grand Theft Auto VI",
  "Grand Theft Auto: San Andreas",
  "Grand Theft Auto: Vice City",
  "Grand Theft Auto III",
  "Red Dead Redemption 2",
  "Red Dead Redemption",
  "Elden Ring: Shadow of the Erdtree",
  "Elden Ring",
  "Baldur's Gate 3",
  "Cyberpunk 2077: Ultimate Edition",
  "Cyberpunk 2077: Phantom Liberty",
  "Cyberpunk 2077",
  "Hogwarts Legacy",
  "The Witcher 3: Wild Hunt",
  "The Witcher 2: Assassins of Kings",
  "The Witcher: Enhanced Edition",
  "Marvel's Spider-Man Remastered",
  "Marvel's Spider-Man: Miles Morales",
  "Marvel's Spider-Man 2",
  "God of War",
  "God of War Ragnarok",
  "Resident Evil 4 Remake",
  "Resident Evil Village",
  "Resident Evil 7: Biohazard",
  "Resident Evil 2 Remake",
  "Resident Evil 3 Remake",
  "Resident Evil 5",
  "Resident Evil 6",
  "Forza Horizon 5",
  "Forza Horizon 4",
  "Forza Motorsport",
  "Minecraft",
  "Terraria",
  "Factorio",
  "Portal 2",
  "Portal",
  "Half-Life: Alyx",
  "Half-Life 2",
  "Left 4 Dead 2",
  "Rust",
  "ARK: Survival Evolved",
  "ARK: Survival Ascended",
  "Dying Light",
  "Dying Light 2: Stay Human",
  "Dead Space Remake",
  "Dead Space",
  "Call of Duty: Modern Warfare III",
  "Call of Duty: Black Ops 6",
  "Call of Duty: Black Ops III",
  "Battlefield 1",
  "Battlefield V",
  "Battlefield 2042",
  "The Elder Scrolls V: Skyrim Special Edition",
  "The Elder Scrolls V: Skyrim",
  "Fallout 4",
  "Fallout: New Vegas",
  "Fallout 76",
  "Hades",
  "Hades II",
  "Hollow Knight",
  "Celeste",
  "Cuphead",
  "Stardew Valley",
  "Subnautica",
  "Subnautica: Below Zero",
  "Sea of Thieves",
  "Phasmophobia",
  "Lethal Company",
  "Helldivers 2",
  "Monster Hunter: World",
  "Monster Hunter Wilds",
  "Monster Hunter Rise",
  "Sekiro: Shadows Die Twice",
  "Dark Souls: Remastered",
  "Dark Souls II",
  "Dark Souls III",
  "Lies of P",
  "Black Myth: Wukong",
  "Starfield",
  "Death Stranding Director's Cut",
  "Detroit: Become Human",
  "Horizon Zero Dawn",
  "Horizon Forbidden West",
  "Ghost of Tsushima Director's Cut",
  "Uncharted: Legacy of Thieves Collection",
  "The Last of Us Part I",
  "Days Gone",
  "Doom Eternal",
  "Doom (2016)",
  "Control Ultimate Edition",
  "Alan Wake II",
  "Alan Wake",
  "Civilization VI",
  "Age of Empires IV",
  "Hearts of Iron IV",
  "Europa Universalis IV",
  "Crusader Kings III",
  "Stellaris",
  "Cities: Skylines II",
  "Cities: Skylines",
  "The Sims 4",
  "Dead by Daylight",
  "Euro Truck Simulator 2",
  "American Truck Simulator",
  "BeamNG.drive",
  "Assetto Corsa",
  "Assetto Corsa Competizione",
  "Microsoft Flight Simulator",
  "Garry's Mod",
  "Slay the Spire",
  "Balatro",
  "Manor Lords",
  "No Man's Sky",
  "Outer Wilds",
  "Disco Elysium",
  "Sea of Stars",
  "Enshrouded",
  "Palworld",
  "Grounded",
  "Inside",
  "Limbo",
  "Stray",
  "Dave the Diver",
  "Dredge",
  "Ghostrunner",
  "Ghostrunner 2",
  "Kena: Bridge of Spirits",
  "Biomutant",
  "Deathloop",
  "Returnal",
  "Assassin's Creed Valhalla",
  "Assassin's Creed Odyssey",
  "Assassin's Creed Origins",
  "Assassin's Creed Mirage",
  "Far Cry 6",
  "Far Cry 5",
  "Far Cry 4",
  "Far Cry 3",
  "Watch Dogs: Legion",
  "Watch Dogs 2",
  "Tom Clancy's Rainbow Six Siege",
  "Tom Clancy's The Division 2",
  "Ghost Recon Wildlands",
  "Ghost Recon Breakpoint",
  "Borderlands 3",
  "Borderlands 2",
  "Tiny Tina's Wonderlands",
  "Destiny 2",
  "Warframe",
  "Apex Legends",
  "Fortnite",
  "Valorant",
  "League of Legends",
  "Counter-Strike 2",
  "Dota 2",
  "PUBG: Battlegrounds",
  "DayZ",
  "Escape from Tarkov",
  "Ready or Not",
  "Squad",
  "Insurgency: Sandstorm",
  "Hell Let Loose",
  "Arma 3",
  "Mount & Blade II: Bannerlord",
  "Total War: Warhammer III",
  "Total War: Three Kingdoms",
  "Total War: Rome II",
  "Total War: Shogun 2",
  "Company of Heroes 3",
  "Company of Heroes 2",
  "Warhammer 40,000: Space Marine 2",
  "Warhammer 40,000: Boltgun",
  "Helldivers",
  "Deep Rock Galactic",
  "Payday 3",
  "Payday 2",
  "S.T.A.L.K.E.R. 2: Heart of Chornobyl",
  "S.T.A.L.K.E.R.: Shadow of Chernobyl",
  "Metro Exodus",
  "Metro Last Light",
  "Metro 2033",
  "Crysis Remastered",
  "Crysis 3 Remastered",
  "Tomb Raider",
  "Rise of the Tomb Raider",
  "Shadow of the Tomb Raider",
  "Hitman 3 (World of Assassination)",
  "Hitman 2",
  "Hitman (2016)",
  "Dishonored 2",
  "Dishonored",
  "Prey",
  "Wolfenstein II: The New Colossus",
  "Wolfenstein: The New Order",
  "BioShock Infinite",
  "BioShock Remastered",
  "BioShock 2 Remastered",
  "Borderlands: The Handsome Collection",
  "Mafia: Definitive Edition",
  "Mafia II: Definitive Edition",
  "Mafia III",
  "L.A. Noire",
  "Bully: Scholarship Edition",
  "Max Payne 3",
  "Sunset Overdrive",
  "Ryse: Son of Rome",
  "Quantum Break",
  "High on Life",
  "Psychonauts 2",
  "It Takes Two",
  "A Way Out",
  "Overcooked! 2",
  "Moving Out",
  "Gang Beasts",
  "Human: Fall Flat",
  "Dragon Quest XI S: Echoes of an Elusive Age",
  "Final Fantasy VII Remake Intergrade",
  "Final Fantasy XV Windows Edition",
  "Final Fantasy VII Rebirth",
  "Persona 5 Royal",
  "Persona 4 Golden",
  "Persona 3 Reload",
  "Yakuza: Like a Dragon",
  "Like a Dragon: Infinite Wealth",
  "Yakuza 0",
  "Yakuza Kiwami",
  "Judgment",
  "Lost Judgment",
  "Nier: Automata",
  "Nier Replicant",
  "Devil May Cry 5",
  "Devil May Cry 4",
  "Street Fighter 6",
  "Street Fighter V",
  "Tekken 8",
  "Tekken 7",
  "Mortal Kombat 1",
  "Mortal Kombat 11",
  "Mortal Kombat X",
  "Guilty Gear -Strive-",
  "Dragon Ball FighterZ",
  "Dragon Ball Z: Kakarot",
  "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles",
  "One Piece: Pirate Warriors 4"
];

export const STEAM_APP_IDS: Record<string, number> = {
  "Grand Theft Auto V": 271590,
  "Grand Theft Auto IV": 12210,
  "Grand Theft Auto: San Andreas": 12120,
  "Grand Theft Auto: Vice City": 12110,
  "Grand Theft Auto III": 12100,
  "Red Dead Redemption 2": 1174180,
  "Red Dead Redemption": 2668510,
  "Elden Ring: Shadow of the Erdtree": 1245620,
  "Elden Ring": 1245620,
  "Baldur's Gate 3": 1086940,
  "Cyberpunk 2077: Ultimate Edition": 1091500,
  "Cyberpunk 2077: Phantom Liberty": 1091500,
  "Cyberpunk 2077": 1091500,
  "Hogwarts Legacy": 990080,
  "The Witcher 3: Wild Hunt": 292030,
  "The Witcher 2: Assassins of Kings": 20920,
  "The Witcher: Enhanced Edition": 20900,
  "Marvel's Spider-Man Remastered": 1817070,
  "Marvel's Spider-Man: Miles Morales": 1817190,
  "Marvel's Spider-Man 2": 2643800,
  "God of War": 1593500,
  "God of War Ragnarok": 2322010,
  "Resident Evil 4 Remake": 2050650,
  "Resident Evil Village": 1196590,
  "Resident Evil 7: Biohazard": 418370,
  "Resident Evil 2 Remake": 883710,
  "Resident Evil 3 Remake": 952060,
  "Resident Evil 5": 21690,
  "Resident Evil 6": 221040,
  "Forza Horizon 5": 1551360,
  "Forza Horizon 4": 1293830,
  "Forza Motorsport": 1442410,
  "Terraria": 105600,
  "Factorio": 427520,
  "Portal 2": 620,
  "Portal": 400,
  "Half-Life: Alyx": 546560,
  "Half-Life 2": 220,
  "Left 4 Dead 2": 550,
  "Rust": 252490,
  "ARK: Survival Evolved": 346110,
  "ARK: Survival Ascended": 239030,
  "Dying Light": 239140,
  "Dying Light 2: Stay Human": 534380,
  "Dead Space Remake": 1693980,
  "Dead Space": 17470,
  "Call of Duty: Modern Warfare III": 1938090,
  "Call of Duty: Black Ops 6": 2933080,
  "Call of Duty: Black Ops III": 311210,
  "Battlefield 1": 1238840,
  "Battlefield V": 1238810,
  "Battlefield 2042": 1517290,
  "The Elder Scrolls V: Skyrim Special Edition": 489830,
  "The Elder Scrolls V: Skyrim": 72850,
  "Fallout 4": 377160,
  "Fallout: New Vegas": 22380,
  "Fallout 76": 1151340,
  "Hades": 1145360,
  "Hades II": 1145350,
  "Hollow Knight": 367520,
  "Celeste": 504230,
  "Cuphead": 268910,
  "Stardew Valley": 413150,
  "Subnautica": 264710,
  "Subnautica: Below Zero": 848450,
  "Sea of Thieves": 1172620,
  "Phasmophobia": 739630,
  "Lethal Company": 1966720,
  "Helldivers 2": 553850,
  "Monster Hunter: World": 582010,
  "Monster Hunter Wilds": 2246340,
  "Monster Hunter Rise": 1446780,
  "Sekiro: Shadows Die Twice": 814380,
  "Dark Souls: Remastered": 570940,
  "Dark Souls II": 236430,
  "Dark Souls III": 374320,
  "Lies of P": 1627720,
  "Black Myth: Wukong": 2358720,
  "Starfield": 1716740,
  "Death Stranding Director's Cut": 1850570,
  "Detroit: Become Human": 1151640,
  "Horizon Zero Dawn": 1151600,
  "Horizon Forbidden West": 2420110,
  "Ghost of Tsushima Director's Cut": 2215430,
  "Uncharted: Legacy of Thieves Collection": 1659420,
  "The Last of Us Part I": 1888110,
  "Days Gone": 1030840,
  "Doom Eternal": 782330,
  "Doom (2016)": 379720,
  "Control Ultimate Edition": 870780,
  "Alan Wake II": 1980000,
  "Alan Wake": 108710,
  "Civilization VI": 289070,
  "Age of Empires IV": 1466860,
  "Hearts of Iron IV": 394360,
  "Europa Universalis IV": 243930,
  "Crusader Kings III": 1158310,
  "Stellaris": 281990,
  "Cities: Skylines II": 949230,
  "Cities: Skylines": 255710,
  "The Sims 4": 1222670,
  "Dead by Daylight": 381210,
  "Euro Truck Simulator 2": 227300,
  "American Truck Simulator": 270880,
  "BeamNG.drive": 284160,
  "Assetto Corsa": 244210,
  "Assetto Corsa Competizione": 805550,
  "Microsoft Flight Simulator": 1250410,
  "Garry's Mod": 4000,
  "Slay the Spire": 646570,
  "Balatro": 2375830,
  "Manor Lords": 1363080,
  "No Man's Sky": 275850,
  "Outer Wilds": 753640,
  "Disco Elysium": 632470,
  "Sea of Stars": 1243620,
  "Enshrouded": 1203620,
  "Palworld": 1623730,
  "Grounded": 962130,
  "Inside": 304430,
  "Limbo": 48110,
  "Stray": 1332010,
  "Dave the Diver": 1868140,
  "Dredge": 1562430,
  "Ghostrunner": 1139900,
  "Ghostrunner 2": 1435200,
  "Kena: Bridge of Spirits": 1956980,
  "Biomutant": 597820,
  "Deathloop": 1252330,
  "Returnal": 1649240,
  "Assassin's Creed Valhalla": 2208920,
  "Assassin's Creed Odyssey": 812140,
  "Assassin's Creed Origins": 582160,
  "Assassin's Creed Mirage": 2333900,
  "Far Cry 6": 1967700,
  "Far Cry 5": 552520,
  "Far Cry 4": 298110,
  "Far Cry 3": 220240,
  "Watch Dogs: Legion": 2231380,
  "Watch Dogs 2": 447040,
  "Tom Clancy's Rainbow Six Siege": 359550,
  "Tom Clancy's The Division 2": 2221490,
  "Ghost Recon Wildlands": 460930,
  "Ghost Recon Breakpoint": 2231370,
  "Borderlands 3": 397540,
  "Borderlands 2": 49520,
  "Tiny Tina's Wonderlands": 1286680,
  "Destiny 2": 1085660,
  "Warframe": 230410,
  "Apex Legends": 1172470,
  "Ready or Not": 1144200,
  "S.T.A.L.K.E.R. 2: Heart of Chornobyl": 1643320,
  "S.T.A.L.K.E.R.: Shadow of Chernobyl": 4500,
  "Metro Exodus": 413620,
  "Metro Last Light": 228080,
  "Metro 2033": 43110,
  "Tomb Raider": 203160,
  "Rise of the Tomb Raider": 391220,
  "Shadow of the Tomb Raider": 750920,
  "Hitman 3 (World of Assassination)": 1659040,
  "Hitman 2": 863550,
  "Dishonored 2": 403640,
  "Dishonored": 205100,
  "Prey": 480490,
  "Wolfenstein II: The New Colossus": 612880,
  "Wolfenstein: The New Order": 201810,
  "BioShock Infinite": 8870,
  "BioShock Remastered": 409710,
  "Mafia: Definitive Edition": 1030840,
  "Max Payne 3": 204100,
  "It Takes Two": 1426210,
  "Overcooked! 2": 728880,
  "Human: Fall Flat": 477160,
  "Final Fantasy VII Remake Intergrade": 1571180,
  "Persona 5 Royal": 1687950,
  "Nier: Automata": 524220,
  "Devil May Cry 5": 601150,
  "Street Fighter 6": 1364780,
  "Tekken 8": 1778820,
  "Mortal Kombat 1": 1971870,
  "Mortal Kombat 11": 976310,
  "Guilty Gear -Strive-": 1384160,
  "Dragon Ball FighterZ": 678950,
  "Dragon Ball Z: Kakarot": 851100
};

export function findSteamAppId(gameName: string): number | undefined {
  const nameLower = gameName.toLowerCase().trim();
  
  // Direct match
  if (STEAM_APP_IDS[gameName]) {
    return STEAM_APP_IDS[gameName];
  }
  
  // Case-insensitive direct match
  for (const key of Object.keys(STEAM_APP_IDS)) {
    if (key.toLowerCase().trim() === nameLower) {
      return STEAM_APP_IDS[key];
    }
  }
  
  // Partial match
  for (const key of Object.keys(STEAM_APP_IDS)) {
    const keyLower = key.toLowerCase();
    if (keyLower.includes(nameLower) || nameLower.includes(keyLower)) {
      return STEAM_APP_IDS[key];
    }
  }

  // Common abbreviations mapping
  const aliases: Record<string, number> = {
    "gta 5": 271590,
    "gta v": 271590,
    "gta 4": 12210,
    "gta iv": 12210,
    "rdr 2": 1174180,
    "rdr2": 1174180,
    "witcher 3": 292030,
    "cs2": 730,
    "cyberpunk": 1091500,
    "spiderman": 1817070,
    "spiderman 2": 2643800,
    "god of war 2": 2322010,
    "gow ragnarok": 2322010,
    "skyrim": 489830,
    "stalker 2": 1643320,
    "black ops 6": 2933080,
    "re4": 2050650,
    "minecraft": 1222670
  };

  for (const [alias, id] of Object.entries(aliases)) {
    if (nameLower.includes(alias)) {
      return id;
    }
  }

  return undefined;
}

export function getSteamCoverUrl(gameName: string): string {
  const appId = findSteamAppId(gameName);
  if (appId) {
    return `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${appId}/library_600x900.jpg`;
  }
  // Standard highly polished fallback game card image (stable Unsplash game cover placeholder)
  return "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=600&h=900";
}

export function getGenresForGame(name: string): string[] {
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

export function getRealisticSizeForGame(name: string): string {
  const norm = name.toLowerCase();
  
  if (norm.includes('minecraft dungeons')) return '3.2 GB';
  if (norm.includes('minecraft legends')) return '7.5 GB';
  if (norm.includes('minecraft story mode')) return '5.8 GB';
  if (norm.includes('minecraft')) return '1.2 GB';
  if (norm.includes('terraria')) return '0.4 GB';
  if (norm.includes('factorio')) return '1.2 GB';
  if (norm.includes('stardew valley')) return '0.8 GB';
  if (norm.includes('celeste')) return '1.2 GB';
  if (norm.includes('cuphead')) return '2.5 GB';
  if (norm.includes('balatro')) return '0.15 GB';
  if (norm.includes('lethal company')) return '1.0 GB';
  if (norm.includes('phasmophobia')) return '18.0 GB';
  if (norm.includes('slay the spire')) return '1.0 GB';
  if (norm.includes('limbo')) return '0.15 GB';
  if (norm.includes('inside')) return '3.0 GB';
  if (norm.includes('garry')) return '12.0 GB';
  if (norm.includes('portal 2')) return '12.0 GB';
  if (norm.includes('portal')) return '4.5 GB';
  if (norm.includes('left 4 dead 2')) return '13.0 GB';
  if (norm.includes('half-life 2')) return '6.5 GB';
  if (norm.includes('half-life: alyx')) return '67.5 GB';
  if (norm.includes('gta v') || norm.includes('theft auto v')) return '110.0 GB';
  if (norm.includes('gta iv') || norm.includes('theft auto iv') || norm.includes('gta 4')) return '22.0 GB';
  if (norm.includes('gta 6') || norm.includes('theft auto vi')) return '150.0 GB';
  if (norm.includes('san andreas')) return '4.7 GB';
  if (norm.includes('vice city')) return '1.5 GB';
  if (norm.includes('grand theft auto iii') || norm.includes('gta 3')) return '1.0 GB';
  if (norm.includes('red dead redemption 2') || norm.includes('rdr 2') || norm.includes('rdr2')) return '120.0 GB';
  if (norm.includes('red dead redemption')) return '12.0 GB';
  if (norm.includes('elden ring')) return '60.0 GB';
  if (norm.includes("baldur's gate 3") || norm.includes('baldurs gate 3')) return '122.0 GB';
  if (norm.includes('cyberpunk')) return '76.0 GB';
  if (norm.includes('hogwarts legacy')) return '75.0 GB';
  if (norm.includes('witcher 3')) return '50.0 GB';
  if (norm.includes('spider-man remastered') || norm.includes('spiderman remastered')) return '65.0 GB';
  if (norm.includes('miles morales')) return '40.0 GB';
  if (norm.includes('spider-man 2') || norm.includes('spiderman 2')) return '85.0 GB';
  if (norm.includes('god of war ragnarok') || norm.includes('gow ragnarok')) return '100.0 GB';
  if (norm.includes('god of war')) return '64.0 GB';
  if (norm.includes('resident evil 4 remake') || norm.includes('re4')) return '56.0 GB';
  if (norm.includes('village')) return '28.0 GB';
  if (norm.includes('biohazard') || norm.includes('resident evil 7')) return '24.0 GB';
  if (norm.includes('forza horizon 5')) return '110.0 GB';
  if (norm.includes('forza horizon 4')) return '80.0 GB';
  if (norm.includes('rust')) return '25.0 GB';
  if (norm.includes('ark: survival evolved')) return '125.0 GB';
  if (norm.includes('ark: survival ascended')) return '75.0 GB';
  if (norm.includes('dying light 2')) return '60.0 GB';
  if (norm.includes('dying light')) return '40.0 GB';
  if (norm.includes('dead space remake')) return '50.0 GB';
  if (norm.includes('modern warfare iii')) return '140.0 GB';
  if (norm.includes('black ops 6')) return '150.0 GB';
  if (norm.includes('black ops iii')) return '100.0 GB';
  if (norm.includes('battlefield 1')) return '50.0 GB';
  if (norm.includes('battlefield v')) return '90.0 GB';
  if (norm.includes('battlefield 2042')) return '80.0 GB';
  if (norm.includes('skyrim special')) return '20.0 GB';
  if (norm.includes('skyrim')) return '12.0 GB';
  if (norm.includes('fallout 4')) return '30.0 GB';
  if (norm.includes('new vegas')) return '9.0 GB';
  if (norm.includes('fallout 76')) return '80.0 GB';
  if (norm.includes('hades ii')) return '10.0 GB';
  if (norm.includes('hades')) return '15.0 GB';
  if (norm.includes('hollow knight')) return '9.0 GB';
  if (norm.includes('below zero')) return '15.0 GB';
  if (norm.includes('subnautica')) return '20.0 GB';
  if (norm.includes('sea of thieves')) return '50.0 GB';
  if (norm.includes('helldivers 2')) return '70.0 GB';
  if (norm.includes('monster hunter: world')) return '48.0 GB';
  if (norm.includes('monster hunter wilds')) return '85.0 GB';
  if (norm.includes('monster hunter rise')) return '23.0 GB';
  if (norm.includes('sekiro')) return '25.0 GB';
  if (norm.includes('dark souls: remastered')) return '8.0 GB';
  if (norm.includes('dark souls ii')) return '15.0 GB';
  if (norm.includes('dark souls iii')) return '25.0 GB';
  if (norm.includes('lies of p')) return '40.0 GB';
  if (norm.includes('wukong')) return '130.0 GB';
  if (norm.includes('starfield')) return '125.0 GB';
  if (norm.includes('death stranding')) return '80.0 GB';
  if (norm.includes('detroit')) return '55.0 GB';
  if (norm.includes('horizon zero')) return '75.0 GB';
  if (norm.includes('forbidden west')) return '90.0 GB';
  if (norm.includes('tsushima')) return '75.0 GB';
  if (norm.includes('uncharted')) return '126.0 GB';
  if (norm.includes('last of us')) return '75.0 GB';
  if (norm.includes('days gone')) return '70.0 GB';
  if (norm.includes('doom eternal')) return '80.0 GB';
  if (norm.includes('doom (2016)')) return '55.0 GB';
  if (norm.includes('control ultimate')) return '42.0 GB';
  if (norm.includes('alan wake ii')) return '86.0 GB';
  if (norm.includes('alan wake')) return '10.0 GB';
  if (norm.includes('civilization vi')) return '15.0 GB';
  if (norm.includes('age of empires iv')) return '50.0 GB';
  if (norm.includes('hearts of iron iv')) return '10.0 GB';
  if (norm.includes('europa universalis')) return '6.0 GB';
  if (norm.includes('crusader kings iii')) return '8.0 GB';
  if (norm.includes('stellaris')) return '12.0 GB';
  if (norm.includes('cities: skylines ii')) return '50.0 GB';
  if (norm.includes('cities: skylines')) return '10.0 GB';
  if (norm.includes('sims 4')) return '26.0 GB';
  if (norm.includes('dead by daylight')) return '50.0 GB';
  if (norm.includes('euro truck')) return '12.0 GB';
  if (norm.includes('american truck')) return '7.0 GB';
  if (norm.includes('beamng')) return '30.0 GB';
  if (norm.includes('competizione')) return '20.0 GB';
  if (norm.includes('assetto corsa')) return '15.0 GB';
  if (norm.includes('flight simulator')) return '150.0 GB';
  if (norm.includes('manor lords')) return '15.0 GB';
  if (norm.includes("no man's sky")) return '15.0 GB';
  if (norm.includes('outer wilds')) return '8.0 GB';
  if (norm.includes('disco elysium')) return '20.0 GB';
  if (norm.includes('sea of stars')) return '5.0 GB';
  if (norm.includes('enshrouded')) return '30.0 GB';
  if (norm.includes('palworld')) return '40.0 GB';
  if (norm.includes('grounded')) return '12.0 GB';
  if (norm.includes('stray')) return '10.0 GB';
  if (norm.includes('dave the diver')) return '10.0 GB';
  if (norm.includes('dredge')) return '2.0 GB';
  if (norm.includes('ghostrunner 2')) return '35.0 GB';
  if (norm.includes('ghostrunner')) return '22.0 GB';
  if (norm.includes('kena')) return '25.0 GB';
  if (norm.includes('biomutant')) return '25.0 GB';
  if (norm.includes('deathloop')) return '30.0 GB';
  if (norm.includes('returnal')) return '60.0 GB';
  if (norm.includes('valhalla')) return '130.0 GB';
  if (norm.includes('odyssey')) return '110.0 GB';
  if (norm.includes('origins')) return '75.0 GB';
  if (norm.includes('mirage')) return '40.0 GB';
  if (norm.includes('far cry 6')) return '150.0 GB';
  if (norm.includes('far cry 5')) return '40.0 GB';
  if (norm.includes('far cry 4')) return '30.0 GB';
  if (norm.includes('far cry 3')) return '15.0 GB';
  if (norm.includes('legion')) return '80.0 GB';
  if (norm.includes('watch dogs 2')) return '50.0 GB';
  if (norm.includes('rainbow six siege')) return '85.0 GB';
  if (norm.includes('division 2')) return '75.0 GB';
  if (norm.includes('wildlands')) return '82.0 GB';
  if (norm.includes('breakpoint')) return '65.0 GB';
  if (norm.includes('borderlands 3')) return '75.0 GB';
  if (norm.includes('borderlands 2')) return '20.0 GB';
  if (norm.includes('wonderlands')) return '75.0 GB';
  if (norm.includes('destiny 2')) return '120.0 GB';
  if (norm.includes('warframe')) return '50.0 GB';
  if (norm.includes('apex legends')) return '75.0 GB';
  if (norm.includes('fortnite')) return '50.0 GB';
  if (norm.includes('valorant')) return '40.0 GB';
  if (norm.includes('league of legends')) return '16.0 GB';
  if (norm.includes('counter-strike 2') || norm.includes('cs2')) return '85.0 GB';
  if (norm.includes('dota 2')) return '60.0 GB';
  if (norm.includes('pubg')) return '40.0 GB';
  if (norm.includes('dayz')) return '15.0 GB';
  if (norm.includes('tarkov')) return '40.0 GB';
  if (norm.includes('ready or not')) return '90.0 GB';
  if (norm.includes('squad')) return '80.0 GB';
  if (norm.includes('insurgency')) return '35.0 GB';
  if (norm.includes('hell let loose')) return '30.0 GB';
  if (norm.includes('arma 3')) return '45.0 GB';
  if (norm.includes('bannerlord')) return '60.0 GB';
  if (norm.includes('warhammer iii')) return '120.0 GB';
  if (norm.includes('three kingdoms')) return '60.0 GB';
  if (norm.includes('rome ii')) return '35.0 GB';
  if (norm.includes('shogun 2')) return '32.0 GB';
  if (norm.includes('company of heroes 3')) return '40.0 GB';
  if (norm.includes('company of heroes 2')) return '30.0 GB';
  if (norm.includes('space marine 2')) return '75.0 GB';
  if (norm.includes('boltgun')) return '5.0 GB';
  if (norm.includes('stalker 2') || norm.includes('s.t.a.l.k.e.r. 2')) return '150.0 GB';
  if (norm.includes('stalker') || norm.includes('s.t.a.l.k.e.r.')) return '10.0 GB';
  if (norm.includes('metro exodus')) return '80.0 GB';
  if (norm.includes('metro last light')) return '10.0 GB';
  if (norm.includes('metro 2033')) return '10.0 GB';

  // Fallback formula to deterministic stable sizes that fit the keyword, 
  // but let's make it more realistic (averaging 15-60 GB instead of up to 90GB)
  let charSum = 0;
  for (let i = 0; i < name.length; i++) {
    charSum += name.charCodeAt(i);
  }
  
  // Deterministic but realistic size for unknown games based on name
  const sizeGb = (charSum % 45) + 5; // Sizes between 5 GB and 50 GB
  return `${sizeGb}.0 GB`;
}

export const ALL_GAMES_CATALOG: Game[] = (() => {
  const catalog: Game[] = [];
  
  // 1. Add static games and enrich them
  for (const staticGame of STATIC_GAMES) {
    let charSum = 0;
    for (let i = 0; i < staticGame.name.length; i++) {
      charSum += staticGame.name.charCodeAt(i);
    }
    catalog.push({
      ...staticGame,
      rating: staticGame.rating || parseFloat((4.2 + (charSum % 8) / 10).toFixed(1)),
      downloadsCount: staticGame.downloadsCount || ((charSum % 40) * 12340 + 45000),
      isPopular: staticGame.isPopular || staticGame.genres.includes('Popular')
    });
  }

  // 2. Add preset games that are not already present in STATIC_GAMES
  for (const name of STEAMRIP_INDEX_PRESETS) {
    const isAlreadyPresent = catalog.some(g => g.name.toLowerCase().trim() === name.toLowerCase().trim());
    if (!isAlreadyPresent) {
      let charSum = 0;
      for (let i = 0; i < name.length; i++) {
        charSum += name.charCodeAt(i);
      }
      const appId = findSteamAppId(name);
      const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const sizeStr = getRealisticSizeForGame(name);
      // parse Gb for requirements text
      const sizeGbMatch = sizeStr.match(/([\d.]+)\s*GB/i);
      const sizeGb = sizeGbMatch ? parseFloat(sizeGbMatch[1]) : 15;
      
      const versionStr = `v1.${(charSum % 9) + 1}.${(charSum % 4)}`;
      const genres = getGenresForGame(name);
      const isPopular = genres.includes('Popular') || (charSum % 5 === 0);
      const rating = parseFloat((4.0 + (charSum % 10) / 10).toFixed(1));
      const downloadsCount = (charSum % 60) * 14500 + 12000;

      const g: Game = {
        id,
        name,
        description: `${name} is pre-installed, pre-cracked, and optimized for immediate high-speed direct download. This clean, tested distribution features high frame rate support, optimal controller configurations, and complete Windows 10/11 compatibility with all DLC included. Tested 100% clean of malware by Windows Defender.`,
        releaseDate: 'Latest Version',
        developer: 'SteamRIP Mirror system',
        genres,
        steamId: appId ? String(appId) : undefined,
        coverUrl: getSteamCoverUrl(name),
        size: sizeStr,
        version: versionStr,
        requirements: {
          minimum: {
            os: 'Windows 10 (64-bit)',
            processor: 'Intel Core i5-6600K or AMD Ryzen 5 1400',
            memory: '8 GB RAM',
            graphics: 'NVIDIA GeForce GTX 1060 3GB or AMD Radeon RX 570 4GB',
            storage: `${Math.ceil(sizeGb + 2)} GB available space`
          },
          recommended: {
            os: 'Windows 10/11 (64-bit)',
            processor: 'Intel Core i7-8700K or AMD Ryzen 5 3600X',
            memory: '16 GB RAM',
            graphics: 'NVIDIA GeForce RTX 2060 6GB or AMD Radeon RX 5700 XT 8GB',
            storage: `${Math.ceil(sizeGb + 2)} GB available space (SSD Recommended)`
          }
        },
        downloadLinks: [
          { name: 'Qiwi (Direct - High Speed)', url: `https://qiwi.gg/file/${id}-rip`, size: sizeStr, status: 'online' },
          { name: 'GoFile (Direct - No limits)', url: `https://gofile.io/d/${id}-gofile`, size: sizeStr, status: 'online' },
          { name: '1Fichier (High Speed Mirror)', url: `https://1fichier.com/?${id}-mirror`, size: sizeStr, status: 'online' },
          { name: 'Torrent Download (Magnet)', url: `magnet:?xt=urn:btih:${id.replace(/[^a-z0-9]/g, '')}cracked`, size: sizeStr, status: 'online' }
        ],
        isPopular,
        rating,
        downloadsCount
      };
      catalog.push(g);
    }
  }

  return catalog;
})();

export const MOBILE_GAMES_CATALOG: Game[] = [
  {
    id: 'minecraft-pe',
    name: 'Minecraft Pocket Edition (MOD Unlocked)',
    description: 'Najpopulárnejšia sandboxová hra na svete, teraz pre mobilné zariadenia Android a iOS. Táto verzia od TobiPack obsahuje odomknuté prémiové skiny, textúry a integrovaný Mod Menu pre nesmrteľnosť a neobmedzené suroviny. Plne optimalizované a otestované pre plynulé hranie bez lagov.',
    releaseDate: 'Jun 20, 2026',
    developer: 'Mojang Studios / TobiPack Mobile',
    genres: ['Sandbox', 'Adventure', 'Survival', 'Popular'],
    coverUrl: 'https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&q=80&w=600&h=900',
    size: '450 MB',
    version: 'v1.21.10.02 (MOD)',
    requirements: {
      minimum: {
        os: 'Android 8.0+ / iOS 14.0+',
        processor: 'Quad-Core 1.5 GHz',
        memory: '3 GB RAM',
        graphics: 'Adreno 506 / Mali-G71',
        storage: '1.2 GB voľného miesta'
      },
      recommended: {
        os: 'Android 10.0+ / iOS 16.0+',
        processor: 'Octa-Core 2.0 GHz',
        memory: '6 GB RAM',
        graphics: 'Snapdragon 720G / Apple A13',
        storage: '2.0 GB voľného miesta (Rýchle úložisko)'
      }
    },
    downloadLinks: [
      { name: 'TobiPack High-Speed Mobile CDN (APK)', url: 'https://tobipack.gg/download/minecraft-pe-mod.apk', size: '450 MB', status: 'online' },
      { name: 'HappyMod Mirror Link (Direct)', url: 'https://happymod.com/minecraft-pocket-edition-apk-mod/', size: '450 MB', status: 'online' }
    ],
    rating: 4.8,
    downloadsCount: 982300,
    isPopular: true
  },
  {
    id: 'gta-sa-mobile',
    name: 'GTA San Andreas (Mobile Full Premium)',
    description: 'Kompletný legendárny príbeh Carla Johnsona v Los Santos, plne preportovaný na mobilné zariadenia so zlepšenou grafikou, dynamickým osvetlením a plnou podporou ovládačov. TobiPack edícia obsahuje pre-aktivovanú licenciu, takže nie je potrebné kupovať hru v Google Play / App Store. Balenie obsahuje APK + OBB dáta na jedno kliknutie.',
    releaseDate: 'Feb 15, 2026',
    developer: 'Rockstar Games / TobiPack Mobile',
    genres: ['Action', 'Open World', 'Popular'],
    coverUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600&h=900',
    size: '2.4 GB',
    version: 'v2.11.32',
    requirements: {
      minimum: {
        os: 'Android 9.0+ / iOS 15.0+',
        processor: 'Octa-Core 1.8 GHz',
        memory: '4 GB RAM',
        graphics: 'Adreno 610 / Mali-G52',
        storage: '3.0 GB voľného miesta'
      },
      recommended: {
        os: 'Android 11.0+ / iOS 17.0+',
        processor: 'Snapdragon 845 / Apple A14',
        memory: '8 GB RAM',
        graphics: 'Adreno 630 / Apple GPU',
        storage: '4.0 GB voľného miesta (SSD/UFS recommended)'
      }
    },
    downloadLinks: [
      { name: 'TobiPack High-Speed Mobile CDN (APK+OBB)', url: 'https://tobipack.gg/download/gta-sa-mobile.zip', size: '2.4 GB', status: 'online' },
      { name: 'APKPure Premium Mirror', url: 'https://apkpure.com/grand-theft-auto-san-andreas/com.rockstargames.gtasa', size: '2.4 GB', status: 'online' }
    ],
    rating: 4.7,
    downloadsCount: 654200,
    isPopular: true
  },
  {
    id: 'geometry-dash-mobile',
    name: 'Geometry Dash (Full Version Cracked)',
    description: 'Prejdite si cestu cez nebezpečenstvo v tejto rytmickej akčnej plošinovke! Plná verzia hry bez reklám, so všetkými úrovňami, editorom levelov, ikonkami a farbami odomknutými od začiatku. Žiadne mikrotransakcie, čistý pôžitok z hry.',
    releaseDate: 'Jan 10, 2026',
    developer: 'RobTop Games / TobiPack Mobile',
    genres: ['Arcade', 'Rhythm', 'Indie', 'Popular'],
    coverUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600&h=900',
    size: '85 MB',
    version: 'v2.206',
    requirements: {
      minimum: {
        os: 'Android 5.0+ / iOS 12.0+',
        processor: 'Dual-Core 1.2 GHz',
        memory: '2 GB RAM',
        graphics: 'Akékoľvek moderné GPU',
        storage: '150 MB voľného miesta'
      },
      recommended: {
        os: 'Android 9.0+ / iOS 15.0+',
        processor: 'Quad-Core 1.8 GHz',
        memory: '4 GB RAM',
        graphics: 'Adreno 506+',
        storage: '300 MB voľného miesta'
      }
    },
    downloadLinks: [
      { name: 'TobiPack High-Speed Mobile CDN (APK)', url: 'https://tobipack.gg/download/geometry-dash-full.apk', size: '85 MB', status: 'online' },
      { name: 'LiteAPKs Direct Mirror', url: 'https://liteapks.com/geometry-dash.html', size: '85 MB', status: 'online' }
    ],
    rating: 4.9,
    downloadsCount: 1205400,
    isPopular: true
  },
  {
    id: 'stardew-valley-mobile',
    name: 'Stardew Valley (Mobile Premium Full)',
    description: 'Presťahujte sa na vidiek a kultivujte nový život v tomto ocenenom RPG simulátore farmárčenia s otvoreným koncom. S viac ako 50+ hodinami herného obsahu, špecifickými mobilnými prvkami ako automatické ukladanie a prispôsobené dotykové ovládanie. Kompletná premium verzia zadarmo.',
    releaseDate: 'Mar 12, 2026',
    developer: 'ConcernedApe / TobiPack Mobile',
    genres: ['RPG', 'Simulation', 'Indie'],
    coverUrl: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&q=80&w=600&h=900',
    size: '350 MB',
    version: 'v1.6.9 (Full Unlocked)',
    requirements: {
      minimum: {
        os: 'Android 6.0+ / iOS 13.0+',
        processor: 'Quad-Core 1.4 GHz',
        memory: '2 GB RAM',
        graphics: 'Mali-T720 or similar',
        storage: '500 MB voľného miesta'
      },
      recommended: {
        os: 'Android 10.0+ / iOS 16.0+',
        processor: 'Octa-Core 2.0 GHz',
        memory: '4 GB RAM',
        graphics: 'Mali-G57 or similar',
        storage: '1 GB voľného miesta'
      }
    },
    downloadLinks: [
      { name: 'TobiPack High-Speed Mobile CDN (APK)', url: 'https://tobipack.gg/download/stardew-valley-mobile.apk', size: '350 MB', status: 'online' },
      { name: 'HappyMod Premium Mirror', url: 'https://happymod.com/stardew-valley-mod/', size: '350 MB', status: 'online' }
    ],
    rating: 4.8,
    downloadsCount: 423100,
    isPopular: false
  },
  {
    id: 'subway-surfers-mod',
    name: 'Subway Surfers (TobiPack Mod Menu)',
    description: 'Utekajte tak rýchlo, ako len dokážete! Vyhýbajte sa prichádzajúcim vlakom a pomôžte Jakeovi, Trickymu a Freshovi uniknúť pred nevrlým inšpektorom a jeho psom. Táto špeciálna TobiPack Modded edícia obsahuje integrované menu pre neobmedzené mince, kľúče, nesmrteľnosť, super skoky a odomknutie všetkých prémiových postáv a surfov.',
    releaseDate: 'Jun 28, 2026',
    developer: 'SYBO Games / TobiPack Mobile',
    genres: ['Arcade', 'Action', 'Popular'],
    coverUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600&h=900',
    size: '160 MB',
    version: 'v3.31.0 (MOD Menu)',
    requirements: {
      minimum: {
        os: 'Android 6.0+ / iOS 12.0+',
        processor: 'Dual-Core 1.2 GHz',
        memory: '2 GB RAM',
        graphics: 'Standard mobile GPU',
        storage: '300 MB voľného miesta'
      },
      recommended: {
        os: 'Android 10.0+ / iOS 15.0+',
        processor: 'Quad-Core 2.0 GHz',
        memory: '4 GB RAM',
        graphics: 'Mali-G52 or higher',
        storage: '500 MB voľného miesta'
      }
    },
    downloadLinks: [
      { name: 'TobiPack High-Speed Mobile CDN (APK)', url: 'https://tobipack.gg/download/subway-surfers-mod.apk', size: '160 MB', status: 'online' },
      { name: 'An1 Mod Mirror', url: 'https://an1.com/1255-subway-surfers-mod.html', size: '160 MB', status: 'online' }
    ],
    rating: 4.6,
    downloadsCount: 3105000,
    isPopular: true
  },
  {
    id: 'roblox-mod',
    name: 'Roblox (TobiPack God Mod Menu)',
    description: 'Vstúpte do nekonečného vesmíru hier. Roblox vám umožňuje vytvárať, zdieľať a byť čímkoľvek, čo si dokážete predstaviť. Táto verzia od TobiPack obsahuje exkluzívne prispôsobené cheat menu, ktoré umožňuje prechádzanie cez steny (Wallhack), lietanie (Fly), super skok, neobmedzené skákanie a nočný režim bez ban rizika.',
    releaseDate: 'Jul 01, 2026',
    developer: 'Roblox Corporation / TobiPack Mobile',
    genres: ['Sandbox', 'Multiplayer', 'Popular'],
    coverUrl: 'https://images.unsplash.com/photo-1566241477600-ac026ad43874?auto=format&fit=crop&q=80&w=600&h=900',
    size: '180 MB',
    version: 'v2.632.550 (MOD)',
    requirements: {
      minimum: {
        os: 'Android 7.0+ / iOS 13.0+',
        processor: 'Quad-Core 1.4 GHz',
        memory: '3 GB RAM',
        graphics: 'Adreno 506+',
        storage: '500 MB voľného miesta'
      },
      recommended: {
        os: 'Android 10.0+ / iOS 16.0+',
        processor: 'Octa-Core 2.2 GHz',
        memory: '6 GB RAM',
        graphics: 'Mali-G76 / Snapdragon 855',
        storage: '1.5 GB voľného miesta (Rýchle úložisko)'
      }
    },
    downloadLinks: [
      { name: 'TobiPack High-Speed Mobile CDN (APK)', url: 'https://tobipack.gg/download/roblox-mod.apk', size: '180 MB', status: 'online' },
      { name: 'HappyMod Roblox Mod Mirror', url: 'https://happymod.com/roblox-mod/com.roblox.client/', size: '180 MB', status: 'online' }
    ],
    rating: 4.5,
    downloadsCount: 2450000,
    isPopular: true
  },
  {
    id: 'bloons-td6-mobile',
    name: 'Bloons TD 6 (Full Unlocked Premium)',
    description: 'Postavte si dokonalú obranu z úžasných opičích veží, vylepšení, hrdinov a aktívnych schopností a potom pretrhnite každého jedného prechádzajúceho Bloona! Táto špeciálna TobiPack Premium Mobile edícia má všetky opice a hrdinov odomknutých s neobmedzenými opičími peniazmi zadarmo.',
    releaseDate: 'Apr 25, 2026',
    developer: 'Ninja Kiwi / TobiPack Mobile',
    genres: ['Strategy', 'Casual'],
    coverUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=600&h=900',
    size: '120 MB',
    version: 'v43.2 (Premium)',
    requirements: {
      minimum: {
        os: 'Android 6.0+ / iOS 13.0+',
        processor: 'Quad-Core 1.5 GHz',
        memory: '2 GB RAM',
        graphics: 'Akékoľvek moderné GPU',
        storage: '250 MB voľného miesta'
      },
      recommended: {
        os: 'Android 10.0+ / iOS 16.0+',
        processor: 'Octa-Core 2.0 GHz',
        memory: '4 GB RAM',
        graphics: 'Adreno 610+',
        storage: '500 MB voľného miesta'
      }
    },
    downloadLinks: [
      { name: 'TobiPack High-Speed Mobile CDN (APK)', url: 'https://tobipack.gg/download/bloonstd6-mobile.apk', size: '120 MB', status: 'online' },
      { name: 'LiteAPKs Bloons TD6 Premium Mirror', url: 'https://liteapks.com/bloons-td-6.html', size: '120 MB', status: 'online' }
    ],
    rating: 4.8,
    downloadsCount: 290400,
    isPopular: false
  },
  {
    id: 'terraria-mobile',
    name: 'Terraria (Mobile Full Cracked)',
    description: 'Kopte, bojujte, objavujte, stavajte! Nič nie je nemožné v tomto akčnom dobrodružstve plnom možností. Celý svet Terraria prepracovaný do najmenších detailov pre mobilné dotykové obrazovky. Plná prémiová verzia bez obmedzení, s podporou lokálneho multiplayeru.',
    releaseDate: 'May 08, 2026',
    developer: 'Re-Logic / TobiPack Mobile',
    genres: ['Sandbox', 'Adventure', 'Indie'],
    coverUrl: 'https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?auto=format&fit=crop&q=80&w=600&h=900',
    size: '260 MB',
    version: 'v1.4.4.9 (Full Premium)',
    requirements: {
      minimum: {
        os: 'Android 5.0+ / iOS 12.0+',
        processor: 'Quad-Core 1.3 GHz',
        memory: '2 GB RAM',
        graphics: 'Standard Mobile GPU',
        storage: '400 MB voľného miesta'
      },
      recommended: {
        os: 'Android 9.0+ / iOS 15.0+',
        processor: 'Octa-Core 2.0 GHz',
        memory: '4 GB RAM',
        graphics: 'Mali-G52 or higher',
        storage: '600 MB voľného miesta'
      }
    },
    downloadLinks: [
      { name: 'TobiPack High-Speed Mobile CDN (APK)', url: 'https://tobipack.gg/download/terraria-mobile.apk', size: '260 MB', status: 'online' },
      { name: 'HappyMod Terraria Mirror', url: 'https://happymod.com/terraria-mod/com.and.games505.TerrariaPaid/', size: '260 MB', status: 'online' }
    ],
    rating: 4.7,
    downloadsCount: 382000,
    isPopular: false
  },
  {
    id: 'dead-cells-mobile',
    name: 'Dead Cells (Mobile All DLCs Unlocked)',
    description: 'Dead Cells je rogue-lite, metroidvania akčná plošinovka. Budete objavovať rozľahlý, neustále sa meniaci hrad... za predpokladu, že sa dokážete prebojovať cez jeho strážcov. Táto verzia od TobiPack obsahuje všetky doteraz vydané prémiové rozšírenia a DLC (Return to Castlevania, Bad Seed, Fatal Falls, Queen and the Sea) úplne odomknuté.',
    releaseDate: 'Mar 30, 2026',
    developer: 'Motion Twin / Playdigious / TobiPack',
    genres: ['Action', 'Indie', 'Souls-like'],
    coverUrl: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=600&h=900',
    size: '1.1 GB',
    version: 'v3.3.16 (incl. Castlevania DLC)',
    requirements: {
      minimum: {
        os: 'Android 8.0+ / iOS 14.0+',
        processor: 'Octa-Core 1.8 GHz',
        memory: '4 GB RAM',
        graphics: 'Adreno 610 or similar',
        storage: '1.5 GB voľného miesta'
      },
      recommended: {
        os: 'Android 11.0+ / iOS 16.0+',
        processor: 'Octa-Core 2.4 GHz',
        memory: '6 GB RAM',
        graphics: 'Snapdragon 732G / Apple A13',
        storage: '2.0 GB voľného miesta'
      }
    },
    downloadLinks: [
      { name: 'TobiPack High-Speed Mobile CDN (APK)', url: 'https://tobipack.gg/download/dead-cells-mobile-all-dlc.apk', size: '1.1 GB', status: 'online' },
      { name: 'LiteAPKs Dead Cells All DLC Mirror', url: 'https://liteapks.com/dead-cells.html', size: '1.1 GB', status: 'online' }
    ],
    rating: 4.9,
    downloadsCount: 154000,
    isPopular: false
  },
  {
    id: 'fnaf-mobile',
    name: 'Five Nights at Freddys (Mobile Unlocked)',
    description: 'Vitajte vo vašej novej letnej brigáde vo Freddy Fazbear s Pizza, kam chodia deti aj rodičia za zábavou a jedlom, kam až oko dovidí! Hlavnou atrakciou je samozrejme Freddy Fazbear a jeho dvaja priatelia. Sú to animatronické roboty naprogramované tak, aby potešili davy! Premium verzia kompletnej prvej hry so všetkými nocami a nastaveniami odomknutými.',
    releaseDate: 'Dec 18, 2025',
    developer: 'Scott Cawthon / Clickteam / TobiPack',
    genres: ['Horror', 'Survival'],
    coverUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=600&h=900',
    size: '110 MB',
    version: 'v2.0.4 (Remastered)',
    requirements: {
      minimum: {
        os: 'Android 5.0+ / iOS 12.0+',
        processor: 'Quad-Core 1.3 GHz',
        memory: '2 GB RAM',
        graphics: 'Standard mobile GPU',
        storage: '200 MB voľného miesta'
      },
      recommended: {
        os: 'Android 8.0+ / iOS 14.0+',
        processor: 'Quad-Core 1.8 GHz',
        memory: '3 GB RAM',
        graphics: 'Standard mobile GPU',
        storage: '300 MB voľného miesta'
      }
    },
    downloadLinks: [
      { name: 'TobiPack High-Speed Mobile CDN (APK)', url: 'https://tobipack.gg/download/fnaf-mobile-cracked.apk', size: '110 MB', status: 'online' },
      { name: 'HappyMod FNAF Mirror Link', url: 'https://happymod.com/five-nights-at-freddy-s-mod/com.scottgames.fnaf/', size: '110 MB', status: 'online' }
    ],
    rating: 4.8,
    downloadsCount: 610000,
    isPopular: false
  },
  {
    id: 'slay-the-spire-mobile',
    name: 'Slay the Spire (Mobile Premium)',
    description: 'Spojili sme kartové hry a rogueliky, aby sme vytvorili najlepšiu hru pre jedného hráča. Vytvorte si jedinečný balíček, stretávajte bizarné stvorenia, objavujte relikvie nesmiernej sily a slámujte vežu! Plný prémiový port hry bez reklám a nutnosti pripojenia na internet.',
    releaseDate: 'Feb 20, 2026',
    developer: 'Mega Crit Games / Humble Games / TobiPack',
    genres: ['Strategy', 'RPG', 'Indie'],
    coverUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=600&h=900',
    size: '420 MB',
    version: 'v2.3.11',
    requirements: {
      minimum: {
        os: 'Android 6.0+ / iOS 13.0+',
        processor: 'Quad-Core 1.5 GHz',
        memory: '2 GB RAM',
        graphics: 'Standard Mobile GPU',
        storage: '600 MB voľného miesta'
      },
      recommended: {
        os: 'Android 9.0+ / iOS 15.0+',
        processor: 'Octa-Core 2.0 GHz',
        memory: '4 GB RAM',
        graphics: 'Adreno 512+',
        storage: '1 GB voľného miesta'
      }
    },
    downloadLinks: [
      { name: 'TobiPack High-Speed Mobile CDN (APK)', url: 'https://tobipack.gg/download/slay-the-spire-mobile.apk', size: '420 MB', status: 'online' },
      { name: 'LiteAPKs Slay Spire Mobile Mirror', url: 'https://liteapks.com/slay-the-spire.html', size: '420 MB', status: 'online' }
    ],
    rating: 4.9,
    downloadsCount: 112000,
    isPopular: false
  },
  {
    id: 'monopoly-mobile',
    name: 'Monopoly Classic (Mobile Premium)',
    description: 'Kúpte, predávajte a plánujte svoju cestu k bohatstvu v MONOPOLY, populárnej rodinnej stolovej hre od Hasbro. Klasická prémiová verzia hry na mobil so všetkými hernými režimami odomknutými vrátane offline hry s priateľmi na jednom zariadení. Kompletná lokalizácia, žiadne mikrotransakcie.',
    releaseDate: 'Jan 22, 2026',
    developer: 'Marmalade Game Studio / TobiPack',
    genres: ['Strategy', 'Casual'],
    coverUrl: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=600&h=900',
    size: '220 MB',
    version: 'v1.12.5 (Unlocked)',
    requirements: {
      minimum: {
        os: 'Android 6.0+ / iOS 13.0+',
        processor: 'Quad-Core 1.4 GHz',
        memory: '2 GB RAM',
        graphics: 'Akékoľvek moderné GPU',
        storage: '400 MB voľného miesta'
      },
      recommended: {
        os: 'Android 10.0+ / iOS 16.0+',
        processor: 'Octa-Core 2.0 GHz',
        memory: '4 GB RAM',
        graphics: 'Mali-G52 or higher',
        storage: '500 MB voľného miesta'
      }
    },
    downloadLinks: [
      { name: 'TobiPack High-Speed Mobile CDN (APK)', url: 'https://tobipack.gg/download/monopoly-mobile.apk', size: '220 MB', status: 'online' },
      { name: 'HappyMod Monopoly Unlocked Mirror', url: 'https://happymod.com/monopoly-mod/com.marmalade.monopoly/', size: '220 MB', status: 'online' }
    ],
    rating: 4.6,
    downloadsCount: 235000,
    isPopular: false
  }
];



