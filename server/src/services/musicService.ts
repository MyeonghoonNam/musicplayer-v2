/* eslint-disable no-param-reassign */
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
      findPlayListMusic(music.id)
        ? { ...music, hasPlaylist: true }
        : { ...music, hasPlaylist: false },
    )
    .sort((a, b) => b.vote - a.vote)
    .slice(0, 3);

  return musics;
};

export const findRandomMusic = () => {
  if (db.data) {
    const randomIndex = Math.floor(Math.random() * db.data.playlist.length);
    return db.data.playlist[randomIndex];
  }

  return undefined;
};

export const addPlayList = async (music: Music) => {
  const playlist = db.data?.playlist;

  if (playlist) {
    const newMusic = create<Music>(music);

    if (playlist.length === 0) {
      newMusic.prevId = newMusic.id;
      newMusic.nextId = newMusic.id;
    } else {
      const prevMusic = playlist[playlist.length - 1];
      const nextMusic = playlist[0];

      newMusic.prevId = prevMusic.id;
      newMusic.nextId = nextMusic.id;

      prevMusic.nextId = newMusic.id;
      nextMusic.prevId = newMusic.id;
    }

    playlist.push(newMusic);
  }

  await db.write();

  return music;
};

export const deletePlayList = async (music: Music) => {
  const filterdPlaylist = db.data?.playlist.filter((m, i, arr) => {
    if (m.id === music.id) {
      const prevMusic = arr[i - 1] ? arr[i - 1] : arr[arr.length - 1];
      const nextMusic = arr[i + 1] ? arr[i + 1] : arr[0];

      prevMusic.nextId = nextMusic.id;
      nextMusic.prevId = prevMusic.id;
    }

    return m.id !== music.id;
  });

  if (filterdPlaylist && db.data) {
    db.data.playlist = filterdPlaylist;
  }

  await db.write();
};

export const findSearchPlayList = (query: string) => {
  const searchedPlayList = db.data?.musics
    .filter(({ artists, title }) => {
      const filterArtists = artists.some((artist) =>
        artist.toUpperCase().includes(query.toUpperCase()),
      );

      const filterTitle = title.toUpperCase().includes(query.toUpperCase());

      return filterArtists || filterTitle;
    })
    .map((music) =>
      findPlayListMusic(music.id)
        ? { ...music, hasPlaylist: true }
        : { ...music, hasPlaylist: false },
    );

  return searchedPlayList || [];
};
