import { useState } from 'react';
import { useTimeout } from '@/hooks';

import VIntro from './view';

const Intro = () => {
  const [show, setShow] = useState(true);

  useTimeout(() => {
    setShow(false);
  }, 1000);

  const props = {
    show,
  };

  return <VIntro {...props} />;
};

export default Intro;
