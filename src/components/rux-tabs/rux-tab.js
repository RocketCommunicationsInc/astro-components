import { LitElement, html } from 'lit-element';

export class RuxTab extends LitElement {
  static get properties() {
    return {
      selected: {
        type: Boolean,
        reflect: true,
      },
      disabled: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  constructor() {
    super();
    this.selected = false;
    this.disabled = false;
  }

  connectedCallback() {
    super.connectedCallback();

    // set the role to tab
    this.setAttribute('role', 'tab');

    if (this.parentElement.getAttributeNode('small')) {
      this.setAttribute('small', '');
    }
  }

  render() {
    return html`
      <style>
        :host {
          box-sizing: border-box;

          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 2rem;
          margin: 0;

          min-width: 5rem;

          text-decoration: none;

          color: var(--tabTextColor, rgb(77, 172, 255));
        }

        :host span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        :host([small]) {
          min-width: 2rem;
        }

        :host([small][selected]) {
          box-shadow: inset 0 -3px 0 var(--tabSelectedBorderColor, rgb(77, 172, 255));
        }

        :host([selected]) {
          color: var(--tabSelectedTextColor, rgb(255, 255, 255));
          box-shadow: inset 0 -5px 0 var(--tabSelectedBorderColor, rgb(77, 172, 255));
        }

        :host(:hover) {
          color: var(--tabHoverTextColor, rgb(255, 255, 255));
        }

        :host([disabled]) {
          color: var(--tabTextColor, rgb(77, 172, 255));
          opacity: var(--disabledOpacity, 0.4);
          cursor: var(--disabledCursor, not-allowed);
        }
      </style>
      <span><slot></slot></span>
    `;
  }
}

customElements.define('rux-tab', RuxTab);
