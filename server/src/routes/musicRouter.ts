import express from 'express';
import {
  getTop3Musics,
  getPlayList,
  getPlayMusic,
  getPlayRandomMusic,
  addPlayList,
  deletePlayList,
  getSearchPlayList,
} from '../controllers/musicController';

const router = express.Router();

router.get('/top3', getTop3Musics);
router.get('/playlist', getPlayList);
router.post('/playlist/:id', addPlayList);
router.delete('/playlist/:id', deletePlayList);
router.get('/play/:id', getPlayMusic);
router.get('/random', getPlayRandomMusic);
router.get('/search/:query', getSearchPlayList);

export default router;
