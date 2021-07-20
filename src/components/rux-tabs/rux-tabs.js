import { LitElement, html } from 'lit-element'
/* eslint-disable no-unused-vars */
import { RuxTab } from './rux-tab.js'
import { RuxTabPanels } from './rux-tab-panels.js'
import { RuxTabPanel } from './rux-tab-panel.js'
/* eslint-enable no-unused-vars */

export class RuxTabs extends LitElement {
    static get is() {
        return 'rux-tabs'
    }
    static get properties() {
        return {
            small: {
                type: Boolean,
            },
        }
    }

    constructor() {
        super()
        this.small = false
        this._panels = []
        this._panelGroup = ''

        this._registerPanelsListener = this._registerPanels.bind(this)
    }

    connectedCallback() {
        super.connectedCallback()
        window.addEventListener('register-panels', this._registerPanelsListener)
        this.addEventListener('click', this._onClick)

        // set the role to tab
        this.setAttribute('role', 'tablist')
    }

    disconnectedCallback() {
        window.removeEventListener(
            'register-panels',
            this._registerPanelsListener
        )
        this.removeEventListener('click', this._onClick)
        super.disconnectedCallback()
    }

    _onClick(e) {
        if (
            e.target.getAttribute('role') === 'tab' &&
            e.target.getAttribute('disabled') === null
        ) {
            this._setTab(e.target)
        }
    }

    get _tabs() {
        return Array.from(this.querySelectorAll('rux-tab'))
    }

    _registerPanels(e) {
        if (e.detail.for === this.getAttribute('id')) {
            this._panels = Array.from(e.detail.panels)
        }

        // if a tab isn’t selected in markup then default to first tab in the list
        const selectedTab =
            this._tabs.find((tab) => tab.selected) || this._tabs[0]
        this._setTab(selectedTab)
    }

    _reset() {
        // hide everything
        this._tabs.forEach((tab) => (tab.selected = false))
        this._panels.forEach((panel) => panel.classList.add('hidden'))
    }

    _setTab(selectedTab) {
        this._reset()

        // find the panel whose aria-labeldby attribute matches the tab’s id
        const selectedPanel = this._panels.find(
            (panel) =>
                panel.getAttribute('aria-labelledby') ===
                selectedTab.getAttribute('id')
        )

        if (selectedTab) selectedTab.selected = true
        if (selectedPanel) selectedPanel.classList.remove('hidden')
    }

    render() {
        return html`
            <style>
                :host,
                .rux-tabs {
                    box-sizing: border-box;
                    display: flex;
                    justify-content: flex-start;
                    font-size: 1.5rem;

                    min-height: 5.625rem;
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
                .rux-tabs .rux-tab {
                    border-bottom: 5px solid var(--tabBorderColor);
                }

                :host([small]) {
                    min-height: 3.125rem;
                    font-size: 1rem;
                }
            </style>

            <slot></slot>
        `
    }
}

customElements.define('rux-tabs', RuxTabs)
