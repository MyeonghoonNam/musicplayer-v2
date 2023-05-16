import ToastItem from '../ToastItem';

import type { Toast } from '../types';

import * as Styled from './styled';

interface Props {
  toasts: Toast[];
  removeToast: (id: string) => void;
}

const VToastManager = ({ toasts, removeToast }: Props) => {
  return (
    <Styled.Container>
      {toasts.map(({ id, message, duration }) => (
        <ToastItem
          key={id}
          message={message}
          duration={duration}
          onDone={() => removeToast(id)}
        />
      ))}
    </Styled.Container>
  );
};

export default VToastManager;
