import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return <strong className="text-[14px] font-bold">{children}</strong>;
};
