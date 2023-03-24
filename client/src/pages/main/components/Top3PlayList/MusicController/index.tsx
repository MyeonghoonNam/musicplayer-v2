import Image from 'next/image';
import { useCallback, useMemo } from 'react';
import { Toast } from '@/components';
import { useAddPlayList } from '@/pages/main/hooks';

interface Props {
  id: string;
}

const MusicController = ({ id }: Props) => {
  const { mutateAsync: addPlayList } = useAddPlayList();

  const toastDuration = useMemo(() => 2000, []);

  const handleAddClick = useCallback(
    async (id: string) => {
      await addPlayList(id);
      Toast.show('보관함에 추가되었습니다.', toastDuration);
    },
    [addPlayList, toastDuration],
  );

  return (
    <div className="flex items-center [&>button+button]:ml-[8px]">
      <button type="button">
        <Image src="/icons/play.png" alt="재생" width={20} height={20} />
      </button>
      <button type="button" onClick={() => handleAddClick(id)}>
        <Image src="/icons/plus.png" alt="추가" width={20} height={20} />
      </button>
    </div>
  );
};

export default MusicController;
