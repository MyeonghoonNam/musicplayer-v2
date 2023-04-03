import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return <ul className="mx-[23px]">{children}</ul>;
};

export const ItemContainer = ({ children }: Props) => {
  return (
    <li className="flex justify-between py-[18px] pr-[20px] border-b-[1px]">
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
  return <div className="flex justify-center items-center">{children}</div>;
};
