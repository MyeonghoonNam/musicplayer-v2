import ReactDOM from 'react-dom/client';
import ToastManager from './ToastManager';

import type { CreateToast } from './types';

class Toast {
  portal!: HTMLElement;

  createToast!: CreateToast;

  constructor() {
    const portalId = 'toast-portal';
    const portalElement =
      typeof window === 'object' && document.getElementById(portalId);

    if (portalElement) {
      this.portal = portalElement;
    } else if (typeof window === 'object') {
      this.portal = document.createElement('div');
      this.portal.id = portalId;

      document.body.appendChild(this.portal);

      const handleBind = (createToast: CreateToast) => {
        this.createToast = createToast;
      };

      const root = ReactDOM.createRoot(this.portal);
      root.render(<ToastManager onBind={handleBind} />);
    }
  }

  show(message: string, duration = 2000) {
    this.createToast(message, duration);
  }
}

export default new Toast();
