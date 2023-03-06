import Image from 'next/image';

const TapMenu = () => {
  return (
    <nav className="fixed bottom-0 flex w-full h-[80px] justify-around bg-[#E0E0E0]">
      <div className="flex flex-col justify-center items-center">
        <Image src="/icons/music.png" alt="Top 5" width={26} height={26} />
        <span>Top 5</span>
      </div>

      <div className="flex flex-col justify-center items-center">
        <Image src="/icons/layers.png" alt="Play List" width={26} height={26} />
        <span>Play List</span>
      </div>

      <div className="flex flex-col justify-center items-center">
        <Image src="/icons/search.png" alt="Search" width={26} height={26} />
        <span>Search</span>
      </div>
    </nav>
  );
};

export default TapMenu;
