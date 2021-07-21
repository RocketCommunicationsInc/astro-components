import { LitElement, html } from 'lit-element'

/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxTabPanel extends LitElement {
    connectedCallback() {
        super.connectedCallback()
        this.setAttribute('role', 'tabpanel')
    }

    render() {
        return html`
            <style>
                :host {
                    display: block;
                    position: relative;
                    visibility: visible;
                    z-index: 1;
                }

                :host(.hidden) {
                    position: absolute;
                    visibility: hidden;
                    z-index: -1;
                }
            </style>
            <slot></slot>
        `
    }
}

customElements.define('rux-tab-panel', RuxTabPanel)
