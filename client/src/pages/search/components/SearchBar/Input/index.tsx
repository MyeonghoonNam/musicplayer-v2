import { useSetRecoilState } from 'recoil';
import { useState, useCallback, ChangeEvent, useEffect } from 'react';
import { searchKeywordState } from '@/store/state';
import { useDebounce } from '@/hooks';

import VInput from './view';

const Input = () => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 500);
  const setKeyword = useSetRecoilState(searchKeywordState);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(() => e.target.value);
  }, []);

  useEffect(() => {
    setKeyword(() => debouncedValue);
  }, [setKeyword, debouncedValue]);

  const props = {
    value,
    handleChange,
  };

  return <VInput {...props} />;
};

export default Input;
