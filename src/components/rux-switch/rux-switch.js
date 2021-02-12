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

          height: 1.375rem;
          width: 2.875rem;

          user-select: none;
          overflow: hidden;
        }
        
        .rux-switch__input {
          display: none !important;
        }

        .rux-switch__button {
          display: flex;
          /* justify-content: center;
          align-content: center; */
          align-items: center;
        }

        .rux-switch__button::before {
          position: relative;

          content: "";
          border-radius: 5.5px;
          border: 1px solid var(--switchTrackBorderColor);
          background-color: var(--switchTrackBackgroundColor);

          height: 11px;
          width: 32px;

          transition: 0.167s background-color ease-in-out;
        }

        /* Track */
        .rux-switch__input:checked + .rux-switch__button::before {
          background-color: var(--switchSelectedTrackBackgroundColor);
          border-color: var(--switchSelectedTrackBorderColor);
        }

        .rux-switch__button::after {
          position: absolute;
          content: "";
          left: 0;
          height: 19px;
          width: 19px;

          border-radius: 50%;
          border: 1px solid var(--switchThumbBorderColor);
          background-color: var(--switchThumbBackgroundColor);

          transition: 0.167s left ease-in-out, 0.167s border-color ease-in-out;
        }

        .rux-switch__input:disabled + .rux-switch__button::after {
          background-color: var(--switchDisabledThumbBackgroundColor);
          border-color: var(--switchDisabledThumbBorderColor);
          cursor: var(--disabledCursor);
        }

        .rux-switch__input:checked + .rux-switch__button::after {
          left: calc(50% + 2px);
          border-color: var(--switchSelectedThumbBorderColor);
        }

        .rux-switch__input:checked:disabled + .rux-switch__button::after {
          border-color: var(--switchDisabledSelectedThumbBorderColor);
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
        ></input>
        <label class="rux-switch__button" for="${this._id}" class="rux-switch__button"></label> 
      </div>
    `;
  }
}

customElements.define('rux-switch', RuxSwitch);
