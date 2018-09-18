import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxNotification } from "../rux-notification.js";
import { RuxButton } from "../../rux-button/rux-button.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxNotificationSample extends PolymerElement {
  static get template() {
    return html`
    
    <rux-button on-click="_showNotification" data-notification="0">Toggle Notification Banner</rux-button>
    <rux-notification
      status$=[[notificationStatus]]
      message="This is a global notification banner.">
    </rux-notification>

		
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

  /* NOTIFICATIONS */

  _showNotification(e) {
    const _notification = this.shadowRoot.querySelectorAll("rux-notification")[
      e.currentTarget.dataset.notification
    ];

    if (_notification.hasAttribute("opened")) {
      _notification.removeAttribute("opened");
    } else {
      _notification.setAttribute("opened", "");
    }
  }
}
customElements.define("rux-notification-sample", RuxNotificationSample);
