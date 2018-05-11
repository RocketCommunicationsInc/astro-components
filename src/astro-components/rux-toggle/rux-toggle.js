import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxToggle extends PolymerElement {
  static get properties() {
    return {
      _id: {
        type: "",
        value: () => {
          return `toggle-${Math.floor(Math.random() * 1000)}`;
        }
      },
      disabled: {
        type: Boolean,
        value: false
      },
      checked: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      }
    };
  }

  static get template() {
    return html`
      <style>
      :host {
        box-sizing: border-box;
      
        margin: 0 2px;
        font-weight: 600;
        font-size: 12px;
      
        outline: 0;
        display: inline-block;
      
        border: 1px solid #101923;
        height: 1.375rem;
        width: 4.375rem;
      
        position: relative;
      
        background: linear-gradient(
          to right,
          #005a8f 0%,
          #005a8f 50%,
          #000 50%,
          #000 100%
        );
        box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.5);
      
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      
      *,
      *::after *::before {
        box-sizing: inherit;
      }
      
      :host::before,
      :host::after {
        display: inline-block;
      
        top: 0;
        position: absolute;
        color: #fff;
        height: 100%;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 1px;
      }
      
      :host::before {
        content: "ON";
        left: 0;
      }
      
      :host::after {
        content: "OFF";
        right: 0;
      }
      
      :host input {
        display: none !important;
      }
      
      /* .rux-toggle__input {
        display: none;
      } */
      
      .rux-toggle__button {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
      
        width: 100%;
      
        cursor: pointer;
        z-index: 20;
      }
      .rux-toggle__button::after {
        box-sizing: border-box;
        position: relative;
        display: block;
        content: "";
        width: 50%;
        height: 100%;
        background-color: #005a8f;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
        transition: left 0.1s ease-out;
        top: 0;
        left: 0;
        z-index: 10;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
      }
      
      .rux-toggle__input:checked + .rux-toggle__button::after {
        left: 50%;
      }
      
      :host([disabled]) {
        opacity: 0.4;
      }
      .rux-toggle__input:disabled + .rux-toggle__button {
        cursor: not-allowed;
      }
</style>      
      
      <input class="rux-toggle__input" type="checkbox" id="[[_id]]" disabled$=[[disabled]] checked={{checked::change}}></input>
      <label for$="[[_id]]" class="rux-toggle__button">[[_label]]</label> 
      `;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    // console.log(this.checkedLabel);
    // this._label = this.checked ? this.checkedLabel : this.uncheckedLabel;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  ready() {
    super.ready();
  }

  _setLabel() {
    console.log("updating");
    this._label = this.checked ? this.checkedLabel : this.uncheckedLabel;
  }
}

customElements.define("rux-toggle", RuxToggle);
