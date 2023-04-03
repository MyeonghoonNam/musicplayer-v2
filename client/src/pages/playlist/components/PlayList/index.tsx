import { MusicController } from '@/components';
import { usePlayList } from '../../hooks';
import MusicArtists from './MusicArtists';
import MusicCover from './MusicCover';
import MusicTitle from './MusicTitle';

import * as Styled from './styled';

const PlayList = () => {
  const { data: playlist } = usePlayList();

  return (
    <Styled.Container>
      {playlist?.map((music) => (
        <Styled.ItemContainer key={music.id}>
          <Styled.ContentsContainer>
            <MusicCover
              cover={music.cover}
              alt="music-cover"
              width={50}
              height={50}
            />

            <Styled.TitleAndArtistsContainer>
              <MusicTitle title={music.title} />
              <MusicArtists artists={music.artists} />
            </Styled.TitleAndArtistsContainer>
          </Styled.ContentsContainer>

          <Styled.ControllerContainer>
            <MusicController mode="minus" size="small" />
          </Styled.ControllerContainer>
        </Styled.ItemContainer>
      ))}
    </Styled.Container>
  );
};

export default PlayList;
