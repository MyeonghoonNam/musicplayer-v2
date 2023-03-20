import express from 'express';
import { getTop3Musics } from '@/controllers/musicController';

const router = express.Router();

router.get('/top3', getTop3Musics);

export default router;
