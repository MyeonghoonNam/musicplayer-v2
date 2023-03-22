import express from 'express';
import { getTop3Musics, addPlayList } from '../controllers/musicController';

const router = express.Router();

router.get('/top3', getTop3Musics);
router.post('/playlist/:id', addPlayList);

export default router;
