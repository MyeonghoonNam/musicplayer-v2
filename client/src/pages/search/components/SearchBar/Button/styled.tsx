import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <button type="button" className="absolute top-[30px] right-[40px] ">
      {children}
    </button>
  );
};

export const SearchIcon = () => {
  return (
    <i className="block w-[20px] h-[20px] bg-[url('/icons/search.png')] bg-[length:20px]" />
  );
};
