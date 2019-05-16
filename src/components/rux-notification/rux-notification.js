import { LitElement, html } from "lit-element";
export class RuxNotification extends LitElement {
  static get properties() {
    return {
      message: {
        type: String
      },
      status: {
        type: String
      },
      target: {
        type: String,
        reflect: true
      },
      closeAfter: {
        type: Number,
        attribute: "close-after"
      },
      open: {
        type: Boolean,
        reflect: true
      }
    };
  }

  constructor() {
    super();
    this.message = "";
    this.status = "standby";
    this.target = "local";
    this.closeAfter = 3000;
    this.open = false;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  updated() {
    if (this._closeAfter && this.open) {
      this._closeAfter = setTimeout(() => {
        this.open = false;
      }, this._closeAfter);
    }
  }

  _onClick(e) {
    clearTimeout(this._closeAfter);
    this.open = false;
  }

  // convert given time to miliseconds, enforce default 2s minimum delay
  get _closeAfter() {
    if (this.closeAfter && this.closeAfter <= 10) {
      // if the number is 10 or less, it must be ms
      this.closeAfter *= 1000;
    }
    if (this.closeAfter > 10000 || this.closeAfter < 2000) {
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

        .rux-notification_close-button {
          border: 3px solid var(--colorStandbyDarken1, rgb(96, 168, 191));
          color: var(--colorStandbyDarken1, rgb(96, 168, 191));

          background-color: transparent;

          height: 2.2rem;
          width: 2.2rem;
          border-radius: 100%;

          position: relative;

          margin-left: auto;
          margin-right: 2rem;

          display: flex;
          justify-content: center;
          align-items: center;
        }

        .rux-notification_close-button::after,
        .rux-notification_close-button::before {
          display: block;
          position: absolute;

          height: 2px;
          width: 66%;

          margin-left: -32%;
          margin-top: -1px;

          content: "";

          background-color: var(--colorStandbyDarken1, rgb(96, 168, 191));
        }

        @supports (--css: variables) {
          .rux-notification_close-button::after,
          .rux-notification_close-button::before {
            margin: 0;
          }
        }

        .rux-notification_close-button::after {
          transform: rotate(-45deg);
        }

        .rux-notification_close-button::before {
          transform: rotate(45deg);
        }

        :host([status="critical"]) {
          background-color: var(--colorCriticalLighten1, rgb(255, 100, 100));
        }
        :host([status="critical"]) .rux-notification_close-button {
          border-color: var(--colorCriticalDarken1, rgb(191, 36, 36));
        }
        :host([status="critical"]) .rux-notification_close-button::after,
        :host([status="critical"]) .rux-notification_close-button::before {
          background-color: var(--colorCriticalDarken1, rgb(191, 36, 36));
        }

        :host([status="caution"]) {
          background-color: var(--colorCautionLighten1, rgb(250, 237, 86));
        }
        :host([status="caution"]) .rux-notification_close-button {
          border-color: var(--colorCautionDarken1, rgb(186, 173, 22));
        }
        :host([status="caution"]) .rux-notification_close-button::after,
        :host([status="caution"]) .rux-notification_close-button::before {
          background-color: var(--colorCautionDarken1, rgb(186, 173, 22));
        }

        :host([status="normal"]) {
          background-color: var(--colorNormalLighten2, rgb(173, 255, 128));
        }
        :host([status="normal"]) .rux-notification_close-button {
          border-color: var(--colorNormalDarken1, rgb(68, 191, 0));
        }
        :host([status="normal"]) .rux-notification_close-button::after,
        :host([status="normal"]) .rux-notification_close-button::before {
          background-color: var(--colorNormalDarken1, rgb(68, 191, 0));
        }

        :host([status="standby"]) {
          background-color: var(--colorStandbyLighten1, rgb(160, 232, 255));
        }
        :host([status="standby"]) .rux-notification_close-button {
          border-color: var(--colorStandbyDarken1, rgb(96, 168, 191));
        }
        :host([status="standby"]) .rux-notification_close-button::after,
        :host([status="standby"]) .rux-notification_close-button::before {
          background-color: var(--colorStandbyDarken1, rgb(96, 168, 191));
        }
      </style>

      <div class="rux-notification__message">${this.message}</div>
      <button
        @click="${this._onClick}"
        class="rux-notification_close-button"
        title="Close"
      ></button>
    `;
  }
}
customElements.define("rux-notification", RuxNotification);
