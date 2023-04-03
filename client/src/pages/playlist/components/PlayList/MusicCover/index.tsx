import Image from 'next/image';

import * as Styled from './styled';

interface Props {
  cover: string;
  alt: string;
  width: number;
  height: number;
}

const MusicCover = ({ cover, alt, width, height }: Props) => {
  return (
    <Styled.Container>
      <Image
        src={cover}
        alt={alt}
        width={width}
        height={height}
        className="rounded-[5px]"
        priority
      />
    </Styled.Container>
  );
};

export default MusicCover;
