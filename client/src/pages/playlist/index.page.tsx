import Head from 'next/head';
import { ReactElement } from 'react';
import { TabMenuLayout } from '@/components';
import { Title, PlayList } from './components';

import * as Styled from './styled';

const PlayListPage = () => {
  return (
    <>
      <Head>
        <title>MusicPlayer: PlayList</title>
        <meta name="description" content="Generated by hoon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Styled.Container>
        <Title />
        <PlayList />
      </Styled.Container>
    </>
  );
};

PlayListPage.getLayout = (page: ReactElement) => {
  return <TabMenuLayout>{page}</TabMenuLayout>;
};

export default PlayListPage;