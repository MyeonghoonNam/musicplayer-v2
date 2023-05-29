import type { Music } from '@/interfaces';

import config from '../config';

const RESOURCE = '/musics';

export const getTop3Musics = () => config.get<Music[]>(`${RESOURCE}/top3`);

export const addPlayList = (id: string) =>
  config.post<Music>(`${RESOURCE}/playlist/${id}`);

export const deletePlayList = async (id: string) => {
  config.delete(`${RESOURCE}/playlist/${id}`);
};

export const getPlayList = () => config.get<Music[]>(`${RESOURCE}/playlist`);

export const getPlayMusic = (id: string) =>
  config.get<Music>(`${RESOURCE}/play/${id}`);

export const getSearchPlayList = (query: string) =>
  config.get<Music[]>(`${RESOURCE}/search/${query}`);

export const getPlayRandomMusic = () => config.get<Music>(`${RESOURCE}/random`);
