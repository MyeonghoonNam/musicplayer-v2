import { useCallback, useEffect, useState } from 'react';
import { v4 } from 'uuid';

import ToastItem from './ToastItem';

import type { Toast, CreateToast } from './types';

interface Props {
  onBind: (fn: CreateToast) => void;
}

const ToastManager = ({ onBind }: Props) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const createToast = useCallback<CreateToast>((message, duration) => {
    const toast = {
      id: v4(),
      message,
      duration,
    };

    setToasts((state) => [toast, ...state]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((state) => state.filter((toast) => toast.id !== id));
  }, []);

  useEffect(() => {
    onBind(createToast);
  }, [onBind, createToast]);

  return (
    <div className="fixed bottom-[90px] w-full px-[5px] z-1500">
      {toasts.map(({ id, message, duration }) => (
        <ToastItem
          key={id}
          message={message}
          duration={duration}
          onDone={() => removeToast(id)}
        />
      ))}
    </div>
  );
};

export default ToastManager;
