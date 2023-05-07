import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import * as musicService from '../services/musicService';
import { createResponse, createError } from '../utils/responseUtils';
import { MUSICS_ERRORS } from '../constants/musics';

export const getTop3Musics = (req: Request, res: Response) => {
  const top3Musics = musicService.findTop3Musics();

  if (!top3Musics || top3Musics.length === 0) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send(createError(MUSICS_ERRORS.MUSIC_NOT_FOUND));
  }

  return res.status(StatusCodes.OK).send(createResponse(top3Musics));
};

export const getPlayList = (req: Request, res: Response) => {
  const playlist = musicService.findPlayList();

  if (!playlist) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send(createError(MUSICS_ERRORS.PLAYLIST_NOT_FOUND));
  }

  return res.status(StatusCodes.OK).send(createResponse(playlist));
};

export const getPlayMusic = (req: Request, res: Response) => {
  const { id: musicId } = req.params;

  if (musicId === 'undefined' || !musicId) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send(createError(MUSICS_ERRORS.INVALID_MUSIC_ID));
  }

  const playMusic = musicService.findPlayListMusic(musicId);

  if (!playMusic) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send(createError(MUSICS_ERRORS.EXIST_PLAYLIST_MUSIC));
  }

  return res.status(StatusCodes.OK).send(createResponse(playMusic));
};

export const addPlayList = (req: Request, res: Response) => {
  const { id: musicId } = req.params;

  if (!musicId) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send(createError(MUSICS_ERRORS.INVALID_MUSIC_ID));
  }

  const playlistMusic = musicService.findPlayListMusic(musicId);

  if (!playlistMusic) {
    const music = musicService.findMusic(musicId);

    if (!music) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send(createError(MUSICS_ERRORS.MUSIC_NOT_FOUND));
    }

    musicService.addPlayList(music);

    return res.status(StatusCodes.OK).send(createResponse(music));
  }

  return res
    .status(StatusCodes.BAD_REQUEST)
    .send(createError(MUSICS_ERRORS.EXIST_PLAYLIST_MUSIC));
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

export const getSearchPlayList = (req: Request, res: Response) => {
  const { query } = req.params;

  const searchedPlayList = musicService.findSearchPlayList(query);

  return res.status(StatusCodes.OK).send(createResponse(searchedPlayList));
};
