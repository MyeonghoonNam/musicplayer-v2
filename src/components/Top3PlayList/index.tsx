import Image from 'next/image';
import { useTop3Musics } from '@/queries';

const Top3PlayList = () => {
  const { data: musics } = useTop3Musics();

  return (
    <ol className="h-[65%] pt-[18px] [&>li+li]:mt-[10px]">
      {musics?.map(({ id, cover, title, artists }, index) => (
        <li key={id} className="flex">
          <span className="flex justify-center items-center w-[48px] text-[14px] font-bold text-[#9b51e0]">
            {index + 1}
          </span>

          <div className="flex grow justify-between pr-[20px]">
            <div className="flex">
              <Image
                src={cover}
                alt="cover"
                width={50}
                height={50}
                className="inline-block rounded-[5px] mr-[16px]"
                priority
              />

              <div className="flex flex-col justify-center">
                <strong className="text-[14px] leading-[20px] font-bold">
                  {title}
                </strong>
                <em>{artists.join(', ')}</em>
              </div>
            </div>

            <div className="flex items-center [&>button+button]:ml-[8px]">
              <button type="button">
                <Image
                  src="/icons/play.png"
                  alt="재생"
                  width={20}
                  height={20}
                />
              </button>
              <button type="button">
                <Image
                  src="/icons/plus.png"
                  alt="추가"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Top3PlayList;
