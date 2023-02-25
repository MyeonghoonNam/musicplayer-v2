/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '../src')));
app.use('/public', express.static(path.join(__dirname, './public')));

app.get('/musics', (_, response) => {
  // const musics = db.get('musics');
  // return response.json({ musics });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
