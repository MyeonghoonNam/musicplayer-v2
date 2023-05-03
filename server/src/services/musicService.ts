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
  const playlist = db.data?.playlist;

  if (playlist) {
    const newMusic = create<Music>(music);

    newMusic.nextId = playlist[0]?.id;
    newMusic.prevId = playlist[playlist.length - 1]?.id;

    playlist.push(newMusic);

    playlist[playlist.length - 1].nextId = newMusic.id;
    playlist[0].prevId = newMusic.id;
  }

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
