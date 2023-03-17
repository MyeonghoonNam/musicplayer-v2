import { useQuery } from '@tanstack/react-query';
import { getTop3Musics } from '@/api/musics';

const useTop3Musics = () => {
  const QUERY_KEY = ['top3musics'];
  const query = useQuery(QUERY_KEY, getTop3Musics);

  return query;
};

export default useTop3Musics;
