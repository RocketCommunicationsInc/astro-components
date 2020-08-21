import { LitElement, html } from 'lit-element';
import { directive } from 'lit-html';
import RuxIconLibrary from '@astrouxds/rux-assets/icons/astro.svg';
import '@astrouxds/rux-assets/css/astro.tokens.css';

const getIcon = directive((library, icon) => (part) => {
  try {
    part.setValue(`${library}#${icon}`);
  } catch (error) {
    throw error;
  }
});

export class RuxIcon extends LitElement {
  static get properties() {
    return {
      icon: {
        type: String,
      },
      size: {
        type: String,
      },
      color: {
        type: String,
      },
      library: {
        type: String,
      },
      label: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.library = RuxIconLibrary;
    /* TODO: a non-presumptive way to assign a better default label if the user doesn’t provide one */
    this.label = 'icon';
  }

  firstUpdated() {
    this.style.setProperty('--iconDefaultColor', this.color);
  }

  updated(changedProperties) {
    if (changedProperties.get('color')) {
      this.style.setProperty('--iconDefaultColor', this.color);
    }
  }

  render() {
    return html`
      <style>
        :host {
          --iconDefaultSize: 2.7rem;
          --iconDefaultColor: rgb(77, 172, 255);

          display: inline-block;

          height: var(--iconDefaultSize, 2.75rem);
          width: var(--iconDefaultSize, 2.75rem);
        }

        svg,
        svg > use {
          height: 100%;
          width: auto;
          fill: var(--iconDefaultColor, rgb(77, 172, 255));
        }

        :host([size='extra-small']) {
          height: 1rem;
          width: 1rem;
        }

        :host([size='small']) {
          height: 2rem;
          width: 2rem;
        }

        :host([size='large']) {
          height: 4rem;
          width: 4rem;
        }
      </style>

      <span id="rux-icon" title="${this.label}">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <use href="${getIcon(this.library, this.icon)}"></use>
        </svg>
      </span>
    `;
  }
}
customElements.define('rux-icon', RuxIcon);
