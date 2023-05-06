import { ChangeEvent, useCallback } from 'react';

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

  return (
    <input
      type="range"
      min="0"
      max="1000"
      value={value}
      onChange={handleChange}
      className="w-full"
    />
  );
};

export default ProgressBar;
