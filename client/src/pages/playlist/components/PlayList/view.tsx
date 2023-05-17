import { MusicController } from '@/components';

import type { Music } from '@/interfaces';

import MusicArtists from './MusicArtists';
import MusicCover from './MusicCover';
import MusicTitle from './MusicTitle';

import * as Styled from './styled';

interface Props {
  playlist: Music[];
  handleDeletePlayListClick: (id: string) => Promise<void>;
}

const VPlayList = ({ playlist, handleDeletePlayListClick }: Props) => {
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

export default VPlayList;
