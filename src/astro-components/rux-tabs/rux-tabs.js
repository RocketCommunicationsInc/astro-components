import {
  html,
  PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
import { RuxTab } from "./rux-tab.js";
import { RuxTabPanels } from "./rux-tab-panels.js";
import { RuxTabPanel } from "./rux-tab-panel.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxTabs extends PolymerElement {
  static get is() {
    return "rux-tabs";
  }
  static get properties() {
    return {
      _tabs: {
        type: Object,
        observer: "_registerTabs"
      },
      _panels: {
        type: Object
      }
    };
  }

  static get template() {
    return html`
      <style>
      :host,
      .rux-tabs {
        margin: 0;
        padding: 0;
        display: flex;
        /* flex-grow: 1; */
        align-self: flex-start;
        align-content: stretch;
        justify-content: flex-start;
      
        font-weight: 300;
        font-family: var(--font-family-light);
      
        contain: content; /* This improves CSS performance see: https://developers.google.com/web/updates/2016/06/css-containment */
      }
      
      /* rux-panes */
      .rux-tabs__panels {
        margin: 0;
        padding: 0;
        display: flex;
        align-self: flex-start;
        contain: content; /* This improves CSS performance see: https://developers.google.com/web/updates/2016/06/css-containment */
      }
      </style>      
      <slot></slot>
    `;
  }

  constructor() {
    super();

    this._updateTabListener = this._setTab.bind(this);
    this._registerPanelsListener = this._registerPanels.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();

    this._tabs = this._registerTabs();
    this._panels = null;

    window.addEventListener("register-panels", this._registerPanelsListener);

    this.addEventListener("click", this._onClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("register-panels", this._registerPanelsListener);
  }

  ready() {
    super.ready();
  }

  _onClick(e) {
    if (e.target.getAttribute("role") === "tab") {
      this._setTab(e.target);
    }
  }

  _registerTabs() {
    return Array.from(this.querySelectorAll("rux-tab"));
  }

  _registerPanels(e) {
    this._panels = Array.from(e.detail.panels);

    // if a tab isn’t selected in markup then default to first tab in the list
    const selectedTab = this._tabs.find(tab => tab.selected || this._tabs[0]);

    this._setTab(selectedTab);
  }

  _reset() {
    // hide everything
    this._tabs.forEach(tab => (tab.selected = false));
    this._panels.forEach(panel => (panel.hidden = true));
  }

  /*
  **
  ** Allow for either id or aria-controls association
  **
  */
  _getAssociation() {
    if (tab.getAttribute("id") && !tab.getAttribute("aria-controls")) {
      return tab.getAttribute("id");
    } else if (!tab.getAttribute("id") && tab.getAttribute("aria-controls")) {
      return tab.getAttribute("aria-controls");
    }
  }

  _setTab(selectedTab) {
    this._reset();

    // find the panel whose aria-labeldby attribute matches the tab’s id
    const selectedPanel = this._panels.find(
      panel =>
        panel.getAttribute("aria-labeledby") === selectedTab.getAttribute("id")
    );

    selectedTab.selected = true;
    selectedPanel.hidden = false;
  }
}

customElements.define("rux-tabs", RuxTabs);
