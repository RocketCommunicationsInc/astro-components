import { LitElement, html } from 'lit-element';

/** Class representing a single Toggle instance. */

export class RuxSwitch extends LitElement {
  static get properties() {
    return {
      disabled: {
        type: Boolean,
        reflect: true,
      },
      checked: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  constructor() {
    super();
    this._id = `switch-${Math.floor(Math.random() * 1000)}`;
    this.disabled = false;
    this.checked = false;
  }

  /*
    Template and styles blocks should appear as the very last code blocks
  */
  render() {
    return html`
      <style>
      .rux-switch {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
      
        /* height: 1.175rem; */
        /* width: 2.3875rem; */
        height: 22px;
        width: 42px;
      
        user-select: none;
        overflow: hidden;
      }
      
      .rux-switch:hover{
        cursor: pointer;
      }

      .rux-switch__input{
        display: none;
      }
      
      .rux-switch__button {
        display: flex;
        /* justify-content: center;
        align-content: center; */
        align-items: center;
      }
      
      /* Track */
      .rux-switch__button::before {
        position: relative;
      
        display: flex;
        content: "";
      
        border-radius: 5.5px;
        border: 1px solid var(--inputBackgroundAlt);
        background-color: var(--inputBackgroundAlt);
      
        height: 11px;
        width: 38px;
      
        transition: 0.167s background-color ease-in-out;
      }
      
      /* Track Checked */
      .rux-switch__input:checked + .rux-switch__button::before {
        border-color: var(--primary) !important;
        background-color: var(--primary);
      }
      
      /* Button */
      .rux-switch__button::after {
        position: absolute;
        content: "";
        top: 1px;
        left: 0;
        z-index: 1;
        height: 19px;
        width: 19px;
      
        border-radius: 50%;
        border: 1px solid var(--inputBackgroundAlt);
        background-color: var(--inputBackground);
      
        transition: 0.167s left ease-in-out, 0.167s border-color ease-in-out;
      }
      
      /* Button Active */
      .rux-switch__input:checked + .rux-switch__button::after {
        left: 50%;
        border:1px solid var(--primary);
        background-color: var(--inputBackground);
      }
      
      /* Hover */
      .rux-switch:hover, .rux-switch__button:hover{
        cursor: pointer;
      }
      
      .rux-switch__input:disabled + .rux-switch__button::after {
        background-color: var(--switchDisabledThumbBackgroundColor);
        border-color: var(--switchDisabledThumbBorderColor);
        cursor: var(--disabledCursor);
      }
      
      .rux-switch__input:checked:disabled + .rux-switch__button::after {
        border-color: var(--switchDisabledSelectedThumbBorderColor);
        cursor: var(--disabledCursor);
      }
      
      .rux-switch__input:disabled + .rux-switch__button::before {
        opacity: var(--disabledOpacity);
        cursor: var(--disabledCursor);
      }
      
      .rux-switch__input:disabled + .rux-switch__button {
        opacity: var(--disabledOpacity);
        cursor: var(--disabledCursor);
      }
      </style>      
      <div class="rux-switch">
        <input class="rux-switch__input" type="checkbox" 
          id="${this._id}" 
          ?disabled="${this.disabled}"
          ?checked="${this.checked}"
        ></input>
        <label class="rux-switch__button" for="${this._id}" class="rux-switch__button">
        </label> 
      </div>
    `;
  }
}

customElements.define('rux-switch', RuxSwitch);
