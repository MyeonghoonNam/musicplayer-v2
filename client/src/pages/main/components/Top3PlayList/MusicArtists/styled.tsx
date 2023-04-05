import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return <em className="px-[1px] truncate">{children}</em>;
};
