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
      <style>/* 
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
      } */

      .rux-toggle {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
      
        
        height: 1.375rem;
        width: 2.875rem;
        
      
        user-select: none;
        overflow: hidden;
      }
      
      .rux-toggle__input {
        display: none !important;
      }
      

            
      .rux-toggle__button {
        display: flex;
        /* justify-content: center;
        align-content: center; */
        align-items: center;
      }

      .rux-toggle__button::before {
        position: relative;

        content: "";
        border-radius: 5.5px;
        border: 1px solid var(--toggleTrackBorderColor, rgb(122, 122, 122));
        background-color: var(--toggleTrackBackgroundColor, rgb(204, 204, 204));

        height: 11px;
        width: 32px;

        transition: 0.167s background-color ease-in-out;
      }

      /* Track */
      .rux-toggle__input:checked + .rux-toggle__button::before {
        background-color: var(
          --toggleSelectedTrackBackgroundColor,
          rgb(100, 217, 255)
        );
        border-color: var(--toggleSelectedTrackBorderColor, rgb(27, 122, 153));
      }

      .rux-toggle__button::after {
        position: absolute;
        content: "";
        left: 0;
        height: 19px;
        width: 19px;

        border-radius: 50%;
        border: 1px solid var(--toggleThumbBorderColor, #fff);
        background-color: var(--toggleThumbBackgroundColor, rgb(255, 255, 255));

        transition: 0.167s left ease-in-out, 0.167s border-color ease-in-out;
      }

      .rux-toggle__input:disabled + .rux-toggle__button::after {
        background-color: var(
          --toggleDisabledThumbBackgroundColor,
          rgb(163, 163, 163)
        );
        border-color: var(--toggleDisabledThumbBorderColor, rgb(163, 163, 163));
      }

      .rux-toggle__input:checked + .rux-toggle__button::after {
        left: calc(50% + 2px);
        border-color: var(--toggleSelectedThumbBorderColor, #fff);
      }

      .rux-toggle__input:checked:disabled + .rux-toggle__button::after {
        border-color: var(
          --toggleDisabledSelectedThumbBorderColor,
          rgb(163, 163, 163)
        );
        cursor: not-allowed;
      }

      .rux-toggle__input:disabled + .rux-toggle__button::before {
        opacity: var(--disabledOpacity, 0.4);
        cursor: not-allowed;
      }
      </style>      
      <div class='rux-toggle'>
        <input class="rux-toggle__input" type="checkbox" id="[[_id]]" disabled$=[[disabled]] checked={{checked::change}}></input>
        <label class="rux-toggle__button" for$="[[_id]]" class="rux-toggle__button"></label> 
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
}

customElements.define("rux-toggle", RuxToggle);
