import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <span className="flex justify-center items-center w-[48px] text-[14px] font-bold text-[#9b51e0]">
      {children}
    </span>
  );
};
