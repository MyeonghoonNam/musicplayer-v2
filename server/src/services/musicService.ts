import { db, create } from '../models/db';
import type { Music } from '../interfaces/musics';

export const findTop3Musics = () => {
  const playlist = db.data?.playlist;
  const musics = db.data?.musics
    .map((music) =>
      playlist?.filter(({ id }) => id === music.id).length !== 0
        ? { ...music, hasPlaylist: true }
        : music,
    )
    .sort((a, b) => b.vote - a.vote)
    .slice(0, 3);

  return musics;
};

export const addPlayList = async (id: string) => {
  const music = db.data?.musics.find((m) => m.id === id);

  if (music) {
    db.data?.playlist.push(create<Music>(music));
    await db.write();
  }

  return music;
};
