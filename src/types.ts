export interface SystemRequirements {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}

export interface Requirements {
  minimum: SystemRequirements;
  recommended: SystemRequirements;
}

export interface DownloadLink {
  name: string;
  url: string;
  size?: string;
  status?: 'online' | 'offline' | 'slow';
}

export interface Game {
  id: string;
  name: string;
  description: string;
  releaseDate: string;
  developer: string;
  genres: string[];
  steamId?: string;
  coverUrl: string;
  size: string;
  version: string;
  requirements: Requirements;
  downloadLinks: DownloadLink[];
  screenshots?: string[];
  isAiGenerated?: boolean;
  isPopular?: boolean;
  rating?: number;
  downloadsCount?: number;
}

export interface GameRequest {
  id: string;
  gameName: string;
  requestedBy: string;
  requestDate: string;
  votes: number;
  status: 'Pending' | 'Approved' | 'Uploading' | 'Added';
}

export interface Comment {
  id: string;
  gameId: string;
  username: string;
  avatarUrl?: string;
  text: string;
  timestamp: string;
  likes: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'downloads' | 'errors' | 'safety';
}
