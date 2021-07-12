import { LitElement, html } from 'lit-element'
/** Class representing a single Toggle instance. */

export class RuxSwitch extends LitElement {
    static get properties() {
        return {
            disabled: {
                type: Boolean,
                reflect: true,
            },
            checked: {
                type: Boolean,
                reflect: true,
            },
            id: {
                type: String,
                reflect: true,
            },
        }
    }

    updateChecked() {
        this.checked = !this.checked
        const event = new CustomEvent(`checked-${this.id}`, {
            detail: this.checked,
        })
        window.dispatchEvent(event)
    }

    constructor() {
        super()
        this._id = `switch-${Math.floor(Math.random() * 1000)}`
        this.disabled = false
        this.checked = false
        this.addEventListener('click', this.clickHandler)
    }

    clickHandler(e) {
        if (this.disabled) {
            e.stopImmediatePropagation()
        }
    }

    /*
    Template and styles blocks should appear as the very last code blocks
  */
    render() {
        return html`
            <style>
                .rux-switch {
                    position: relative;
                    display: flex;
                    height: 22px;
                    width: 42px;
                }

                .rux-switch__input {
                    display: none;
                }

                .rux-switch__button {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                }

                /* Track */
                .rux-switch__button::before {
                    position: relative;
                    display: flex;
                    content: '';
                    border: 1px solid;
                    border-color: var(--switchOffBorderColor);
                    background-color: var(--switchBackgroundColor);
                    border-radius: 4.7px;
                    height: 10px;
                    width: 30px;
                    z-index: 2;
                    transition: 0.1s background-color linear;
                }

                /* Track Active */
                .rux-switch__input:checked + .rux-switch__button::before {
                    border-color: var(--switchOnColor);
                    background-color: var(--switchOnColor);
                }

                /* Track Hover Unchecked */
                .rux-switch:hover
                    .rux-switch__input:not(:disabled)
                    + .rux-switch__button:before {
                    border-color: var(--switchBorderColor);
                    background-color: var(--switchBackgroundColor);
                }

                /* Track Hover Checked */
                .rux-switch:hover
                    .rux-switch__input:checked:not(:disabled)
                    + .rux-switch__button:before {
                    border-color: var(--switchHoverOnColor);
                    background-color: var(--switchHoverOnColor);
                }

                /* Button */
                .rux-switch__button::after {
                    position: absolute;
                    content: '';
                    top: 1px;
                    left: -4px;
                    z-index: 3;
                    height: 18px;
                    width: 18px;
                    border-radius: 50%;
                    border: 1px solid var(--switchBorderColor);
                    background: var(--switchBackgroundColor);
                    transition: 0.1s left linear, 0.1s border-color linear;
                }

                /* Button Active */
                .rux-switch__input:checked + .rux-switch__button::after {
                    left: 16px;
                    background-color: var(--switchBackgroundColor);
                    border-color: var(--switchBorderColor);
                }

                /* Button Hover Unchecked */
                .rux-switch:hover
                    .rux-switch__input:not(:disabled)
                    + .rux-switch__button:after {
                    border-color: var(--switchButtonHoverOffColor);
                }

                /* Button Hover Checked */
                .rux-switch:hover
                    .rux-switch__input:checked:not(:disabled)
                    + .rux-switch__button:after {
                    border-color: var(--switchButtonHoverOffColor);
                }

                /* Disabled */
                .rux-switch__input:disabled + .rux-switch__button::after {
                    cursor: var(--disabledCursor);
                }

                .rux-switch__input:checked:disabled
                    + .rux-switch__button::after {
                    cursor: var(--disabledCursor);
                }

                .rux-switch__input:disabled + .rux-switch__button::before {
                    cursor: var(--disabledCursor);
                }

                .rux-switch__input:disabled + .rux-switch__button {
                    opacity: var(--disabledOpacity);
                    cursor: var(--disabledCursor);
                }
            </style>
            <div class="rux-switch">
                <input
                    class="rux-switch__input"
                    type="checkbox"
                    id="${this._id}"
                    ?disabled=${this.disabled}
                    ?checked="${this.checked}"
                    @change="${this.updateChecked}"
                />
                <label
                    class="rux-switch__button"
                    for="${this._id}"
                    class="rux-switch__button"
                >
                </label>
            </div>
        `
    }
}

customElements.define('rux-switch', RuxSwitch)
