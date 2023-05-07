import { useRecoilValue } from 'recoil';
import { searchKeywordState } from '@/store/state';
import { useSearchPlayList } from '../../hooks';

const SearchPlayList = () => {
  const keyword = useRecoilValue(searchKeywordState);
  const { data: playlist } = useSearchPlayList(keyword);
  console.log(playlist);
  return (
    <div>
      <span>{keyword}</span>
    </div>
  );
};

export default SearchPlayList;
