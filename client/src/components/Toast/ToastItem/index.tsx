import { useMemo, useState } from 'react';
import { useTimeout } from '@/hooks';

import VToastItem from './view';

interface Props {
  message: string;
  duration: number;
  onDone: () => void;
}

const ToastItem = ({ message, duration, onDone }: Props) => {
  const [show, setShow] = useState(true);
  const animationDelay = useMemo(() => 400, []);

  useTimeout(() => {
    setShow(false);
    setTimeout(() => onDone(), animationDelay);
  }, duration);

  const props = {
    show,
    animationDelay,
    message,
  };

  return <VToastItem {...props} />;
};

export default ToastItem;
