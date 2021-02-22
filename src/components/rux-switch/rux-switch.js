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
        
          height: 22px;
          width: 42px;
          overflow: hidden;
        }

        .rux-switch__input{
          display: none;
        }
        
        .rux-switch__button {
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        
        /* Track */
        .rux-switch__button::before {
          position: relative;
        
          display: flex;
          content: "";
        
          border-radius: 5.5px;
          border: 1px solid;
          border-color: var(--switchOffColor);
          background-color: var(--switchOffColor);
        
          height: 11px;
          width: 38px;
          z-index: 2;
        }
        
        /* Track Active */
        .rux-switch__input:checked + .rux-switch__button::before {
          border-color: var(--switchOnColor);
          background-color: var(--switchOnColor);
        }

         /* Track Hover Unchecked */
         .rux-switch:hover .rux-switch__input:not(:disabled) + .rux-switch__button:before {
          border-color: var(--switchHoverOffColor);
          background-color: var(--switchHoverOffColor);
        }

        /* Track Hover Checked */
        .rux-switch:hover .rux-switch__input:checked:not(:disabled) + .rux-switch__button:before {
          border-color: var(--switchHoverOnColor);
          background-color: var(--switchHoverOnColor);
        }
        
        /* Button */
        .rux-switch__button::after {
          position: absolute;
          content: "";
          top: 1px;
          left: 0;
          z-index: 3;
          height: 19px;
          width: 19px;
        
          border-radius: 50%;
          border: 1px solid var(--switchOffColor);
          background-color: var(--inputBackground);
        
          transition: 0.167s left ease-in-out;
        }
        
        /* Button Active */
        .rux-switch__input:checked + .rux-switch__button::after {
          left: 50%;
          border-color: var(--switchOnColor);
          background-color: var(--inputBackground);
        }
        
        /* Button Hover Unchecked */
        .rux-switch:hover .rux-switch__input:not(:disabled) + .rux-switch__button:after {
          border-color: var(--switchHoverOffColor);
        }

        /* Button Hover Checked */
        .rux-switch:hover .rux-switch__input:checked:not(:disabled) + .rux-switch__button:after {
          border-color: var(--switchHoverOnColor);
        }

        /* Disabled */
        .rux-switch__input:disabled + .rux-switch__button::after {
          cursor: var(--disabledCursor);
        }
        
        .rux-switch__input:checked:disabled + .rux-switch__button::after {
          cursor: var(--disabledCursor);
        }
        
        .rux-switch__input:disabled + .rux-switch__button::before {
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
        >
        <label class="rux-switch__button" for="${this._id}" class="rux-switch__button">
        </label> 
      </div>
    `;
  }
}

customElements.define('rux-switch', RuxSwitch);
