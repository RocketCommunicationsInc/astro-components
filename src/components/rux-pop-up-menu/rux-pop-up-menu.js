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
      target: {
        type: Object,
      },
      trigger: {
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
    this.data = [];
  }

  _listenForExternalEvents() {
    // Handle clicks external to the tooltip
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
    window.addEventListener('resize', this._setPosition);
  }

  firstUpdated() {
    this._listenForExternalEvents();
  }

  _closeMenu() {
    this.opened = false;
    this.target = {};
  }

  render() {
    /* prettier-ignore */
    return html`
      
      ${ (this.data.length) ?
        html `<nav>
          <ul>
            ${this.data.map((item) => html`<li class="${item.role}"><a>${item.label}</a></li>`)}
          </ul>
        </nav>` :
      html `<slot></slot>`
}
      
    `;
  }

  static get styles() {
    return css`
      :host {
        /* display: none; */

        font-size: 0.875rem;

        margin: 1em;

        min-width: 15em;
        max-width: 20em;
        position: relative;

        color: var(--colorBlack, rgb(0, 0, 0));

        background-color: var(--colorWhite, rgb(255, 255, 255));
        border: 1px solid var(--colorSecondary, rgb(77, 172, 255));
        z-index: 10000;

        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      :host([opened]) {
        display: block;
      }

      :host::before {
        content: '';
        display: block;
        position: absolute;

        width: 1.1875rem;
        height: 1.1875rem;

        background-color: #047cdc;
        z-index: 1;

        margin: -13px 0 0 15px;
        transform: rotate(45deg);
      }

      :host ul {
        position: relative;
        list-style: none;
        padding: 0;
        margin: 0;
        background: none;
        background-color: #fff;

        z-index: 2;
      }

      /* .rux-pop-up li,
      .satcom-pop-up li {
        border-bottom: 1px solid #f0f1f3;
      } */

      :host li:last-child {
        border: none;
      }

      :host a {
        display: block;
        padding: 0.5em;
        color: #000;
        text-decoration: none;

        min-width: 15em;
        max-width: 20em;

        word-wrap: none;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      :host a:hover {
        /* font-weight: 700; */
        background-color: var(--colorSecondaryLighten3, rgb(211, 234, 255));
      }

      :host,
      .rux-pop-up--top {
        border-top: 3px solid var(--colorSecondary, rgb(77, 172, 255));
      }

      :host::before,
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
      }

      .seperator {
        border-top: 1px dashed #7d7d7d !important;
      }

      /*
      
        .rux-pop-up--top-left
        .rux-pop-up--top-right
        .rux-pop-up--bottom-left
        .rux-pop-up--bottom-right
        
        .rux-pop-up--left-top
        .rux-pop-up--left-bottom
        .rux-pop-up--top-left
      
      */
    `;
  }
}

customElements.define('rux-pop-up-menu', RuxPopUpMenu);
