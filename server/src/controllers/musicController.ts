import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import * as musicService from '../services/musicService';
import { createResponse, createError } from '../utils/responseUtils';
import { MUSICS_ERRORS } from '../constants/musics';

export const getTop3Musics = async (req: Request, res: Response) => {
  const top3Musics = musicService.findTop3Musics();

  return res.status(StatusCodes.OK).send(createResponse(top3Musics));
};

export const addPlayList = (req: Request, res: Response) => {
  const { id: musicId } = req.params;

  if (musicId) {
    const music = musicService.addPlayList(musicId);

    if (music) {
      return res.status(StatusCodes.OK).send(createResponse(music));
    }
  }

  return res
    .status(StatusCodes.BAD_REQUEST)
    .send(createError(MUSICS_ERRORS.INVALID_MUSIC_ID));
};

export const deletePlayList = async (req: Request, res: Response) => {
  const { id: musicId } = req.params;

  if (!musicId) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send(createError(MUSICS_ERRORS.INVALID_MUSIC_ID));
  }

  const music = musicService.findMusic(musicId);

  if (!music) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send(createError(MUSICS_ERRORS.MUSIC_NOT_FOUND));
  }

  await musicService.deletePlayList(music);

  return res.status(StatusCodes.OK).send(null);
};
