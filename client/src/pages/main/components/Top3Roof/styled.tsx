import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <div className="relative w-[100%] h-[35%] p-[24px] bg-[#9B51E0]">
      {children}
    </div>
  );
};
