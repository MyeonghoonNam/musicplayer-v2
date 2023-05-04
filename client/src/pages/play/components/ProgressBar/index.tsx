interface Props {
  value: number;
}

const ProgressBar = ({ value }: Props) => {
  return (
    <input type="range" min="0" max="1000" value={value} className="w-full" />
  );
};

export default ProgressBar;
