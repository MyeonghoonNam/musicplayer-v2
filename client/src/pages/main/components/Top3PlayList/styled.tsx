import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return <ol className="h-[65%] pt-[18px] [&>li+li]:mt-[10px]">{children}</ol>;
};

export const ItemContainer = ({ children }: Props) => {
  return <li className="flex">{children}</li>;
};

export const ContentsAndControllerContainer = ({ children }: Props) => {
  return <div className="flex grow justify-between pr-[20px]">{children}</div>;
};

export const ContentsContainer = ({ children }: Props) => {
  return <div className="flex">{children}</div>;
};

export const TitleAndArtistsContainer = ({ children }: Props) => {
  return <div className="flex flex-col justify-center min-w-0">{children}</div>;
};

export const ControllerContainer = ({ children }: Props) => {
  return (
    <div className="flex items-center [&>button+button]:ml-[8px]">
      {children}
    </div>
  );
};
