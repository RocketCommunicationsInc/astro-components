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
		<rux-modal
      message="Release Modem 2 on slice 1000 for deactivation. Releasing this modem cannot be undone." 
      confirm-text="Release"
      deny-text="Cancel"
      opened></rux-modal>
    
      <rux-button class="rux-launch-button" on-click="_launchModal">Launch Modal</rux-button>  `;
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

  /* MODAL WINDOW */
  /* Functions */
  _launchModal() {
    const _modal = this.shadowRoot.querySelectorAll("rux-modal")[0];
    _modal.setAttribute("open", "");
  }
}
customElements.define("rux-modal-sample", RuxModalSample);
