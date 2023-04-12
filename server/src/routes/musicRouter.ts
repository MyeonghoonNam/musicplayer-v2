import express from 'express';
import {
  getTop3Musics,
  getPlayList,
  getPlayMusic,
  addPlayList,
  deletePlayList,
} from '../controllers/musicController';

const router = express.Router();

router.get('/top3', getTop3Musics);
router.get('/playlist', getPlayList);
router.get('/playlist/:id', getPlayMusic);
router.post('/playlist/:id', addPlayList);
router.delete('/playlist/:id', deletePlayList);

export default router;
