import { ReactNode } from 'react';
import { useIsMobile } from '@/hooks';
import VLayout from './view';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const [isMobile, isLoading] = useIsMobile();

  if (isLoading) return null;

  const props = {
    isMobile,
    children,
  };

  return <VLayout {...props} />;
};

export default Layout;
