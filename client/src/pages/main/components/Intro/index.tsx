import Image from 'next/image';
import tw from 'twin.macro';
import { useState } from 'react';

import { useTimeout } from '@/hooks';

const Intro = () => {
  const [show, setShow] = useState(true);

  useTimeout(() => {
    setShow(false);
  }, 1000);

  return (
    <div
      css={[
        tw`flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 w-[100vw] h-[100vh] bg-[#9B51E0]`,
        {
          opacity: show ? '1' : '0',
          transition: 'opacity 1.5s ease-out',
          zIndex: show ? '1000' : '-1000',
        },
      ]}
    >
      <Image
        src="/images/logo.png"
        alt="intro"
        width={134}
        height={63}
        priority
      />
    </div>
  );
};

export default Intro;
