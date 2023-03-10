import Head from 'next/head';
import { ReactElement } from 'react';
import { Intro, TabMenuLayout, Top3Roof } from '@/components';

const MainPage = () => {
  return (
    <>
      <Head>
        <title>MusicPlayer: Top5</title>
        <meta name="description" content="Generated by hoon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <article className="h-full">
        <Intro />
        <Top3Roof />
      </article>
    </>
  );
};

MainPage.getLayout = (page: ReactElement) => {
  return <TabMenuLayout>{page}</TabMenuLayout>;
};

export default MainPage;
