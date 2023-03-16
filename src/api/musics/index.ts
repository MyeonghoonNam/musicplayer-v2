import config from '../config';
import type { Music } from './types';

const RESOURCE = '/musics';

export const getTop3Musics = () => config.get<Music>(`${RESOURCE}/top3`);
