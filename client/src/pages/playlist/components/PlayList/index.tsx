import { useCallback } from 'react';
import { Toast } from '@/components';

import { usePlayList, useDeletePlayList } from '../../hooks';

import VPlayList from './view';

const PlayList = () => {
  const { data: playlist } = usePlayList();
  const { mutateAsync: deletePlayList } = useDeletePlayList();

  const handleDeletePlayListClick = useCallback(
    async (id: string) => {
      await deletePlayList(id);
      Toast.show('보관함에 삭제되었습니다.');
    },
    [deletePlayList],
  );

  if (!playlist) return null;

  const props = {
    playlist,
    handleDeletePlayListClick,
  };

  return <VPlayList {...props} />;
};

export default PlayList;
