const MUSIC_KEY = 'music';

const musicCache = {
  getTop3Musics: [MUSIC_KEY, 'top3'] as const,
  getPlayList: [MUSIC_KEY, 'playlist'] as const,
  getPlayMusic: (id: string) => [MUSIC_KEY, 'play', id] as const,
  getSearchPlayList: (query: string) => [MUSIC_KEY, 'search', query] as const,
};

export default musicCache;
