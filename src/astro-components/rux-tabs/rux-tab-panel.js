import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";

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
