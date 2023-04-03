import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return <em className="text-[12px] text-[#828282]">{children}</em>;
};
