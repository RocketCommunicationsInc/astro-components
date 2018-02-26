import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxTabPanels extends PolymerElement {
  static get properties() {
    return {
      type: String
    };
  }

  constructor() {
    super();
  }

  connectedCallback() {
    // set the role to tab
    this.setAttribute("role", "tablist");

    let _panels = this.querySelectorAll("rux-tab-panel");

    window.dispatchEvent(
      new CustomEvent("register-panels", {
        detail: { panels: _panels }
      })
    );

    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  ready() {
    super.ready();
  }
}

customElements.define("rux-tab-panels", RuxTabPanels);
