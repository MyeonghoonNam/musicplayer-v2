import Head from 'next/head';

import { MusicController } from '@/components';

import {
  getControlProgress,
  getCurrentTimeToString,
  getEndTimeToString,
} from '@/utils';

import type { Music } from '@/interfaces';

import {
  BackButton,
  MusicArtists,
  MusicCover,
  MusicTitle,
  ProgressBar,
  ProgressTime,
} from './components';

import * as Styled from './styled';

interface Props {
  music: Music;
  playing: boolean;
  rotate: boolean;
  repeat: boolean;
  currentTime: number;
  changeAudioCurrentTime: (time: number) => void;
  endTime: number;
  handlePlayClick: () => void;
  handleNextClick: () => void;
  handlePrevClick: () => void;
  handleBackClick: () => void;
  handleRotateClick: () => void;
  handleRepeatClick: () => void;
}

const VPlayPage = ({
  music,
  playing,
  rotate,
  repeat,
  currentTime,
  changeAudioCurrentTime,
  endTime,
  handlePlayClick,
  handleNextClick,
  handlePrevClick,
  handleBackClick,
  handleRotateClick,
  handleRepeatClick,
}: Props) => {
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
          <MusicController
            mode={repeat ? 'repeat_on' : 'repeat_off'}
            size="middle"
            onClick={handleRepeatClick}
          />
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
          <MusicController
            mode={rotate ? 'rotate_on' : 'rotate_off'}
            size="middle"
            onClick={handleRotateClick}
          />
        </Styled.ControllerContainer>

        <Styled.ProgressBarContainer>
          <ProgressBar
            value={getControlProgress(currentTime, endTime)}
            duration={endTime}
            changeAudioCurrentTime={changeAudioCurrentTime}
          />
          <ProgressTime
            currentTime={getCurrentTimeToString(currentTime)}
            endTime={getEndTimeToString(endTime)}
          />
        </Styled.ProgressBarContainer>
      </Styled.Container>
    </>
  );
};

export default VPlayPage;
