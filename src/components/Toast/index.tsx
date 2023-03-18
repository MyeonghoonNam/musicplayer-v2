import ReactDOM from 'react-dom';

class Toast {
  portal: HTMLElement;

  constructor() {
    const portalId = 'toast-portal';
    const portalElement = document.getElementById(portalId);

    if (portalElement) {
      this.portal = portalElement;
    } else {
      this.portal = document.createElement('div');
      this.portal.id = portalId;

      document.body.appendChild(this.portal);
    }

    // Toast 기능 관리를 위한 Manager 구현
    // ReactDOM.render();
  }
}

export default new Toast();
