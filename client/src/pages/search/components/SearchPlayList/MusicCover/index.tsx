import Image from 'next/image';

import * as Styled from './styled';

interface Props {
  cover: string;
}

const MusicCover = ({ cover }: Props) => {
  return (
    <Styled.Container>
      <Image src={cover} alt="cover" width={50} height={50} priority />
    </Styled.Container>
  );
};

export default MusicCover;
