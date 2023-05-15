import Link from 'next/link';

import MusicController from '../MusicController';
import Text from './Text';

import { MENU } from './constants';

import * as Styled from './styled';

interface Props {
  pathname: string;
}

const VTabMenu = ({ pathname }: Props) => {
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

export default VTabMenu;
