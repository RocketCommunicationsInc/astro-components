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
        position: relative;
        display: inline-block;
        box-sizing: border-box;

        -webkit-font-smoothing: subpixel-antialiased;

        height: 1.3125rem;
        width: 4.375rem;
        border-radius: var(--defaultBorderRadius, 0.1875rem);
        border: 1px solid var(--toggleBaseBorderColor, rgb(0, 0, 0));
        // box-shadow: inset 0 0 2px rgba(0, 0, 0, 1);
        user-select: none;
        overflow: hidden;
        
      
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        
      }
      
      :host([disabled]) {
        opacity: var(--disabledOpacity, 0.4);
      }
      
      :host input {
        display: none !important;
      }

      .rux-toggle__button {
        position: absolute;
        display: flex;

        justify-content: space-around;
        align-content: center;
        align-items: center;

        top: 0;
        left: 0;

        font-size: 0.75rem !important;

        height: 100%;
        width: 100%;
      }

      .rux-toggle__button span {
        display: flex;
      
        align-content: center;
        justify-content: center;
        align-items: center;
      
        width: 50%;
        height: 100%;
        z-index: 1;
      
        text-transform: uppercase;
      }

      .rux-toggle__button::before {
        position: absolute;
       
        content: "";
        display: block;
      
        height: 100%;
        width: 100%;

        background: var(
          --toggleBaseBackgroundColor,
          linear-gradient(
            to right,
            #000 50%,
            rgb(50, 51, 52) 50.1%,
            rgb(50, 51, 52) 100%
          )
        );
      }

      .rux-toggle__button::after {
        content: "";

        display: block;

        position: absolute;

        box-sizing: border-box;

        top: 0;
        left: 0;

        z-index: 10;

        transition: left 0.1s ease-out;
    
        width: 50%;
        height: 100%;
      
        border-radius: 0.125rem;
          
        background-color: var(--toggleButtonBackgroundColor, rgb(0, 90, 143));

        box-shadow: var(
          --toggleButtonBoxShadow,
          0 0 3px rgba(0, 0, 0, 0.5),
          1px 0 2px rgba(0, 0, 0, 0.6)
        );
      }

      .on {
        color: var(--toggleBaseSelectedTextColor, rgb(91, 255, 0));
      }
      
      .off {
        color: var(--toggleBaseTextColor, rgb(198, 204, 209));
      }
          
      .rux-toggle__input:checked + .rux-toggle__button::after {
        left: 50%;
        box-shadow: var(
          --toggleButtonSelectedBoxShadow,
          0 0 3px rgba(0, 0, 0, 0.5),
          -1px 0 2px rgba(0, 0, 0, 0.6)
        );
      }
      
      .rux-toggle__input:disabled + .rux-toggle__button {
        cursor: not-allowed;
      }
      </style>      
      
      <input class="rux-toggle__input" type="checkbox" id="[[_id]]" disabled$=[[disabled]] checked={{checked::change}}></input>
      <label for$="[[_id]]" class="rux-toggle__button">
        <span class='on'>On</span>
        <span class='off'>Off</span>
      </label> 
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
