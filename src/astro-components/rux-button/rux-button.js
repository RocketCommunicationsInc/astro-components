import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxIcon } from "../rux-icon/rux-icon.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxButton extends PolymerElement {
  static get properties() {
    return {
      type: String,
      icon: String,
      default: Boolean,
      disabled: Boolean
    };
  }
  static get template() {
    return html`
      <style>
      :host {
        display: inline-flex;
        
        
        /* This improves CSS performance see: https://developers.google.com/web/updates/2016/06/css-containment */
      }
      
      *[hidden] {
        display: none !important;
      }
      
      .rux-button {
        display: inline-block;
        position: relative;
      
        margin: 0;
        padding: 0.34375rem 1rem;
      
        height: 2.1875rem;
        min-width: 2.25rem;
        max-width: 10.125rem;
      
        border-radius: var(--buttonBorderRadius, 3px);
      
        color: var(--buttonTextColor, #fff);
        font-family: "Open Sans", sans-serif;
        font-size: 1rem;
      
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.25;
      
        user-select: none;
      }
      
      /* 
        
        Disabled States
      
      */
      /* disabled state */
      .rux-button:disabled {
        opacity: var(--disabledOpacity, 0.4);
        cursor: var(--disabledCursor, not-allowed);
      }
      
      .rux-button:focus {
        outline: none;
      }
      
      .rux-button:not(.rux-button--outline):not(.rux-button--outline) {
        border: 1px solid var(--buttonBackgroundColor, rgb(0, 90, 143));
        background-color: var(--buttonBorderColor, rgb(0, 90, 143));
        box-shadow: var(
          --controlBoxShadow,
          0 2px 4px rgba(0, 0, 0, 0.14),
          0 3px 4px rgba(0, 0, 0, 0.12),
          0 1px 5px rgba(0, 0, 0, 0.2)
        );
      }
      
      .rux-button--default {
        border-color: var(--buttonDefaultBorderColor, rgb(255, 255, 255)) !important;
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
      .rux-button:active:not([hover]):not([disabled]):not(.rux-button--outline) {
        border-color: var(--buttonActiveBorderColor, rgb(0, 90, 143)) !important;
        background-color: var(
          --buttonActiveBackgroundColor,
          rgb(0, 90, 143)
        ) !important;
        box-shadow: none !important;
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
        background-color: var(
          --buttonOutlineHoverBackgroundColor,
          rgba(30, 47, 66, 0.75)
        );
        border-color: var(--buttonOutlineHoverBorderColor, rgb(58, 129, 191));
      }
      
      /* 
        
        Icons
      
      */
      .rux-icon {
        fill: #fff;
      }
      
      .rux-button--small {
        font-size: var(--smallLabelTextSize, 0.875rem);
        height: 1.625rem;
        padding: 0 1rem;
        line-height: 1;
      }
      
      .rux-button--large {
        font-size: var(--largeLabelTextSize, 1.125rem);
        height: 2.8125rem;
        min-width: 2.875rem;
        padding: 0.657rem 1.5rem;
      }
      
      .rux-button__icon {
        display: inline-block;
        vertical-align: middle;
      
        height: 1.5rem;
        width: 1.5rem;
      
        margin: -0.45rem 0.525rem -0.25rem calc((1rem - 0.325rem) * -1);
      
        outline: 1px solid rgba(255, 255, 255, 0.2);
      }
      
      .rux-button--small .rux-button__icon {
        height: 0.875rem;
        width: 0.875rem;
      
        margin-right: 0.2em;
      }
      
      .rux-button--large .rux-button__icon {
        height: 1.75rem;
        width: 1.75rem;
      
        margin: -0.5rem 0.25rem -0.3rem calc((1.5rem - 0.625rem) * -1);
      }
      
      .rux-button--icon .rux-button__icon {
        margin-right: -1.5rem;
        margin-left: -1.5rem;
      }
  </style>      

      <button class$="rux-button rux-button--[[type]] [[default]]" disabled$="[[disabled]]">
        <rux-icon icon="[[icon]]" class="rux-icon rux-icon--button" hidden="[[hidden]]"></rux-icon>
        <slot></slot>
      </button>`;
  }
  constructor() {
    super();
  }
  ready() {
    super.ready();
    // set default
    this.default = this.default ? "rux-button--default" : "";
    // hide the icon if there is no icon
    this.hidden = !this.icon;
    // set type to standard if there is no type
    this.type = this.type ? this.type : "standard";
  }
}
customElements.define("rux-button", RuxButton);
