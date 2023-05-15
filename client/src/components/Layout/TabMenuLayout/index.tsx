import { ReactNode } from 'react';
import { TabMenu } from '@/components';
import RootLayout from '../RootLayout';

interface Props {
  children: ReactNode;
}

const TabMenuLayout = ({ children }: Props) => {
  return (
    <RootLayout>
      {children}
      <TabMenu />
    </RootLayout>
  );
};

export default TabMenuLayout;
