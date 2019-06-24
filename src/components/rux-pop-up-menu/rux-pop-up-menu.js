import { LitElement, html, css } from 'lit-element';

export class RuxPopUpMenu extends LitElement {
  static get properties() {
    return {
      orientation: {
        type: String,
        value: 'top',
      },
      opened: {
        type: Boolean,
        reflect: true,
      },
      expanded: {
        type: Boolean,
        reflect: true,
      },
      target: {
        type: Object,
      },

      data: {
        type: Array,
      },
    };
  }

  constructor() {
    super();

    this.orientation = 'top';
    this.opened = false;
    this.target = {};
    this.expanded = false;
    this.data = [];

    this.padding = 16;

    this._handleClick = this.handleClick.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    this.removeEventListener('click', this._handleClick);
    super.disconnectedCallback();
  }

  handleClick(e) {
    console.log('handling click', e);

    this.dispatchEvent(
        new CustomEvent('pop-up-menu-clicked', {
          detail: {
            data: this,
          },
          bubbles: true,
          composed: true,
        })
    );
  }

  _close() {
    this.expanded = false;
    // window.removeEventListener('mousedown', e);
  }

  _listenForExternalEvents() {
    const _listener = (e) => {
      const trigger = e.path.find((item) => {
        // console.log('type', typeof item);
        // console.log(item.attributes);
        // console.log(item.getAttributeNode('aria-controls'));

        if (item.attributes && item.hasAttribute('aria-controls')) {
          return item.getAttribute('aria-controls');
        }
        // item.getAttribute('aria-controlls') === this.id;
      });

      if (trigger && this.expanded) {
        this.expanded = true;
      } else {
        this.expanded = true;
      }

      /* if (this.expanded) {
        console.log('esternal', e.path);
        window.removeEventListener('mousedown', _listener, true);
        this.expanded = false;
      } */
    };
    window.addEventListener('mousedown', _listener);

    /* const _listener = () => {
      if (this.expanded) {
        this.expanded = false;
        window.removeEventListener('mousedown', _listener, true);
      }
    };

    window.addEventListener('mousedown', _listener, true); */
    /*  // Handle clicks external to the tooltip
    const externalClickListener = (event) => {
      // traverse the dompath for the clicked event and see if
      // there’s a tooltip id in its path. Probably fragile for
      // full component use as there’s the possibility of another
      // tooltip id element
      const isSelf = event.composedPath().findIndex((path) => {
        return path === this;
      });

      // const isTrigger = event.composedPath().findIndex((path) => {
      //   console.log();
      // });

      if (!isSelf && isTrigger <= 0) {
        // console.log('close it');
        removeClickListener();

        this._toggleCase = isTrigger >= 0 ? true : false;
        this.data = {};
      }
    };

    // const parent = this.data.path[0];
    const removeClickListener = () => {
      // parent.removeEventListener('scroll', externalClickListener);
      // this may be better with a throttled click event
      document.removeEventListener('mouseup', externalClickListener);
      window.removeEventListener('resize', this._setPosition);
    };

    // remove tooltip on scroll for now. Maybe enable
    // an attach on scroll in the future
    // parent.addEventListener('scroll', externalClickListener);
    document.addEventListener('mouseup', externalClickListener);
    window.addEventListener('resize', this._setPosition); */
  }

  updated() {
    if (this.expanded) {
      this._listenForExternalEvents();
    }

    this.addEventListener('click', this._handleClick);

    const menuBounds = this.getBoundingClientRect();
    const targetBounds = this.parentElement.querySelector(`[aria-controls="${this.id}"]`).getBoundingClientRect();

    const left =
      menuBounds.width + targetBounds.right > window.innerWidth
        ? targetBounds.right - menuBounds.width
        : targetBounds.left - this.padding;

    let top = targetBounds.bottom + this.padding;

    if (menuBounds.height + targetBounds.bottom > window.innerHeight) {
      top = targetBounds.top - menuBounds.height - this.padding * 1.5;
      this.classList.add('rux-pop-up--bottom');
    }

    const caretLeft = targetBounds.left - left;
    this.style.setProperty('--caretLeft', `${caretLeft}px`);

    this.style.left = `${left}px`;
    this.style.top = `${top}px`;
  }

  _closeMenu() {
    this.opened = false;
    this.target = {};
  }

  render() {
    /* prettier-ignore */
    return html`
      
      ${ (this.data.length) ?
        html `
          <ul role="menu" aria-expanded="${this.expanded}">
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

        display: block;

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

      :host ul {
        position: relative;
        list-style: none;
        padding: 0;
        margin: 0;

        background-color: var(--popupMenuBackgroundColor, rgb(255, 255, 255));

        z-index: 2;
      }

      /* .rux-pop-up li,
      .satcom-pop-up li {
        border-bottom: 1px solid #f0f1f3;
      } */

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
