import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxAccordion extends PolymerElement {
  static get properties() {
    return {};
  }

  static get template() {
    return html`
      
      `;
  }
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }
}
customElements.define("rux-accordion", RuxAccordion);
