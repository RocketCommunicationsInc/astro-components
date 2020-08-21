import { LitElement, html } from 'lit-element';
import RuxUtils from '@astrouxds/rux-utils/string.js';
import '@astrouxds/rux-assets/css/astro.tokens.css';

export class RuxSegmentedButton extends LitElement {
  static get properties() {
    return {
      data: {
        type: Array,
      },
      selected: {
        reflect: true,
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.data = [{ label: 'No data passed' }];
    this._selected = '';
  }

  get selected() {
    return this._selected;
  }

  set selected(label) {
    const prevSelection = this.selected;
    this._selected = label;
    this.data.forEach((segment) => {
      segment.selected = segment.label === label;
    });
    this.requestUpdate('selected', prevSelection);
  }

  deselectSelected() {
    const previousSelectedElement = this.querySelectorAll('input[checked]');
    previousSelectedElement.forEach((element) => {
      element.checked = false;
    });
  }

  handleChange(event) {
    this.selected = event.target.value;
    this.dispatchEvent(
        new Event('change', {
          bubbles: true,
          composed: true,
        })
    );
  }

  connectedCallback() {
    super.connectedCallback();

    const initialSelection = this.data.find((segment) => segment.selected) || this.data[0];
    this.selected = initialSelection.label;
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
        ${this.data.map((item) => html`
            <li class="rux-segmented-button">
              <input
                type="radio"
                name="rux-group"
                id="${this._slugify(item.label)}"
                value="${item.label}"
                ?checked="${item.selected}"
                data-label="${item.label}"
                @change=${this.handleChange}
              />
              <label for="${this._slugify(item.label)}">
                ${item.label}
              </label>
            </li>
          `)}
    </ul>
    `;
  }
}

customElements.define('rux-segmented-button', RuxSegmentedButton);
