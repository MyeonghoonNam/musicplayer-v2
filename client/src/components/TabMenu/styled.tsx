import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <nav className="fixed bottom-0 flex w-full h-[80px] justify-around bg-[#F2F2F2]">
      {children}
    </nav>
  );
};
