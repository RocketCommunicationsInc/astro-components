import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";
import { RuxIcon } from "../rux-icon/rux-icon.js";
import { RuxButton } from "../rux-button/rux-button.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxDialog extends PolymerElement {
  static get properties() {
    return {
      message: {
        type: String
      },
      confirmText: {
        type: String,
        value: false
      },
      cancelText: {
        type: String,
        value: false
      }
    };
  }
  static get template() {
    return html`
      <style>
    
      :host {
        box-sizing: border-box;
      }

            *,
      *:before,
      *:after {
          box-sizing: inherit;
      }


      .rux-modal-container {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;

        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 11001;
      }

      
      .rux-modal {
        position: relative;
        display: flex;
        font-size: 0.875rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background: black;
        
        
        width: 27.5rem;
        min-height: 12.5rem;
        border: 2px solid #5CB3FF;
        border-radius: 4px;
        margin: auto;
        padding: 1rem;
      }


      .rux-modal__message {
        display: flex;
        align-items: top;
        margin-top: auto;
        width:70%;
        color: #fff;
      }

      rux-icon {
        margin-right: 0.75rem;
      }






      .rux-button-group {
        margin-left: auto;
        margin-top: auto;
      }

      .rux-modal::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0,0,0,0.5);
        z-index: -1;
      }

 

      </style>
      
      <div class="rux-modal-container">
        <div class="rux-modal" open>
          <div class="rux-modal__message"><rux-icon icon="default:caution" size="22" color="#fff"></rux-icon>[[message]]</div>
          <div class="rux-button-group">
            <rux-button on-clicl="_handleModalConfirm">[[confirmText]]</rux-button>
            <rux-button on-click="_handleModalDeny" default>[[cancelText]]</rux-button>
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
