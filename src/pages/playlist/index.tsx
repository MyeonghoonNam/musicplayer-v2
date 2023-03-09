import { ReactElement } from 'react';
import { TabMenuLayout } from '@/components';

const PlayList = () => {
  return (
    <div>
      <div>init PlayList</div>
    </div>
  );
};

PlayList.getLayout = (page: ReactElement) => {
  return <TabMenuLayout>{page}</TabMenuLayout>;
};

export default PlayList;
