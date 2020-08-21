import { LitElement, html } from 'lit-element';

/* eslint-disable-next-line no-unused-vars */
import { RuxIcon } from '@astrouxds/rux-icon/rux-icon';
/* eslint-enable-next-line no-unused-vars */
import '@astrouxds/rux-assets/css/astro.tokens.css';

export class RuxNotification extends LitElement {
  static get properties() {
    return {
      message: {
        type: String,
      },
      status: {
        type: String,
      },
      target: {
        type: String,
        reflect: true,
      },
      closeAfter: {
        type: Number,
      },
      open: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  constructor() {
    super();
    this.message = '';
    this.status = 'standby';
    this.target = 'local';
    this.closeAfter = null;
    this.open = false;
  }

  updated() {
    if (this._closeAfter && this.open) {
      this._closeAfter = setTimeout(() => {
        this.open = false;
      }, this._closeAfter);
    }
  }

  _onClick() {
    clearTimeout(this._closeAfter);
    this.open = false;
  }

  // convert given time to miliseconds, enforce default 2s minimum delay
  get _closeAfter() {
    if (this.closeAfter && this.closeAfter <= 10) {
      // if the number is 10 or less, it must be ms
    }

    if ((this.closeAfter && this.closeAfter > 10000) || (this.closeAfter && this.closeAfter < 2000)) {
      // if this numner is larger than 10s or smaller than 2s, enforce minimum 2s delay
      this.closeAfter = 2000;
    }

    return this.closeAfter;
  }

  render() {
    return html`
      <style>
        :host {
          display: flex;
          justify-content: space-between;
          flex-wrap: nowrap;
          flex-grow: 1;
          align-items: center;
          align-content: center;

          top: -4.25rem;
          left: 0;

          height: 4.25rem;
          width: 100%;

          position: absolute;
          padding: 0 1.25rem;
          background-color: var(--colorStandbyLighten1, rgb(160, 232, 255));
          transition: top 0.5s ease;

          box-sizing: border-box;
          color: var(--colorBlack, rgb(0, 0, 0));
        }
        :host([open]) {
          top: 0;
        }

        :host,
        :host([status='standby']) {
          background-color: var(--colorStandbyLighten1, rgb(160, 232, 255));
          stroke: var(--colorStandbyDarken1, rgb(96, 168, 191));
          fill: var(--colorStandbyDarken1, rgb(96, 168, 191));
        }

        :host([status='normal']) {
          background-color: var(--colorNormalLighten2, rgb(173, 255, 128));
          stroke: var(--colorNormalDarken1, rgb(68, 191, 0));
          fill: var(--colorNormalDarken1, rgb(68, 191, 0));
        }

        :host([status='caution']) {
          background-color: var(--colorCautionLighten1, rgb(250, 237, 86));
          stroke: var(--colorCautionDarken1, rgb(186, 173, 22));
          fill: var(--colorCautionDarken1, rgb(186, 173, 22));
        }

        :host([status='critical']) {
          background-color: var(--colorCriticalLighten1, rgb(255, 100, 100));
          stroke: var(--colorCriticalDarken1, rgb(191, 36, 36));
          fill: var(--colorCriticalDarken1, rgb(191, 36, 36));
        }
      </style>

      <div class="rux-notification__message">${this.message}</div>
      <rux-icon
        role="button"
        label="Close notification"
        @click="${this._onClick}"
        icon="close-large"
        size="small"
      ></rux-icon>
    `;
  }
}
customElements.define('rux-notification', RuxNotification);
