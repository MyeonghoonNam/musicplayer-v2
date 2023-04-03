import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePlayList } from '@/api/musics';
import { musicCache } from '@/models';

const useDeletePlayList = () => {
  const client = useQueryClient();
  const mutation = useMutation(deletePlayList, {
    onSuccess: () => {
      client.invalidateQueries(musicCache.getPlayList);
    },
  });

  return mutation;
};

export default useDeletePlayList;
