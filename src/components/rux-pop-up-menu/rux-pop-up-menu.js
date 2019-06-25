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

    const _outsideClick = (e) => {
      const x = e.path.find((element) => element.id && element.id === this._trigger.getAttribute('aria-controls'));
      if (!x) {
        this.expanded = false;
        window.removeEventListener('mousedown', _outsideClick);
      }
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

  _onClick() {
    this.expanded = false;
    this.dispatchEvent(
        new CustomEvent('pop-up-menu-item-selected', {
          detail: {
            data: this,
          },
          bubbles: true,
          composed: true,
        })
    );
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
    const caret = parseInt(getComputedStyle(this, ':after').height);

    const oldLeft = this.left;
    const oldTop = this.top;

    this.left =
      menuBounds.width + triggerBounds.left - this.padding > window.innerWidth
        ? triggerBounds.right - menuBounds.width
        : triggerBounds.left - this.padding;

    this.top = triggerBounds.bottom + this.padding / 2 + caret / 2;

    if (menuBounds.height + triggerBounds.bottom + this.padding > window.innerHeight) {
      this.top = triggerBounds.top - menuBounds.height - caret;
      this.classList.add('from-top');
    } else {
      this.classList.remove('from-top');
    }

    const xdif = Math.abs(oldLeft - this.left);
    const ydif = Math.abs(oldTop - this.top);

    if (xdif > 50 || ydif > 50) {
      this.classList.add('transition');
      this.addEventListener('transitionend', () => {
        this.classList.remove('transition');
        this.removeEventListener('transitionend');
      });
    }

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
      <ul role="menu" aria-expanded="${this.expanded.toString()}">
        ${this.data.map((item) => {
    return (item.role === 'seperator')
          ? html `<li class="seperator"></li>`
          : html `<li 
                    @click="${this._onClick}"
                    role="menuitem" 
                    tabindex="-1" >${item.label}</li>`;
  })}
      </ul>`;
  }

  static get styles() {
    return css`
      :host {
        --caretLeft: 2px;
        --caretSize: 1.875rem;
        --transitionSpeed: 0.1667s;

        display: block;
        /* visibility: hidden; */
        opacity: 1;

        font-size: 0.875rem;

        margin: 0;
        padding: 0;

        /* min-width: 15em;
        max-width: 20em; */
        position: absolute;

        color: var(--colorBlack, rgb(0, 0, 0));

        background-color: var(--popupMenuBorderColor, rgb(77, 172, 255));
        border: 1px solid var(--popupMenuBorderColor, rgb(77, 172, 255));
        border-top-width: 4px;
        z-index: 10000;

        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        border-radius: 3px;

        transition: opacity 0.1667s ease-out;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
      }

      :host(.transition) {
        transition: bottom var(--transitionSpeed) ease-in-out, left var(--transitionSpeed) ease-in-out;
      }

      :host([expanded]) {
        /* display: block; */
        /* visibility: visible; */
        opacity: 1;
        transition: opacity 0.0667s ease-in;
      }

      :host::after {
        content: '';
        display: block;
        position: absolute;

        /* width: 22px;
        height: 22px; */

        /* background-color: var(--popupCaretBackgroundColor, rgb(77, 172, 255)); */
        z-index: 1;

        border: 8px solid transparent;
        border-bottom: 11px solid var(--popupCaretBackgroundColor, rgb(77, 172, 255));

        left: var(--caretLeft, 2px);
        top: -23px;
        /* transform: rotate(45deg); */
      }

      :host(.transition)::after {
        transition: left var(--transitionSpeed) ease-in-out;
        transition: bottom var(--transitionSpeed) ease-in-out;
      }

      :host ul {
        position: relative;
        list-style: none;
        padding: 0;
        margin: 0;

        background-color: var(--popupMenuBackgroundColor, rgb(255, 255, 255));

        z-index: 2;
        border-radius: 2px;
      }

      :host li:last-of-type {
        border: none;
        border-radius: 0 0 2px 2px;
      }

      :host li:first-of-type {
        border: none;
        border-radius: 2px 2px 0 0;
      }

      :host li:not(.seperator) {
        display: block;
        padding: 0.15rem 0.75rem;
        color: var(--popupMenuTextColor, rgb(0, 0, 0));
        text-decoration: none;

        min-width: 15em;
        max-width: 20em;

        word-wrap: none;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      :host li:not(.seperator):hover {
        /* font-weight: 700; */
        background-color: var(--popupMenuItemHoverBackgroundColor, rgb(211, 234, 255));
      }

      :host(.from-top) {
        border-top-width: 1px;
        border-bottom-width: 4px;
      }

      :host(.from-top)::after {
        top: unset;
        bottom: -23px;
        transform: rotate(180deg);
      }

      .seperator {
        height: 6px;
        border-top: 1px dashed var(--popupMenuItemSeperatorBorderColor, rgb(123, 128, 137)) !important;

        margin: 6px 0.5rem 0 0.5rem;
      }
    `;
  }
}

customElements.define('rux-pop-up-menu', RuxPopUpMenu);
