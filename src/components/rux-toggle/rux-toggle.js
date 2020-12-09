import { LitElement, html } from 'lit-element';

/** Class representing a single Toggle instance. */

export class RuxToggle extends LitElement {
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
    this._id = `toggle-${Math.floor(Math.random() * 1000)}`;
    this.disabled = false;
    this.checked = false;
  }

  /*
    Template and styles blocks should appear as the very last code blocks
  */
  render() {
    return html`
      <style>

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
        border: 1px solid var(--toggleTrackBorderColor);
        background-color: var(--toggleTrackBackgroundColor);

        height: 11px;
        width: 32px;

        transition: 0.167s background-color ease-in-out;
      }

      /* Track */
      .rux-toggle__input:checked + .rux-toggle__button::before {
        background-color: var(--toggleSelectedTrackBackgroundColor);
        border-color: var(--toggleSelectedTrackBorderColor);
      }

      .rux-toggle__button::after {
        position: absolute;
        content: "";
        left: 0;
        height: 19px;
        width: 19px;

        border-radius: 50%;
        border: 1px solid var(--toggleThumbBorderColor);
        background-color: var(--toggleThumbBackgroundColor);

        transition: 0.167s left ease-in-out, 0.167s border-color ease-in-out;
			}
			
      .rux-toggle__input:disabled + .rux-toggle__button::after {
        background-color: var(--toggleDisabledThumbBackgroundColor);
				border-color: var(--toggleDisabledThumbBorderColor);
				cursor: var(--disabledCursor);
      }

      .rux-toggle__input:checked + .rux-toggle__button::after {
        left: calc(50% + 2px);
        border-color: var(--toggleSelectedThumbBorderColor);
      }

      .rux-toggle__input:checked:disabled + .rux-toggle__button::after {
        border-color: var(--toggleDisabledSelectedThumbBorderColor);
				cursor: var(--disabledCursor);				
      }

      .rux-toggle__input:disabled + .rux-toggle__button::before {
        cursor: var(--disabledCursor);
			}

			.rux-toggle__input:disabled + .rux-toggle__button {
				opacity: var(--disabledOpacity);
				cursor: var(--disabledCursor);
			}
			
      </style>      
      <div class='rux-toggle'>
        <input class="rux-toggle__input" type="checkbox" 
          id="${this._id}" 
          ?disabled="${this.disabled}"
          ?checked="${this.checked}"
        ></input>
        <label class="rux-toggle__button" for="${this._id}" class="rux-toggle__button"></label> 
      </div>
    `;
  }
}

customElements.define('rux-toggle', RuxToggle);
