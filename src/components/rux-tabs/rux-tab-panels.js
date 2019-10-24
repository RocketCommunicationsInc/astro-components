import { LitElement, html } from 'lit-element';

export class RuxTabPanels extends LitElement {
  constructor() {
    super();
    this._registerTabPanelsListener = this._registerTabPanels.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();

    this.setAttribute('style', 'position: relative; width: 100%;');

    // Add event listener to wait for DOM to be completely loaded. This was needed for Angular
    window.addEventListener('DOMContentLoaded', this._registerTabPanelsListener );
  }

  disconnectedCallback() {
    window.removeEventListener('DOMContentLoaded', this._registerTabPanelsListener);
    super.disconnectedCallback();
  }

  _registerTabPanels() {
    let _panels = document.querySelectorAll('rux-tab-panel');

    window.dispatchEvent(
      new CustomEvent('register-panels', {
        detail: { panels: _panels, for: this.getAttribute('aria-labelledby') },
      })
    );
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('rux-tab-panels', RuxTabPanels);
