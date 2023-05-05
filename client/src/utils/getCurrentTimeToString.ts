const getCurrentTimeToString = (currentTime: number) => {
  const currentMinute = String(Math.floor((currentTime / 60) % 60));
  let currentSecond = String(Math.floor(currentTime % 60));

  if (Number(currentSecond) < 10) {
    currentSecond = `0${currentSecond}`;
  }

  return `${currentMinute}:${currentSecond}`;
};

export default getCurrentTimeToString;
