import { Dispatch, SetStateAction } from 'react';

export type ReturnType = [
  boolean,
  () => void,
  number,
  Dispatch<SetStateAction<number>>,
  number,
];
