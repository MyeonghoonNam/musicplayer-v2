import { useCallback, useEffect, useState } from 'react';
import { v4 } from 'uuid';

import VToastManager from './view';

import type { Toast, CreateToast } from '../types';

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

  const props = {
    toasts,
    removeToast,
  };

  return <VToastManager {...props} />;
};

export default ToastManager;
