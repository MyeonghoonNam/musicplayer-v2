/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import useInterval from '../useInterval';

import type { ReturnType } from './types';

const useAudio = (url: string): ReturnType => {
  const [audio, setAudio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const [intervaler, setIntervaler] = useState(0);
  const [value, setValue] = useState(0);

  const playToggle = useCallback(() => {
    setPlaying((prev) => !prev);
  }, [playing]);

  useEffect(() => {
    if (!url) return;

    if (playing) {
      audio.pause();
    }

    setAudio(() => new Audio(url));
    setPlaying(false);
  }, [url]);

  useEffect(() => {
    if (!url) return;

    playing ? audio.play().catch(() => setPlaying(false)) : audio.pause();
  }, [playing]);

  useEffect(() => {
    if (!url) return;

    const timeUpdateListener = () => {
      if (intervaler % 3 !== 0) return;

      const audioProgress = (audio.currentTime / audio.duration) * 100;
      const controlProgress = audioProgress > 100 ? 100 : audioProgress;

      setValue(() => (controlProgress ? controlProgress * 10 : 0));
    };

    const endedListener = () => setPlaying(false);

    setPlaying(true);

    audio.addEventListener('timeupdate', timeUpdateListener);
    audio.addEventListener('ended', endedListener);

    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', timeUpdateListener);
      audio.removeEventListener('ended', endedListener);
    };
  }, [audio]);

  useInterval(() => {
    setIntervaler((prev: number) => prev + 1);
  }, 1000);

  return [playing, playToggle, value];
};

export default useAudio;
