import { useQueryClient, useMutation } from '@tanstack/react-query';
import { addPlayList } from '@/api/musics';
import { musicCache } from '@/models';

const useAddPlayList = () => {
  const client = useQueryClient();
  const mutation = useMutation(addPlayList, {
    onSuccess: () => {
      client.invalidateQueries(musicCache.getTop3Musics);
    },
  });

  return mutation;
};

export default useAddPlayList;
