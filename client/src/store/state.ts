import { atom } from 'recoil';

import { SEARCH_KEYWORD, PLAY_ROTATE, PLAY_REPEAT } from './key';

export const searchKeywordState = atom({
  key: SEARCH_KEYWORD,
  default: '',
});

export const playRotateState = atom({
  key: PLAY_ROTATE,
  default: false,
});

export const playRepeatState = atom({
  key: PLAY_REPEAT,
  default: false,
});
