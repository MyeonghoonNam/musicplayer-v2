import { ChangeEvent } from 'react';

interface Props {
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const VInput = ({ value, handleChange }: Props) => {
  return (
    <input
      className="w-full h-[36px] pl-[24px] pr-[48px] rounded-[35px] bg-[#f2f2f2]"
      type="text"
      placeholder="Search"
      value={value}
      onChange={handleChange}
    />
  );
};

export default VInput;
