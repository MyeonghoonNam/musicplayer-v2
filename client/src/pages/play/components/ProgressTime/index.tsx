import * as Styled from './styled';

interface Props {
  currentTime: string;
  endTime: string;
}

const ProgressTime = ({ currentTime, endTime }: Props) => {
  return (
    <Styled.Container>
      <Styled.CurrentTime>{currentTime}</Styled.CurrentTime>
      <Styled.EndTime>{endTime}</Styled.EndTime>
    </Styled.Container>
  );
};

export default ProgressTime;
