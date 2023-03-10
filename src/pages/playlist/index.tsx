import Head from 'next/head';
import { ReactElement } from 'react';
import { TabMenuLayout } from '@/components';

const PlayList = () => {
  return (
    <>
      <Head>
        <title>MusicPlayer: PlayList</title>
        <meta name="description" content="Generated by hoon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div>
        <div>init PlayList</div>
      </div>
    </>
  );
};

PlayList.getLayout = (page: ReactElement) => {
  return <TabMenuLayout>{page}</TabMenuLayout>;
};

export default PlayList;
