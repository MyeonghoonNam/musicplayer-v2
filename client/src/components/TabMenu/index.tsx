import { useRouter } from 'next/router';

import VTabMenu from './view';

const TabMenu = () => {
  const { pathname } = useRouter();
  const props = { pathname };

  return <VTabMenu {...props} />;
};

export default TabMenu;
