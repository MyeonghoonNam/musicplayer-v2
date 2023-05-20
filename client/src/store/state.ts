import { atom } from 'recoil';

import { SEARCH_KEYWORD, PLAY_ROTATE } from './key';

export const searchKeywordState = atom({
  key: SEARCH_KEYWORD,
  default: '',
});

export const playRotateState = atom({
  key: PLAY_ROTATE,
  default: false,
});
