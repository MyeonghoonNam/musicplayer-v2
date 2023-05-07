import { useSetRecoilState } from 'recoil';
import { useState, useCallback, ChangeEvent, useEffect } from 'react';
import { searchKeywordState } from '@/store/state';
import { useDebounce } from '@/hooks';

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

  return (
    <input
      className="w-full h-[36px] pl-[24px] pr-[48px] rounded-[35px] bg-[#f2f2f2]"
      type="text"
      placeholder="Search"
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
