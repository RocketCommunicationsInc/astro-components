import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";

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
        reflectToAttribute: true,
        notify: true
      }
    };
  }

  static get template() {
    return html`
      <link rel="stylesheet" href="/src/astro-components/rux-toggle/rux-toggle.css">
      
      <input class="rux-toggle__input" type="checkbox" id="[[_id]]" disabled$=[[disabled]] checked={{checked}}></input>
      <label for$="[[_id]]" class="rux-toggle__button"></label> 
      
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

customElements.define("rux-toggle", RuxToggle);
