import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxPopUpMenu } from "/src/astro-components/rux-pop-up-menu/rux-pop-up-menu.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxPopUpMenuSample extends PolymerElement {
  static get template() {
    return html`<rux-pop-up-menu></rux-pop-up-menu>`;
  }
  static get properties() {
    return {
      name: {
        type: String,
        value: "Pop Up Menu Component"
      }
    };
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
  ready() {
    super.ready();
  }
}
customElements.define("rux-pop-up-menu-sample", RuxPopUpMenuSample);
