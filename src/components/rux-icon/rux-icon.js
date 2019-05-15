import { LitElement, html } from 'lit-element';

export class RuxIcon extends LitElement {
  static get properties() {
    return {
      icon: {
        type: String,
      },
      size: {
        type: Number,
      },
      color: {
        type: String,
      },
      library: {
        type: String,
      },
    };
  }

  constructor() {
    super();

    this.size = 128;
    this.library = '/icons/rux-icons.svg';
  }

  render() {
    return html`
      <style>
        :host {
          display: inline-block;
          line-height: 0;
          fill: var(--iconDefaultColor, rgb(77, 172, 255));
          height: var(--icon-size--default, 44px);
          width: var(--icon-size--default, 44px);
        }

        :host svg {
          height: 100%;
          width: auto;
        }

        /* small variant */
        :host(.rux-icon--small) {
          height: var(--icon-size--small, 32px);
          width: var(--icon-size--small, 32px);
        }

        /* status symbol icon size */
        :host(.rux-icon--status) {
          height: var(--icon-size--status, 12px);
          width: var(--icon-size--status, 12px);
        }

        :host(.rux-icon--button) {
          height: var(--icon-size--button, 19px);
          width: var(--icon-size--button, 19px);
          fill: var(--icon-color--button);
        }

        :host(.rux-icon--button--large) {
          height: var(--icon-size--button-large, 24px);
          width: var(--icon-size--button-large, 24px);
        }

        ::slotted(div) {
          margin-top: -54%;
        }
      </style>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
      >
        <use href="/icons/monitoring.svg#${this.icon}"></use>
      </svg>
      <slot></slot>
    `;
  }
}
customElements.define('rux-icon', RuxIcon);
