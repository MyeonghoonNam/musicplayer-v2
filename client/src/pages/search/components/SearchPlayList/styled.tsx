import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return <ul className="mx-[23px]">{children}</ul>;
};

export const ItemContainer = ({ children }: Props) => {
  return (
    <li className="flex justify-between pr-[20px] py-[18px] border-b-[1px] border-bottom-color-[#e0e0e0]">
      {children}
    </li>
  );
};

export const ContentsContainer = ({ children }: Props) => {
  return <div className="flex">{children}</div>;
};

export const TitleAndArtistsContainer = ({ children }: Props) => {
  return <div className="flex flex-col justify-center">{children}</div>;
};

export const ControllerContainer = ({ children }: Props) => {
  return <div className="flex items-center">{children}</div>;
};
