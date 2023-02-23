import Image from 'next/image';

const Intro = () => {
  return (
    <div className="flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 w-[100vw] h-[100vh] bg-[#9B51E0] transition ease-out duration-1000 ">
      <Image src="/logo.png" alt="intro" width={134} height={63} priority />
    </div>
  );
};

export default Intro;
