import Image from 'next/image';

import * as Styled from './styled';

interface Props {
  cover: string;
}

const MusicCover = ({ cover }: Props) => {
  return (
    <Styled.Container>
      <Image
        src={cover}
        alt="cover"
        width={50}
        height={50}
        className="inline-block rounded-[5px] mr-[16px]"
        priority
      />
    </Styled.Container>
  );
};

export default MusicCover;
