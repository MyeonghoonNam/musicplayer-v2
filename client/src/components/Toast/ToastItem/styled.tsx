import { ReactNode } from 'react';
import tw, { css } from 'twin.macro';

interface Props {
  children: ReactNode;
}

type ContainerProps = Props & {
  show: boolean;
  animationDelay: number;
};

export const Container = ({
  show,
  animationDelay,
  children,
}: ContainerProps) => {
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
      {children}
    </div>
  );
};

export const Text = ({ children }: Props) => {
  return <span className="text-[14px] text-white">{children}</span>;
};
