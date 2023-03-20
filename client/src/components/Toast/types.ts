export interface Toast {
  id: string;
  message: string;
  duration: number;
}

export type CreateToast = (message: string, duration: number) => void;
