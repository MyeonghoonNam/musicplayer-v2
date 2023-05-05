const getControlProgress = (currentTime: number, endTime: number) => {
  const audioProgress = (currentTime / endTime) * 100;
  const controlProgress = audioProgress > 100 ? 100 : audioProgress;

  return controlProgress ? controlProgress * 10 : 0;
};

export default getControlProgress;
