import { useMutation } from '@tanstack/react-query';
import { addPlayList } from '@/api/musics';

const useAddPlayList = () => {
  const mutation = useMutation(addPlayList);

  return mutation;
};

export default useAddPlayList;
