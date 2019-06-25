import { LitElement, html, css } from 'lit-element';

export class RuxPopUpMenu extends LitElement {
  static get properties() {
    return {
      data: {
        type: Array,
      },
      expanded: {
        type: Boolean,
        reflect: true,
      },
      _trigger: {
        type: Object,
      },
    };
  }

  constructor() {
    super();

    this.expanded = false;
    this.data = [];

    this._trigger = {};

    this._left = 0;
    this._top = 0;

    this.padding = 16;
  }

  connectedCallback() {
    super.connectedCallback();

    const _outsideClick = () => {
      this.expanded = false;
      window.removeEventListener('mousedown', _outsideClick);
    };

    const _click = () => {
      this.expanded = true;

      const debounce = setTimeout(() => {
        window.addEventListener('mousedown', _outsideClick);
        clearTimeout(debounce);
      }, 10);
    };

    this._trigger = this.parentElement.querySelector(`[aria-controls="${this.id}"]`);
    this._trigger.addEventListener('mousedown', _click);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  static set left(val) {
    this._left = val;
  }

  static get left() {
    return this._left;
  }

  static set top(val) {
    this._top = val;
  }

  static get top() {
    return this._top;
  }

  _close() {
    this.expanded = false;
    // window.removeEventListener('mousedown', e);
  }

  _setMenuPosition() {
    const menuBounds = this.getBoundingClientRect();
    const triggerBounds = this._trigger.getBoundingClientRect();

    /* const oldLeft = this.left;
    const oldTop = this.top; */

    this.left =
      menuBounds.width + triggerBounds.left - this.padding > window.innerWidth
        ? triggerBounds.right - menuBounds.width
        : triggerBounds.left - this.padding;

    this.top = triggerBounds.bottom + this.padding;

    if (menuBounds.height + triggerBounds.bottom + this.padding > window.innerHeight) {
      this.top = triggerBounds.top - menuBounds.height - this.padding * 1.5;
      this.classList.add('rux-pop-up--bottom');
    } else {
      this.classList.remove('rux-pop-up--bottom');
    }

    /* const xdif = Math.abs(oldLeft - this.left);
    const ydif = Math.abs(oldTop - this.top);


    if (xdif > 50 || ydif > 50) {
      this.classList.add('transition');
      this.addEventListener('transitionend', () => {
        this.classList.remove('transition');
        this.removeEventListener('transitionend');
      });
    }
 */
    this.style.left = `${this.left}px`;
    this.style.top = `${this.top}px`;
  }

  _setCaretPosition() {
    const caretLeft = this._trigger.getBoundingClientRect().left - this.left;
    this.style.setProperty('--caretLeft', `${caretLeft}px`);
  }

  updated() {
    this._setMenuPosition();
    this._setCaretPosition();

    window.addEventListener('resize', () => {
      this._setMenuPosition();
      this._setCaretPosition();
    });
  }

  render() {
    /* prettier-ignore */
    return html`
      
      ${ (this.data.length) ?
        html `
          <ul role="menu" aria-expanded="${this.expanded.toString()}">
            ${this.data.map((item) => html`
              <li 
                role="menuitem" 
                tabindex="-1" 
                class="${item.role}">${item.label}
                
              </li>`)}
          </ul>
        ` :
      html `<slot></slot>`
}
      
    `;
  }

  static get styles() {
    return css`
      :host {
        --caretLeft: 2px;
        --caretSize: 1.875rem;
        --transitionSpeed: 0.1667s;

        display: none;

        font-size: 0.875rem;

        margin: 0;
        padding: 0;

        /* min-width: 15em;
        max-width: 20em; */
        position: absolute;

        color: var(--colorBlack, rgb(0, 0, 0));

        background-color: var(--popupMenuBackgroundColor, rgb(255, 255, 255));
        border: 1px solid var(--popupMenuBorderColor, rgb(77, 172, 255));
        border-top-width: 3px;
        z-index: 10000;

        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      :host(.transition) {
        transition: bottom var(--transitionSpeed) ease-in-out, left var(--transitionSpeed) ease-in-out;
      }

      :host([expanded]) {
        display: block;
      }

      :host::before {
        content: '';
        display: block;
        position: absolute;

        width: var(--carentSize, 1.1875rem);
        height: var(--carentSize, 1.1875rem);

        background-color: var(--popupCaretBackgroundColor, rgb(77, 172, 255));
        z-index: 1;

        margin: -12px 0 0 0;
        left: var(--caretLeft, 2px);
        transform: rotate(45deg);
      }

      :host(.transition)::before {
        transition: left var(--transitionSpeed) ease-in-out;
      }

      :host(.transition)::after {
        transition: bottom var(--transitionSpeed) ease-in-out;
      }

      :host ul {
        position: relative;
        list-style: none;
        padding: 0;
        margin: 0;

        background-color: var(--popupMenuBackgroundColor, rgb(255, 255, 255));

        z-index: 2;
      }

      :host li:last-child {
        border: none;
      }

      :host li {
        display: block;
        padding: 0.5em;
        color: var(--popupMenuTextColor, rgb(0, 0, 0));
        text-decoration: none;

        min-width: 15em;
        max-width: 20em;

        word-wrap: none;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      :host li:hover {
        /* font-weight: 700; */
        background-color: var(--popupMenuItemHoverBackgroundColor, rgb(211, 234, 255));
      }

      :host(.rux-pop-up--bottom) {
        border-top-width: 1px;
        border-bottom-width: 3px;
      }

      :host(.rux-pop-up--bottom)::before {
        bottom: -12px;
      }
      /* :host,
      .rux-pop-up--top {
        border-top: 3px solid var(--colorSecondary, rgb(77, 172, 255));
      } */

      /*  :host::before,
      .rux-pop-up--top::before {
        content: '';
        display: block;
        position: absolute;

        width: 1.1875rem;
        height: 1.1875rem;

        background-color: var(--colorSecondary, rgb(77, 172, 255));
        z-index: 1;

        margin: -13px 0 0 16px;
        transform: rotate(45deg);
      }

      .rux-pop-up--bottom {
        border-bottom: 3px solid var(--colorSecondary, rgb(77, 172, 255));
      }

      .rux-pop-up--bottom::after {
        content: '';
        display: block;
        position: absolute;
        border-bottom: 1px solid var(--colorSecondary, rgb(77, 172, 255));
        border-right: 1px solid var(--colorSecondary, rgb(77, 172, 255));
        width: 1.1875rem;
        height: 1.1875rem;

        background-color: var(--colorSecondary, rgb(77, 172, 255));

        margin: -6px 0 0 16px;
        transform: rotate(45deg);
      }

      .rux-pop-up--left {
        border-left: 3px solid var(--colorSecondary, rgb(77, 172, 255));
      }

      .rux-pop-up--left::before {
        content: '';
        display: block;
        position: absolute;
        border-bottom: 1px solid var(--colorSecondary, rgb(77, 172, 255));
        border-left: 1px solid var(--colorSecondary, rgb(77, 172, 255));
        width: 1.1875rem;
        height: 1.1875rem;

        background-color: var(--colorSecondary, rgb(77, 172, 255));

        margin: 16px 0 0 -13px;
        transform: rotate(45deg);
      }

      .rux-pop-up--right {
        border-right: 3px solid var(--colorSecondary, rgb(77, 172, 255));
      }

      .rux-pop-up--right::before {
        content: '';
        display: block;
        position: absolute;
        border-top: 1px solid var(--colorSecondary, rgb(77, 172, 255));
        border-right: 1px solid var(--colorSecondary, rgb(77, 172, 255));
        width: 1.1875rem;
        height: 1.1875rem;

        background-color: var(--colorSecondary, rgb(77, 172, 255));

        right: 0;
        margin: 16px -13px 0 0;
        transform: rotate(45deg);
      } */

      .seperator {
        border-top: 1px dashed var(--popupMenuItemSeperatorBorderColor, rgb(123, 128, 137)) !important;
      }
    `;
  }
}

customElements.define('rux-pop-up-menu', RuxPopUpMenu);
