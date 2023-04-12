import { useQuery } from '@tanstack/react-query';

import { musicCache } from '@/models';
import { getPlayMusic } from '@/api/musics';

const usePlayMusic = (id: string) => {
  const query = useQuery(musicCache.getPlayMusic, () => getPlayMusic(id));

  return query;
};

export default usePlayMusic;
