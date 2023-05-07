import { useRecoilState } from 'recoil';
import { useCallback, ChangeEvent } from 'react';
import { searchKeywordState } from '@/store/state';

const Input = () => {
  const [keyword, setKeyword] = useRecoilState(searchKeywordState);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setKeyword(() => e.target.value);
    },
    [setKeyword],
  );

  return (
    <input
      className="w-full h-[36px] pl-[24px] pr-[48px] rounded-[35px] bg-[#f2f2f2]"
      type="text"
      placeholder="Search"
      value={keyword}
      onChange={handleChange}
    />
  );
};

export default Input;
