import { ReactNode } from 'react';

interface Props {
  on: boolean;
  children: ReactNode;
}

export const Container = ({ on, children }: Props) => {
  return (
    <span className="mt-[9px] text-[10px]" css={[on && { color: '#9B51E0' }]}>
      {children}
    </span>
  );
};
