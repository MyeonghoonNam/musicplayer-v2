import * as Styled from './styled';

interface Props {
  artists: string[];
}

const MusicArtists = ({ artists }: Props) => {
  return <Styled.Container>{artists}</Styled.Container>;
};

export default MusicArtists;
