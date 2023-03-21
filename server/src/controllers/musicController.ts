import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { findTop3Musics } from '../services/musicService';
import { createResponse, createError } from '../utils/responseUtils';
import { MUSICS_ERRORS } from '../constants/musics';

export const getTop3Musics = async (req: Request, res: Response) => {
  const top3Musics = findTop3Musics();

  if (top3Musics) {
    return res.status(StatusCodes.OK).send(createResponse(top3Musics));
  }

  return res
    .status(StatusCodes.BAD_REQUEST)
    .send(createError(MUSICS_ERRORS.SOMETHING_WRONG));
};
