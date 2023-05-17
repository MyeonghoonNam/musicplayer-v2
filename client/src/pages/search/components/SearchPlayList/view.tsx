import { MusicController } from '@/components';

import type { Music } from '@/interfaces';

import MusicCover from './MusicCover';
import MusicTitle from './MusicTitle';
import MusicArtists from './MusicArtists';

import * as Styled from './styled';

interface Props {
  musicSrc: string;
  playlist: Music[];
  playing: boolean;
  addPlayListLoading: boolean;
  deletePlayListLoading: boolean;
  handleControllerAddClick: (id: string) => Promise<void>;
  handleControllerDeleteClick: (id: string) => Promise<void>;
  handleCotrollerPlayClick: (source: string) => void;
}

const VSearchPlayList = ({
  musicSrc,
  playlist,
  playing,
  addPlayListLoading,
  deletePlayListLoading,
  handleControllerAddClick,
  handleControllerDeleteClick,
  handleCotrollerPlayClick,
}: Props) => {
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
              onClick={() => handleCotrollerPlayClick(source)}
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

export default VSearchPlayList;
