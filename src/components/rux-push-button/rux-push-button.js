import { LitElement, html } from 'lit-element'

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
        }
    }

    constructor() {
        super()
        this.disabled = false
        this.checked = false
        this.checkedLabel = 'Enabled'
        this.uncheckedLabel = 'Disabled'
        this._label = ''
        this.addEventListener('click', this.clickHandler)
    }

    clickHandler(e) {
        if (this.disabled) {
            e.stopImmediatePropagation()
        }
    }

    render() {
        return html`
            <style>
                :host {
                    font-size: 16px;
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
                    font-size: 1rem !important;

                    margin: 0;
                    padding: 0 0.625rem;

                    color: var(--pushbuttonTextColor);

                    background-color: var(--pushbuttonBackgroundColor);
                    border-radius: var(--defaultBorderRadius);
                    border: 1px solid var(--pushbuttonBorderColor);
                }

                .rux-push-button__input:checked + .rux-push-button__button {
                    display: flex;
                    color: var(--pushbuttonSelectedTextColor);
                    background-color: var(--pushbuttonSelectedBackgroundColor);
                    border-color: var(--pushbuttonSelectedBorderColor);
                }

                :host([disabled]) {
                    opacity: var(--disabledOpacity);
                    cursor: not-allowed;
                }

                .rux-push-button__input:disabled + .rux-push-button__button {
                    opacity: var(--disabledOpacity);
                    cursor: not-allowed;
                }
            </style>

            <input
                class="rux-push-button__input"
                id="ruxSwitch"
                type="checkbox"
                ?disabled=${this.disabled}
                ?checked="${this.checked}"
            />
            <label class="rux-push-button__button" for="ruxSwitch"
                ><slot></slot
            ></label>
        `
    }
}

customElements.define('rux-push-button', RuxPushButton)
