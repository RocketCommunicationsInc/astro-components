import { LitElement, html } from 'lit-element'
import { RuxIcon } from '@astrouxds/rux-icon'

export class RuxButton extends LitElement {
    static get properties() {
        return {
            size: { type: String },
            icon: { type: String },
            iconOnly: { type: Boolean },
            disabled: { type: Boolean },
            secondary: { type: Boolean },
            type: { type: String },
        }
    }
    constructor() {
        super()
        this.size = ''
        ;(this.icon = ''), (this.iconOnly = false)
        this.disabled = false
        this.secondary = false
        this.type = 'button'
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
                    display: inline-flex;
                }

                *[hidden] {
                    display: none !important;
                }

                .rux-button-group {
                    display: flex;
                }

                .rux-button-group rux-button:not(:last-child),
                .rux-button-group .rux-button:not(:last-child) {
                    margin-right: 0.625rem;
                }

                /* Global Button Styles */
                .rux-button {
                    display: flex;
                    position: relative;

                    margin: 0;
                    padding: 0 1rem;

                    height: 2.125rem;
                    min-width: 2.25rem;
                    /* max-width: 10.125rem; */

                    border-radius: var(--buttonBorderRadius);

                    color: var(--buttonTextColor);
                    font-family: var(--fontFamily);
                    font-size: 1rem;

                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;

                    justify-content: center;
                    align-items: center;

                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }

                /* 
          
          Disabled States
        
        */
                /* disabled state */
                .rux-button[disabled] {
                    opacity: var(--disabledOpacity);
                    cursor: var(--disabledCursor);
                }

                .rux-button[disabled]:focus {
                    outline: none;
                }
                .rux-button:not(.rux-button--secondary) {
                    border: 1px solid var(--buttonBorderColor);
                    background-color: var(--buttonBackgroundColor);
                }

                /* Secondary Button Specific Styles */
                .rux-button--secondary {
                    color: var(--buttonSecondaryTextColor);
                    background-color: var(--buttonSecondaryBackgroundColor);
                    border: 1px solid var(--buttonSecondaryBorderColor);
                }

                /* 
          
          Press/Active States
        
        */
                .rux-button:active:not([hover]):not([disabled]) {
                    border-color: var(--buttonActiveBorderColor) !important;
                    background-color: var(
                        --buttonActiveBackgroundColor
                    ) !important;
                }

                .rux-button--secondary:active:not([hover]):not([disabled]) {
                    border-color: var(--buttonSecondaryBorderColor) !important;
                    background-color: var(
                        --buttonSecondaryBackgroundColor
                    ) !important;
                }

                /* 
          
          Hover States
        
        */
                .rux-button:hover:not([active]):not([disabled]):not(.rux-button--secondary) {
                    border-color: var(--buttonHoverBorderColor);
                    background-color: var(--buttonHoverBackgroundColor);
                }

                .rux-button--secondary:hover:not([disabled]) {
                    color: var(--buttonSecondaryHoverTextColor);
                    background-color: var(
                        --buttonSecondaryHoverBackgroundColor
                    );
                    border-color: var(--buttonSecondaryHoverBorderColor);
                }

                .rux-button:hover rux-icon {
                    fill: var(--buttonHoverTextColor);
                }

                .rux-button--secondary:hover rux-icon {
                    fill: var(--buttonSecondaryHoverTextColor);
                }
                .rux-button--secondary:hover ::slotted(rux-icon) {
                    fill: var(--buttonSecondaryHoverTextColor);
                }

                /* 
          
          Icons
        
        */

                .rux-button--small {
                    height: 1.625rem;
                    padding: 0 1rem;
                    line-height: 1;
                }

                .rux-button--large {
                    height: 2.875rem;
                    min-width: 3rem;
                    padding: 0 1rem;
                }

                ::slotted(rux-icon),
                rux-icon {
                    height: 1rem;
                    width: 1rem;
                    margin-right: 0.625rem;
                }
                .rux-button--icon-only {
                    font-size: 0;
                    width: 3rem;
                    height: 2.125rem;
                }

                .rux-button--large.rux-button--icon-only {
                    width: 3rem;
                    height: 2.875rem;
                }

                .rux-button--small.rux-button--icon-only {
                    width: 3rem;
                    height: 1.625rem;
                }

                .rux-button--icon-only ::slotted(rux-icon),
                .rux-button--icon-only rux-icon {
                    margin-left: -0.625rem;
                    margin-right: -0.625rem;
                }

                .rux-button--large.rux-button--icon-only ::slotted(rux-icon),
                .rux-button--large.rux-button--icon-only rux-icon {
                    margin-left: -1rem;
                    margin-right: -1rem;
                }
                .rux-button--small.rux-button--icon-only {
                    min-width: 1.625rem;
                    padding: 0 0.75rem;
                }

                .rux-button--small ::slotted(rux-icon),
                .rux-button--small rux-icon {
                    height: 1rem;
                    width: 1rem;
                }

                .rux-button--large ::slotted(rux-icon),
                .rux-button--large rux-icon {
                    height: 1rem;
                    width: 1rem;
                    /* margin: -0.65rem 0.25rem -0.3rem calc((1.5rem - 0.625rem) * -1); */
                }

                .rux-button rux-icon {
                    fill: var(--buttonTextColor);
                }

                .rux-button--secondary rux-icon,
                .rux-button--secondary rux-icon svg > use {
                    fill: var(--buttonSecondaryTextColor);
                }
                .rux-button ::slotted(rux-icon) {
                    fill: var(--buttonTextColor);
                }
                .rux-button--secondary ::slotted(rux-icon) {
                    fill: var(--buttonSecondaryTextColor);
                }
            </style>

            <button
                class="rux-button
          ${this.size ? `rux-button--${this.size}` : ''} 
          ${this.iconOnly ? `rux-button--icon-only` : ''} 
          ${this.secondary ? 'rux-button--secondary' : ''}"
                ?disabled="${this.disabled}"
                ?type="${this.type}"
            >
                <rux-icon
                    icon="${this.icon}"
                    color="${this.secondary
                        ? 'var(--buttonSecondaryTextColor)'
                        : 'var(--buttonTextColor)'}"
                    ?hidden="${!this.icon}"
                ></rux-icon>
                <slot></slot>
            </button>
        `
    }
}
customElements.define('rux-button', RuxButton)
