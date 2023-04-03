import Image from 'next/image';

import {
  MUSIC_CONTROLLER_IMAGE_MAP,
  MUSIC_CONTROLLER_SIZE_MAP,
} from './constants';

import type { MusicControllerMode, MusicControllerSize } from './types';

interface Props {
  mode: MusicControllerMode;
  size: MusicControllerSize;
  onClick?: () => Promise<void> | void;
  disabled?: boolean;
}

const MusicController = ({ mode, size, onClick, disabled }: Props) => {
  const { src, alt } = MUSIC_CONTROLLER_IMAGE_MAP[mode];
  const { width, height } = MUSIC_CONTROLLER_SIZE_MAP[size];

  return (
    <button type="button" onClick={onClick} disabled={disabled}>
      <Image src={src} alt={alt} width={width} height={height} />
    </button>
  );
};

export default MusicController;
