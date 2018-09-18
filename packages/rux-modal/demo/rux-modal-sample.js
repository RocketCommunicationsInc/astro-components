import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxButton } from "../../rux-button/rux-button.js";
import { RuxModal } from "../rux-modal.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxModalSample extends PolymerElement {
  static get template() {
    return html`
		<rux-modal></rux-modal>
		<rux-button>Launch Modal</rux-button>`;
  }
  static get properties() {
    return {
      name: {
        type: String,
        value: "Modal Component"
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
customElements.define("rux-modal-sample", RuxModalSample);
