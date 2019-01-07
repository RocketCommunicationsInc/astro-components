import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
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
      },
      _panelGroup: {
        type: String
      },
      compact: {
        type: Boolean
      },
      transparent: {
        type: Boolean
      }
    };
  }

  static get template() {
    return html`
      <style>
        :host,
        .rux-tabs {
          box-sizing: border-box;
          display: flex;
          justify-content: flex-start;
          font-size: 1.5rem;

          /* height: 5.625rem; */
          height: 100%;
          width: auto;
          margin: 0;
          padding: 0;

          -moz-user-select: none;
          -khtml-user-select: none;
          -webkit-user-select: none;
          -ms-user-select: none;
          user-select: none;

          contain: content; /* This improves CSS performance see: https://developers.google.com/web/updates/2016/06/css-containment */
        }

        :host([main]) {
          height: 100%;
        }

        :host([compact]) {
          height: 3.125rem;
          font-size: 1rem;
        }

        :host([interior]) {
          height: 2.25rem;
          font-size: 0.875rem;
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
    // fire click event if the target is a tab and it hasn’t been disabled
    if (
      e.target.getAttribute("role") === "tab" &&
      e.target.getAttribute("disabled") === null
    ) {
      this._setTab(e.target);

      // Option 2
      window.dispatchEvent(
        new CustomEvent("tab-changed", {
          detail: { tab: e.target }
        })
      );
    }
  }

  _registerTabs() {
    return Array.from(this.querySelectorAll("rux-tab"));
  }

  _registerPanels(e) {
    if (e.detail.for === this.getAttribute("id")) {
      this._panels = Array.from(e.detail.panels);
    }

    // if a tab isn’t selected in markup then default to first tab in the list
    const selectedTab = this._tabs.find(tab => tab.selected || this._tabs[0]);

    this._setTab(selectedTab);
  }

  _reset() {
    // hide everything
    this._tabs.forEach(tab => (tab.selected = false));
    this._panels.forEach(panel => panel.classList.add("hidden"));
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

    if (selectedTab) selectedTab.selected = true;
    if (selectedPanel) selectedPanel.classList.remove("hidden");
  }
}

customElements.define("rux-tabs", RuxTabs);
