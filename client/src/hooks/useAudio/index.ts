/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';

import type { ReturnType } from './types';

const useAudio = (url: string): ReturnType => {
  const [audio, setAudio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

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

    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    if (!url) return;

    const endListener = () => setPlaying(false);

    setPlaying(true);
    audio.addEventListener('ended', endListener);

    return () => {
      audio.pause();
      audio.removeEventListener('ended', endListener);
    };
  }, [audio]);

  return [playing, playToggle];
};

export default useAudio;
