import { ReactNode } from 'react';
import tw, { css } from 'twin.macro';

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <div
      css={[
        tw`flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 w-[100vw] h-[100vh] bg-[#9B51E0] z-[100]`,
        css`
          animation: fadeOut 1.5s ease-out;
          animation-fill-mode: forwards;

          @keyframes fadeOut {
            from,
            50% {
              opacity: 1;
            }
            to {
              opacity: 0;
            }
          }
        `,
      ]}
    >
      {children}
    </div>
  );
};
