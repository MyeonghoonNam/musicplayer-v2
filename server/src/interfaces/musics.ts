export interface Music {
  id: string;
  title: string;
  artists: string[];
  cover: string;
  source: string;
  vote: number;
  hasPlaylist?: boolean;
  nextId?: string;
  prevId?: string;
}
