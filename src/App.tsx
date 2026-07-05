import React, { useState, useEffect } from 'react';
import JSZip from 'jszip';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Download,
  HelpCircle,
  GitPullRequest,
  Home,
  Sparkles,
  MessageSquare,
  ThumbsUp,
  ChevronDown,
  Check,
  AlertTriangle,
  ShieldCheck,
  Cpu,
  HardDrive,
  Gamepad2,
  ArrowLeft,
  Send,
  Loader2,
  Bookmark,
  TrendingUp,
  Info,
  Clock,
  ExternalLink,
  Smartphone
} from 'lucide-react';
import { Game, GameRequest, Comment, FAQItem } from './types';
import { ALL_GAMES_CATALOG, MOBILE_GAMES_CATALOG, MOBILE_APPS_CATALOG, FAQ_ITEMS, GENRES_LIST, TOBIPACK_INDEX_PRESETS, getSteamCoverUrl, findSteamAppId, getGenresForGame, getRealisticSizeForGame } from './gamesData';

export default function App() {
  // Platform selection: 'none' (choice screen), 'pc', or 'mobile'
  const [platform, setPlatform] = useState<'none' | 'pc' | 'mobile'>(() => {
    const saved = localStorage.getItem('tobipack_platform');
    if (saved === 'pc' || saved === 'mobile') return saved;
    return 'none';
  });

  // Navigation & Tab States
  const [activeTab, setActiveTab] = useState<'games' | 'faq' | 'requests'>('games');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  // Sorting & Pagination States
  const [sortBy, setSortBy] = useState<'rating' | 'size' | 'downloads' | 'name'>('rating');
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCount, setVisibleCount] = useState(40);

  const [mobileCategory, setMobileCategory] = useState<'all' | 'games' | 'apps'>('all');

  // Dynamic lists from Server / Session
  const [games, setGames] = useState<Game[]>(() => {
    const saved = localStorage.getItem('tobipack_platform');
    if (saved === 'mobile') {
      return [...MOBILE_GAMES_CATALOG, ...MOBILE_APPS_CATALOG];
    }
    return ALL_GAMES_CATALOG;
  });

  // Sync platform changes to localStorage and set the active catalog list
  useEffect(() => {
    localStorage.setItem('tobipack_platform', platform);
    if (platform === 'mobile') {
      if (mobileCategory === 'games') {
        setGames(MOBILE_GAMES_CATALOG);
      } else if (mobileCategory === 'apps') {
        setGames(MOBILE_APPS_CATALOG);
      } else {
        setGames([...MOBILE_GAMES_CATALOG, ...MOBILE_APPS_CATALOG]);
      }
    } else if (platform === 'pc') {
      setGames(ALL_GAMES_CATALOG);
    }
    setSelectedGame(null);
    setCurrentPage(1);
    setVisibleCount(40);
    setSearchQuery('');
  }, [platform, mobileCategory]);

  useEffect(() => {
    setVisibleCount(40);
  }, [searchQuery]);

  const [requests, setRequests] = useState<GameRequest[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);

  // Forms / Input States
  const [newRequestName, setNewRequestName] = useState('');
  const [newRequestUser, setNewRequestUser] = useState('');
  const [submittingRequest, setSubmittingRequest] = useState(false);

  const [commentUser, setCommentUser] = useState('');
  const [commentText, setCommentText] = useState('');
  const [submittingComment, setSubmittingComment] = useState(false);

  // FAQ Categories / Filtering
  const [selectedFaqCategory, setSelectedFaqCategory] = useState<'all' | 'general' | 'downloads' | 'errors' | 'safety'>('all');
  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [apiSuggestions, setApiSuggestions] = useState<Game[]>([]);
  const [isSearchingApi, setIsSearchingApi] = useState(false);
  const [downloadingGameId, setDownloadingGameId] = useState<string | null>(null);
  const [downloadProgress, setDownloadProgress] = useState<number>(0);

  // Dynamic search fetcher from full Steam/TobiPack directory
  useEffect(() => {
    if (!searchQuery.trim() || searchQuery.length < 2) {
      setApiSuggestions([]);
      return;
    }

    const delayDebounce = setTimeout(async () => {
      setIsSearchingApi(true);
      try {
        const res = await fetch(`/api/steam/search?q=${encodeURIComponent(searchQuery)}&platform=${platform}`);
        if (res.ok) {
          const data = await res.json();
          setApiSuggestions(data);
        }
      } catch (err) {
        console.error('Error fetching search results:', err);
      } finally {
        setIsSearchingApi(false);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery, platform]);

  // Setup initial requests from server
  useEffect(() => {
    fetchRequests();
  }, []);

  // Fetch comments whenever the selected game changes
  useEffect(() => {
    if (selectedGame) {
      fetchComments(selectedGame.id);
    }
  }, [selectedGame]);

  const fetchRequests = async () => {
    try {
      const res = await fetch('/api/requests');
      if (res.ok) {
        const data = await res.json();
        setRequests(data);
        localStorage.setItem('tobipack_requests', JSON.stringify(data));
      } else {
        throw new Error('Server returned non-ok status');
      }
    } catch (err) {
      console.warn('Error fetching requests from server, falling back to localStorage:', err);
      const saved = localStorage.getItem('tobipack_requests');
      if (saved) {
        setRequests(JSON.parse(saved));
      } else {
        const initialRequests = [
          { id: '1', gameName: 'Grand Theft Auto VI', requestedBy: 'Tobi', votes: 42, date: 'Dnes' },
          { id: '2', gameName: 'FIFA 27', requestedBy: 'Maroš', votes: 19, date: 'Včera' },
          { id: '3', gameName: 'Spider-Man 3', requestedBy: 'Jakub', votes: 12, date: 'Pred 3 dňami' }
        ];
        setRequests(initialRequests);
        localStorage.setItem('tobipack_requests', JSON.stringify(initialRequests));
      }
    }
  };

  const fetchComments = async (gameId: string) => {
    try {
      const res = await fetch(`/api/comments/${gameId}`);
      if (res.ok) {
        const data = await res.json();
        setComments(data);
        localStorage.setItem(`tobipack_comments_${gameId}`, JSON.stringify(data));
      } else {
        throw new Error('Server returned non-ok status');
      }
    } catch (err) {
      console.warn(`Error fetching comments for ${gameId} from server, falling back to localStorage:`, err);
      const saved = localStorage.getItem(`tobipack_comments_${gameId}`);
      if (saved) {
        setComments(JSON.parse(saved));
      } else {
        const initialComments = [
          { id: 'c1', gameId, username: 'TobiAdmin', text: 'Tento torrent aj priamy link bol otestovaný a je 100% funkčný. Nezabudnite spustiť "vipnut.bat"!', likes: 14, date: 'Pred 2 dňami' },
          { id: 'c2', gameId, username: 'GamesLover', text: 'Perfektná rýchlosť sťahovania, stiahlo mi to za pár minút. Vďaka za hru!', likes: 5, date: 'Včera' }
        ];
        setComments(initialComments);
        localStorage.setItem(`tobipack_comments_${gameId}`, JSON.stringify(initialComments));
      }
    }
  };

  // Submit dynamic comment
  const handlePostComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedGame || !commentUser.trim() || !commentText.trim()) return;

    setSubmittingComment(true);
    const fallbackComment = {
      id: 'local_' + Date.now(),
      gameId: selectedGame.id,
      username: commentUser,
      text: commentText,
      likes: 0,
      date: 'Práve teraz'
    };

    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          gameId: selectedGame.id,
          username: commentUser,
          text: commentText
        })
      });
      if (res.ok) {
        const newComment = await res.json();
        setComments(prev => [newComment, ...prev]);
        setCommentText('');
      } else {
        throw new Error('Server non-ok');
      }
    } catch (err) {
      console.warn('Failed to post comment to server, saving locally:', err);
      setComments(prev => {
        const updated = [fallbackComment, ...prev];
        localStorage.setItem(`tobipack_comments_${selectedGame.id}`, JSON.stringify(updated));
        return updated;
      });
      setCommentText('');
    } finally {
      setSubmittingComment(false);
    }
  };

  // Like comment
  const handleLikeComment = async (commentId: string) => {
    if (!selectedGame) return;
    try {
      const res = await fetch(`/api/comments/${commentId}/like`, { method: 'POST' });
      if (res.ok) {
        const updated = await res.json();
        setComments(prev => prev.map(c => c.id === commentId ? updated : c));
      } else {
        throw new Error('Server non-ok');
      }
    } catch (err) {
      console.warn('Failed to like comment on server, liking locally:', err);
      setComments(prev => {
        const updated = prev.map(c => c.id === commentId ? { ...c, likes: (c.likes || 0) + 1 } : c);
        localStorage.setItem(`tobipack_comments_${selectedGame.id}`, JSON.stringify(updated));
        return updated;
      });
    }
  };

  // Request game submission
  const handleRequestGame = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRequestName.trim() || !newRequestUser.trim()) return;

    setSubmittingRequest(true);
    const fallbackRequest = {
      id: 'local_' + Date.now(),
      gameName: newRequestName,
      requestedBy: newRequestUser,
      votes: 1,
      date: 'Práve teraz'
    };

    try {
      const res = await fetch('/api/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          gameName: newRequestName,
          requestedBy: newRequestUser
        })
      });
      if (res.ok) {
        await fetchRequests();
        setNewRequestName('');
        setNewRequestUser('');
      } else {
        throw new Error('Server non-ok');
      }
    } catch (err) {
      console.warn('Failed to submit request to server, saving locally:', err);
      setRequests(prev => {
        const updated = [fallbackRequest, ...prev];
        localStorage.setItem('tobipack_requests', JSON.stringify(updated));
        return updated;
      });
      setNewRequestName('');
      setNewRequestUser('');
    } finally {
      setSubmittingRequest(false);
    }
  };

  // Vote on game request
  const handleVoteRequest = async (requestId: string) => {
    try {
      const res = await fetch(`/api/requests/${requestId}/vote`, { method: 'POST' });
      if (res.ok) {
        await fetchRequests();
      } else {
        throw new Error('Server non-ok');
      }
    } catch (err) {
      console.warn('Failed to vote on server, voting locally:', err);
      setRequests(prev => {
        const updated = prev.map(r => r.id === requestId ? { ...r, votes: (r.votes || 0) + 1 } : r);
        localStorage.setItem('tobipack_requests', JSON.stringify(updated));
        return updated;
      });
    }
  };

  // Custom high-fidelity TobiPack download handler that packs and delivers a real ZIP containing:
  // - [gameName].exe (Pre-configured dummy payload launcher)
  // - tobisnavod.txt (Slovak game guide & antivirus walkthrough)
  // - vipnut.bat (Batch helper to automate exclusion settings or show terminal walkthrough)
  const handleDownloadGame = async (game: Game) => {
    try {
      setDownloadingGameId(game.id);
      setDownloadProgress(10);

      // Mobile APK Direct Download Logic
      if (platform === 'mobile') {
        const apkLink = game.downloadLinks?.find(link => link.url.includes('.apk') || link.name.includes('APK')) || game.downloadLinks?.[0];
        if (apkLink) {
          setDownloadProgress(50);
          setTimeout(() => {
            setDownloadProgress(100);
            window.open(apkLink.url, '_blank');
            setDownloadingGameId(null);
            setDownloadProgress(0);
          }, 300);
          return;
        }
      }

      const zip = new JSZip();
      const folderName = `${game.name.replace(/[^a-zA-Z0-9]/g, '')}`;
      const folder = zip.folder(folderName) || zip;

      // Automatically fetch and pack game logo/image from TobiPack / Steam CDN via our server-side proxy
      let packedLogo = false;
      if (game.coverUrl) {
        try {
          const proxyUrl = `/api/steam/image-proxy?url=${encodeURIComponent(game.coverUrl)}`;
          const imgRes = await fetch(proxyUrl);
          if (imgRes.ok) {
            const imgBuffer = await imgRes.arrayBuffer();
            folder.file(`${game.name}_logo.jpg`, imgBuffer);
            packedLogo = true;
          }
        } catch (imgErr) {
          console.warn("Failed to fetch game logo image for zip packing, generating fallback:", imgErr);
        }
      }

      if (!packedLogo) {
        // Generate a custom high-quality TobiPack cover as fallback inside the ZIP
        try {
          const canvas = document.createElement('canvas');
          canvas.width = 600;
          canvas.height = 900;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            // Background
            const grad = ctx.createLinearGradient(0, 0, 0, 900);
            grad.addColorStop(0, '#0f111a');
            grad.addColorStop(0.5, '#161925');
            grad.addColorStop(1, '#090a0f');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, 600, 900);

            // Tech Border
            ctx.strokeStyle = '#a4f21d';
            ctx.lineWidth = 6;
            ctx.strokeRect(30, 30, 540, 840);

            // Header text
            ctx.fillStyle = '#a4f21d';
            ctx.font = 'bold 24px monospace';
            ctx.textAlign = 'center';
            ctx.fillText('TOBIPACK OFFICIAL PORTAL', 300, 100);

            // Large Icon
            ctx.font = 'bold 120px Arial';
            ctx.fillText('🎮', 300, 320);

            // Title line wrapping
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 36px Arial';
            const words = game.name.split(' ');
            let line = '';
            let textY = 480;
            for (let n = 0; n < words.length; n++) {
              let testLine = line + words[n] + ' ';
              let metrics = ctx.measureText(testLine);
              if (metrics.width > 440 && n > 0) {
                ctx.fillText(line.trim(), 300, textY);
                line = words[n] + ' ';
                textY += 50;
              } else {
                line = testLine;
              }
            }
            ctx.fillText(line.trim(), 300, textY);

            // Footer
            ctx.fillStyle = '#a4f21d';
            ctx.font = 'bold 20px monospace';
            ctx.fillText('✓ CERTIFIED SAFE MIRROR', 300, 760);

            ctx.fillStyle = '#64748b';
            ctx.font = '14px sans-serif';
            ctx.fillText('STIAHNUTÉ CEZ TOBIPACK.ZIP', 300, 800);
          }
          const base64Data = canvas.toDataURL('image/jpeg', 0.85).split(',')[1];
          folder.file(`${game.name}_logo.jpg`, base64Data, { base64: true });
        } catch (canvasErr) {
          console.error("Failed to generate canvas logo fallback inside zip:", canvasErr);
        }
      }

      // 1. [gameName].exe
      const exeContent = `TobiPack - ${game.name} pre-installed launcher.\n\nPre spustenie hry najskôr spustite súbor 'vipnut.bat' pre správne povolenie výnimiek v antivíruse!\nAntivírusové programy (vrátane Windows Defenderu) môžu inak omylom zmazať spúšťací cracknutý súbor hry (tzv. False Positive).\n\nPo pridaní výnimky môžete bez problémov spustiť hru.`;
      folder.file(`${game.name}.exe`, exeContent);

      // 2. tobisnavod.txt
      const navodContent = `======================================================================
               NÁVOD NA SPUSTENIE HRY: ${game.name}
======================================================================

Ďakujeme za stiahnutie hry cez TobiPack!

[!] SÚČASŤOU TOHTO ARCHÍVU JE AJ AUTOMATICKY STIAHNUTÝ OBRÁZOK/LOGO HRY:
    -> "${game.name}_logo.jpg" (stiahnuté zo serverov TobiPack/Steam CDN pre TobiPack)

Pre bezproblémové spustenie hry postupujte presne podľa týchto krokov:

KROK 1: SPUSTITE SÚBOR "vipnut.bat"
- Tento súbor automaticky pridá tento priečinok do výnimiek systému Windows Defender, aby nedošlo k zmazaniu súborov hry.
- Kliknite naň pravým tlačidlom myši a zvoľte "Spustiť ako správca" (Run as Administrator).
- Po spustení zadajte "A" (Áno) a schváľte správcovský prístup (UAC).

KROK 2: SKONTROLUJTE HISTÓRIU HROZIEB (Ak už antivírus niečo zmazal)
- Ak ste hru sťahovali s aktívnym antivírusom, mohol preventívne zablokovať niektoré crack súbory.
- Spustite "vipnut.bat", vyberte "A" a automaticky sa vám otvorí História ochrán v systéme Windows.
- Nájdite tam poslednú blokovanú položku patriacu tejto hre a zvoľte možnosť "Povoliť na zariadení".

KROK 3: SPUSTITE HRU
- Po pridaní výnimiek kliknite pravým tlačidlom myši na súbor "${game.name}.exe" a zvoľte "Spustiť ako správca".
- Hra sa bez problémov spustí!

======================================================================
TobiPack • Pre-installed & pre-cracked PC games
======================================================================`;
      folder.file('tobisnavod.txt', navodContent);

      // 3. vipnut.bat
      const batContent = `@echo off
:: Slovak language support
chcp 65001 > nul
title TobiPack - ${game.name} Aktivátor výnimiek a Kontrola Steamu
color 0b
cls
echo ======================================================================
echo                     TobiPack Bezpečnostný Asistent
echo ======================================================================
echo.
echo Chystáte sa spustiť pre-cracknutú hru: ${game.name}
echo.
echo Pre správne fungovanie pre-cracknutej hry je nutné povoliť výnimku
echo v antivíruse, inak môže zmazať spúšťací súbor (false positive).
echo.
echo Chcete automaticky nastaviť výnimku pre tento priečinok a otvoriť
echo históriu ochrán v systéme Windows?
echo.
set /p choice="Zadajte [A] pre Áno, alebo [N] pre Nie (Stlačením ESC alebo Ctrl+C kedykoľvek zrušíte): "

if /i "%choice%"=="A" goto :yes
if /i "%choice%"=="N" goto :no
goto :cancel

:yes
echo.
echo [i] Pokus o automatické pridanie tohto priečinka do výnimiek Windows Defender...
echo [i] Vyžaduje sa overenie správcu (ak sa zobrazí výzva UAC, zvoľte ÁNO).
echo.
powershell -Command "Start-Process powershell -ArgumentList '-NoProfile -ExecutionPolicy Bypass -Command \"Add-MpPreference -ExclusionPath ''%~dp0''\"' -Verb RunAs"

echo.
echo [i] Otváram Windows Zabezpečenie - História ochrany...
start windowsdefender://ProtectionHistory

echo.
echo [i] Otváram nastavenia vylúčení v systéme Windows...
powershell -Command "Start-Process 'ms-settings:windowsdefender'"

echo.
echo ======================================================================
echo [HOTOVO] Priečinok bol pridaný do výnimiek (ak ste schválili UAC).
echo ======================================================================
goto :check_steam

:no
cls
color 0f
echo ======================================================================
echo              MANUÁLNY NÁVOD NA POVOLENIE VÝNIMIEK (TobiPack)
echo ======================================================================
echo.
echo Keďže ste zvolili NIE, tu sú inštrukcie na manuálne povolenie:
echo.
echo 1. Otvorte ponuku 'Štart' -> napíšte 'Zabezpečenie systému Windows' a otvorte ho.
echo 2. Prejdite do sekcie 'Ochrana pred vírusmi a hrozbami'.
echo 3. Kliknite na 'História ochrany' (Protection History).
echo 4. Nájdite posledný zablokovaný súbor patriaci tejto hre a zvoľte 'Povoliť na zariadení'.
echo 5. Pre pridanie trvalej výnimky na tento priečinok:
echo    - V časti 'Nastavenia ochrany pred vírusmi a hrozbami' kliknite na 'Spravovať nastavenia'.
echo    - Prejdite nadol na sekciu 'Vylúčenia' -> 'Pridať alebo odobrať vylúčenia'.
echo    - Kliknite na 'Pridať vylúčenie' -> 'Priečinok' -> Vyberte tento priečinok:
echo      "%~dp0"
echo.
echo Pre iné antivírusy (Avast, ESET, Kaspersky, AVG):
echo - Otvorte hlavný panel alebo nastavenia vášho antivírusu.
echo - Nájdite sekciu 'Výnimky', 'Vylúčenia' alebo 'Dôveryhodná zóna' (Exceptions / Exclusions).
echo - Pridajte celú túto zložku alebo priečinok do výnimiek, aby antivírus nekontroloval súbory hry.
echo.
echo Stlačte ľubovoľný kláves pre pokračovanie na kontrolu Steamu...
pause > nul
goto :check_steam

:cancel
echo.
echo Akcia bola prerušená používateľom. Vykonáva sa kontrola Steamu...
pause
goto :check_steam

:check_steam
cls
color 0a
echo ======================================================================
echo                      KONTROLA SLUŽBY STEAM
echo ======================================================================
echo.
echo [i] Kontrolujem, či máte nainštalovanú aplikáciu Steam...
echo.

set "steam_installed=0"
reg query "HKCU\Software\Valve\Steam" /v "SteamExe" >nul 2>&1
if %errorlevel% equ 0 set "steam_installed=1"
reg query "HKLM\Software\Wow6432Node\Valve\Steam" /v "InstallPath" >nul 2>&1
if %errorlevel% equ 0 set "steam_installed=1"
if exist "%ProgramFiles(x86)%\Steam\steam.exe" set "steam_installed=1"
if exist "%ProgramFiles%\Steam\steam.exe" set "steam_installed=1"

if "%steam_installed%"=="1" (
    echo [✓] ÚSPECH: Steam bol nájdený nainštalovaný vo vašom systéme!
    echo [!] UPOZORNENIE: Pred spustením hry MUSÍTE mať spustenú aplikáciu Steam!
    echo     Bez spusteného Steamu sa hra nespustí správne.
    echo.
    echo Všetko je pripravené! Teraz môžete bezpečne spustiť ${game.name}.exe.
    echo.
    echo ======================================================================
    echo HOTOVO / DONE!
    echo ======================================================================
    pause
    exit
) else (
    color 0c
    echo [X] CHYBA: Vo vašom počítači nebol nájdený nainštalovaný Steam!
    echo.
    echo Pre spustenie pre-cracknutých hier cez TobiPack MUSÍTE mať nainštalovaný
    echo a spustený program Steam (aj keby ste hrali offline). Bez neho hra nepôjde!
    echo.
    echo Kde a ako si prajete stiahnuť Steam?
    echo ----------------------------------------------------------------------
    echo [T] - Stiahnuť PRIAMO sem do priečinka (Automatické stiahnutie SteamSetup.exe)
    echo [I] - Otvoriť oficiálnu stránku Steamu v internetovom prehliadači
    echo [B] - Preskočiť a dokončiť
    echo ----------------------------------------------------------------------
    echo.
    set /p steam_choice="Zadajte vašu voľbu [T, I alebo B]: "
    
    if /i "%steam_choice%"=="T" goto :download_steam
    if /i "%steam_choice%"=="I" goto :web_steam
    goto :continue_setup
)

:download_steam
cls
color 0b
echo ======================================================================
echo                     SŤAHOVANIE SLUŽBY STEAM (TobiPack)
echo ======================================================================
echo.
echo [i] Sťahujem oficiálny inštalátor služby Steam...
echo     Súbor bude uložený ako SteamSetup.exe do tohto priečinka.
echo.
curl -L -o SteamSetup.exe https://repo.steampowered.com/steam/archive/stable/SteamSetup.exe
if %errorlevel% equ 0 (
    echo.
    echo [✓] HOTOVO! Súbor SteamSetup.exe bol úspešne stiahnutý.
    echo [i] Spúšťam inštalátor služby Steam...
    start SteamSetup.exe
    echo.
    echo Nainštalujte Steam, prihláste sa (alebo vytvorte účet), spuste ho
    echo a následne môžete spustiť vašu hru cez ${game.name}.exe!
) else (
    echo.
    echo [X] Nepodarilo sa stiahnuť inštalátor priamo pomocou curl.
    echo     Otváram oficiálnu webovú stránku pre manuálne stiahnutie...
    start https://store.steampowered.com/about/
)
echo.
echo ======================================================================
echo HOTOVO / DONE!
echo ======================================================================
pause
exit

:web_steam
echo.
echo [i] Otváram webovú stránku Steam v prehliadači...
start https://store.steampowered.com/about/
echo Nainštalujte Steam, prihláste sa a potom spuste hru cez ${game.name}.exe!
echo.
echo ======================================================================
echo HOTOVO / DONE!
echo ======================================================================
pause
exit

:continue_setup
echo.
echo Pokračujem bez inštalácie Steamu.
echo Nezabudnite, že pre hranie hry musíte mať nainštalovaný a spustený Steam!
echo.
echo ======================================================================
echo HOTOVO / DONE!
echo ======================================================================
pause
exit`;
      folder.file('vipnut.bat', batContent);

      setDownloadProgress(35);

      const zipBlob = await zip.generateAsync({ type: 'blob' }, (metadata) => {
        setDownloadProgress(Math.floor(35 + metadata.percent * 0.65));
      });

      const url = URL.createObjectURL(zipBlob);
      const cleanName = game.name.toLowerCase().replace(/[^a-z0-9]+/g, '_');
      const filename = `tobipack_${cleanName}.zip`;

      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setDownloadingGameId(null);
      setDownloadProgress(0);
    } catch (err) {
      console.error("Chyba pri generovaní TobiPack ZIP:", err);
      setDownloadingGameId(null);
      setDownloadProgress(0);
    }
  };

  // Instant direct game loader (Bypassing AI loading and providing direct instant downloads)
  const handleInstantGameLoad = (gameName: string) => {
    if (!gameName.trim()) return;
    
    // First try to find in our active API search suggestions for full Steam metadata matching
    const apiMatch = apiSuggestions.find(g => g.name.toLowerCase() === gameName.toLowerCase().trim());
    if (apiMatch) {
      setGames(prev => {
        if (prev.some(g => g.id === apiMatch.id)) {
          return prev;
        }
        return [apiMatch, ...prev];
      });
      setSelectedGame(apiMatch);
      setSearchQuery('');
      return;
    }
    
    const id = gameName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const existingGame = games.find(g => g.id === id);
    if (existingGame) {
      setSelectedGame(existingGame);
      setSearchQuery('');
      return;
    }

    // Resolve steamId and cover image instantly
    const appId = findSteamAppId(gameName);
    const coverUrl = getSteamCoverUrl(gameName);
    
    // Create pre-cracked specifications sheet and instant download links
    const newGame: Game = {
      id,
      name: gameName,
      description: `${gameName} is pre-installed and pre-cracked for your convenience. This distribution includes all current updates and DLC content. Tested 100% clean of malware and verified on latest Windows builds.\n\nEnjoy high-speed direct downloads and instant gameplay without configuration or installation wizards.`,
      releaseDate: 'Latest Update',
      developer: 'TobiPack Mirror System',
      genres: getGenresForGame(gameName),
      steamId: appId ? String(appId) : undefined,
      coverUrl,
      size: '12.4 GB',
      version: 'v1.0.4 Direct-Rip',
      isPopular: true,
      requirements: {
        minimum: {
          os: 'Windows 10 64-Bit',
          processor: 'Intel Core i5-3470 or AMD FX-8350',
          memory: '8 GB RAM',
          graphics: 'NVIDIA GTX 760 or AMD Radeon R9 270X',
          storage: '40 GB available space'
        },
        recommended: {
          os: 'Windows 10/11 64-Bit',
          processor: 'Intel Core i7-8700 or AMD Ryzen 5 3600',
          memory: '16 GB RAM',
          graphics: 'NVIDIA GTX 1070 or AMD Radeon RX 5600 XT',
          storage: '40 GB available space (SSD Recommended)'
        }
      },
      downloadLinks: [
        {
          name: 'Direct Speed Mirror (Instant Zip)',
          url: `https://gofile.io/d/tobipack-${id}-direct.zip`,
          size: '12.4 GB',
          status: 'online'
        },
        {
          name: 'Immediate Torrent Magnet (No Redirects)',
          url: `magnet:?xt=urn:btih:${id}tobipack&dn=${encodeURIComponent(gameName)}`,
          size: '12.4 GB',
          status: 'online'
        },
        {
          name: 'Premium Qiwi Direct (Single File)',
          url: `https://qiwi.gg/file/direct/tobipack-${id}.zip`,
          size: '12.4 GB',
          status: 'online'
        }
      ]
    };

    setGames(prev => [newGame, ...prev]);
    setSelectedGame(newGame);
    setSearchQuery('');
  };

  // Helper to parse size string to raw number of GB
  const parseSize = (sizeStr: string): number => {
    const match = sizeStr.match(/([\d.]+)\s*(GB|MB|KB)?/i);
    if (!match) return 0;
    const val = parseFloat(match[1]);
    const unit = (match[2] || 'GB').toUpperCase();
    if (unit === 'MB') return val / 1024;
    if (unit === 'KB') return val / (1024 * 1024);
    return val;
  };

  // Filter games based on search query and selected genres
  const filteredGames = games.filter(game => {
    const matchesSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          game.genres.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (selectedGenres.length === 0) return matchesSearch;

    const matchesGenre = selectedGenres.every(genre => {
      if (genre === 'Popular' || genre === 'Populárne') {
        return !!game.isPopular || game.genres.includes('Popular') || game.genres.includes('Populárne') || game.genres.includes('Populárne teraz');
      }
      if (genre === 'Hra') return !game.genres.includes('Aplikácia');
      if (genre === 'Aplikácia') return game.genres.includes('Aplikácia');
      return game.genres.includes(genre);
    });

    return matchesSearch && matchesGenre;
  });

  // Sort filtered games
  const sortedGames = [...filteredGames].sort((a, b) => {
    if (sortBy === 'rating') {
      return (b.rating || 0) - (a.rating || 0);
    }
    if (sortBy === 'size') {
      return parseSize(b.size) - parseSize(a.size);
    }
    if (sortBy === 'downloads') {
      return (b.downloadsCount || 0) - (a.downloadsCount || 0);
    }
    // name sorting
    return a.name.localeCompare(b.name);
  });

  // Reset page to 1 when search, filters, or sorting changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedGenres, sortBy]);

  // Dynamically inject matching database presets and API suggestions into the active catalog so they are shown in the main grid
  useEffect(() => {
    if (!searchQuery.trim()) return;
    
    const queryLower = searchQuery.toLowerCase().trim();
    let addedAny = false;
    const gamesToAdd: Game[] = [];
    
    if (platform === 'pc') {
      // Find matching presets
      const matchingPresets = TOBIPACK_INDEX_PRESETS.filter(name => 
        name.toLowerCase().includes(queryLower)
      );
      
      // 1. Process matching presets
      for (const presetName of matchingPresets) {
        const id = presetName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        if (!games.some(g => g.id === id)) {
          const appId = findSteamAppId(presetName);
          const coverUrl = getSteamCoverUrl(presetName);
          const sizeStr = getRealisticSizeForGame(presetName);
          const sizeGbMatch = sizeStr.match(/([\d.]+)\s*GB/i);
          const sizeGb = sizeGbMatch ? parseFloat(sizeGbMatch[1]) : 15;
          
          const newGame: Game = {
            id,
            name: presetName,
            description: `${presetName} is pre-installed, pre-cracked, and optimized for immediate high-speed download. This clean distribution contains all recent updates and original DLC contents. Windows Defender verified and fully tested.`,
            releaseDate: 'Latest Version',
            developer: 'TobiPack Mirror system',
            genres: getGenresForGame(presetName),
            steamId: appId ? String(appId) : undefined,
            coverUrl,
            size: sizeStr,
            version: 'v1.0.4 Direct-Rip',
            isPopular: presetName.toLowerCase().includes('minecraft') || presetName.toLowerCase().includes('gta'),
            requirements: {
              minimum: {
                os: 'Windows 10 64-Bit',
                processor: 'Intel Core i5-3470 or AMD FX-8350',
                memory: '8 GB RAM',
                graphics: 'NVIDIA GTX 760 or AMD Radeon R9 270X',
                storage: `${Math.ceil(sizeGb + 2)} GB available space`
              },
              recommended: {
                os: 'Windows 10/11 64-Bit',
                processor: 'Intel Core i7-8700 or AMD Ryzen 5 3600',
                memory: '16 GB RAM',
                graphics: 'NVIDIA GTX 1070 or AMD Radeon RX 5600 XT',
                storage: `${Math.ceil(sizeGb + 2)} GB available space (SSD Recommended)`
              }
            },
            downloadLinks: [
              {
                name: 'Direct Speed Mirror (Instant Zip)',
                url: `https://gofile.io/d/tobipack-${id}-direct.zip`,
                size: sizeStr,
                status: 'online'
              },
              {
                name: 'Immediate Torrent Magnet (No Redirects)',
                url: `magnet:?xt=urn:btih:${id}tobipack&dn=${encodeURIComponent(presetName)}`,
                size: sizeStr,
                status: 'online'
              },
              {
                name: 'Premium Qiwi Direct (Single File)',
                url: `https://qiwi.gg/file/direct/tobipack-${id}.zip`,
                size: sizeStr,
                status: 'online'
              }
            ]
          };
          gamesToAdd.push(newGame);
          addedAny = true;
        }
      }
    }
    
    // 2. Process API suggestions
    for (const apiGame of apiSuggestions) {
      if (!games.some(g => g.id === apiGame.id) && !gamesToAdd.some(g => g.id === apiGame.id)) {
        gamesToAdd.push(apiGame);
        addedAny = true;
      }
    }
    
    if (addedAny) {
      setGames(prev => {
        // Double check duplicates
        const filteredToAdd = gamesToAdd.filter(newG => !prev.some(g => g.id === newG.id));
        if (filteredToAdd.length === 0) return prev;
        return [...prev, ...filteredToAdd];
      });
    }
  }, [searchQuery, apiSuggestions, platform]);

  const totalGamesCount = sortedGames.length;
  const paginatedGames = sortedGames.slice(0, visibleCount);

  const matchedLoaded = searchQuery.trim()
    ? games.filter(g => g.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const matchedPresets = (platform === 'pc' && searchQuery.trim())
    ? TOBIPACK_INDEX_PRESETS.filter(name =>
        name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !games.some(g => g.name.toLowerCase() === name.toLowerCase())
      ).map(name => {
        const appId = findSteamAppId(name);
        return {
          id: `preset-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
          name: name,
          isPreset: true,
          steamId: appId ? String(appId) : undefined,
          coverUrl: getSteamCoverUrl(name),
          size: 'Instant Download',
          version: 'TobiPack Database'
        };
      })
    : [];

  const suggestions = [
    ...matchedLoaded.map(g => ({ ...g, isPreset: false })),
    ...apiSuggestions.filter(apiG => !games.some(g => g.id === apiG.id)).map(g => ({ ...g, isPreset: true })),
    ...matchedPresets.filter(p => !apiSuggestions.some(apiG => apiG.name.toLowerCase() === p.name.toLowerCase()))
  ].slice(0, 10);

  const featuredGame = games.find(g => g.id === 'elden-ring') || games[0];

  const toggleFaq = (index: number) => {
    setOpenFaqIndices(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const filteredFaqs = FAQ_ITEMS.filter(faq => selectedFaqCategory === 'all' || faq.category === selectedFaqCategory);

  const getFallbackCover = (gameName: string) => {
    const clean = encodeURIComponent(gameName || 'TobiPack Game');
    const colorHex = platform === 'mobile' ? '06b6d4' : 'a4f21d'; // Cyan for mobile, Lime for PC
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="900" viewBox="0 0 600 900"><rect width="100%" height="100%" fill="%230f111a"/><rect x="20" y="20" width="560" height="860" fill="none" stroke="%23${colorHex}" stroke-width="4" stroke-dasharray="10 5"/><text x="300" y="100" fill="%23${colorHex}" font-family="monospace" font-size="22" font-weight="bold" text-anchor="middle">TOBIPACK OFFICIAL</text><circle cx="300" cy="300" r="80" fill="none" stroke="%23${colorHex}" stroke-width="2"/><text x="300" y="310" fill="%23${colorHex}" font-family="sans-serif" font-size="40" font-weight="bold" text-anchor="middle">🎮</text><text x="300" y="520" fill="white" font-family="sans-serif" font-size="32" font-weight="bold" text-anchor="middle">${clean}</text><text x="300" y="570" fill="%2394a3b8" font-family="sans-serif" font-size="16" text-anchor="middle">PRE-INSTALLED PORTAL</text><text x="300" y="820" fill="%23475569" font-family="monospace" font-size="14" text-anchor="middle">100% BEZPEČNÉ A SKONTROLOVANÉ</text></svg>`;
  };

  if (platform === 'none') {
    return (
      <div className="min-h-screen bg-[#06070a] text-slate-100 flex flex-col items-center justify-center p-4 sm:p-8 font-sans selection:bg-[#a4f21d] selection:text-black relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl w-full text-center space-y-8 z-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#121622] rounded-full border border-slate-800 text-xs font-mono text-[#a4f21d]">
              <span className="w-1.5 h-1.5 bg-[#a4f21d] rounded-full animate-pulse"></span>
              <span>VITAJTE NA TOBIPACK MIRROR SYSTEM v3.0</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase">
              TOBI<span className="text-[#a4f21d]">PACK</span>
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto text-xs sm:text-sm font-mono uppercase tracking-wider">
              Vyberte si svoju hernú platformu pre stiahnutie plne odomknutých hier zadarmo a bez reklám.
            </p>
          </div>

          {/* Stacking / Dual layout choice */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            
            {/* PC GAME PORTAL */}
            <div 
              onClick={() => setPlatform('pc')}
              className="bg-[#0e111a] border border-slate-800 hover:border-[#a4f21d]/80 rounded-2xl p-6 sm:p-8 text-left cursor-pointer group transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-lime-950/10 flex flex-col justify-between min-h-[250px] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/5 rounded-full blur-2xl group-hover:bg-lime-500/10 transition-colors"></div>
              <div>
                <div className="w-12 h-12 bg-[#171b26] border border-slate-700 group-hover:border-[#a4f21d] rounded-xl flex items-center justify-center mb-6 text-[#a4f21d] text-2xl transition-all">
                  🖥️
                </div>
                <h2 className="text-2xl font-black text-white group-hover:text-[#a4f21d] transition-colors uppercase tracking-tight">
                  PC Hry (Hore / Top)
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                  Stiahnite si tisíce overených, pred-inštalovaných PC hier z indexov TobiPack. Žiadne inštalátory, žiadne DRM, stačí stiahnuť zip, rozbaliť a spustiť.
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-slate-800/80 pt-4">
                <span className="text-[10px] text-slate-500 font-mono">4,219+ INDEXOVANÝCH PC HIER</span>
                <span className="text-xs font-mono text-[#a4f21d] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold">
                  VSTÚPIŤ DO PORTÁLU →
                </span>
              </div>
            </div>

            {/* MOBILE GAME PORTAL */}
            <div 
              onClick={() => setPlatform('mobile')}
              className="bg-[#0e111a] border border-slate-800 hover:border-cyan-500/80 rounded-2xl p-6 sm:p-8 text-left cursor-pointer group transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-950/10 flex flex-col justify-between min-h-[250px] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors"></div>
              <div>
                <div className="w-12 h-12 bg-[#171b26] border border-slate-700 group-hover:border-cyan-400 rounded-xl flex items-center justify-center mb-6 text-cyan-400 text-2xl transition-all">
                  📱
                </div>
                <h2 className="text-2xl font-black text-white group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                  Mobilné Hry (Dole / Bottom)
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                  Zadarmo premium hry a modifikácie pre Android (APK) a iOS. Minecraft PE, GTA, Subway Surfers s cheat mod menu. Všetko bez reklám a s plnou rýchlosťou.
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-slate-800/80 pt-4">
                <span className="text-[10px] text-slate-500 font-mono">ODOMKNUTÉ PREMIUM & MOD MENU</span>
                <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold">
                  VSTÚPIŤ DO PORTÁLU →
                </span>
              </div>
            </div>

          </div>

          <p className="text-[10px] text-slate-600 font-mono pt-4 uppercase">
            TobiPack Mirror system © 2026. Vyrobené pre najlepší herný zážitok.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div id="tobipack-root" className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col font-sans selection:bg-[#a4f21d] selection:text-black">
      
      {/* Top Banner Ticker */}
      <div className="bg-[#10121a] border-b border-[#1f2330] py-2 px-4 text-xs font-mono flex flex-wrap justify-between items-center text-slate-400">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>TobiPack Mirror Online</span>
          <span className="text-slate-600">|</span>
          <span>Indexed: <span className="text-[#a4f21d] font-bold">4,219 Games</span></span>
          <span className="text-slate-600">|</span>
          <span>Bypassing DRM: <span className="text-[#a4f21d]">100% SUCCESS</span></span>
        </div>
        <div className="flex gap-4">
          <span>Active Users: <span className="text-white">4,812</span></span>
          <span className="text-slate-600">|</span>
          <span>Last Upload: <span className="text-[#a4f21d]">Just Now</span></span>
        </div>
      </div>

      {/* Main Header navigation */}
      <header className="bg-[#0e1017] border-b border-[#1a1e2b] sticky top-0 z-40 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Logo & Platform Selector */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => { setSelectedGame(null); setActiveTab('games'); }}>
              <div className={`p-2 rounded font-black tracking-tighter text-xl flex items-center justify-center shadow-lg transition-colors ${
                platform === 'mobile' ? 'bg-cyan-400 text-black shadow-cyan-950/20' : 'bg-[#a4f21d] text-black shadow-lime-900/20'
              }`}>
                <Gamepad2 className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-2xl font-bold font-mono tracking-tight text-white flex items-center gap-1">
                  Tobi<span className={platform === 'mobile' ? 'text-cyan-400 font-black' : 'text-[#a4f21d] neon-text-glow font-black'}>Pack</span>
                </span>
                <p className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">
                  {platform === 'mobile' ? 'Premium Mobile Game Mirror' : 'Pre-Installed PC Games Only'}
                </p>
              </div>
            </div>

            {/* Live Platform Switch Toggle */}
            <div className="flex items-center gap-1 bg-[#121622] p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setPlatform('pc')}
                className={`px-3 py-1.5 text-xs font-bold rounded-md font-mono flex items-center gap-1 transition-all ${
                  platform === 'pc' ? 'bg-[#a4f21d] text-black shadow font-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                🖥️ PC Hry
              </button>
              <button
                onClick={() => setPlatform('mobile')}
                className={`px-3 py-1.5 text-xs font-bold rounded-md font-mono flex items-center gap-1 transition-all ${
                  platform === 'mobile' ? 'bg-cyan-500 text-black shadow font-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                📱 Mobilné
              </button>
              <button
                onClick={() => setPlatform('none')}
                className="p-1 px-2 text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1"
                title="Zmeniť platformu"
              >
                🔄 Výber
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-1 md:gap-3 bg-[#090a0f] p-1 rounded-lg border border-[#1d2230]">
            <button
              onClick={() => { setActiveTab('games'); setSelectedGame(null); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'games' && !selectedGame
                  ? 'bg-[#181a24] text-[#a4f21d] border-b border-[#a4f21d]'
                  : 'text-slate-400 hover:text-white hover:bg-[#11131c]'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Browse Games</span>
            </button>
            <button
              onClick={() => { setActiveTab('requests'); setSelectedGame(null); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'requests'
                  ? 'bg-[#181a24] text-[#a4f21d] border-b border-[#a4f21d]'
                  : 'text-slate-400 hover:text-white hover:bg-[#11131c]'
              }`}
            >
              <GitPullRequest className="w-4 h-4" />
              <span>Request Game</span>
              <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">VOTE</span>
            </button>
            <button
              onClick={() => { setActiveTab('faq'); setSelectedGame(null); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'faq'
                  ? 'bg-[#181a24] text-[#a4f21d] border-b border-[#a4f21d]'
                  : 'text-slate-400 hover:text-white hover:bg-[#11131c]'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>FAQ / Guides</span>
            </button>
          </nav>

          {/* Discord/Telegram Community indicators */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#discord" className="px-3 py-1.5 rounded bg-[#5865F2]/10 text-[#5865F2] hover:bg-[#5865F2]/20 border border-[#5865F2]/30 text-xs font-semibold font-mono rounded flex items-center gap-1.5 transition-all">
              <span>Discord Chat</span>
            </a>
            <a href="#telegram" className="px-3 py-1.5 rounded bg-[#229ED9]/10 text-[#229ED9] hover:bg-[#229ED9]/20 border border-[#229ED9]/30 text-xs font-semibold font-mono rounded flex items-center gap-1.5 transition-all">
              <span>Telegram Feed</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 md:px-8 py-6 w-full">
        <AnimatePresence mode="wait">
          
          {/* GAME DETAILS VIEW OVERLAY (IF SELECTED) */}
          {selectedGame ? (
            <motion.div
              key="game-details"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-6"
            >
              {/* Back Navigation Bar */}
              <div className="flex items-center justify-between border-b border-[#1f2332] pb-4">
                <button
                  onClick={() => setSelectedGame(null)}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#a4f21d] font-mono transition-all group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span>Back to Game Vault</span>
                </button>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                  <span>Category:</span>
                  <span className="bg-[#181c2b] text-slate-300 px-2 py-1 rounded font-bold uppercase">{selectedGame.genres[0]}</span>
                </div>
              </div>

              {/* Game Hero Header Banner */}
              <div className="relative rounded-xl overflow-hidden border border-[#222736] bg-gradient-to-br from-[#121626] to-[#07090e] h-48 md:h-64 group">
                <div className="absolute inset-0">
                  <div className={`absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,${
                    platform === 'mobile' ? 'rgba(34,211,238,0.06)' : 'rgba(164,242,29,0.06)'
                  },transparent_60%)]`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent" />
                </div>

                {/* Hero Content Overlay */}
                <div className="absolute bottom-0 left-0 p-6 md:p-8 flex flex-col md:flex-row items-end gap-6 w-full">
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap gap-2">
                      {selectedGame.genres.map(genre => (
                        <span key={genre} className="bg-black/60 text-[#a4f21d] px-2 py-0.5 rounded text-xs font-mono font-bold uppercase border border-lime-500/20">
                          {genre}
                        </span>
                      ))}
                      {selectedGame.id.startsWith('preset-') && (
                        <span className="bg-emerald-950/80 text-emerald-300 px-2.5 py-0.5 rounded text-xs font-mono font-bold border border-emerald-500/30 flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3" />
                          <span>DIRECT MIRROR</span>
                        </span>
                      )}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">{selectedGame.name}</h1>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-slate-400">
                      <div>
                        <p className="text-slate-600">DEVELOPER</p>
                        <p className="text-slate-200 font-bold">{selectedGame.developer}</p>
                      </div>
                      <div>
                        <p className="text-slate-600">RELEASE DATE</p>
                        <p className="text-slate-200 font-bold">{selectedGame.releaseDate}</p>
                      </div>
                      <div>
                        <p className="text-slate-600">VERSION</p>
                        <p className="text-[#a4f21d] font-bold">{selectedGame.version}</p>
                      </div>
                      <div>
                        <p className="text-slate-600">FILE SIZE</p>
                        <p className="text-white font-bold">{selectedGame.size}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Game Metadata & Split Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Left Columns - Description, Screenshots, System Requirements */}
                <div className="lg:col-span-2 space-y-8">
                  
                  {/* Game Overview Card */}
                  <div className="bg-[#0e1017] p-6 rounded-xl border border-[#1c202d] space-y-4">
                    <h2 className="text-xl font-bold border-l-4 border-[#a4f21d] pl-3">Overview</h2>
                    <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
                      {selectedGame.description}
                    </p>
                    <div className="bg-[#131621] p-3.5 rounded-lg border border-[#1f2438] flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-[#a4f21d] flex-shrink-0 mt-0.5" />
                      <div className="text-xs text-slate-400 space-y-1">
                        <span className="font-bold text-slate-200 block">TobiPack Safety Seal Verified</span>
                        Pre-installed, cracked, tested on Windows 10/11. No setup required. Just extract the archive and run the executable as administrator to play.
                      </div>
                    </div>
                  </div>



                  {/* System Requirements Comparison Side-by-Side */}
                  <div className="bg-[#0e1017] p-6 rounded-xl border border-[#1c202d] space-y-4">
                    <div className="flex items-center gap-2 border-l-4 border-[#a4f21d] pl-3">
                      <Cpu className="w-5 h-5 text-[#a4f21d]" />
                      <h2 className="text-xl font-bold">System Requirements</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
                      {/* Minimum Requirements */}
                      <div className="bg-[#12141c] p-4 rounded-lg border border-slate-800 space-y-3">
                        <span className="text-slate-500 font-bold tracking-widest text-[10px] uppercase block">MINIMUM REQUIREMENTS</span>
                        <div className="space-y-2">
                          <div className="border-b border-[#1b1f2e] pb-1.5">
                            <span className="text-slate-500 block text-[10px]">OS</span>
                            <span className="text-slate-200">{selectedGame.requirements.minimum.os}</span>
                          </div>
                          <div className="border-b border-[#1b1f2e] pb-1.5">
                            <span className="text-slate-500 block text-[10px]">PROCESSOR</span>
                            <span className="text-slate-200">{selectedGame.requirements.minimum.processor}</span>
                          </div>
                          <div className="border-b border-[#1b1f2e] pb-1.5">
                            <span className="text-slate-500 block text-[10px]">MEMORY</span>
                            <span className="text-slate-200">{selectedGame.requirements.minimum.memory}</span>
                          </div>
                          <div className="border-b border-[#1b1f2e] pb-1.5">
                            <span className="text-slate-500 block text-[10px]">GRAPHICS</span>
                            <span className="text-slate-200">{selectedGame.requirements.minimum.graphics}</span>
                          </div>
                          <div>
                            <span className="text-slate-500 block text-[10px] flex items-center gap-1">
                              <HardDrive className="w-3 h-3" /> STORAGE
                            </span>
                            <span className="text-[#a4f21d] font-bold">{selectedGame.requirements.minimum.storage}</span>
                          </div>
                        </div>
                      </div>

                      {/* Recommended Requirements */}
                      <div className="bg-[#12141c] p-4 rounded-lg border border-lime-950/40 space-y-3">
                        <span className="text-[#a4f21d] font-bold tracking-widest text-[10px] uppercase block">RECOMMENDED REQUIREMENTS</span>
                        <div className="space-y-2">
                          <div className="border-b border-[#1b1f2e] pb-1.5">
                            <span className="text-slate-500 block text-[10px]">OS</span>
                            <span className="text-slate-200">{selectedGame.requirements.recommended.os}</span>
                          </div>
                          <div className="border-b border-[#1b1f2e] pb-1.5">
                            <span className="text-slate-500 block text-[10px]">PROCESSOR</span>
                            <span className="text-slate-200">{selectedGame.requirements.recommended.processor}</span>
                          </div>
                          <div className="border-b border-[#1b1f2e] pb-1.5">
                            <span className="text-slate-500 block text-[10px]">MEMORY</span>
                            <span className="text-slate-200">{selectedGame.requirements.recommended.memory}</span>
                          </div>
                          <div className="border-b border-[#1b1f2e] pb-1.5">
                            <span className="text-slate-500 block text-[10px]">GRAPHICS</span>
                            <span className="text-slate-200">{selectedGame.requirements.recommended.graphics}</span>
                          </div>
                          <div>
                            <span className="text-slate-500 block text-[10px] flex items-center gap-1">
                              <HardDrive className="w-3 h-3" /> STORAGE
                            </span>
                            <span className="text-[#a4f21d] font-bold">{selectedGame.requirements.recommended.storage}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Right Column - Direct Download links & Guides */}
                <div className="space-y-6">
                  
                  {/* DIRECT DOWNLOAD CONTAINER */}
                  <div className="bg-[#0e1017] border-2 border-[#a4f21d] rounded-xl p-6 space-y-6 shadow-xl shadow-lime-950/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#a4f21d] text-black px-2.5 py-1 text-[10px] font-mono font-bold tracking-widest uppercase rounded-bl">
                      Pre-Cracked
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Download className="w-5 h-5 text-[#a4f21d]" />
                        <span>Download Mirrors</span>
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">Size: {selectedGame.size} | No Extraction Password</p>
                    </div>

                    {/* Direct mirror download buttons */}
                    <div className="space-y-2.5">
                      {downloadingGameId === selectedGame.id ? (
                        <div className="bg-[#131620] border border-[#a4f21d]/30 rounded-lg p-5 text-center space-y-4">
                          <div className="flex items-center justify-between text-xs font-mono">
                            <span className="text-slate-400">Pripravujem TobiPack inštalačný archív...</span>
                            <span className="text-[#a4f21d] font-bold">{downloadProgress}%</span>
                          </div>
                          
                          <div className="w-full h-2.5 bg-[#1b1f2e] rounded-full overflow-hidden relative border border-[#23283a]">
                            <div 
                              className="h-full bg-gradient-to-r from-[#a4f21d] to-[#bbfd53] rounded-full transition-all duration-300"
                              style={{ width: `${downloadProgress}%` }}
                            />
                          </div>

                          <div className="flex items-center gap-2 justify-center text-[11px] text-slate-500 font-mono">
                            <Loader2 className="w-3.5 h-3.5 animate-spin text-[#a4f21d]" />
                            <span>Balenie exe, tobisnavod.txt a vipnut.bat...</span>
                          </div>
                        </div>
                      ) : (
                        selectedGame.downloadLinks.map((link, idx) => {
                          return (
                            <button
                              key={idx}
                              onClick={() => handleDownloadGame(selectedGame)}
                              className="w-full text-left flex items-center justify-between p-3.5 rounded bg-[#131620] border border-[#202535] hover:border-[#a4f21d] hover:bg-[#181d2c] transition-all group cursor-pointer focus:outline-none"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-[#1e2332] group-hover:bg-[#a4f21d]/10 flex items-center justify-center text-[#a4f21d] transition-all">
                                  <Download className="w-4 h-4" />
                                </div>
                                <div>
                                  <span className="text-sm font-semibold text-slate-100 group-hover:text-white transition-colors block">
                                    {link.name.replace('SteamRIP', 'TobiPack')}
                                  </span>
                                  <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> TobiPack Direct Mirror
                                  </span>
                                </div>
                              </div>
                              <div className="text-right">
                                <span className="text-xs font-mono text-slate-400 block">{link.size || selectedGame.size}</span>
                                <span className="text-[10px] text-[#a4f21d]/75 font-mono group-hover:text-[#a4f21d] transition-colors flex items-center justify-end gap-0.5">
                                  {platform === 'mobile' ? 'Stiahnuť APK' : 'Stiahnuť ZIP'} <Download className="w-2.5 h-2.5" />
                                </span>
                              </div>
                            </button>
                          );
                        })
                      )}
                    </div>

                    {/* Security Alert Warning */}
                    <div className="bg-[#1a1412] p-3 rounded-lg border border-amber-950/60 text-[11px] text-slate-300 space-y-2">
                      <div className="flex items-center gap-2 text-amber-500 font-bold font-mono">
                        <AlertTriangle className="w-4 h-4" />
                        <span>IMPORTANT - ANTIVIRUS BLOCKING</span>
                      </div>
                      <p className="leading-relaxed">
                        To protect the game's crack file from deletion, temporarily turn off Windows Defender or create a folder exclusion before extracting. This is 100% safe.
                      </p>
                    </div>
                  </div>

                  {/* HOW TO INSTALL GUIDE */}
                  <div className="bg-[#0e1017] p-5 rounded-xl border border-[#1c202d] space-y-4">
                    <h3 className="text-sm font-bold font-mono text-[#a4f21d] uppercase tracking-wider">Installation Instructions</h3>
                    <ol className="text-xs text-slate-400 space-y-3 list-decimal pl-4 leading-relaxed font-mono">
                      <li>Download the full game archive using any of the mirrors above.</li>
                      <li>Turn off your antivirus software completely (to avoid false-positive crack deletion).</li>
                      <li>Extract the downloaded zip/rar file using <a href="https://www.rarlab.com/" target="_blank" className="text-slate-300 underline">WinRAR</a> or 7-Zip.</li>
                      <li>Navigate into the extracted folder and search for the main game application launch file (<span className="text-slate-200 font-bold">.exe</span>).</li>
                      <li>Right-click the executable file and select <span className="text-[#a4f21d] font-bold">"Run as Administrator"</span>.</li>
                    </ol>
                  </div>

                  {/* INTERACTIVE COMMENTS & DISCUSSIONS */}
                  <div className="bg-[#0e1017] p-5 rounded-xl border border-[#1c202d] space-y-4">
                    <div className="flex items-center justify-between border-b border-[#1b1f2e] pb-3">
                      <h3 className="text-md font-bold flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-[#a4f21d]" />
                        <span>Comments ({comments.length})</span>
                      </h3>
                      <span className="text-[10px] text-slate-500 font-mono uppercase">User Discussion</span>
                    </div>

                    {/* Post Comment Form */}
                    <form onSubmit={handlePostComment} className="space-y-2.5">
                      <input
                        type="text"
                        placeholder="Your username"
                        required
                        value={commentUser}
                        onChange={(e) => setCommentUser(e.target.value)}
                        className="w-full bg-[#11131c] border border-slate-800 focus:border-[#a4f21d] rounded px-3 py-1.5 text-xs text-white focus:outline-none font-mono"
                      />
                      <textarea
                        placeholder="Write comment... (e.g., crack status, requests, help)"
                        rows={3}
                        required
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        className="w-full bg-[#11131c] border border-slate-800 focus:border-[#a4f21d] rounded px-3 py-1.5 text-xs text-white focus:outline-none font-mono"
                      ></textarea>
                      <button
                        type="submit"
                        disabled={submittingComment}
                        className="w-full bg-[#a4f21d] text-black hover:bg-[#b4f738] rounded py-1.5 text-xs font-bold font-mono transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {submittingComment ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                        <span>Submit Comment</span>
                      </button>
                    </form>

                    {/* Comments Feed list */}
                    <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1">
                      {comments.length === 0 ? (
                        <p className="text-[11px] text-slate-500 text-center py-4 italic">No comments yet. Be the first to verify this release!</p>
                      ) : (
                        comments.map((cmt) => (
                          <div key={cmt.id} className="p-3 rounded bg-[#11131c] border border-[#1b1f2e] space-y-1.5">
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="font-bold text-[#a4f21d] font-mono">{cmt.username}</span>
                              <span className="text-slate-500 text-[10px] font-mono">{cmt.timestamp}</span>
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed font-mono">{cmt.text}</p>
                            <div className="flex justify-end">
                              <button
                                onClick={() => handleLikeComment(cmt.id)}
                                className="flex items-center gap-1 text-[10px] text-slate-500 hover:text-[#a4f21d] font-mono transition-colors"
                              >
                                <ThumbsUp className="w-3 h-3" />
                                <span>{cmt.likes}</span>
                              </button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                </div>

              </div>

            </motion.div>
          ) : activeTab === 'faq' ? (
            
            /* FAQ AND GUIDES VIEW */
            <motion.div
              key="faq-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6 max-w-4xl mx-auto"
            >
              <div className="text-center space-y-2 py-6">
                <h1 className="text-3xl font-extrabold tracking-tight text-white flex items-center justify-center gap-2">
                  <HelpCircle className="w-8 h-8 text-[#a4f21d]" />
                  <span>Frequently Asked Questions</span>
                </h1>
                <p className="text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
                  Stuck? Read these detailed guides on extracting, running games, bypassing false alarms, and troubleshooting missing dependencies.
                </p>
              </div>

              {/* FAQ Categories Selection */}
              <div className="flex flex-wrap items-center justify-center gap-2 border-b border-[#1b1f2e] pb-4">
                {(['all', 'general', 'safety', 'downloads', 'errors'] as const).map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedFaqCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold font-mono transition-all ${
                      selectedFaqCategory === cat
                        ? 'bg-[#a4f21d] text-black'
                        : 'bg-[#0f1118] text-slate-400 hover:text-white border border-[#1b212f]'
                    }`}
                  >
                    {cat.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Accordion List */}
              <div className="space-y-3.5">
                {filteredFaqs.map((faq, idx) => {
                  const isOpen = openFaqIndices.includes(idx);
                  return (
                    <div
                      key={idx}
                      className="bg-[#0e1017] border border-[#1b202e] rounded-xl overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-100 hover:text-[#a4f21d] transition-all focus:outline-none"
                      >
                        <span className="text-md md:text-lg">{faq.question}</span>
                        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#a4f21d]' : ''}`} />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            className="overflow-hidden border-t border-[#1b1f2e] bg-[#0c0d12]/50"
                          >
                            <div className="p-5 text-sm text-slate-300 whitespace-pre-line leading-relaxed font-mono">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* redistributables helper card */}
              <div className="bg-[#12141d] border border-[#1b2130] rounded-xl p-6 flex flex-col md:flex-row items-center gap-5 mt-8">
                <div className="bg-[#a4f21d]/10 text-[#a4f21d] p-3.5 rounded-xl border border-[#a4f21d]/30">
                  <Cpu className="w-8 h-8" />
                </div>
                <div className="space-y-1.5 flex-1 text-center md:text-left">
                  <h4 className="text-md font-bold text-slate-200">Missing redist files?</h4>
                  <p className="text-xs text-slate-400 max-w-xl leading-relaxed">
                    If games throw d3dx9.dll, xinput1_3.dll, or msvcp140.dll errors, install the common runtime redistributables. We recommend installing the full Microsoft Visual C++ redist pack.
                  </p>
                </div>
                <a
                  href="https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170"
                  target="_blank"
                  className="bg-[#1a1e2c] border border-[#2b3147] hover:bg-[#202537] hover:text-[#a4f21d] px-4 py-2 rounded-lg text-xs font-bold font-mono transition-all cursor-pointer text-center"
                >
                  Download VC Redist Pack
                </a>
              </div>
            </motion.div>
          ) : activeTab === 'requests' ? (
            
            /* GAME REQUESTS VIEW */
            <motion.div
              key="requests-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6 max-w-4xl mx-auto"
            >
              <div className="text-center space-y-2 py-6">
                <h1 className="text-3xl font-extrabold tracking-tight text-white flex items-center justify-center gap-2">
                  <GitPullRequest className="w-8 h-8 text-[#a4f21d]" />
                  <span>Request a Game Vault</span>
                </h1>
                <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                  Missing a cracked masterpiece? Submit the name below! Recruit user votes. Our uploaders immediately crack, extract, test, and upload once requirements are hit.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Submit request form */}
                <div className="bg-[#0e1017] p-5 rounded-xl border border-[#1b202e] h-fit space-y-4">
                  <h3 className="text-md font-bold text-slate-200 border-b border-[#1b1f2e] pb-2.5">Submit Request</h3>
                  <form onSubmit={handleRequestGame} className="space-y-3 font-mono text-xs">
                    <div className="space-y-1">
                      <label className="text-slate-500">GAME NAME</label>
                      <input
                        type="text"
                        placeholder="e.g. Elden Ring, Spiderman 2"
                        required
                        value={newRequestName}
                        onChange={(e) => setNewRequestName(e.target.value)}
                        className="w-full bg-[#11131c] border border-slate-800 focus:border-[#a4f21d] rounded px-3.5 py-2.5 text-white focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-slate-500">YOUR USERNAME</label>
                      <input
                        type="text"
                        placeholder="e.g. Tracker_Pro"
                        required
                        value={newRequestUser}
                        onChange={(e) => setNewRequestUser(e.target.value)}
                        className="w-full bg-[#11131c] border border-slate-800 focus:border-[#a4f21d] rounded px-3.5 py-2.5 text-white focus:outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submittingRequest}
                      className="w-full bg-[#a4f21d] text-black hover:bg-[#b4f738] rounded py-2.5 font-bold font-mono transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {submittingRequest ? <Loader2 className="w-4 h-4 animate-spin" /> : <GitPullRequest className="w-4 h-4" />}
                      <span>Add Request</span>
                    </button>
                  </form>
                </div>

                {/* Requests table / voting feed */}
                <div className="md:col-span-2 bg-[#0e1017] p-5 rounded-xl border border-[#1b202e] space-y-4">
                  <h3 className="text-md font-bold text-slate-200 border-b border-[#1b1f2e] pb-2.5 flex items-center justify-between">
                    <span>Vote Leaders</span>
                    <span className="text-xs font-mono text-slate-500 font-normal">Ranked by vote count</span>
                  </h3>

                  <div className="space-y-3.5 max-h-[500px] overflow-y-auto pr-1">
                    {requests.length === 0 ? (
                      <p className="text-xs text-slate-500 text-center py-10 italic">No requests active. Submit yours now!</p>
                    ) : (
                      requests.map((req, idx) => {
                        let statusColor = 'bg-slate-700 text-slate-300';
                        if (req.status === 'Approved') statusColor = 'bg-indigo-900/60 text-indigo-300 border border-indigo-500/20';
                        if (req.status === 'Uploading') statusColor = 'bg-amber-950/60 text-amber-400 border border-amber-500/20';
                        if (req.status === 'Added') statusColor = 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/20';

                        return (
                          <div key={req.id} className="p-4 rounded-lg bg-[#11131c] border border-[#1a1e2b] flex items-center justify-between gap-4">
                            <div className="space-y-1 flex-1">
                              <div className="flex items-center gap-2.5">
                                <span className="text-sm font-bold text-slate-100">{req.gameName}</span>
                                <span className={`text-[9px] font-bold font-mono px-2 py-0.5 rounded-full uppercase ${statusColor}`}>
                                  {req.status}
                                </span>
                              </div>
                              <p className="text-[10px] text-slate-500 font-mono">
                                Requested by <span className="text-slate-400">{req.requestedBy}</span> on {req.requestDate}
                              </p>
                              {/* Request target progress bar */}
                              <div className="w-full bg-slate-800 h-1 rounded overflow-hidden mt-1.5">
                                <div
                                  className={`h-full ${req.status === 'Added' ? 'bg-emerald-400' : 'bg-[#a4f21d]'}`}
                                  style={{ width: `${Math.min((req.votes / 1000) * 100, 100)}%` }}
                                ></div>
                              </div>
                            </div>

                            {/* Vote button */}
                            <button
                              onClick={() => handleVoteRequest(req.id)}
                              disabled={req.status === 'Added'}
                              className="px-3.5 py-2.5 bg-[#181d2a] border border-[#2b3247] hover:border-[#a4f21d] hover:text-[#a4f21d] rounded-lg text-slate-300 flex items-center gap-2 font-mono text-xs transition-all cursor-pointer disabled:opacity-40 disabled:hover:border-[#2b3247] disabled:hover:text-slate-300"
                            >
                              <ThumbsUp className="w-3.5 h-3.5" />
                              <span className="font-bold">{req.votes}</span>
                            </button>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          ) : (
            
            /* GENERAL GAMES VAULT LIST & HOME */
            <motion.div
              key="games-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              
              {/* Featured game block */}
              {!searchQuery && selectedGenres.length === 0 && (
                <div
                  onClick={() => setSelectedGame(featuredGame)}
                  className="relative rounded-2xl overflow-hidden border border-[#23293c] bg-gradient-to-br from-[#121626] to-[#0a0d14] cursor-pointer group shadow-2xl transition-all hover:shadow-[#a4f21d]/5"
                >
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(164,242,29,0.06),transparent_60%)]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent"></div>
                  </div>

                  <div className="relative p-6 md:p-12 space-y-4 max-w-2xl h-64 md:h-[320px] flex flex-col justify-end">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#a4f21d] text-black text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded uppercase">
                        Feature Pack
                      </span>
                      <span className="bg-black/60 text-slate-300 text-[10px] font-mono font-bold px-2.5 py-1 rounded border border-slate-700/50">
                        DLC INCLUDED
                      </span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white group-hover:text-[#a4f21d] transition-colors">{featuredGame.name}</h1>
                    <p className="hidden md:block text-slate-300 text-sm leading-relaxed line-clamp-2">
                      {featuredGame.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                      <span>Developer: <span className="text-slate-200 font-bold">{featuredGame.developer}</span></span>
                      <span className="text-slate-700">•</span>
                      <span>File Size: <span className="text-[#a4f21d] font-bold">{featuredGame.size}</span></span>
                    </div>
                  </div>
                </div>
              )}

              {/* Browse Vault Section with filter bar & AI auto porter trigger */}
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  {platform === 'mobile' ? (
                    <div className="space-y-3.5 w-full">
                      <div className="space-y-1">
                        <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                          <Smartphone className="text-cyan-400 w-6 h-6 animate-pulse" />
                          <span>TobiPack Mobile Store</span>
                        </h2>
                        <p className="text-xs text-slate-500 font-mono">
                          Stiahnite si prémiové, preverené mobilné hry a aplikácie úplne zadarmo!
                        </p>
                        <div className="flex items-center gap-2 pt-1">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                          </span>
                          <span className="text-[10px] text-cyan-400 font-mono uppercase tracking-wider font-semibold">
                            Softonic Live Crawler: Prepojené s databázou Softonic. Zadaj akýkoľvek názov do vyhľadávania a systém ho stiahne!
                          </span>
                        </div>
                      </div>

                      {/* Games / Apps primary category tabs */}
                      <div className="flex items-center gap-1.5 bg-[#090b10] p-1 rounded-xl border border-[#1b2132] max-w-sm">
                        <button
                          type="button"
                          onClick={() => {
                            setMobileCategory('all');
                            setSelectedGenres([]); // Reset current active filter tags
                          }}
                          className={`flex-1 py-2 px-3 rounded-lg font-bold font-mono text-xs flex items-center justify-center gap-1 transition-all cursor-pointer ${
                            mobileCategory === 'all'
                              ? 'bg-cyan-500 text-black font-extrabold shadow shadow-cyan-500/20'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          🌐 Všetko
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setMobileCategory('games');
                            setSelectedGenres([]); // Reset current active filter tags
                          }}
                          className={`flex-1 py-2 px-3 rounded-lg font-bold font-mono text-xs flex items-center justify-center gap-1 transition-all cursor-pointer ${
                            mobileCategory === 'games'
                              ? 'bg-cyan-500 text-black font-extrabold shadow shadow-cyan-500/20'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          🎮 Hry
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setMobileCategory('apps');
                            setSelectedGenres([]); // Reset current active filter tags
                          }}
                          className={`flex-1 py-2 px-3 rounded-lg font-bold font-mono text-xs flex items-center justify-center gap-1 transition-all cursor-pointer ${
                            mobileCategory === 'apps'
                              ? 'bg-cyan-500 text-black font-extrabold shadow shadow-cyan-500/20'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          📱 Aplikácie
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                        <Gamepad2 className="text-[#a4f21d] w-6 h-6" />
                        <span>PC Pre-Installed Games</span>
                      </h2>
                      <p className="text-xs text-slate-500 font-mono">
                        All <span className="text-[#a4f21d] font-bold">4,219+</span> TobiPack games indexed. Type any game to load instant download links!
                      </p>
                      <div className="flex items-center gap-2 pt-1">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[10px] text-emerald-400 font-mono uppercase tracking-wider font-semibold">
                          TobiPack Live Sync: Automaticky prepojené so servermi TobiPack. Každá nová hra je ihneď dostupná!
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Search and Download Launcher bar */}
                  <div className="flex flex-col sm:flex-row items-stretch gap-2 w-full md:max-w-md">
                    <div className="relative flex-1">
                      {isSearchingApi ? (
                        <Loader2 className={`absolute left-3.5 top-3 w-4 h-4 animate-spin ${platform === 'mobile' ? 'text-cyan-400' : 'text-[#a4f21d]'}`} />
                      ) : (
                        <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                      )}
                      <input
                        type="text"
                        placeholder={platform === 'mobile' ? "Hľadať hry a aplikácie zo Softonic..." : "Vyhľadať hry v databáze..."}
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                          setShowSuggestions(true);
                        }}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setTimeout(() => setShowSuggestions(false), 250)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            setShowSuggestions(false);
                          }
                        }}
                        className={`w-full bg-[#0e1017] border border-[#1b2132] rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none font-mono transition-colors ${
                          platform === 'mobile' ? 'focus:border-cyan-400' : 'focus:border-[#a4f21d]'
                        }`}
                      />

                      {/* Autocomplete / Suggestions Dropdown */}
                      {showSuggestions && searchQuery.trim().length > 0 && (
                        <div className="absolute left-0 right-0 mt-1 bg-[#0b0d13] border border-[#1b2132] rounded-lg shadow-2xl z-50 overflow-hidden divide-y divide-[#171c2a] max-h-80 overflow-y-auto">
                          {suggestions.map(s => {
                            const isPresetItem = 'isPreset' in s && s.isPreset;
                            return (
                              <button
                                key={s.id}
                                type="button"
                                onClick={() => {
                                  if (isPresetItem) {
                                    if ('downloadLinks' in s) {
                                      // Fully configured game from our TobiPack Search API
                                      setGames(prev => {
                                        if (prev.some(g => g.id === s.id)) {
                                          return prev;
                                        }
                                        return [s as Game, ...prev];
                                      });
                                      setSelectedGame(s as Game);
                                    } else {
                                      // Static database preset name fallback
                                      handleInstantGameLoad(s.name);
                                    }
                                  } else {
                                    setSelectedGame(s as Game);
                                  }
                                  setSearchQuery('');
                                  setShowSuggestions(false);
                                }}
                                className={`w-full px-4 py-2.5 text-left text-xs font-mono text-slate-200 hover:bg-[#121622] flex items-center justify-between transition-colors ${
                                  platform === 'mobile' ? 'hover:text-cyan-400' : 'hover:text-[#a4f21d]'
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  <div className="w-6 h-8 rounded bg-[#161a26] border border-[#232a3f] flex items-center justify-center flex-shrink-0">
                                    {isPresetItem ? (
                                      <Gamepad2 className={`w-3.5 h-3.5 ${platform === 'mobile' ? 'text-cyan-400' : 'text-[#a4f21d]'}`} />
                                    ) : (
                                      <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                                    )}
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="font-bold truncate max-w-[180px]">{s.name}</span>
                                    {isPresetItem && (
                                      <span className="text-[9px] text-slate-400 flex items-center gap-0.5">
                                        <ShieldCheck className={`w-2.5 h-2.5 ${platform === 'mobile' ? 'text-cyan-400' : 'text-[#a4f21d]'}`} /> TobiPack Database Verified
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <span className={`text-[10px] px-2 py-0.5 rounded border ${
                                  isPresetItem 
                                    ? (platform === 'mobile' ? 'text-cyan-400 bg-[#0e1724] border-cyan-950' : 'text-[#a4f21d] bg-[#121a14] border-[#1f3b1e]') 
                                    : 'text-slate-400 bg-[#12141c] border-[#1c2235]'
                                  }`}>
                                  {s.size}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setShowSuggestions(false)}
                        className={`${
                          platform === 'mobile'
                            ? 'bg-cyan-400 hover:bg-cyan-300'
                            : 'bg-[#a4f21d] hover:bg-[#b4f738]'
                        } text-black px-5 py-2.5 rounded-lg text-xs font-bold font-mono transition-all flex items-center justify-center gap-1.5 cursor-pointer flex-shrink-0`}
                      >
                        <Search className="w-3.5 h-3.5" />
                        <span>Vyhľadať</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Genre Tag Selection row */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-mono">
                    {platform === 'mobile' ? (
                      mobileCategory === 'all' ? (
                        [
                          { label: 'Všetko', genre: null },
                          { label: 'Hry 🎮', genre: 'Hra' },
                          { label: 'Aplikácie 📱', genre: 'Aplikácia' },
                          { label: 'Populárne teraz 🔥', genre: 'Popular' },
                          { label: 'Prehliadať populárne ⭐', genre: 'Populárne' },
                          { label: 'Akčné / Sandbox ⚔️', genre: 'Action' },
                          { label: 'Sandbox / RPG 🌍', genre: 'Sandbox' },
                          { label: 'Kreslenie a Grafika 🎨', genre: 'Kreslenie' },
                          { label: 'Prehliadače 🌐', genre: 'Prehliadače' },
                          { label: 'Nástroje / Produktivita ⚙️', genre: 'Nástroje' },
                        ].map(subcat => {
                          const isActive = subcat.genre === null 
                            ? selectedGenres.length === 0 
                            : selectedGenres.includes(subcat.genre);
                          return (
                            <button
                              key={subcat.label}
                              type="button"
                              onClick={() => {
                                if (subcat.genre === null) {
                                  setSelectedGenres([]);
                                } else {
                                  setSelectedGenres([subcat.genre]);
                                }
                              }}
                              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex-shrink-0 flex items-center gap-1 cursor-pointer border ${
                                isActive
                                  ? 'bg-cyan-400 text-black font-extrabold border-cyan-400 shadow-sm shadow-cyan-400/20'
                                  : 'bg-[#0f1118] text-slate-400 hover:text-white border-[#171c2b]'
                              }`}
                            >
                              <span>{subcat.label}</span>
                            </button>
                          );
                        })
                      ) : mobileCategory === 'games' ? (
                        [
                          { label: 'Všetky hry', genre: null },
                          { label: 'Populárne teraz 🔥', genre: 'Popular' },
                          { label: 'Akčné / Arkády ⚔️', genre: 'Action' },
                          { label: 'Sandbox & RPG 🌍', genre: 'Sandbox' },
                          { label: 'Stratégie 🧠', genre: 'Strategy' },
                        ].map(subcat => {
                          const isActive = subcat.genre === null 
                            ? selectedGenres.length === 0 
                            : selectedGenres.includes(subcat.genre);
                          return (
                            <button
                              key={subcat.label}
                              type="button"
                              onClick={() => {
                                if (subcat.genre === null) {
                                  setSelectedGenres([]);
                                } else {
                                  setSelectedGenres([subcat.genre]); // Toggled for single selection filter
                                }
                              }}
                              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex-shrink-0 flex items-center gap-1 cursor-pointer border ${
                                isActive
                                  ? 'bg-cyan-400 text-black font-extrabold border-cyan-400 shadow-sm shadow-cyan-400/20'
                                  : 'bg-[#0f1118] text-slate-400 hover:text-white border-[#171c2b]'
                              }`}
                            >
                              <span>{subcat.label}</span>
                            </button>
                          );
                        })
                      ) : (
                        [
                          { label: 'Všetky aplikácie', genre: null },
                          { label: 'Prehliadať populárne ⭐', genre: 'Populárne' },
                          { label: 'Kreslenie a Grafika 🎨', genre: 'Kreslenie' },
                          { label: 'Prehliadače 🌐', genre: 'Prehliadače' },
                          { label: 'Nástroje / Produktivita ⚙️', genre: 'Nástroje' },
                        ].map(subcat => {
                          const isActive = subcat.genre === null 
                            ? selectedGenres.length === 0 
                            : selectedGenres.includes(subcat.genre);
                          return (
                            <button
                              key={subcat.label}
                              type="button"
                              onClick={() => {
                                if (subcat.genre === null) {
                                  setSelectedGenres([]);
                                } else {
                                  setSelectedGenres([subcat.genre]);
                                }
                              }}
                              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex-shrink-0 flex items-center gap-1 cursor-pointer border ${
                                isActive
                                  ? 'bg-cyan-400 text-black font-extrabold border-cyan-400 shadow-sm shadow-cyan-400/20'
                                  : 'bg-[#0f1118] text-slate-400 hover:text-white border-[#171c2b]'
                              }`}
                            >
                              <span>{subcat.label}</span>
                            </button>
                          );
                        })
                      )
                    ) : (
                      GENRES_LIST.map(genre => {
                        const isActive = genre === 'All Games' 
                          ? selectedGenres.length === 0 
                          : selectedGenres.includes(genre);
                        
                        return (
                          <button
                            key={genre}
                            type="button"
                            onClick={() => {
                              if (genre === 'All Games') {
                                setSelectedGenres([]);
                              } else {
                                setSelectedGenres(prev => 
                                  prev.includes(genre) 
                                    ? prev.filter(g => g !== genre) 
                                    : [...prev, genre]
                                );
                              }
                            }}
                            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex-shrink-0 flex items-center gap-1 cursor-pointer border ${
                              isActive
                                ? 'bg-[#a4f21d] text-black font-extrabold border-[#a4f21d]'
                                : 'bg-[#0f1118] text-slate-400 hover:text-white border-[#171c2b]'
                            }`}
                          >
                            <span>{genre}</span>
                            {isActive && genre !== 'All Games' && (
                              <span className="text-[10px] opacity-75 font-black">×</span>
                            )}
                          </button>
                        );
                      })
                    )}
                  </div>
                  <p className="text-[10px] text-slate-500 font-mono">
                    💡 <span className="text-slate-400">TobiPack Navigácia:</span> {platform === 'mobile' ? 'Prepínajte medzi kategóriami a podkategóriami pre rýchly prístup k aplikáciám a hrám!' : 'Vyber viacero kategórií naraz pre presnejšie filtrovanie hier!'}
                  </p>
                </div>

                {/* Sorting options bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0a0c12]/60 border border-[#1b2132] p-4 rounded-xl font-mono text-xs">
                  <div className="text-slate-400">
                    <span className="text-white font-bold">{totalGamesCount}</span> {totalGamesCount === 1 ? 'hra nájdená' : totalGamesCount < 5 ? 'hry nájdené' : 'hier nájdených'} 
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-slate-500">Zoradiť podľa:</span>
                    <div className="flex items-center bg-[#090b10] p-1 rounded-lg border border-[#1b2132] gap-1">
                      <button
                        type="button"
                        onClick={() => setSortBy('rating')}
                        className={`px-2.5 py-1 rounded-md transition-all text-xs flex items-center gap-1 cursor-pointer font-bold ${
                          sortBy === 'rating'
                            ? (platform === 'mobile' ? 'bg-cyan-400 text-black font-extrabold shadow-sm' : 'bg-[#a4f21d] text-black font-extrabold')
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        ⭐ Hviezdičiek
                      </button>
                      <button
                        type="button"
                        onClick={() => setSortBy('size')}
                        className={`px-2.5 py-1 rounded-md transition-all text-xs flex items-center gap-1 cursor-pointer font-bold ${
                          sortBy === 'size'
                            ? (platform === 'mobile' ? 'bg-cyan-400 text-black font-extrabold shadow-sm' : 'bg-[#a4f21d] text-black font-extrabold')
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        💾 Veľkosti
                      </button>
                      <button
                        type="button"
                        onClick={() => setSortBy('downloads')}
                        className={`px-2.5 py-1 rounded-md transition-all text-xs flex items-center gap-1 cursor-pointer font-bold ${
                          sortBy === 'downloads'
                            ? (platform === 'mobile' ? 'bg-cyan-400 text-black font-extrabold shadow-sm' : 'bg-[#a4f21d] text-black font-extrabold')
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        📥 Sťahovaní
                      </button>
                      <button
                        type="button"
                        onClick={() => setSortBy('name')}
                        className={`px-2.5 py-1 rounded-md transition-all text-xs flex items-center gap-1 cursor-pointer font-bold ${
                          sortBy === 'name'
                            ? (platform === 'mobile' ? 'bg-cyan-400 text-black font-extrabold shadow-sm' : 'bg-[#a4f21d] text-black font-extrabold')
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        🔤 Abecedy
                      </button>
                    </div>
                  </div>
                </div>

                {/* Games Grid layout */}
                {paginatedGames.length === 0 ? (
                  <div className="bg-[#0e1017] rounded-xl p-10 border border-[#1b202e] text-center space-y-4">
                    <AlertTriangle className="w-10 h-10 text-slate-600 mx-auto" />
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-bold text-slate-300">Hra nebola nájdená v lokálnom katalógu</h3>
                      <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                        Nenašli sme hru <span className="text-white font-bold font-mono">"{searchQuery}"</span> v našej databáze, ale môžete si pre ňu okamžite vygenerovať TobiPack zrkadlo na stiahnutie!
                      </p>
                    </div>
                    <button
                      onClick={() => handleInstantGameLoad(searchQuery)}
                      disabled={!searchQuery}
                      className="bg-[#a4f21d] text-black hover:bg-[#b4f738] px-5 py-2.5 rounded-lg text-xs font-bold font-mono transition-all flex items-center gap-2 mx-auto cursor-pointer disabled:opacity-50"
                    >
                      <Download className="w-4 h-4" />
                      <span>Generovať TobiPack Zrkadlo</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {paginatedGames.map(game => (
                        <div
                          key={game.id}
                          onClick={() => setSelectedGame(game)}
                          className={`bg-[#0c0e15] border border-[#1a1e2b] rounded-xl p-4 group cursor-pointer shadow-lg transition-all flex flex-col justify-between min-h-[175px] hover:bg-[#111420] ${
                            platform === 'mobile' 
                              ? 'hover:shadow-cyan-950/10 hover:border-cyan-400' 
                              : 'hover:shadow-lime-950/10 hover:border-[#a4f21d]'
                          }`}
                        >
                          <div className="space-y-3">
                            {/* Top row - genre label, rating tag */}
                            <div className="flex items-center justify-between text-[10px] font-mono leading-none">
                              <span className="text-slate-500 uppercase tracking-wider font-bold truncate max-w-[65%]">
                                {game.genres.slice(0, 2).join(' / ')}
                              </span>
                              <div className="flex items-center gap-2">
                                <span className="text-slate-400 font-bold bg-[#141824] px-1.5 py-0.5 rounded border border-[#20273c]">
                                  {game.size}
                                </span>
                                {game.rating && (
                                  <span className={`font-extrabold flex items-center gap-0.5 ${
                                    platform === 'mobile' ? 'text-cyan-400' : 'text-[#a4f21d]'
                                  }`}>
                                    ★ {game.rating}
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Center block - Name, Developer, Badge */}
                            <div className="space-y-1">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <h3 className="text-sm font-bold text-slate-100 leading-snug tracking-tight transition-colors line-clamp-1 group-hover:text-white">
                                  {game.name}
                                </h3>
                                {game.isAiGenerated && (
                                  <span className="bg-purple-900/60 text-purple-100 text-[8px] font-bold font-mono px-1.5 py-0.5 rounded border border-purple-500/20 flex items-center gap-0.5">
                                    <Sparkles className="w-2 h-2" />
                                    <span>AI</span>
                                  </span>
                                )}
                              </div>
                              <p className="text-[10px] text-slate-500 font-mono truncate leading-none">
                                {game.developer}
                              </p>
                            </div>

                            {/* Description block */}
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              {game.description}
                            </p>
                          </div>

                          {/* Footer row - version/downloads, action */}
                          <div className="pt-3.5 flex items-center justify-between text-[10px] text-slate-400 font-mono border-t border-[#1a2032] mt-1.5">
                            <span className="flex items-center gap-1">
                              <span>Verzia: {game.version.split(' ')[0]}</span>
                              {game.downloadsCount && (
                                <span className="text-[9px] text-slate-500">({(game.downloadsCount / 1000).toFixed(0)}k 📥)</span>
                              )}
                            </span>
                            <span className={`flex items-center gap-1 font-bold ${
                              platform === 'mobile' ? 'text-cyan-400' : 'text-[#a4f21d]'
                            }`}>
                              {platform === 'mobile' ? (mobileCategory === 'apps' ? 'Inštalovať' : 'Stiahnuť') : 'Stiahnuť'} <Download className="w-3 h-3" />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {visibleCount < totalGamesCount && (
                      <div className="flex justify-center pt-8">
                        <button
                          onClick={() => setVisibleCount(prev => prev + 40)}
                          className={`px-8 py-3.5 rounded-xl text-xs font-bold font-mono transition-all border cursor-pointer flex items-center gap-2 shadow-lg ${
                            platform === 'mobile'
                              ? 'bg-[#0f121d] border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-cyan-950/20'
                              : 'bg-[#0f121d] border-[#a4f21d]/20 text-[#a4f21d] hover:bg-[#a4f21d]/10 hover:border-[#a4f21d] hover:shadow-lime-950/20'
                          }`}
                        >
                          <Download className="w-4 h-4 animate-bounce" />
                          <span>Zobraziť ďalšie {platform === 'mobile' ? (mobileCategory === 'apps' ? 'aplikácie' : 'hry') : 'hry'} (+40)</span>
                          <span className="opacity-60 text-[10px]">
                            (Zobrazené {visibleCount} z {totalGamesCount})
                          </span>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Footer disclaimer and metadata layout */}
      <footer className="bg-[#0b0c11] border-t border-[#181c29] mt-16 py-10 px-4 text-center text-slate-500 font-mono text-xs">
        <div className="max-w-7xl mx-auto space-y-4">
          <p className="text-[#a4f21d] font-bold tracking-widest text-xs uppercase mb-1">
            TobiPack • PRE-INSTALLED GAMES FOR PC
          </p>
          <p className="max-w-2xl mx-auto text-slate-500 leading-relaxed text-[11px]">
            TobiPack is a catalog of pre-installed, pre-cracked, tested PC games. We bypass DRM validation checks to deliver instantly playable games. We strongly support game developers and publishers; if you enjoy a cracked game, buy it legally to support future developments.
          </p>
          <div className="text-[10px] text-slate-600 space-y-1.5">
            <p>© 2026 TobiPack. Simulated fully client-side and full-stack API environment with Google Gemini integration.</p>
            <p>Made with love in AI Studio Build.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
