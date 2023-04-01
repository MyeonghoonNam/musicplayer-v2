import express from 'express';
import {
  getTop3Musics,
  addPlayList,
  deletePlayList,
} from '../controllers/musicController';

const router = express.Router();

router.get('/top3', getTop3Musics);
router.post('/playlist/:id', addPlayList);
router.delete('/playlist/:id', deletePlayList);

export default router;
