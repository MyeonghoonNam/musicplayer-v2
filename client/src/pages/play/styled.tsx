import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <article className="w-screen h-screen pt-[60px] px-[34px]">
      {children}
    </article>
  );
};
