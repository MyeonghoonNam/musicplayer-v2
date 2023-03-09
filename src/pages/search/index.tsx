import { ReactElement } from 'react';
import { TabMenuLayout } from '@/components';

const SearchPage = () => {
  return (
    <div>
      <div>init search</div>
    </div>
  );
};

SearchPage.getLayout = (page: ReactElement) => {
  return <TabMenuLayout>{page}</TabMenuLayout>;
};

export default SearchPage;
