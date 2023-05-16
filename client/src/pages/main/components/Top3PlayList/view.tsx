import { MusicController } from '@/components';
import type { Music } from '@/interfaces';

import MusicScore from './MusicScore';
import MusicCover from './MusicCover';
import MusicTitle from './MusicTitle';
import MusicArtists from './MusicArtists';

import * as Styled from './styled';

interface Props {
  musics?: Music[];
  musicSrc: string;
  playing: boolean;
  addPlayListLoading: boolean;
  deletePlayListLoading: boolean;
  handleCotrollerPlayClick: (sourse: string) => void;
  handleControllerAddClick: (id: string) => Promise<void>;
  handleControllerDeleteClick: (id: string) => Promise<void>;
}

const VTop3PlayList = ({
  musics,
  musicSrc,
  playing,
  addPlayListLoading,
  deletePlayListLoading,
  handleCotrollerPlayClick,
  handleControllerAddClick,
  handleControllerDeleteClick,
}: Props) => {
  return (
    <Styled.Container>
      {musics?.map(
        ({ id, cover, title, artists, source, hasPlaylist }, index) => (
          <Styled.ItemContainer key={id}>
            <MusicScore score={index + 1} />

            <Styled.ContentsAndControllerContainer>
              <Styled.ContentsContainer>
                <MusicCover cover={cover} width={50} height={50} />

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
            </Styled.ContentsAndControllerContainer>
          </Styled.ItemContainer>
        ),
      )}
    </Styled.Container>
  );
};

export default VTop3PlayList;
