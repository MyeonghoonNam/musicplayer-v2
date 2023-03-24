import { useQuery } from '@tanstack/react-query';
import { getTop3Musics } from '@/api/musics';
import { musicCache } from '@/models';

const useTop3Musics = () => {
  const query = useQuery(musicCache.getTop3Musics, getTop3Musics);

  return query;
};

export default useTop3Musics;
