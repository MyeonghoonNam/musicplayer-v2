import Image from 'next/image';

import * as Styled from './styled';

interface Props {
  onClick: () => void;
}

const BackButton = ({ onClick }: Props) => {
  return (
    <Styled.Container onClick={onClick}>
      <Image
        src="/icons/arrow-left.png"
        alt="back-button"
        width={24}
        height={24}
        priority
      />
    </Styled.Container>
  );
};

export default BackButton;
