import { ChangeEvent } from 'react';

interface Props {
  value: number;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const VProgressBar = ({ value, handleChange }: Props) => {
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

export default VProgressBar;
