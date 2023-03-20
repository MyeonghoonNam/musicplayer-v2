import { db } from '@/models/db';

export const findTop3Musics = () => {
  const musics = db.data?.musics.sort((a, b) => b.vote - a.vote).slice(0, 3);

  return musics;
};
