import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxPushButton extends PolymerElement {
  static get properties() {
    return {
      _id: {
        type: "",
        value: () => {
          return `toggle-${Math.floor(Math.random() * 1000)}`;
        }
      },
      pushbutton: {
        type: Boolean,
        readOnly: true
      },
      disabled: {
        type: Boolean,
        value: false
      },
      checkedLabel: {
        type: String,
        value: "Enabled"
      },
      uncheckedLabel: {
        type: String,
        value: "Disabled"
      },
      checked: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      _label: {
        type: String
      }
    };
  }

  static get template() {
    return html`
      <style>
      :host {
        font-size: 12px;
        height: 1.3125rem;
        line-height: 1.7;
      
        margin: 0 2px;
      
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      
      :host input {
        display: none !important;
      }
      
      .rux-push-button__button {
        display: flex;

        justify-content: center;
        align-items: center;

        height: 1.375rem;
        font-size: 0.75rem !important;

        margin: 0;
        padding: 0 0.625rem;

        color: var(--pushbuttonTextColor, rgb(255, 255, 255));

        background-color: var(--pushbuttonBackgroundColor, rgb(0, 90, 143));
        border-radius: var(--defaultBorderRadius, 3px);
        border: 1px solid var(--pushbuttonBorderColor, rgb(30, 47, 66));
      }
      
      .rux-push-button__input:checked + .rux-push-button__button {
        display: flex;
        color: var(--pushbuttonSelectedTextColor, rgb(91, 255, 0));
        background-color: var(--pushbuttonSelectedBackgroundColor, rgb(0, 0, 0));
        border-color: var(--pushbuttonSelectedBorderColor, rgb(0, 0, 0));

        box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.33);
      }
      
      :host([disabled]) {
        opacity: var(--disabledOpacity, 0.4);
      }
      
      .rux-push-button__input:disabled + .rux-push-button__button {
        cursor: var(-disabledCursor, not-allowed);
      }
</style>      
      
      <input class="rux-push-button__input" id="[[_id]]" type="checkbox" disabled$=[[disabled]] checked={{checked::change}}></input>
      <label class="rux-push-button__button" for$="[[_id]]" ><slot></slot></label> 
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
}

customElements.define("rux-push-button", RuxPushButton);
