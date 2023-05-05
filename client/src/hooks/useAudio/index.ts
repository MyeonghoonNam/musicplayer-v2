/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';

import type { ReturnType } from './types';

const useAudio = (url: string): ReturnType => {
  const [audio, setAudio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

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
      setCurrentTime(() => audio.currentTime);
      setEndTime(() => audio.duration);
    };

    const endedListener = () => setPlaying(false);

    setPlaying(true);
    setCurrentTime(0);
    setEndTime(0);

    audio.addEventListener('timeupdate', timeUpdateListener);
    audio.addEventListener('ended', endedListener);

    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', timeUpdateListener);
      audio.removeEventListener('ended', endedListener);
    };
  }, [audio]);

  return [playing, playToggle, currentTime, setCurrentTime, endTime];
};

export default useAudio;
