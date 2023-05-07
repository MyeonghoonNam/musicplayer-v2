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

import MusicCover from './MusicCover';
import MusicTitle from './MusicTitle';
import MusicArtists from './MusicArtists';

import * as Styled from './styled';

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

  return (
    <Styled.Container>
      {playlist?.map(({ id, cover, title, artists, source, hasPlaylist }) => (
        <Styled.ItemContainer key={id}>
          <Styled.ContentsContainer>
            <MusicCover cover={cover} />

            <Styled.TitleAndArtistsContainer>
              <MusicTitle title={title} />
              <MusicArtists artists={artists} />
            </Styled.TitleAndArtistsContainer>
          </Styled.ContentsContainer>

          <Styled.ControllerContainer>
            <MusicController
              mode={musicSrc === source && playing ? 'pause' : 'play'}
              size="small"
              // onClick={() => handleCotrollerPlayClick(source)}
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
        </Styled.ItemContainer>
      ))}
    </Styled.Container>
  );
};

export default SearchPlayList;
