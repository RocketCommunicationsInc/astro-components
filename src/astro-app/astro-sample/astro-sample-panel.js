import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class AstroSamplePanel extends PolymerElement {
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

    // set the role to sample-
    this.setAttribute("role", "sample-panel");
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  ready() {
    super.ready();
  }
}

customElements.define("astro-sample-panel", AstroSamplePanel);
