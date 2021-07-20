import { LitElement, html } from 'lit-element'

export class RuxTabPanels extends LitElement {
    constructor() {
        super()
    }

    firstUpdated() {
        this._registerTabPanels()
    }

    get _slottedChildren() {
        const slot = this.shadowRoot.querySelector('slot')
        const childNodes = slot.assignedNodes({ flatten: true })
        return Array.prototype.filter.call(
            childNodes,
            (node) => node.nodeType == Node.ELEMENT_NODE
        )
    }

    connectedCallback() {
        super.connectedCallback()
        this.setAttribute('style', 'position: relative; width: 100%;')
    }

    disconnectedCallback() {
        super.disconnectedCallback()
    }

    _registerTabPanels() {
        const _panels = this._slottedChildren
        window.dispatchEvent(
            new CustomEvent('register-panels', {
                detail: {
                    panels: _panels,
                    for: this.getAttribute('aria-labelledby'),
                },
            })
        )
    }

    render() {
        return html` <slot></slot> `
    }
}

customElements.define('rux-tab-panels', RuxTabPanels)
