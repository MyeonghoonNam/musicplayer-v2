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
  const music = db.data?.musics.filter((m) => m.id === id)[0];

  if (music) {
    db.data?.playlist.push(create<Music>(music));
    await db.write();
  }

  return music;
};
