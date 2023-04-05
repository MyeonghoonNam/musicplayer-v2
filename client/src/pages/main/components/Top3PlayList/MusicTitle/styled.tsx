import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <strong className="px-[1px] text-[14px] leading-[20px] font-bold truncate">
      {children}
    </strong>
  );
};
