import { useCallback, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { searchKeywordState } from '@/store/state';
import { Toast, MusicController } from '@/components';
import { useAudio } from '@/hooks';

import {
  useSearchPlayList,
  useAddPlayList,
  useDeletePlayList,
} from '../../hooks';

import VSearchPlayList from './view';

const SearchPlayList = () => {
  const keyword = useRecoilValue(searchKeywordState);
  const { data: playlist } = useSearchPlayList(keyword);
  const [musicSrc, setMusicSrc] = useState('');
  const [playing, playToggle] = useAudio(musicSrc);
  const { mutateAsync: addPlayList, isLoading: addPlayListLoading } =
    useAddPlayList(keyword);
  const { mutateAsync: deletePlayList, isLoading: deletePlayListLoading } =
    useDeletePlayList(keyword);

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

  if (!playlist) return null;

  const props = {
    musicSrc,
    playlist,
    playing,
    addPlayListLoading,
    deletePlayListLoading,
    handleControllerAddClick,
    handleControllerDeleteClick,
    handleCotrollerPlayClick,
  };

  return <VSearchPlayList {...props} />;
};

export default SearchPlayList;
