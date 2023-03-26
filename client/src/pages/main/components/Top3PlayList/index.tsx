import { useCallback, useMemo } from 'react';
import { Toast, MusicController } from '@/components';
import { useTop3Musics, useAddPlayList } from '@/pages/main/hooks';

import MusicScore from './MusicScore';
import MusicCover from './MusicCover';
import MusicTitle from './MusicTitle';
import MusicArtists from './MusicArtists';

import * as Styled from './styled';

const Top3PlayList = () => {
  const { data: musics } = useTop3Musics();
  const { mutateAsync: addPlayList } = useAddPlayList();

  const toastDuration = useMemo(() => 2000, []);

  const handleControllerAddClick = useCallback(
    async (id: string) => {
      await addPlayList(id);
      Toast.show('보관함에 추가되었습니다.', toastDuration);
    },
    [addPlayList, toastDuration],
  );

  return (
    <Styled.Container>
      {musics?.map(({ id, cover, title, artists }, index) => (
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
              <MusicController.Play
                onClick={() => handleControllerAddClick(id)}
              />
              <MusicController.Plus
                onClick={() => handleControllerAddClick(id)}
              />
            </Styled.ControllerContainer>
          </Styled.ContentsAndControllerContainer>
        </Styled.ItemContainer>
      ))}
    </Styled.Container>
  );
};

export default Top3PlayList;
