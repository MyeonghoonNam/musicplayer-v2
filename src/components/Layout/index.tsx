import { useIsMobile } from '@/hooks';
import { ViewSizeWarn } from '@/components';

import type { Props } from './types';

const Layout = ({ children }: Props) => {
  const [isMobile, isLoading] = useIsMobile();

  if (isLoading) return null;

  return <main>{isMobile ? children : <ViewSizeWarn />}</main>;
};

export default Layout;
