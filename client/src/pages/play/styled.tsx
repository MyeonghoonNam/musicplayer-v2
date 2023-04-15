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

export const Contents = ({ children }: Props) => {
  return <div className="flex flex-col justify-center">{children}</div>;
};
