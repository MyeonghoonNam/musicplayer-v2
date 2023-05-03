export interface Music {
  id: string;
  artists: string[];
  cover: string;
  source: string;
  title: string;
  vote: number;
  hasPlaylist?: boolean;
  nextId?: string;
  prevId?: string;
}
