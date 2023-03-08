import { ReactNode } from 'react';
import RootLayout from '../RootLayout';
import { TabMenu } from '@/components';

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
