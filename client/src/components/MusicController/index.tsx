import Image from 'next/image';
import { ReactNode } from 'react';

import {
  MUSIC_CONTROLLER_IMAGE_MAP,
  MUSIC_CONTROLLER_SIZE_MAP,
} from './constants';

interface Props {
  onClick: () => Promise<void>;
  children: ReactNode;
}

const MusicController = ({ onClick, children }: Props) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

MusicController.Play = ({ onClick }: Pick<Props, 'onClick'>) => {
  const { src, alt } = MUSIC_CONTROLLER_IMAGE_MAP.play;
  const { width, height } = MUSIC_CONTROLLER_SIZE_MAP.basic;

  return (
    <MusicController onClick={onClick}>
      <Image src={src} alt={alt} width={width} height={height} />
    </MusicController>
  );
};

MusicController.Plus = ({ onClick }: Pick<Props, 'onClick'>) => {
  const { src, alt } = MUSIC_CONTROLLER_IMAGE_MAP.plus;
  const { width, height } = MUSIC_CONTROLLER_SIZE_MAP.basic;

  return (
    <MusicController onClick={onClick}>
      <Image src={src} alt={alt} width={width} height={height} />
    </MusicController>
  );
};

export default MusicController;
