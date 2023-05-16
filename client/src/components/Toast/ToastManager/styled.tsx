import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <div className="fixed bottom-[90px] w-full px-[5px] z-1500">{children}</div>
  );
};
