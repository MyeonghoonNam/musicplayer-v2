import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const TabMenu = () => {
  const { pathname } = useRouter();

  const MENU = useMemo(
    () => [
      {
        id: 'menu1',
        name: 'Top 3',
        path: '/',
        on: '/icons/music_on.png',
        off: '/icons/music.png',
      },
      {
        id: 'menu2',
        name: 'Play List',
        path: '/playlist',
        on: '/icons/layers_on.png',
        off: '/icons/layers.png',
      },
      {
        id: 'menu3',
        name: 'Search',
        path: '/search',
        on: '/icons/search_on.png',
        off: '/icons/search.png',
      },
    ],
    [],
  );

  return (
    <nav className="fixed bottom-0 flex w-full h-[80px] justify-around bg-[#F2F2F2]">
      {MENU.map(({ id, name, path, on, off }) => (
        <Link
          key={id}
          href={path}
          className="flex flex-col justify-center items-center"
        >
          <Image
            src={path === pathname ? on : off}
            alt="Top 5"
            width={26}
            height={26}
          />
          <span
            className="mt-[9px] text-[10px]"
            css={[{ color: path === pathname ? '#9B51E0' : '' }]}
          >
            {name}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default TabMenu;
