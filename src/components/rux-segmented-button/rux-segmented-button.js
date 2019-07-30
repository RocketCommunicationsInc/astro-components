import { LitElement, html } from 'lit-element';
import RuxUtils from '../rux-utils/string.js';

export class RuxSegmentedButton extends LitElement {
  static get properties() {
    return {
      data: {
        type: Array,
      },
    };
  }

  constructor() {
    super();
    this.data = [{ label: 'No data passed' }];
  }

  connectedCallback() {
    super.connectedCallback();

    const selectedSegment = this.data.find((segment) => segment.selected) || this.data[0];
    selectedSegment.selected = true;
  }

  _slugify(label) {
    return `${RuxUtils.stringToSlug(label)}`;
  }

  render() {
    return html`
      <style>
        :host {
          box-sizing: border-box;
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        .rux-segmented-buttons {
          display: inline-flex;

          height: 1.6875rem;
          overflow: hidden;

          padding: 0;
          margin: 0;

          list-style: none;

          border-radius: var(--controlBorderRadius, 3px);
          border: 1px solid var(--segmentedButtonBorderColor, rgb(30, 47, 66));
          background-color: var(--segmentedButtonBackgroundColor, rgb(0, 90, 143));
        }

        .rux-segmented-button {
          height: 1.6875rem;
          width: auto;
          margin: 0;
          padding: 0;
        }

        .rux-segmented-button label {
          display: flex;
          justify-content: center;
          align-items: center;

          width: auto;
          height: 1.5625rem;

          margin: 0;
          padding: 0 0.75rem;

          border: none;
          border-right: 1px solid var(--segmentedButtonBorderColor, rgb(30, 47, 66));

          color: var(--segmentedButtonTextColor, #fff);

          font-size: 0.875rem;

          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        .rux-segmented-button:last-of-type label {
          border-right: none !important;
        }

        .rux-segmented-button input {
          display: none !important;
        }

        .rux-segmented-button label:hover {
          background-color: var(--segmentedButtonHoverBackgroundColor, rgb(58, 129, 191));
          color: var(--segmentedButtonHoverTextColor, #fff);
          outline: none;
        }

        .rux-segmented-button input:checked + label {
          background-color: var(--segmentedButtonSelectedBackgroundColor, rgb(58, 129, 191));
          color: var(--segmentedButtonSelectedTextColor, #fff);
          box-shadow: var(
            --segmentedButtonSelectedBoxShadow,
            inset 0 2px 4px rgba(0, 0, 0, 0.14),
            inset 0 3px 4px rgba(0, 0, 0, 0.12),
            inset 0 1px 5px rgba(0, 0, 0, 0.2)
          );
        }

        /* 
  OVERRIDE FOR IE 
  Otherwise all segments get rounded corners. Need to override and re-enable
  some style definitions.
*/

        .rux-segmented-buttons.style-scope {
          border-radius: 3px 6px 6px 3px !important;
        }
        .rux-segmented-button.style-scope {
          border-radius: 0;
          height: auto;
          border: none;
          border-right: 1px solid var(--segmentedButtonBorderColor, rgb(30, 47, 66));
        }
        /* END OVERRDIDE FOR IE EDGE */
      </style>

      <ul class="rux-segmented-buttons">
        ${this.data.map(
      (item) => html`
            <li class="rux-segmented-button">
              <input
                type="radio"
                name="rux-group"
                id="${this._slugify(item.label)}"
                ?checked="${item.selected}"
                data-label="${item.label}"
              />
              <label for="${this._slugify(item.label)}">
                ${item.label}
              </label>
            </li>
          `
  )}
      </ul>
    `;
  }
}

customElements.define('rux-segmented-button', RuxSegmentedButton);
