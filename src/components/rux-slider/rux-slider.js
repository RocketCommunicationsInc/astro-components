import { LitElement, html } from 'lit-element'

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
        }
    }
    constructor() {
        super()
        this.min = 0
        this.max = 100
        this.step = 1
        this.val = 0
        this.label = ''
        ;(this.axisLabels = []), (this.disabled = false)
        this.hideInput = false
        this.browser = this.getBrowser(navigator.userAgent.toLowerCase())
        this.addEventListener('click', this.clickHandler)
    }

    clickHandler(e) {
        if (this.disabled) {
            e.stopImmediatePropagation()
        }
    }

    firstUpdated() {
        this._updateValue()
    }

    getBrowser(ua) {
        if (ua.indexOf('chrome') > -1) {
            return 'chrome'
        } else if (ua.indexOf('safari') > -1) {
            return 'safari'
        } else if (ua.indexOf('firefox') > -1) {
            return 'firefox'
        }
    }

    _updateValue(e) {
        this.val = e ? e.target.value : this.val
        const dif = ((this.val - this.min) / (this.max - this.min)) * 100
        this.style.setProperty('--value', dif)
    }

    render() {
        return html`
            <style>
                :host {
                    --thumbSize: 19px;
                    --sliderThumbBorderSize: 2px;

                    --trackHeight: 1px;
                    --trackBeforeThumbHeight: 5px;
                    --trackCursor: pointer;
                    --value: 50;
                    --valuePercent: calc(1% * var(--value));
                    --valueBeforeThumb: calc(1% * var(--value) - 1%);
                    display: flex;
                    flex-grow: 1;
                    flex-flow: column;
                    --step: ${this.step};
                    --min: ${this.min};
                    --max: ${this.max};
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
                    margin-bottom: 9px;
                }

                .rux-slider__control {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    flex-grow: 1;
                    position: relative;
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
                    margin: 0px;
                    color: transparent;
                }

                input[type='range']:focus {
                    outline: none;
                }

                /****** Track ******/
                /* Track -> WebKit */
                .rux-range::-webkit-slider-runnable-track {
                    display: flex;
                    align-items: center;
                    max-width: 100%;
                    /* width: 100%; */
                    cursor: var(--trackCursor, pointer);
                    border-radius: 2.5px;
                    min-height: var(--trackHeight);
                    max-height: var(--trackBeforeThumbHeight);

                    background-image: linear-gradient(
                            var(--sliderTrackBackgroundColor),
                            var(--sliderTrackBackgroundColor)
                        ),
                        linear-gradient(
                            var(--sliderTrackBackgroundColor),
                            var(--sliderTrackBackgroundColor)
                        );
                    background-size: var(--valuePercent) 5px, 100% 1px;
                    background-repeat: no-repeat no-repeat;
                    background-position: left, right;
                }
                .rux-range:disabled::-webkit-slider-runnable-track {
                    opacity: var(--disabledOpacity, 0.4);
                    cursor: var(--disabledCursor);
                }

                /* Track -> Moz */
                .rux-range::-moz-range-track {
                    display: flex;
                    align-items: center;
                    max-width: 100%;
                    /* width: 100%; */
                    cursor: var(--trackCursor, pointer);
                    border-radius: 2.5px;
                    min-height: var(--trackHeight);
                    max-height: 5px;

                    background-image: linear-gradient(
                            var(--sliderTrackBackgroundColor),
                            var(--sliderTrackBackgroundColor)
                        ),
                        linear-gradient(
                            var(--sliderTrackBackgroundColor),
                            var(--sliderTrackBackgroundColor)
                        );
                    background-size: calc(1% * var(--value)) 5px, 100% 1px;
                    background-repeat: no-repeat no-repeat;
                    background-position: left, right;
                }

                .rux-range:disabled::-moz-range-track,
                .rux-range:disabled::-moz-range-progress {
                    opacity: var(--disabledOpacity, 0.4);
                    cursor: var(--disabledCursor);
                }

                .rux-range::-moz-range-progress {
                    background-color: var(--sliderSelectedTrackBackgroundColor);
                }

                .rux-input:disabled {
                    opacity: var(--disabledOpacity, 0.4);
                    cursor: var(--disabledCursor);
                }

                /* Track -> Ms */
                .rux-range::-ms-track {
                    display: flex;
                    align-items: center;
                    max-width: 100%;
                    /* width: 100%; */
                    cursor: var(--trackCursor, pointer);
                    border-radius: 2.5px;
                    min-height: var(--trackHeight);
                    max-height: 5px;

                    background-image: linear-gradient(
                            var(--sliderTrackBackgroundColor),
                            var(--sliderTrackBackgroundColor)
                        ),
                        linear-gradient(
                            var(--sliderTrackBackgroundColor),
                            var(--sliderTrackBackgroundColor)
                        );
                    background-size: calc(1% * var(--value)) 5px, 100% 1px;
                    background-repeat: no-repeat no-repeat;
                    background-position: left, right;
                }

                .rux-range::-ms-fill-lower {
                    height: 2px;
                    background-color: rgb(77, 172, 255);
                }

                .rux-range::-ms-fill-upper {
                    height: 2px;
                    background-color: var(--sliderTrackBackgroundColor);
                }

                /*****  Thumb ******/

                /* Thumb -> Webkit */
                .rux-range::-webkit-slider-thumb {
                    -webkit-appearance: none;

                    position: relative;
                    top: ${this.browser === 'safari'
                        ? '0px'
                        : 'calc( var(--thumbSize) / -2.7)'};

                    height: var(--thumbSize);
                    width: var(--thumbSize);

                    border-radius: 100%;
                    border: var(--sliderThumbBorderSize) solid
                        var(--sliderThumbBorderColor);
                    background-color: var(--sliderThumbBackgroundColor);

                    cursor: pointer;
                    z-index: 6;
                }

                .rux-range::-webkit-slider-thumb:hover {
                    border-color: var(--sliderHoverThumbBorderColor);
                    background-color: var(--sliderHoverThumbBackgroundColor);
                }

                .rux-range:disabled::-webkit-slider-runnable-track {
                    opacity: var(--disabledOpacity);
                    cursor: var(--disabledCursor);
                }

                .rux-range:disabled::-webkit-slider-thumb {
                    cursor: var(--disabledCursor);
                }
                .rux-range:disabled::-webkit-slider-thumb:hover {
                    border-color: var(--sliderThumbBorderColor);
                }

                .rux-range:not(:disabled)::-webkit-slider-thumb:active {
                    border-color: var(--sliderSelectedThumbBorderColor);
                    background-color: var(--backgroundColor);
                }

                .rux-range:not(:disabled)::-webkit-slider-thumb:focus,
                .rux-range:not(:disabled)::-webkit-slider-thumb:hover:not(:active) {
                    background-color: var(--sliderHoverThumbBackgroundColor);
                }

                .rux-range:not(:disabled)::-webkit-slider-thumb:active {
                    border-color: var(--sliderSelectedThumbBorderColor);
                    background-color: var(--backgroundColor);
                }

                .rux-range:not(:disabled)::-webkit-slider-thumb:focus,
                .rux-range:not(:disabled)::-webkit-slider-thumb:hover:not(:active) {
                    background-color: var(--sliderHoverThumbBackgroundColor);
                }

                /* Thumb -> Moz */
                .rux-range::-moz-range-thumb {
                    -moz-appearance: none;

                    position: relative;
                    top: calc(var(--thumbSize) / -2.7);

                    height: var(--thumbSize);
                    width: var(--thumbSize);

                    border-radius: 100%;
                    border: var(--sliderThumbBorderSize) solid
                        var(--sliderThumbBorderColor);
                    background-color: var(--sliderThumbBackgroundColor);

                    cursor: pointer;
                }

                .rux-range:not(:disabled)::-moz-range-thumb:active {
                    border-color: var(--sliderSelectedThumbBorderColor);
                    background-color: var(--backgroundColor);
                }

                .rux-range::-moz-range-thumb:hover {
                    border-color: var(--sliderHoverThumbBorderColor);
                }

                input:-moz-focusring {
                    outline: none;
                }

                .rux-range:disabled::-moz-range-thumb {
                    opacity: var(--disabledOpacity, 0.4);
                    cursor: var(--disabledCursor);
                }

                /* Thumb -> Ms */
                .rux-range::-ms-thumb {
                    position: relative;
                    top: calc(var(--thumbSize) / -2.7);
                    height: var(--thumbSize);
                    width: var(--thumbSize);

                    border-radius: 100%;
                    border: var(--sliderThumbBorderSize) solid
                        var(--sliderThumbBorderColor);
                    background-color: var(--sliderThumbBackgroundColor);

                    cursor: pointer;

                    z-index: 6;
                }

                .rux-range:disabled::-ms-thumb {
                    opacity: 0.4;
                    cursor: not-allowed;
                }

                /* Labels */
                .rux-slider__control__labels {
                    position: relative;
                    display: flex;
                    justify-content: space-between;

                    list-style: none;
                    padding: 0;
                    margin: 10px 0 0 0;

                    color: var(--fontColor);
                    font-size: 0.875rem;
                    font-family: var(--fontFamily);
                }

                .rux-range:disabled + .rux-slider__control__labels {
                    opacity: var(--disabledOpacity, 0.4);
                }

                .rux-slider__control__labels li {
                    padding: 0px;
                    text-align: left;
                }

                .rux-slider__control__labels li:first-child,
                .rux-slider__control__labels li:last-child {
                    margin: 0px;
                }

                .disabled {
                    opacity: var(--disabledOpacity, 0.4);
                    cursor: var(--disabledCursor);

                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    -khtml-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
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
                <div
                    class="rux-form-field rux-form-field--small rux-slider__label"
                >
                    <label
                        class="rux-label"
                        id="ruxSlider"
                        ?hidden="${!this.label}"
                        >${this.label}</label
                    >
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
                <div
                    class="rux-slider__control ${this.disabled
                        ? 'disabled'
                        : ''}"
                >
                    <input
                        type="range"
                        @input="${this._updateValue}"
                        class="rux-range"
                        .min="${this.min.toString()}"
                        .max="${this.max.toString()}"
                        .step="${this.step.toString()}"
                        .value="${this.val.toString()}"
                        aria-labelledby="ruxSlider"
                        ?disabled="${this.disabled}"
                        list="steplist"
                    />

                    <ol
                        class="rux-slider__control__labels"
                        data-count="${this.axisLabels.length}"
                        ?hidden="${!this.axisLabels.length}"
                        id="steplist"
                    >
                        ${this.axisLabels.map(
                            (item) => html` <li>${item}</li> `
                        )}
                    </ol>
                </div>
            </div>
        `
    }
}
customElements.define('rux-slider', RuxSlider)
