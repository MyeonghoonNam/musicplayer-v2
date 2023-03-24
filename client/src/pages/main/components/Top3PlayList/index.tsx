import { useTop3Musics } from '@/pages/main/hooks';

import MusicScore from './MusicScore';
import MusicCover from './MusicCover';
import MusicTitle from './MusicTitle';
import MusicArtists from './MusicArtists';
import MusicController from './MusicController';

import * as Styled from './styled';

const Top3PlayList = () => {
  const { data: musics } = useTop3Musics();

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

            <MusicController id={id} />
          </Styled.ContentsAndControllerContainer>
        </Styled.ItemContainer>
      ))}
    </Styled.Container>
  );
};

export default Top3PlayList;
