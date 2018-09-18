import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxPushButton } from "../rux-push-button.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxPushButtonSample extends PolymerElement {
  static get template() {
    return html`

      <style>
      .push-buttons-list {
        list-style: none;
        padding: 0;
        margin: 0;
      
        display: flex;
        justify-content: center;
      }

      .push-buttons-list li {
        margin: 2px;
      }
      </style>

      <div class="rux-form-field">
        <label aria-label="pushbuttons">Enable:</label>
        <ul class="no-list push-buttons-list">
          <li><rux-push-button>Tx</rux-push-button></li>
          <li><rux-push-button checked>Rx</rux-push-button></li>
          <li><rux-push-button disabled>Xx</rux-push-button></li>
          <li><rux-push-button checked disabled>Yx</rux-push-button></li>
        </ul>
      </div>
    
    `;
  }
  static get properties() {
    return {
      name: {
        type: String,
        value: "Push Button Component"
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
customElements.define("rux-push-button-sample", RuxPushButtonSample);
