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

          flex-grow: 1;
          flex-shrink: 1;

          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3px 2rem 0;
          
          max-width: 12rem;
          min-width: 2rem;

          text-decoration: none;

          

          color: var(--tabTextColor, rgb(77, 172, 255));

          background-color: var(--tabBackgroundColor, rgb(30, 47, 66));
          border-bottom: 0.3125rem solid var(--tabBackgroundColor, rgb(30, 47, 66));
        }

        :host span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        :host {
          border-right: 1px solid var(--tabBorderColor, rgb(20, 32, 44));
        }

        :host([selected]) {
          color: var(--tabSelectedTextColor, rgb(255, 255, 255));
          border-bottom: 5px solid var(--tabSelectedBorderColor, rgb(77, 172, 255));
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
  }

  ready() {
    super.ready();
  }
}

customElements.define("rux-tab", RuxTab);
