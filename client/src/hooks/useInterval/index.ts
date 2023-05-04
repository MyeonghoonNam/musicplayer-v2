import { useEffect, useRef } from 'react';

const useInterval = (callback: () => void, delay?: number) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    if (!delay) return;

    const id = setInterval(() => savedCallback.current(), delay);

    return () => clearInterval(id);
  }, [delay]);
};

export default useInterval;
