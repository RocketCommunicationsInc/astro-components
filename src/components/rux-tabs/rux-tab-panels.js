import { LitElement, html } from 'lit-element';

export class RuxTabPanels extends LitElement {
  connectedCallback() {
    super.connectedCallback();

    this.setAttribute('style', 'position: relative; width: 100%;');

    let _panels = [];

    window.addEventListener('DOMContentLoaded', () => {
      _panels = this.querySelectorAll('rux-tab-panel');
    })

    window.addEventListener('DOMContentLoaded', () => {
      window.dispatchEvent(
        new CustomEvent('register-panels', {
          detail: { panels: _panels, for: this.getAttribute('aria-labelledby') },
        })
      );
    })
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('rux-tab-panels', RuxTabPanels);
