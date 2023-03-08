import { ReactNode } from 'react';
import { useIsMobile } from '@/hooks';
import { ViewSizeWarn } from '@/components';

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  const [isMobile, isLoading] = useIsMobile();

  if (isLoading) return null;

  return <main>{isMobile ? children : <ViewSizeWarn />}</main>;
};

export default RootLayout;
