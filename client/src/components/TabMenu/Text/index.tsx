import VText from './view';

import type { TabMenu } from './types';

interface Props {
  text: TabMenu;
  on: boolean;
}

const Text = ({ text, on }: Props) => {
  const props = { text, on };

  return <VText {...props} />;
};

export default Text;
