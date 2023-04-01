import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePlayList } from '@/api/musics';
import { musicCache } from '@/models';

const useDeletePlayList = () => {
  const client = useQueryClient();
  const mutation = useMutation(deletePlayList, {
    onSuccess: () => {
      client.invalidateQueries(musicCache.getTop3Musics);
    },
  });

  return mutation;
};

export default useDeletePlayList;
