import { LitElement, html } from 'lit-element';
// eslint-disable-next-line no-unused-vars
import { RuxIcon } from '../rux-icon/rux-icon.js';
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
        .rux-button:not(.rux-button--outline) {
          border: 1px solid var(--buttonBackgroundColor);
          background-color: var(--buttonBorderColor);
          box-shadow: var(
            --controlBoxShadow,
            0 2px 4px rgba(0, 0, 0, 0.14),
            0 3px 4px rgba(0, 0, 0, 0.12),
            0 1px 5px rgba(0, 0, 0, 0.2)
          );
        }

        /* Outline Button Specific Styles */
        .rux-button--outline {
          color: var(--buttonOutlineTextColor);
          background-color: var(--buttonOutlineBackgroundColor);
          border: 1px solid var(--buttonOutlineBorderColor);
        }

        /* 
          
          Press/Active States
        
        */
        .rux-button:active:not([hover]):not([disabled]) {
          border-color: var(--buttonActiveBorderColor) !important;
          background-color: var(--buttonActiveBackgroundColor) !important;
        }

        .rux-button:active:not([hover]):not([disabled]):not(.rux-button--outline) {
          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.14) !important;
        }

        /* 
          
          Hover States
        
        */
        .rux-button:hover:not([active]):not([disabled]):not(.rux-button--outline) {
          border-color: var(--buttonHoverBorderColor);
          background-color: var(--buttonHoverBackgroundColor);
          box-shadow: var(--buttonHoverBoxShadow);
        }

        .rux-button--outline:hover:not([disabled]) {
          color: var(--buttonOutlineHoverTextColor);
          background-color: var(--buttonOutlineHoverBackgroundColor);
          border-color: var(--buttonOutlineHoverBorderColor);
        }

        /* 
          
          Icons
        
        */

        .rux-button--small {
          font-size: var(--smallLabelTextSize);
          height: 1.625rem;
          padding: 0 1rem;
          line-height: 1;
        }

        .rux-button--large {
          font-size: var(--largeLabelTextSize);
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
        }
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
          color="${this.outline ? 'var(--primary)' : 'var(--primaryElementText)'}"
          ?hidden="${!this.icon}"
        ></rux-icon>
        <slot></slot>
      </button>
    `;
  }
}
customElements.define('rux-button', RuxButton);
