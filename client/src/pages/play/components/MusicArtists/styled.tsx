import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return <span className="text-[12px] text-[#828282]">{children}</span>;
};
