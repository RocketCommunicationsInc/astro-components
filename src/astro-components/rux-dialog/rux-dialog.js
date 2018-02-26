import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";
import { RuxIcon } from "../rux-icon/rux-icon.js";
import { RuxButton } from "../rux-button/rux-button.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxDialog extends PolymerElement {
  static get properties() {}
  static get template() {
    return html`
      <style>
        #rux-modal {
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0px;
          left: 0px;
          background: rgba(0,0,0,0.4);
          display: none;
        }
        .rux-modal-action-container {
          margin: auto;
          width: 30%;
          height: 30%;
          margin-top: 100px;
          padding: 10px;
          border: 1px solid lightblue;
          text-align: center;
        }
        .rux-button-group {
          position: absolute:
          right: 0px;
          bottom: 0px;
          border: 1px solid white;
        }

        .rux-launch-button {
          margin:auto;
          width: 50%;
          height: 50%;
          text-align: center;
        }

      </style>
      <rux-button class="rux-launch-button" on-click="_launchModal">Launch Modal</rux-button>
      <div id="rux-modal">
        <div class="rux-modal-action-container">
          <div class="rux-modal-message"><rux-icon></rux-icon>Hello, Dialog!</div>
            <div class="rux-button-group">
              <rux-button on-clicl="_handleModalConfirm">Ok</rux-button>
              <rux-button on-click="_handleModalDeny">Cancel</rux-button>
            </div>
          </div>
      </div>
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
  ready() {
    super.ready();
  }
  _launchModal() {
    console.log("Launch Modal");
  }
  _handleModalConfirm() {
    console.log("Close modal");
    console.log("do stuff"); //this is a problem because the "stuff" is going to vary from implementation to implementation
  }
  _handleModalDeny() {
    console.log("Close modal");
  }
}
customElements.define("rux-dialog", RuxDialog);
