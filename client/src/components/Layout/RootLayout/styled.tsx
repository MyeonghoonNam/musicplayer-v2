import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return <main className="w-[100%] h-[calc(100vh-80px)]">{children}</main>;
};
