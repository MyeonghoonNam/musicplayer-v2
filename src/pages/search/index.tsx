import Head from 'next/head';
import { ReactElement } from 'react';
import { TabMenuLayout } from '@/components';

const SearchPage = () => {
  return (
    <>
      <Head>
        <title>MusicPlayer: Search</title>
        <meta name="description" content="Generated by hoon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div>init search</div>
    </>
  );
};

SearchPage.getLayout = (page: ReactElement) => {
  return <TabMenuLayout>{page}</TabMenuLayout>;
};

export default SearchPage;
