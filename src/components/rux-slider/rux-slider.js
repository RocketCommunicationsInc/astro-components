import { LitElement, html } from 'lit-element';

export class RuxSlider extends LitElement {
  static get properties() {
    return {
      min: {
        type: Number,
      },
      max: {
        type: Number,
      },
      step: {
        type: Number,
      },
      val: {
        type: Number,
        reflect: true,
      },
      label: {
        type: String,
      },
      axisLabels: {
        type: Array,
      },
      disabled: {
        type: Boolean,
      },
      hideInput: {
        type: Boolean,
      },
    };
  }
  constructor() {
    super();
    this.min = 0;
    this.max = 100;
    this.step = 1;
    this.val = 0;
    this.label = '';
    (this.axisLabels = []), (this.disabled = false);
    this.hideInput = false;
  }

  firstUpdated() {
    this._updateValue();
  }

  _updateValue(e) {
    this.val = e ? e.target.value : this.val;
    const dif = ((this.val - this.min) / (this.max - this.min)) * 100;
    this.style.setProperty('--value', dif);
  }

  render() {
    return html`
      <style>
        :host {
          --thumbSize: var(--controlOptionSize);
          --thumbShadow: 0 3px 5px rgba(0, 0, 0, 0.14), 0 1px 9px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.2);
          --thumbShadowHover: 0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12),
            0 3px 5px rgba(0, 0, 0, 0.2);
          --thumbShadowActive: inset 0 0 0 4px var(--colorPrimary), 0 1px 3px rgba(0, 0, 0, 0.14),
            0 1px 4px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.2);

          --trackHeight: 2px;
          --trackCursor: pointer;
          --value: 50;
          display: flex;
          flex-grow: 1;
          flex-flow: column;
        }

        *[hidden] {
          display: none !important;
        }

        .rux-slider {
          display: flex;
          flex-direction: column;
        }

        .rux-slider__label {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.25rem;
        }

        .rux-slider__control {
          display: flex;
          flex-direction: column;
          width: 100%;
          flex-grow: 1;
        }

        .rux-slider label input {
          margin-left: auto;
          margin-right: 0;
        }

        .rux-range {
          -webkit-appearance: none;
          -moz-appearance: none;
          -ms-appearance: none;
          appearance: none;

          background: none;

          width: 100%;
        }

        input[type='range']:focus {
          outline: none;
        }

        .rux-range::-webkit-slider-runnable-track {
          display: flex;
          align-items: center;

          /* width: 100%; */
          height: var(--trackHeight, 2px);
          cursor: var(--trackCursor, pointer);

          background-color: var(--sliderTrackBackgroundColor);
          outline: var(--sliderTrackBorderSize) solid var(--sliderTrackBorderColor, transparent);

          background-image: linear-gradient(
            to right,
            var(--sliderSelectedTrackBackgroundColor) 0%,
            var(--sliderSelectedTrackBackgroundColor) calc(1% * var(--value)),
            var(--sliderTrackBackgroundColor) calc(1% * var(--value)),
            var(--sliderTrackBackgroundColor) 100%
          );
        }

        .rux-range::-moz-range-track {
          display: flex;
          align-items: center;

          /* width: 100%; */
          height: var(--trackHeight);
          cursor: var(--trackCursor, pointer);

          background-color: var(--sliderTrackBackgroundColor);
          outline: var(--sliderTrackBorderSize) solid var(--sliderTrackBorderColor);
        }

        .rux-range::-moz-range-progress {
          background-color: var(--sliderSelectedTrackBackgroundColor);
        }

        .rux-input:disabled {
          opacity: var(--disabledOpacity, 0.4);
          cursor: var(--disabledCursor);
        }

        .rux-range::-ms-track {
          display: flex;
          align-items: center;

          /* width: 100%; */
          height: 1.25rem;
          padding: 2px 0;

          cursor: pointer;
          color: transparent;
          background-color: transparent;
          border: none;
          /* background-color: var(--sliderTrackBackgroundColor); */
          outline: var(--sliderTrackBorderSize) solid transparent;
        }

        .rux-range::-ms-fill-lower {
          height: 2px;
          background-color: rgb(77, 172, 255);
        }

        .rux-range::-ms-fill-upper {
          height: 2px;
          background-color: var(--sliderTrackBackgroundColor);
        }

        .rux-range::-webkit-slider-thumb {
					-webkit-appearance: none;

					position: relative;
					top: calc( var(--thumbSize) / -2);

          height: var(--thumbSize);
          width: var(--thumbSize);

          border-radius: 100%;
          border: var(--sliderThumbBorderSize) solid var(--sliderThumbBorderColor);
          background-color: var(--sliderThumbBackgroundColor);

          cursor: pointer;
          box-shadow: inset 0 0 1px 0 rgba(255, 255, 255, 0.9), var(--thumbShadow);
				}
				.rux-range::-webkit-slider-thumb:hover{
					border-color: var(--sliderHoverThumbBorderColor);
				}

        .rux-range:disabled::-webkit-slider-runnable-track {
          opacity: var(--disabledOpacity);
          cursor: var(--disabledCursor);
        }

        .rux-range:disabled::-webkit-slider-thumb {
          cursor: var(--disabledCursor);
        }

        .rux-range:not(:disabled)::-webkit-slider-thumb:active {
          border-color: var(--sliderSelectedThumbBorderColor);
          background-color: var(--inputBackground);
          box-shadow: var(--thumbShadowActive);
        }

        .rux-range:not(:disabled)::-webkit-slider-thumb:focus,
        .rux-range:not(:disabled)::-webkit-slider-thumb:hover:not(:active) {
          background-color: var(--sliderHoverThumbBackgroundColor);
        }

        .rux-range::-moz-range-thumb {
          -moz-appearance: none;

					position: relative;
					top: calc( var(--thumbSize) / -2);

          height: var(--thumbSize);
          width: var(--thumbSize);

          border-radius: 100%;
          border: var(--sliderThumbBorderSize) solid var(--sliderThumbBorderColor);
          background-color: var(--sliderThumbBackgroundColor);

          cursor: pointer;
          box-shadow: inset 0 0 1px 0 rgba(255, 255, 255, 0.9), var(--thumbShadow);
				}

				.rux-range::-moz-range-thumb:hover{
					border-color:var(--sliderHoverThumbBorderColor);
				}

        input:-moz-focusring {
          outline: none;
        }

        .rux-range:disabled::-moz-range-thumb {
          cursor: var(--disabledCursor);
        }

        .rux-range::-ms-thumb {
					position: relative;
					top: -10px;

          height: 1.25rem;
          width: 1.25rem;

          border-radius: 100%;
          border: var(--sliderThumbBorderSize) solid var(--sliderThumbBorderColor);
          background-color: var(--sliderThumbBackgroundColor);

          cursor: pointer;
          box-shadow: inset 0 0 1px 0 rgba(255, 255, 255, 0.9), 0 3px 5px rgba(0, 0, 0, 0.14),
            0 1px 9px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.2);
        }

        .rux-range:disabled::-ms-thumb {
          opacity: 0.4;
          cursor: not-allowed;
				}
				.rux-range:not(:disabled)::-webkit-slider-thumb:active {
					border-color: var(--sliderSelectedThumbBorderColor);
					background-color: var(--inputBackground);
					box-shadow: var(--thumbShadowActive);
				}
				
				.rux-range:not(:disabled)::-webkit-slider-thumb:focus,
				.rux-range:not(:disabled)::-webkit-slider-thumb:hover:not(:active) {
					background-color: var(--sliderHoverThumbBackgroundColor);
					box-shadow: var(--thumbShadowHover);
				}

        .rux-slider__control__labels {
          position: relative;
          display: flex;
          justify-content: space-between;

          list-style: none;
          padding: 0 0.1rem;
          margin: 0.5em 0 0 0;

          color: var(--fontColor);
          font-size: 0.875rem;
          font-family: var(--fontFamily);
        }

        .rux-slider__control__labels li {
          text-align: left;
        }

        .rux-slider__input {
          margin-right: 0;
          margin-bottom: 0.75rem;

          width: 4rem !important;
        }

        /*
        Fake tick marks, sort of works, but label using flex are imprecise
        .rux-slider__control__labels li::before {
          position: absolute;
          content: "|";
          font-size: 0.5rem;
          top: -100%;
        } */

        input[type='range']::-moz-focus-outer {
          border: 0;
        }
      </style>

      <div class="rux-slider">
        <div class="rux-form-field rux-form-field--small rux-slider__label">
          <label class="rux-label" id="ruxSlider" ?hidden="${!this.label}">${this.label}</label>
          <input
            class="rux-input rux-slider__input"
            type="number"
            @input="${this._updateValue}"
            .min="${this.min.toString()}"
            .max="${this.max.toString()}"
            .step="${this.step.toString()}"
            .value="${this.val.toString()}"
            aria-labelledby="ruxSlider"
            ?hidden="${this.hideInput}"
            ?disabled="${this.disabled}"
          />
        </div>
        <div class="rux-slider__control">
          <input
            type="range"
            @input="${this._updateValue}"
            class="rux-range"
            type="range"
            .min="${this.min.toString()}"
            .max="${this.max.toString()}"
            .step="${this.step.toString()}"
            .value="${this.val.toString()}"
            aria-labelledby="ruxSlider"
            ?disabled="${this.disabled}"
          />
          <ol
            class="rux-slider__control__labels"
            data-count="${this.axisLabels.length}"
            ?hidden="${!this.axisLabels.length}"
          >
            ${this.axisLabels.map(
      (item) => html`
                <li>${item}</li>
              `
  )}
          </ol>
        </div>
      </div>
    `;
  }
}
customElements.define('rux-slider', RuxSlider);
