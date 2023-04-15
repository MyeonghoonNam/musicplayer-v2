import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return <h3 className="text-[14px] font-bold mb-[4px]">{children}</h3>;
};
