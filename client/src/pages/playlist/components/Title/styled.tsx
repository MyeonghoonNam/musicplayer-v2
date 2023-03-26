import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <h2 className="flex justify-center items-center h-[54px] text-[white] font-bold bg-[#9b51e0]">
      {children}
    </h2>
  );
};
