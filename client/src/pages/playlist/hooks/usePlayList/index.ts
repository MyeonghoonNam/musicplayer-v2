import { useQuery } from '@tanstack/react-query';
import { getPlayList } from '@/api/musics';
import { musicCache } from '@/models';

const usePlayList = () => {
  const query = useQuery(musicCache.getPlayList, getPlayList);

  return query;
};

export default usePlayList;
