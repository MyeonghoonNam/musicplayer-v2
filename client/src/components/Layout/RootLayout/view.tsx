import { ReactNode } from 'react';
import { ViewSizeWarn } from '@/components';
import * as Styled from './styled';

interface Props {
  isMobile: boolean;
  children: ReactNode;
}

const VRootLayout = ({ isMobile, children }: Props) => {
  return (
    <Styled.Container>
      {isMobile ? children : <ViewSizeWarn />}
    </Styled.Container>
  );
};

export default VRootLayout;
