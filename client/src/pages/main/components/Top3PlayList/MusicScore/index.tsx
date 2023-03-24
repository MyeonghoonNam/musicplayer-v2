import * as Styled from './styled';

interface Props {
  score: number;
}

const MusicScore = ({ score }: Props) => {
  return <Styled.Container>{score}</Styled.Container>;
};

export default MusicScore;
