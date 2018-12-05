import { PolymerElement } from "@polymer/polymer/polymer-element.js";

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
    this.setAttribute("style", "position: relative; width: 100%;");

    // console.log(this.getAttribute("aria-labeledby"));

    let _panels = this.querySelectorAll("rux-tab-panel");

    window.dispatchEvent(
      new CustomEvent("register-panels", {
        detail: { panels: _panels, for: this.getAttribute("aria-labeledby") }
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
