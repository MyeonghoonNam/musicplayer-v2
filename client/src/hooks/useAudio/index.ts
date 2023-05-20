/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { playRotateState } from '@/store/state';
import type { ReturnType } from './types';

const useAudio = (url: string): ReturnType => {
  const [audio, setAudio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const playRotate = useRecoilValue(playRotateState);

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

    const endedListener = () => {
      if (playRotate) {
        audio.load();
      } else {
        setPlaying(false);
      }
    };

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

  const changeAudioCurrentTime = useCallback(
    (targetTime: number) => {
      audio.currentTime = targetTime;
      setCurrentTime(() => targetTime);
    },
    [audio.currentTime],
  );

  return [playing, playToggle, currentTime, changeAudioCurrentTime, endTime];
};

export default useAudio;
