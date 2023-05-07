import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addPlayList } from '@/api/musics';
import { musicCache } from '@/models';

const useAddPlayList = (keyword: string) => {
  const client = useQueryClient();
  const mutation = useMutation(addPlayList, {
    onSuccess: () => {
      client.invalidateQueries(musicCache.getSearchPlayList(keyword));
    },
  });

  return mutation;
};

export default useAddPlayList;
