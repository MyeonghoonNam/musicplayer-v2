/* eslint-disable import/no-mutable-exports */
import path, { join } from 'path';
import { Low, JSONFile } from 'lowdb';

import { Music } from '../interfaces/musics';

export interface Data {
  musics: Music[];
}

export let db: Low<Data>;

export const createConnection = async () => {
  const dirname = path.resolve();
  const filePath = join(dirname, './db/db.json');
  const adapter = new JSONFile<Data>(filePath);

  db = new Low(adapter);

  await db.read();
};
