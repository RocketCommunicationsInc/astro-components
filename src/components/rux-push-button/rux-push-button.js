import { LitElement, html } from 'lit-element';
import '@astrouxds/rux-assets/css/astro.tokens.css';

export class RuxPushButton extends LitElement {
  static get properties() {
    return {
      disabled: {
        type: Boolean,
      },
      checkedLabel: {
        type: String,
      },
      uncheckedLabel: {
        type: String,
      },
      checked: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  constructor() {
    super();
    this.disabled = false;
    this.checked = false;
    this.checkedLabel = 'Enabled';
    this.uncheckedLabel = 'Disabled';
    this._label = '';
  }

  render() {
    return html`
      <style>
        :host {
          font-size: 12px;
          height: 1.3125rem;
          line-height: 1.7;

          margin: 0 2px;

          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        :host input {
          display: none !important;
        }

        .rux-push-button__button {
          display: flex;

          justify-content: center;
          align-items: center;

          height: 1.375rem;
          font-size: 0.75rem !important;

          margin: 0;
          padding: 0 0.625rem;

          color: var(--pushbuttonTextColor, rgb(255, 255, 255));

          background-color: var(--pushbuttonBackgroundColor, rgb(0, 90, 143));
          border-radius: var(--defaultBorderRadius, 3px);
          border: 1px solid var(--pushbuttonBorderColor, rgb(30, 47, 66));
        }

        .rux-push-button__input:checked + .rux-push-button__button {
          display: flex;
          color: var(--pushbuttonSelectedTextColor, rgb(91, 255, 0));
          background-color: var(--pushbuttonSelectedBackgroundColor, rgb(0, 0, 0));
          border-color: var(--pushbuttonSelectedBorderColor, rgb(0, 0, 0));

          box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.33);
        }

        :host([disabled]) {
          opacity: var(--disabledOpacity, 0.4);
          cursor: not-allowed;
        }

        .rux-push-button__input:disabled + .rux-push-button__button {
          opacity: var(--disabledOpacity, 0.4);
          cursor: not-allowed;
        }
      </style>

      <input
        class="rux-push-button__input"
        id="ruxToggle"
        type="checkbox"
        ?disabled=${this.disabled}
        ?checked="${this.checked}"
      />
      <label class="rux-push-button__button" for="ruxToggle"><slot></slot></label>
    `;
  }
}

customElements.define('rux-push-button', RuxPushButton);
