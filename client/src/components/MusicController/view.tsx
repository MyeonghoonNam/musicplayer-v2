import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  onClick?: () => Promise<void> | void;
  disabled?: boolean;
}

const VMusicController = ({
  src,
  alt,
  width,
  height,
  onClick,
  disabled,
}: Props) => {
  return (
    <button type="button" onClick={onClick} disabled={disabled}>
      <Image src={src} alt={alt} width={width} height={height} />
    </button>
  );
};

export default VMusicController;
