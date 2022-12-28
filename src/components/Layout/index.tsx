import useIsMobile from 'hooks/useIsMobile';
import ViewSizeWarn from '@components/ViewSizeWarn';

import type { Props } from './types';

const Layout = ({ children }: Props) => {
	const isMobile = useIsMobile();

	return <main>{isMobile ? children : <ViewSizeWarn />}</main>;
};

export default Layout;
