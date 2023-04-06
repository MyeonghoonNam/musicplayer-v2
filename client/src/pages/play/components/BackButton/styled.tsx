import { ReactNode } from 'react';

interface Props {
  onClick: () => void;
  children: ReactNode;
}

export const Container = ({ onClick, children }: Props) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};
