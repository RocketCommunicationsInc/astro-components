import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";
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
      <link rel="stylesheet" href="/src/astro-components/rux-button/rux-button.css">

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
