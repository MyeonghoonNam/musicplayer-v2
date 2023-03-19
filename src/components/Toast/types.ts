export interface Toast {
  message: string;
  duration: number;
}

export type CreateToast = (message: string, duration: number) => void;
