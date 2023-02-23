import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const useIsMobile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(true);
  const mobile = useMediaQuery({ query: '(max-width:767px)' });

  useEffect(() => {
    setIsMobile(mobile);
    setIsLoading(false);
  }, [mobile]);

  return [isMobile, isLoading];
};

export default useIsMobile;
