import {
  html,
  PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxTab extends PolymerElement {
  static get properties() {
    return {
      selected: {
        type: Boolean,
        reflectToAttribute: true
      }
    };
  }

  static get template() {
    return html`
      <style>
      /* rux tab */
:host {
  flex-grow: 1;
  flex-shrink: 1;

  position: relative;
  height: 5rem;
  max-width: 12rem;
  display: block;
  padding: 2rem 1.5rem 1rem;
  margin: 0;
  font-family: var(--font-family);
  font-size: 1.875em;
  font-weight: 300;
  text-decoration: none;
  text-align: center;
  color: #5cb3ff;

  /* background: #23384e; */

  border-left: 1px solid rgba(0, 0, 0, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.1);

  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  cursor: pointer;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  transition: color var(--standard-transition-speed);
}

:host::before,
.rux-tabs__tab::before {
  position: absolute;
  content: "";
  display: block;
  height: 8px;
  width: 100%;
  top: 0;
  left: 0;
  background-color: transparent;

  transition: background-color var(--slow-transition-speed);
}

:host([selected]),
.rux-tabs__tab[selected] {
  /* background: var(--status-standby); */
  color: #fff;
}

:host([selected])::before,
.rux-tabs__tab[selected]::before {
  /* background: var(--status-standby); */
  background-color: var(--selected-color);
}

:host(:hover),
.rux-tabs__tab:hover {
  color: #fff;
}

:host(:hover)::before,
.rux-tabs__tab:hover::before {
  background-color: #fff;
}
</style>
      <slot></slot>
    `;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    // set the role to tab
    this.setAttribute("role", "tab");
  }

  ready() {
    super.ready();
  }
}

customElements.define("rux-tab", RuxTab);
