import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <div className="flex justify-between text-[10px] mt-[12px]">{children}</div>
  );
};

export const CurrentTime = ({ children }: Props) => {
  return <div className="text-[#9b51e0]">{children}</div>;
};

export const EndTime = ({ children }: Props) => {
  return <div className="text-[#9b51e0]">{children}</div>;
};
