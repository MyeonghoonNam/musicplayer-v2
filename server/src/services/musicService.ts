import { db, create } from '../models/db';
import type { Music } from '../interfaces/musics';

export const findMusic = (id: string) => {
  return db.data?.musics.find((music) => music.id === id);
};

export const findPlayList = () => {
  return db.data?.playlist;
};

export const findPlayListMusic = (id: string) => {
  return db.data?.playlist.find((music) => music.id === id);
};

export const findTop3Musics = () => {
  const musics = db.data?.musics
    .map((music) =>
      findPlayListMusic(music.id) ? { ...music, hasPlaylist: true } : music,
    )
    .sort((a, b) => b.vote - a.vote)
    .slice(0, 3);

  return musics;
};

export const addPlayList = async (music: Music) => {
  db.data?.playlist.push(create<Music>(music));
  await db.write();

  return music;
};

export const deletePlayList = async (music: Music) => {
  const filterdPlaylist = db.data?.playlist.filter(({ id }) => id !== music.id);

  if (filterdPlaylist && db.data) {
    db.data.playlist = filterdPlaylist;
  }

  await db.write();
};
