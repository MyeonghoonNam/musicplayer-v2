import * as Styled from './styled';

interface Props {
  artists: string[];
}

const MusicArtists = ({ artists }: Props) => {
  return <Styled.Container>{artists.join(' ')}</Styled.Container>;
};

export default MusicArtists;
