import { LitElement, html } from 'lit-element'
/* eslint-disable no-unused-vars */
import { RuxButton } from '../rux-button/rux-button.js'
/* eslint-enable no-unused-vars */

export class RuxModal extends LitElement {
    static get properties() {
        return {
            open: {
                type: Boolean,
                reflect: true,
                notify: true,
            },
            message: {
                type: String,
            },
            title: {
                type: String,
            },
            confirmText: {
                type: String,
            },
            denyText: {
                type: String,
            },
        }
    }

    constructor() {
        super()
        this.open = false
        this.message = ''
        this.title = ''
        this.confirmText = ''
        this.denyText = ''
    }
    connectedCallback() {
        super.connectedCallback()

        // in the event neither Confirm/Deny text is supplied provide
        // a default cancel button to get out of the modal
        if (!this.denyText && !this.confirmText) {
            this.denyText = 'Cancel'
            console.warn(
                'No confirm or deny actions have been passed to the modal dialog box. User has been presented with a Cancel button'
            )
        }
    }
    updated() {
        // get the total button set and set the last button as default
        // and add focus
        const buttonSet = this.shadowRoot.querySelectorAll(
            'rux-button:not([hidden])'
        )
        if (buttonSet.length > 0) {
            const defaultButton = buttonSet[buttonSet.length - 1]
            defaultButton.setAttribute('tabindex', 0)
            defaultButton.focus()
        } else {
        }
    }

    _handleModalChoice(e) {
        // convert string value to boolean
        const choice = e.currentTarget.dataset.value === 'true'

        // dispatch event
        this.dispatchEvent(
            new CustomEvent('modalClosed', {
                detail: { confirm: choice },
                bubbles: true,
                composed: true,
            })
        )

        // close dialog
        this.open = false
    }

    render() {
        return html`
            <style>
                :host {
                    display: none;
                    box-sizing: border-box;
                }

                :host([open]) {
                    display: block;
                }

                *,
                *:before,
                *:after {
                    box-sizing: inherit;
                }

                *[hidden] {
                    display: none !important;
                }

                .rux-button-group {
                    margin-top: auto;
                    margin-left: auto;
                    align-self: flex-end;
                }

                .rux-button-group rux-button:not(:last-child) {
                    margin-right: 0.375rem;
                }

                .rux-modal-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    height: 100vh;
                    width: 100vw;

                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 11001;
                }

                .rux-modal {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    background-color: var(--modalBackgroundColor);

                    width: 28rem;
                    height: 13.5rem;
                    border: 2px solid var(--modalBorderColor);

                    border-radius: 4px;
                    margin: auto;
                    padding: 0;

                    user-select: none;

                    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                        0 3px 14px 3px rgba(0, 0, 0, 0.12),
                        0 4px 5px 0 rgba(0, 0, 0, 0.2);
                }

                .rux-modal__titlebar {
                    display: flex;
                    flex-grow: 0;
                    flex-shrink: 0;
                    justify-content: center;
                    align-items: center;

                    width: 100%;
                    height: 2rem;

                    background-color: var(--modalBorderColor);
                    user-select: none;
                    cursor: move;
                }

                .rux-modal__titlebar h1 {
                    font-size: 1rem;
                    font-weight: 600;
                    line-height: 1.2;
                    padding: 0;
                    margin: 0;
                    color: var(--modalTitleColor);
                }

                .rux-modal__content {
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1;
                    padding: 1rem;
                    color: var(--defaultText);
                }

                rux-icon {
                    margin-right: 0.75rem;
                }

                .rux-modal__message {
                    margin: 0.5rem 1.875rem 2.5rem 1.875rem;
                }

                .rux-modal .rux-button {
                    box-shadow: none !important;
                }

                .rux-modal::before {
                    content: '';
                    position: fixed;
                    top: 0;
                    left: 0;
                    height: 100vh;
                    width: 100vw;
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: -1;
                }
            </style>

            <div class="rux-modal-container">
                <dialog class="rux-modal" role="dialog" ?open="${this.open}">
                    <header class="rux-modal__titlebar">
                        <h1>${this.title}</h1>
                    </header>
                    <div class="rux-modal__content">
                        <div class="rux-modal__message">${this.message}</div>
                        <div class="rux-button-group">
                            <rux-button
                                ?secondary="${this.confirmText.length > 0}"
                                @click="${this._handleModalChoice}"
                                data-value="false"
                                ?hidden="${!this.denyText}"
                                tabindex="-1"
                            >
                                ${this.denyText}
                            </rux-button>
                            <rux-button
                                @click="${this._handleModalChoice}"
                                data-value="true"
                                ?hidden="${!this.confirmText}"
                                tabindex="0"
                            >
                                ${this.confirmText}
                            </rux-button>
                        </div>
                    </div>
                </dialog>
            </div>
        `
    }
}
customElements.define('rux-modal', RuxModal)
