/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';

import type { ReturnType } from './types';

const useAudio = (url: string): ReturnType => {
  const [audio, setAudio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('');
  const [endTime, setEndTime] = useState('');

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
      const getControlProgress = () => {
        const audioProgress = (audio.currentTime / audio.duration) * 100;
        const controlProgress = audioProgress > 100 ? 100 : audioProgress;

        return controlProgress ? controlProgress * 10 : 0;
      };

      const getCurrentTime = () => {
        const currentMinute = String(Math.floor((audio.currentTime / 60) % 60));
        let currentSecond = String(Math.floor(audio.currentTime % 60));

        if (Number(currentSecond) < 10) {
          currentSecond = `0${currentSecond}`;
        }

        return `${currentMinute}:${currentSecond}`;
      };

      const getEndTime = () => {
        const totalTime = audio.duration;
        const endMinute = String(Math.floor(totalTime / 60));
        let endSecond = String(Math.floor(totalTime % 60));

        if (Number(endSecond) < 10) {
          endSecond = `0${endSecond}`;
        }

        return `${endMinute}:${endSecond}`;
      };

      setProgress(() => getControlProgress());
      setCurrentTime(() => getCurrentTime());
      setEndTime(() => getEndTime());
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

  return [playing, playToggle, progress, currentTime, endTime];
};

export default useAudio;
