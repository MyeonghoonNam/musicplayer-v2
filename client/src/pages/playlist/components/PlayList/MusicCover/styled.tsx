import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return <div className="rounded-[5px] mr-[16px]">{children}</div>;
};
