import {
  html,
  PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxTab extends PolymerElement {
  static get properties() {
    return {
      selected: {
        type: Boolean,
        reflectToAttribute: true
      },
      type: {
        type: String
      },
      style: {
        type: String
      }
    };
  }

  static get template() {
    return html`
      <style>
        /* rux tab */

        :host {
          box-sizing: border-box;

          // flex-grow: 1;
          // flex-shrink: 1;

          height: 100%;
          
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 2rem;
          margin: 0;

          // width: 5rem;
          
          max-width: 12rem;
          min-width: 10px;

          text-decoration: none;

          color: var(--tabTextColor, rgb(77, 172, 255));

          background-color: var(--tabBackgroundColor, rgb(30, 47, 66));
        }

        :host span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        :host {
          border-right: 1px solid var(--tabBorderColor, rgb(20, 32, 44));
        }

        :host([compact]),
        :host([interior]) {
          min-width: 5rem;
        }

        :host([transparent]) {
          background-color: transparent;
          border-right: 1px solid var(--tabTransparentBorderColor, rgb(255,255,255,.1));
        }


        :host([interior][selected]) {
          box-shadow: inset 0 -2px 0 var(--tabSelectedBorderColor, rgb(77, 172, 255));
        }

        :host([compact][selected]) {
          box-shadow: inset 0 -3px 0 var(--tabSelectedBorderColor, rgb(77, 172, 255));
        }

        :host([selected]) {
          color: var(--tabSelectedTextColor, rgb(255, 255, 255));
          box-shadow: inset 0 -5px 0 var(--tabSelectedBorderColor, rgb(77, 172, 255));
        }


        :host(:hover){
          color: var(--tabHoverTextColor, rgb(255, 255, 255));
        }

        :host([disabled]) {
          opacity: var(--disabledOpacity, 0.4);
          cursor: var(--disabledCursor, not-allowed);
          
        }

      </style>
      <span><slot></slot></span>
    `;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    // set the role to tab
    this.setAttribute("role", "tab");

    if (this.parentElement.getAttributeNode("compact")) {
      this.setAttribute("compact", "");
    }

    if (this.parentElement.getAttributeNode("transparent")) {
      this.setAttribute("transparent", "");
    }

    if (this.parentElement.getAttributeNode("interior")) {
      this.setAttribute("interior", "");
    }

    console.log(this.parentElement.getAttributeNode("compact"));
  }

  ready() {
    super.ready();
  }
}

customElements.define("rux-tab", RuxTab);
