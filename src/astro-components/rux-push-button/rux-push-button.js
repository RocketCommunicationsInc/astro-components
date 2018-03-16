import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";

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
        type: String
      },
      uncheckedLabel: {
        type: String
      },
      checked: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        observer: "_setLabel"
      },
      _label: {
        type: String
      }
    };
  }

  static get template() {
    return html`
      <link rel="stylesheet" href="/src/astro-components/rux-push-button/rux-push-button.css">
      
      <input class="rux-push-button__input" type="checkbox" id="[[_id]]" disabled$=[[disabled]] checked={{checked::change}}></input>
      <label for$="[[_id]]" class="rux-push-button__button">[[_label]]</label> 
      `;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    console.log(this.checkedLabel);
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

customElements.define("rux-push-button", RuxPushButton);
