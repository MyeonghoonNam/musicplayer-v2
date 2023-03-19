import { useEffect, useRef } from 'react';

const useTimeout = (callback: () => void, delay: number) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => savedCallback.current();
    const id = setTimeout(tick, delay);

    return () => clearTimeout(id);
  }, [delay]);
};

export default useTimeout;
