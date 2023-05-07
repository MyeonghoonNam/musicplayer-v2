import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePlayList } from '@/api/musics';
import { musicCache } from '@/models';

const useDeletePlayList = (keyword: string) => {
  const client = useQueryClient();
  const mutation = useMutation(deletePlayList, {
    onSuccess: () => {
      client.invalidateQueries(musicCache.getSearchPlayList(keyword));
    },
  });

  return mutation;
};

export default useDeletePlayList;
