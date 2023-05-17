import { ChangeEvent, useCallback } from 'react';
import VProgressBar from './view';

interface Props {
  value: number;
  duration: number;
  changeAudioCurrentTime: (time: number) => void;
}

const ProgressBar = ({ value, duration, changeAudioCurrentTime }: Props) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const targetTime = (duration * Number(e.target.value)) / 1000;
      changeAudioCurrentTime(targetTime);
    },
    [duration, changeAudioCurrentTime],
  );

  const props = {
    value,
    handleChange,
  };

  return <VProgressBar {...props} />;
};

export default ProgressBar;
