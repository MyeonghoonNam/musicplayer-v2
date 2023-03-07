import Image from 'next/image';

const TabMenu = () => {
  return (
    <nav className="fixed bottom-0 flex w-full h-[80px] justify-around bg-[#F2F2F2]">
      <div className="flex flex-col justify-center items-center cursor-pointer">
        <Image src="/icons/music.png" alt="Top 5" width={26} height={26} />
        <span className="mt-[9px] text-[10px]">Top 5</span>
      </div>

      <div className="flex flex-col justify-center items-center cursor-pointer">
        <Image src="/icons/layers.png" alt="Play List" width={26} height={26} />
        <span className="mt-[9px] text-[10px]">Play List</span>
      </div>

      <div className="flex flex-col justify-center items-center cursor-pointer">
        <Image src="/icons/search.png" alt="Search" width={26} height={26} />
        <span className="mt-[9px] text-[10px]">Search</span>
      </div>
    </nav>
  );
};

export default TabMenu;
