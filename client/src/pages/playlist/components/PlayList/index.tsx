import { useCallback } from 'react';
import { MusicController, Toast } from '@/components';
import { usePlayList, useDeletePlayList } from '../../hooks';

import MusicArtists from './MusicArtists';
import MusicCover from './MusicCover';
import MusicTitle from './MusicTitle';

import * as Styled from './styled';

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

  return (
    <Styled.Container>
      {playlist?.map(({ id, cover, title, artists }) => (
        <Styled.ItemContainer key={id}>
          <Styled.ContentsContainer path={id}>
            <MusicCover
              cover={cover}
              alt="music-cover"
              width={50}
              height={50}
            />

            <Styled.TitleAndArtistsContainer>
              <MusicTitle title={title} />
              <MusicArtists artists={artists} />
            </Styled.TitleAndArtistsContainer>
          </Styled.ContentsContainer>

          <Styled.ControllerContainer>
            <MusicController
              mode="minus"
              size="small"
              onClick={() => handleDeletePlayListClick(id)}
            />
          </Styled.ControllerContainer>
        </Styled.ItemContainer>
      ))}
    </Styled.Container>
  );
};

export default PlayList;
