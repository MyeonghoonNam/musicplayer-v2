import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <div className="w-[50px] h-[50px] mr-[16px] rounded-[5px] overflow-hidden">
      {children}
    </div>
  );
};
