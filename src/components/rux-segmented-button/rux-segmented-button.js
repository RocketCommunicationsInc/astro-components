import { LitElement, html } from 'lit-element';
import RuxUtils from '../rux-utils/string.js';

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

          border-radius: var(--controlBorderRadius);          
					background-color: var(--segmentedButtonBackgroundColor);
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

					border: 1px solid var(--segmentedButtonBorderColor);
					

          color: var(--segmentedButtonTextColor);

          font-size: 1rem;

          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        .rux-segmented-button input {
          display: none !important;
        }

        .rux-segmented-button label:hover {
					background-color: var(--segmentedButtonHoverBackgroundColor);
					border-color: var(--segmentedButtonHoverBorderColor);
          color: var(--segmentedButtonHoverTextColor);
          outline: none;
        }

        .rux-segmented-button input:checked + label {
          background-color: var(--segmentedButtonSelectedBackgroundColor);
          color: var(--segmentedButtonSelectedTextColor);
          box-shadow: var(--segmentedButtonSelectedBoxShadow);
				}
				
				.rux-segmented-button input:checked:hover + label{
					border-color: var(--segmentedButtonSelectedBackgroundColor);
				}

				.rux-segmented-button:nth-child(2):not(:last-child) label {
					border-right: none;
					border-left: none;
				}
				.rux-segmented-button:first-child label{
					border-radius: var(--controlBorderRadius) 0 0 var(--controlBorderRadius);

				}
				.rux-segmented-button:last-child label{
					border-radius: 0 var(--controlBorderRadius) var(--controlBorderRadius) 0;
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
          border-right: 1px solid var(--segmentedButtonBorderColor);
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
