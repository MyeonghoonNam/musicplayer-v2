import Image from 'next/image';

import * as Styled from './styled';

interface Props {
  cover: string;
  width: number;
  height: number;
}

const MusicCover = ({ cover, width, height }: Props) => {
  return (
    <Styled.Container>
      <Image
        src={cover}
        alt="cover"
        width={width}
        height={height}
        className="inline-block rounded-[5px] mr-[16px]"
        priority
      />
    </Styled.Container>
  );
};

export default MusicCover;
