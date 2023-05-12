import Image from 'next/image';

import * as Styled from './styled';

interface Props {
  show: boolean;
}

const VIntro = ({ show }: Props) => {
  if (!show) return null;

  return show ? (
    <Styled.Container>
      <Image
        src="/images/logo.png"
        alt="intro"
        width={134}
        height={63}
        priority
      />
    </Styled.Container>
  ) : null;
};

export default VIntro;
