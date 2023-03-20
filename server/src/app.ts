import express from 'express';
import cors from 'cors';
import musicRouter from './routes/musicRouter';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/musics', musicRouter);

export default app;
