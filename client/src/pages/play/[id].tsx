import Head from 'next/head';
import { ReactElement, useCallback } from 'react';
import { useRouter } from 'next/router';

import { MusicController, RootLayout } from '@/components';
import { useAudio } from '@/hooks';

import {
  BackButton,
  MusicArtists,
  MusicCover,
  MusicTitle,
  ProgressBar,
} from './components';
import { usePlayMusic } from './hooks';

import * as Styled from './styled';

const PlayPage = () => {
  const router = useRouter();
  const { data: music } = usePlayMusic(router.query.id as string);
  const [playing, playToggle, value] = useAudio(music?.source as string);

  const handlePlayClick = useCallback(() => {
    playToggle();
  }, [playToggle]);

  const handleNextClick = useCallback(() => {
    if (music) {
      router.replace(`${music.nextId}`);
    }
  }, [router, music]);

  const handlePrevClick = useCallback(() => {
    if (music) {
      router.replace(`${music.prevId}`);
    }
  }, [router, music]);

  const handleBackClick = useCallback(() => {
    router.back();
  }, [router]);

  if (!music) return null;

  return (
    <>
      <Head>
        <title>MusicPlayer: Play</title>
        <meta name="description" content="Generated by hoon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Styled.Container>
        <BackButton onClick={handleBackClick} />
        <MusicCover source={music.cover} />

        <Styled.ContentsContainer>
          <MusicTitle title={music.title} />
          <MusicArtists artists={music.artists} />
        </Styled.ContentsContainer>

        <Styled.ControllerContainer>
          <MusicController mode="repeat_off" size="middle" />
          <MusicController
            mode="backward"
            size="middle"
            onClick={handlePrevClick}
          />
          <MusicController
            mode={playing ? 'pause' : 'play'}
            size="big"
            onClick={handlePlayClick}
          />
          <MusicController
            mode="forward"
            size="middle"
            onClick={handleNextClick}
          />
          <MusicController mode="rotate_off" size="middle" />
        </Styled.ControllerContainer>

        <Styled.ProgressBarContainer>
          <ProgressBar value={value} />
          {/* ProgressTime */}
        </Styled.ProgressBarContainer>
      </Styled.Container>
    </>
  );
};

PlayPage.getLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>;
};

export default PlayPage;
