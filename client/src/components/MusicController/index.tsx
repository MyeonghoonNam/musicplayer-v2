import VMusicController from './view';

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

  const props = {
    src,
    alt,
    width,
    height,
    onClick,
    disabled,
  };

  return <VMusicController {...props} />;
};

export default MusicController;
