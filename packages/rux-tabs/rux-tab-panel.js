import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxTabPanel extends PolymerElement {
  static get properties() {
    return {
      type: String
    };
  }

  static get template() {
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
    `;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    // set the role to tab
    this.setAttribute("role", "tabpanel");
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  ready() {
    super.ready();
  }
}

customElements.define("rux-tab-panel", RuxTabPanel);
