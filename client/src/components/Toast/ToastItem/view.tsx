import * as Styled from './styled';

interface Props {
  show: boolean;
  animationDelay: number;
  message: string;
}

const VToastItem = ({ show, animationDelay, message }: Props) => {
  return (
    <Styled.Container show={show} animationDelay={animationDelay}>
      <Styled.Text>{message}</Styled.Text>
    </Styled.Container>
  );
};

export default VToastItem;
