import { LitElement, html } from 'lit-element'

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
        }
    }

    constructor() {
        super()
        this.selected = false
        this.disabled = false
        this.addEventListener('click', this.clickHandler)
    }

    clickHandler(e) {
        if (this.disabled) {
            e.stopImmediatePropagation()
        }
    }

    connectedCallback() {
        super.connectedCallback()

        // set the role to tab
        this.setAttribute('role', 'tab')

        if (this.parentElement.getAttributeNode('small')) {
            this.setAttribute('small', '')
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

                    color: var(--tabTextColor);
                    border-bottom: 5px solid var(--tabBorderColor);
                }

                :host span {
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }

                :host([small]) {
                    min-width: 2rem;
                    border-bottom: 3px solid var(--tabBorderColor);
                }

                :host([small][selected]) {
                    border-bottom: solid 3px var(--tabSelectedBorderColor);
                }

                :host([selected]) {
                    color: var(--tabSelectedTextColor);
                    border-bottom: 5px solid var(--tabSelectedBorderColor);
                }

                :host(:hover) {
                    color: var(--tabHoverTextColor);
                }

                :host([disabled]) {
                    color: var(--tabTextColor);
                    opacity: var(--disabledOpacity);
                    cursor: var(--disabledCursor);
                }
            </style>
            <span><slot></slot></span>
        `
    }
}

customElements.define('rux-tab', RuxTab)
