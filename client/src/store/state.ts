import { atom } from 'recoil';

import { SEARCH_KEYWORD } from './key';

export const searchKeywordState = atom({
  key: SEARCH_KEYWORD,
  default: '',
});
