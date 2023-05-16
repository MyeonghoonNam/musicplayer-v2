import { useState, useCallback } from 'react';
import { Toast } from '@/components';
import { useAudio } from '@/hooks';
import {
  useTop3Musics,
  useAddPlayList,
  useDeletePlayList,
} from '@/pages/main/hooks';

import VTop3PlayList from './view';

const Top3PlayList = () => {
  const [musicSrc, setMusicSrc] = useState('');
  const [playing, playToggle] = useAudio(musicSrc);
  const { data: musics } = useTop3Musics();
  const { mutateAsync: addPlayList, isLoading: addPlayListLoading } =
    useAddPlayList();
  const { mutateAsync: deletePlayList, isLoading: deletePlayListLoading } =
    useDeletePlayList();

  const handleCotrollerPlayClick = useCallback(
    (source: string) => {
      if (source !== musicSrc) {
        setMusicSrc(() => source);
      } else {
        playToggle();
      }
    },
    [musicSrc, playToggle],
  );

  const handleControllerAddClick = useCallback(
    async (id: string) => {
      await addPlayList(id);
      Toast.show('보관함에 추가되었습니다.');
    },
    [addPlayList],
  );

  const handleControllerDeleteClick = useCallback(
    async (id: string) => {
      await deletePlayList(id);
      Toast.show('보관함에 삭제되었습니다.');
    },
    [deletePlayList],
  );

  const props = {
    musics,
    musicSrc,
    playing,
    addPlayListLoading,
    deletePlayListLoading,
    handleCotrollerPlayClick,
    handleControllerAddClick,
    handleControllerDeleteClick,
  };

  return <VTop3PlayList {...props} />;
};

export default Top3PlayList;
