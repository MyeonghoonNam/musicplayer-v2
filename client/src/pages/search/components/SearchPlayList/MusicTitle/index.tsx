import * as Styled from './styled';

interface Props {
  title: string;
}

const MusicTitle = ({ title }: Props) => {
  return <Styled.Container>{title}</Styled.Container>;
};

export default MusicTitle;
