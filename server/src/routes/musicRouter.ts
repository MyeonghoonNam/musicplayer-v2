import express from 'express';
import { getTop3Musics } from '../controllers/musicController';

const router = express.Router();

router.get('/top5', getTop3Musics);

export default router;
