const getEndTimeToString = (duration: number) => {
  const endMinute = String(Math.floor(duration / 60));
  let endSecond = String(Math.floor(duration % 60));

  if (Number(endSecond) < 10) {
    endSecond = `0${endSecond}`;
  }

  return `${endMinute}:${endSecond}`;
};

export default getEndTimeToString;
