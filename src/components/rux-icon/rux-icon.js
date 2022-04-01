import { LitElement, html } from 'lit-element'
import { directive } from 'lit-html'

const getIcon = directive((library, icon) => (part) => {
    try {
        part.setValue(`${library}#${icon}`)
    } catch (error) {
        throw error
    }
})

export class RuxIcon extends LitElement {
    static get properties() {
        return {
            icon: {
                type: String,
            },
            size: {
                type: String,
            },
            color: {
                type: String,
            },
            library: {
                type: String,
            },
            label: {
                type: String,
            },
            viewBox: {
                type: String,
            },
        }
    }

    constructor() {
        super()

        this.library = './icons/astro.svg'
        /* TODO: a non-presumptive way to assign a better default label if the user doesn’t provide one */
        this.label = 'icon'
        this.viewBox = '0 0 24 24'
        this.color = 'var(--iconDefaultColor)'
    }

    firstUpdated() {
        this.style.setProperty('--iconColor', this.color)
    }

    updated(changedProperties) {
        if (changedProperties.get('color')) {
            this.style.setProperty('--iconColor', this.color)
        }
    }

    render() {
        return html`
            <style>
                :host {
                    --iconDefaultSize: 2.7rem;
                    --iconColor: var(--iconDefaultColor);

                    display: inline-block;

                    height: var(--iconDefaultSize);
                    width: var(--iconDefaultSize);
                }

                svg,
                svg > use {
                    height: 100%;
                    width: auto;
                    fill: var(--iconColor);
                }

                :host([size='extra-small']) {
                    height: 1rem;
                    width: 1rem;
                }

                :host([size='small']) {
                    height: 2rem;
                    width: 2rem;
                }

                :host([size='large']) {
                    height: 4rem;
                    width: 4rem;
                }

                :host([size='base']) {
                    height: 24px;
                    width: auto;
                }
            </style>

            <span id="rux-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="${this.viewBox}"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                >
                    <use href="${getIcon(this.library, this.icon)}"></use>
                </svg>
            </span>
        `
    }
}
customElements.define('rux-icon', RuxIcon)
