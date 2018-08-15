import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxIcon } from "../rux-icon/rux-icon.js";
import { RuxButton } from "../rux-button/rux-button.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxModal extends PolymerElement {
  static get properties() {
    return {
      open: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        notify: true
      },
      message: {
        type: String
      },
      confirmText: {
        type: String,
        value: false
      },
      denyText: {
        type: String,
        value: false
      },
      customEvent: {
        type: String
      },
      icon: {
        type: String,
        value: "default:caution"
      },
      shadowBox: {
        type: Boolean,
        value: false
      },
      _choice: {
        type: Boolean,
        observer: "_handleModalChoice"
      }
    };
  }
  static get template() {
    return html`
      <style>
    


      :host {
        display: none;
        box-sizing: border-box;
        
      }

      :host([open]) {
        display: block;
      }

      *,
      *:before,
      *:after {
          box-sizing: inherit;
      }

      *[hidden] {
        display: none !important;
      }


      .rux-button-group {
        margin-top: auto;
        margin-left: auto;
      }

      .rux-button-group rux-button:not(:last-child) {
        margin-right: 0.375rem;
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
        flex-direction: column;
        justify-content: space-between;

        background-color: var(--modalBackgroundColor, rgb(0, 0, 0));

        width: 28rem;
        height: 13.5rem;
        border: 2px solid var(--modalBorderColor, rgb(0, 90, 143));

        border-radius: 4px;
        margin: auto;
        padding: 0;

        user-select: none;

        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
          0 3px 14px 3px rgba(0, 0, 0, 0.12), 0 4px 5px 0 rgba(0, 0, 0, 0.2);

      }


      .rux-modal__titlebar {
        display: flex;
        flex-grow: 0;
        justify-content: center;
        align-items: center;
      
        width: 100%;
        height: 2rem;
      
        background-color: var(--modalBorderColor, rgb(0, 90, 143));
        user-select: none;
        cursor: move;
      }
      
      .rux-modal__titlebar h1 {
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.2;
        padding: 0;
        margin: 0;
        color: #fff !important;
      }

      .rux-modal__content {
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        padding: 1rem;
        color: var(--fontColor, #fff);
      }



      rux-icon {
        margin-right: 0.75rem;
      }


      
      .rux-modal__message {
        margin: 0.5rem 1.875rem 2.5rem 1.875rem;
      }
      
      .rux-modal .rux-button {
        box-shadow: none !important;
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
        <dialog class="rux-modal" aria-role="modal" {{open}}>
          <header class="rux-modal__titlebar">
            <h1>Modal Title</h1>
          </header>
          <div class="rux-modal__content">
            <div class="rux-modal__message">[[message]]</div>
            <div class="rux-button-group">
              <rux-button on-click="_handleModalChoice" data-value="false" hidden$="[[!denyText]]">[[denyText]]</rux-button>
              <rux-button on-click="_handleModalChoice" data-value="true" hidden$="[[!confirmText]]">[[confirmText]]</rux-button>
            </div>
          </div>
        </dialog>
      </div>
    `;
  }
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();

    // if no custom listener event is passed in then emit a standard
    // modal-event event
    this._event = !this.customEvent ? "modal-event" : this.customEvent;

    // in the event neither Confirm/Deny text is supplied provide
    // a default cancel button to get out of the
    if (!this.denyText && !this.confirmText) {
      this.denyText = "Cancel";
      console.warn(
        "No confirm or deny actions have been passed to the modal dialog box. User has been presented with a Cancel button"
      );
    }

    // get the total button set and set the last button as default
    // and add focus … but it doesn’t work (no focus on Web Components?)
    const buttonSet = this.shadowRoot.querySelectorAll("rux-button");
    const defaultButton = buttonSet[buttonSet.length - 1];
    defaultButton.setAttribute("default", "");
    defaultButton.focus();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  _handleModalChoice(e) {
    // convert string value to boolean
    const choice = e.currentTarget.dataset.value === "true";

    // dispatch event
    window.dispatchEvent(
      new CustomEvent(this._event, {
        detail: { confirm: choice }
      })
    );

    // close dialog
    this.open = false;
  }
}
customElements.define("rux-modal", RuxModal);
