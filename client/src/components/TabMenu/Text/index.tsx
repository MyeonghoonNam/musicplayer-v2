import type { TabMenu } from './types';

import * as Styled from './styled';

interface Props {
  text: TabMenu;
  on: boolean;
}

const Text = ({ text, on }: Props) => {
  return <Styled.Container on={on}>{text}</Styled.Container>;
};

export default Text;
