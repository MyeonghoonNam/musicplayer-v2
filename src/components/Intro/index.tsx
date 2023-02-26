/** @jsxImportSource @emotion/react */

import Image from 'next/image';
import tw from 'twin.macro';
import { useEffect, useState } from 'react';

const Intro = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1000);
  }, []);

  return (
    <div
      css={[
        tw`flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 w-[100vw] h-[100vh] bg-[#9B51E0] z-[1000]`,
        {
          opacity: show ? '1' : '0',
          transition: 'opacity 2s ease-out',
        },
      ]}
    >
      <Image src="/logo.png" alt="intro" width={134} height={63} priority />
    </div>
  );
};

export default Intro;
