import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <div className="w-full h-[292px] mt-[34px] mx-auto mb-[26px] rounded-[16px] overflow-hidden">
      {children}
    </div>
  );
};
