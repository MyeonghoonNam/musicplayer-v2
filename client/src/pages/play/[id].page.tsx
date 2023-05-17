import { ReactElement, useCallback } from 'react';
import { useRouter } from 'next/router';

import { Layout } from '@/components';
import { useAudio } from '@/hooks';

import { usePlayMusic } from './hooks';
import VPlayPage from './view';

const PlayPage = () => {
  const router = useRouter();
  const { data: music } = usePlayMusic(router.query.id as string);

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

  if (!music) return null;

  const props = {
    music,
    playing,
    currentTime,
    changeAudioCurrentTime,
    endTime,
    handlePlayClick,
    handleNextClick,
    handlePrevClick,
    handleBackClick,
  };

  return <VPlayPage {...props} />;
};

PlayPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default PlayPage;
