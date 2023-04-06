import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

import * as Styled from './styled';

const BackButton = () => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <Styled.Container onClick={handleClick}>
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
