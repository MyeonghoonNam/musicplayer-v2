import tw from 'twin.macro';
import { css } from '@emotion/react';
import { useMemo, useState } from 'react';
import { useTimeout } from '@/hooks';

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

  return (
    <div
      css={[
        tw`relative flex w-full h-[40px] px-[10px] items-center rounded-[4px] box-border bg-[#9B51E0]`,
        css`
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
          opacity: ${show ? 1 : 0};
          transition: opacity ${animationDelay}ms ease-out;

          &:last-of-type {
            animation: move ${animationDelay}ms ease-out forwards;
          }

          &:not(:last-of-type) {
            margin-bottom: 4px;
          }

          @keyframes move {
            0% {
              margin-bottom: 40px;
            }
            100% {
              margin-bottom: 0;
            }
          }
        `,
      ]}
    >
      <span className="text-[14px] text-white">{message}</span>
    </div>
  );
};

export default ToastItem;
