import { useCallback } from 'react';
import { Toast, MusicController } from '@/components';
import { useTop3Musics, useAddPlayList } from '@/pages/main/hooks';

import MusicScore from './MusicScore';
import MusicCover from './MusicCover';
import MusicTitle from './MusicTitle';
import MusicArtists from './MusicArtists';

import { TOAST_DURATION } from './constants';

import * as Styled from './styled';
import useDeletePlayList from '../../hooks/useDeletePlayList';

const Top3PlayList = () => {
  const { data: musics } = useTop3Musics();
  const { mutateAsync: addPlayList, isLoading: addPlayListLoading } =
    useAddPlayList();
  const { mutateAsync: deletePlayList, isLoading: deletePlayListLoading } =
    useDeletePlayList();

  const handleControllerAddClick = useCallback(
    async (id: string) => {
      await addPlayList(id);
      Toast.show('보관함에 추가되었습니다.', TOAST_DURATION);
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

  return (
    <Styled.Container>
      {musics?.map(({ id, cover, title, artists, hasPlaylist }, index) => (
        <Styled.ItemContainer key={id}>
          <MusicScore score={index + 1} />

          <Styled.ContentsAndControllerContainer>
            <Styled.ContentsContainer>
              <MusicCover cover={cover} />

              <Styled.TitleAndArtistsContainer>
                <MusicTitle title={title} />
                <MusicArtists artists={artists} />
              </Styled.TitleAndArtistsContainer>
            </Styled.ContentsContainer>

            <Styled.ControllerContainer>
              <MusicController
                mode="play"
                size="small"
                onClick={() => handleControllerAddClick(id)}
              />

              {hasPlaylist ? (
                <MusicController
                  mode="minus"
                  size="small"
                  disabled={deletePlayListLoading}
                  onClick={() => handleControllerDeleteClick(id)}
                />
              ) : (
                <MusicController
                  mode="plus"
                  size="small"
                  disabled={addPlayListLoading}
                  onClick={() => handleControllerAddClick(id)}
                />
              )}
            </Styled.ControllerContainer>
          </Styled.ContentsAndControllerContainer>
        </Styled.ItemContainer>
      ))}
    </Styled.Container>
  );
};

export default Top3PlayList;
