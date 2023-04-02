import config from '../config';
import type { Music } from './types';

const RESOURCE = '/musics';

export const getTop3Musics = () => config.get<Music[]>(`${RESOURCE}/top3`);

export const addPlayList = (id: string) =>
  config.post<Music>(`${RESOURCE}/playlist/${id}`);

export const deletePlayList = async (id: string) => {
  config.delete(`${RESOURCE}/playlist/${id}`);
};

export const getPlayList = () => config.get<Music[]>(`${RESOURCE}/playlist`);
