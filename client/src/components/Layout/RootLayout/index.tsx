import { ReactNode } from 'react';
import { useIsMobile } from '@/hooks';
import VRootLayout from './view';

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  const [isMobile, isLoading] = useIsMobile();

  if (isLoading) return null;

  const props = {
    isMobile,
    children,
  };

  return <VRootLayout {...props} />;
};

export default RootLayout;
