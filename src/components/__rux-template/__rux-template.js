import { LitElement, html } from 'lit-element'

/** Class representing a single Toggle instance. */

export class RuxTemplate extends LitElement {
    static get properties() {
        return {
            propertyOne: {
                type: Boolean,
                // reflects this key/value pair to the custom element level
                reflect: true,
            },
            propertyTwo: {
                type: String,
            },
            booleanAttr: {
                type: Boolean,
            },
        }
    }

    constructor() {
        super()
        // set default property values in the constructor
        this.propertyOne = false
        this.propertyTwo = 'Property Two'

        // set private properties in the constructor, not in get properties()
        this._privateProperty = 'Private Property is private.'
    }

    // if any of these contain only the super callback, you can safely remove them

    // connectedCallback() {
    //   super.connectedCallback();
    //   set up any event listeners here
    // }

    // disconnectedCallback() {
    //   remove any event listeners here
    //   super.disconnectedCallback();
    // }

    // custom methods, getters, and setters go here

    get computedProperty() {
        return `${this.propertyTwo} is computed.`
    }

    /*
    Template and styles blocks should appear as the very last code blocks
  */
    render() {
        return html`
            <span
                ?hidden="${this.propertyOne}"
                .data-property-two="${this.propertyTwo}"
                >${this.computedProperty}</span
            >
            <span>${this._privateProperty}</span>
        `
    }
}

customElements.define('rux-template', RuxTemplate)
