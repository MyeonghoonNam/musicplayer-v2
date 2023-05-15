import { ReactNode } from 'react';
import Warn from './Warn';

import * as Styled from './styled';

interface Props {
  isMobile: boolean;
  children: ReactNode;
}

const VLayout = ({ isMobile, children }: Props) => {
  return <Styled.Container>{isMobile ? children : <Warn />}</Styled.Container>;
};

export default VLayout;
