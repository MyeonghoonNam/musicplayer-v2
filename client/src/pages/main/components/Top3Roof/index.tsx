import Image from 'next/image';

import * as Styled from './styled';

const Top3Roof = () => {
  return (
    <Styled.Container>
      <Image
        src="/images/logo.png"
        alt="logo"
        width={108}
        height={50}
        className="w-auto h-auto"
        priority
      />
    </Styled.Container>
  );
};

export default Top3Roof;
