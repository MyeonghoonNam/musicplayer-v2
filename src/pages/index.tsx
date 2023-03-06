import Head from 'next/head';
import { Intro, TapMenu } from '@/components';

const Main = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by hoon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Intro />

      <div className="w-[100vw] bg-[#9B51E0] underline">Home</div>

      <TapMenu />
    </>
  );
};

export default Main;
