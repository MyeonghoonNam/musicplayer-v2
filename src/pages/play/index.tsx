import { ReactElement } from 'react';
import { RootLayout } from '@/components';

const PlayPage = () => {
  return <div>init play page</div>;
};

PlayPage.getLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>;
};

export default PlayPage;
