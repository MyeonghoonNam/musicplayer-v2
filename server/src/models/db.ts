import path, { join } from 'path';
import fs from 'fs/promises';
import { Low, JSONFile } from 'lowdb';

import { Music } from '../interfaces/musics';

export interface Data {
  musics: Music[];
}

const dirname = path.resolve();

export let db: Low<Data>;

export const initDatabase = async () => {
  const dbFolderPath = join(dirname, './db');
  const filePath = join(dirname, './db/db.json');
  const dbFolder = await fs.readdir(dbFolderPath).catch(() => undefined);
  const file = await fs.readFile(filePath).catch(() => undefined);

  if (!dbFolder) {
    await fs.mkdir(dbFolderPath);
  }

  if (!file) {
    const jsonFile = await fs.readFile('./db/data.json', 'utf8');
    const jsonData = JSON.parse(jsonFile);

    await fs.writeFile(filePath, JSON.stringify(jsonData));
  }

  return filePath;
};

export const createConnection = async () => {
  const filePath = await initDatabase();
  const adapter = new JSONFile<Data>(filePath);

  db = new Low(adapter);

  await db.read();
  await db.write();
};
