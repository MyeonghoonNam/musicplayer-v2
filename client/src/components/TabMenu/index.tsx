import Link from 'next/link';
import { useRouter } from 'next/router';

import MusicController from '../MusicController';
import Text from './Text';

import { MENU } from './constants';

import * as Styled from './styled';

const TabMenu = () => {
  const { pathname } = useRouter();

  return (
    <Styled.Container>
      {MENU.map(({ id, name, value, path }) => (
        <Link
          key={id}
          href={path}
          className="flex flex-col justify-center items-center"
        >
          <MusicController
            mode={path === pathname ? `${value}_on` : `${value}_off`}
            size="middle"
          />

          <Text on={path === pathname} text={name} />
        </Link>
      ))}
    </Styled.Container>
  );
};

export default TabMenu;
