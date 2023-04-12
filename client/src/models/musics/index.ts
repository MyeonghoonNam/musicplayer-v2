const MUSIC_KEY = 'music';

const musicCache = {
  getTop3Musics: [MUSIC_KEY, 'top3'] as const,
  getPlayList: [MUSIC_KEY, 'playlist'] as const,
  getPlayMusic: [MUSIC_KEY, 'play'] as const,
};

export default musicCache;
