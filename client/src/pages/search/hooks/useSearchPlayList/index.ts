import { useQuery } from '@tanstack/react-query';

import { musicCache } from '@/models';
import { getSearchPlayList } from '@/api/musics';

const useSearchPlayList = (keyword: string) => {
  const query = useQuery(
    musicCache.getSearchPlayList(keyword),
    () => getSearchPlayList(keyword),
    {
      enabled: !!keyword,
    },
  );

  return query;
};

export default useSearchPlayList;
