import { ReactNode } from 'react';
import { useIsMobile } from '@/hooks';
import { ViewSizeWarn } from '@/components';

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  const [isMobile, isLoading] = useIsMobile();

  if (isLoading) return null;

  return (
    <main className="w-[100%] h-[calc(100vh-80px)]">
      {isMobile ? children : <ViewSizeWarn />}
    </main>
  );
};

export default RootLayout;
