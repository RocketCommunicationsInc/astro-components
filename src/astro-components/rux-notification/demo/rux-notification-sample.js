import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxComponent } from "/src/astro-components/rux-component/rux-component.js";
import { RuxButton } from "/src/astro-components/rux-button/rux-button.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxNotificationSample extends PolymerElement {
  static get template() {
    return html`
			<rux-notification></rux-notification>
			<rux-button>Show Notification</rux-button>
			`;
  }
  static get properties() {
    return {
      name: {
        type: String,
        value: "Notification Component"
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
customElements.define("rux-notification-sample", RuxNotificationSample);
