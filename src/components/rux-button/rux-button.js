import { LitElement, html } from 'lit-element';
// eslint-disable-next-line no-unused-vars
import { RuxIcon } from '@astrouxds/rux-icon/rux-icon.js';
import '@astrouxds/rux-assets/css/astro.tokens.css';

export class RuxButton extends LitElement {
  static get properties() {
    return {
      size: { type: String },
      icon: { type: String },
      iconOnly: { type: Boolean },
      disabled: { type: Boolean },
      outline: { type: Boolean },
    };
  }
  constructor() {
    super();
    this.size = '';
    (this.icon = ''), (this.iconOnly = false);
    this.disabled = false;
    this.outline = false;
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

          border-radius: var(--buttonBorderRadius, 3px);

          color: var(--buttonTextColor, #fff);
          font-family: var(--fontFamily, 'Open Sans');
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
          opacity: var(--disabledOpacity, 0.4);
          cursor: var(--disabledCursor, not-allowed);
        }

        .rux-button[disabled]:focus {
          outline: none;
        }
        .rux-button:not(.rux-button--outline) {
          border: 1px solid var(--buttonBackgroundColor, rgb(0, 90, 143));
          background-color: var(--buttonBorderColor, rgb(0, 90, 143));
          box-shadow: var(
            --controlBoxShadow,
            0 2px 4px rgba(0, 0, 0, 0.14),
            0 3px 4px rgba(0, 0, 0, 0.12),
            0 1px 5px rgba(0, 0, 0, 0.2)
          );
        }

        /* Outline Button Specific Styles */
        .rux-button--outline {
          color: var(--buttonOutlineTextColor, rgb(255, 255, 255));
          background-color: var(--buttonOutlineBackgroundColor, transparent);
          border: 1px solid var(--buttonOutlineBorderColor, rgb(0, 90, 143));
        }

        /* 
          
          Press/Active States
        
        */
        .rux-button:active:not([hover]):not([disabled]) {
          border-color: var(--buttonActiveBorderColor, rgb(0, 90, 143)) !important;
          background-color: var(--buttonActiveBackgroundColor, rgb(0, 90, 143)) !important;
        }
        
        .rux-button--outline:active:not([hover]):not([disabled]) {
          border-color: var(--buttonOutlineBorderColor, rgb(0, 90, 143)) !important;
          background-color: var(
            --buttonOutlineBackgroundColor,
            transparent
          ) !important;
        }

        .rux-button:active:not([hover]):not([disabled]):not(.rux-button--outline) {
          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.14) !important;
        }

        /* 
          
          Hover States
        
        */
        .rux-button:hover:not([active]):not([disabled]):not(.rux-button--outline) {
          border-color: var(--buttonHoverBorderColor, rgb(58, 129, 191));
          background-color: var(--buttonHoverBackgroundColor, rgb(58, 129, 191));
          box-shadow: var(
            --buttonHoverBoxShadow,
            0 8px 10px 1px rgba(0, 0, 0, 0.14),
            0 3px 14px 3px rgba(0, 0, 0, 0.12),
            0 4px 5px rgba(0, 0, 0, 0.2)
          );
        }

        .rux-button--outline:hover:not([disabled]) {
          color: var(--buttonOutlineTextColor, rgb(255, 255, 255));
          background-color: var(--buttonOutlineHoverBackgroundColor, rgba(30, 47, 66, 0.75));
          border-color: var(--buttonOutlineHoverBorderColor, rgb(58, 129, 191));
        }

        /* 
          
          Icons
        
        */

        .rux-button--small {
          font-size: var(--smallLabelTextSize, 0.875rem);
          height: 1.625rem;
          padding: 0 1rem;
          line-height: 1;
        }

        .rux-button--large {
          font-size: var(--largeLabelTextSize, 1.125rem);
          height: 2.875rem;
          /* min-width: 2.875rem; */
          padding: 0 1.5rem;
        }

        ::slotted(rux-icon),
        rux-icon {
          height: 1.5rem;
          width: 1.5rem;

          margin-right: 0.625rem;
          margin-left: -0.625rem;
        }
        .rux-button--icon-only {
          font-size: 0;
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
          height: 0.875rem;
          width: 0.875rem;
        }

        .rux-button--large ::slotted(rux-icon),
        .rux-button--large rux-icon {
          height: 1.75rem;
          width: 1.75rem;
          margin-left: -0.8rem;
          /* margin: -0.65rem 0.25rem -0.3rem calc((1.5rem - 0.625rem) * -1); */
        }

        /* .rux-button__icon .rux-icon {
          height: auto;
          width: 100%;
          fill: var(--buttonTextColor, rgb(255, 255, 255));
        } */
      </style>

      <button
        class="rux-button
          ${this.size ? `rux-button--${this.size}` : ''} 
          ${this.iconOnly ? `rux-button--icon-only` : ''} 
          ${this.outline ? 'rux-button--outline' : ''}"
        ?disabled="${this.disabled}"
      >
        <rux-icon
          icon="${this.icon}"
          color="${this.outline ? 'rgb(0, 90, 143)' : '#ffffff'}"
          ?hidden="${!this.icon}"
        ></rux-icon>
        <slot></slot>
      </button>
    `;
  }
}
customElements.define('rux-button', RuxButton);
