import Image from 'next/image';

import * as Styled from './styled';

interface Props {
  source: string;
}

const MusicCover = ({ source }: Props) => {
  return (
    <Styled.Container>
      <Image
        src={source}
        alt="music-cover"
        className="w-full h-full object-cover"
        width={292}
        height={292}
        priority
      />
    </Styled.Container>
  );
};

export default MusicCover;
