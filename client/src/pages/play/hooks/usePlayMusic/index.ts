import { useQuery } from '@tanstack/react-query';

import { musicCache } from '@/models';
import { getPlayMusic } from '@/api/musics';

const usePlayMusic = (id: string) => {
  const query = useQuery(musicCache.getPlayMusic(id), () => getPlayMusic(id), {
    enabled: !!id,
  });

  return query;
};

export default usePlayMusic;
