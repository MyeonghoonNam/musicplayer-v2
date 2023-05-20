import { ReactElement, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import { Layout } from '@/components';
import { useAudio } from '@/hooks';
import { playRotateState } from '@/store/state';

import { usePlayMusic } from './hooks';
import VPlayPage from './view';

const PlayPage = () => {
  const router = useRouter();
  const { data: music } = usePlayMusic(router.query.id as string);
  const [rotate, setRotate] = useRecoilState(playRotateState);
  const [playing, playToggle, currentTime, changeAudioCurrentTime, endTime] =
    useAudio(music?.source as string);

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

  const handleRotateClick = useCallback(() => {
    setRotate((state) => !state);
  }, [setRotate]);

  if (!music) return null;

  const props = {
    music,
    playing,
    rotate,
    currentTime,
    changeAudioCurrentTime,
    endTime,
    handlePlayClick,
    handleNextClick,
    handlePrevClick,
    handleBackClick,
    handleRotateClick,
  };

  return <VPlayPage {...props} />;
};

PlayPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default PlayPage;
