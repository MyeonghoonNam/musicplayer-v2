import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { findTop3Musics } from '@/services/musicService';

export const getTop3Musics = async (req: Request, res: Response) => {
  const top3Musics = findTop3Musics();

  if (top3Musics) {
    return res.status(StatusCodes.OK).send(top3Musics);
  }

  return res.status(StatusCodes.BAD_REQUEST).send('잘못된 요청입니다.');
};
