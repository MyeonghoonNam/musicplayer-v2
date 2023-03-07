import Image from 'next/image';
import type { Menu } from './types';

interface Props {
  menu: Menu;
}

const TabMenu = ({ menu }: Props) => {
  return (
    <nav className="fixed bottom-0 flex w-full h-[80px] justify-around bg-[#F2F2F2]">
      <button
        type="button"
        className="flex flex-col justify-center items-center"
      >
        <Image
          src={menu === 'Top 5' ? '/icons/music_on.png' : '/icons/music.png'}
          alt="Top 5"
          width={26}
          height={26}
        />
        <span
          className="mt-[9px] text-[10px]"
          css={[{ color: menu === 'Top 5' ? '#9B51E0' : '' }]}
        >
          Top 5
        </span>
      </button>

      <button
        type="button"
        className="flex flex-col justify-center items-center"
      >
        <Image
          src={
            menu === 'Play List' ? '/icons/layers_on.png' : '/icons/layers.png'
          }
          alt="Play List"
          width={26}
          height={26}
        />
        <span
          className="mt-[9px] text-[10px]"
          css={[{ color: menu === 'Play List' ? '#9B51E0' : '' }]}
        >
          Play List
        </span>
      </button>

      <button
        type="button"
        className="flex flex-col justify-center items-center"
      >
        <Image
          src={menu === 'Search' ? '/icons/search_on.png' : '/icons/search.png'}
          alt="Search"
          width={26}
          height={26}
        />
        <span
          className="mt-[9px] text-[10px]"
          css={[{ color: menu === 'Search' ? '#9B51E0' : '' }]}
        >
          Search
        </span>
      </button>
    </nav>
  );
};

export default TabMenu;
