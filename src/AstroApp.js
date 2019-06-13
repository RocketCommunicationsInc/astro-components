import { LitElement, html } from 'lit-element';
/* eslint-disable no-unused-vars */
import { RuxClock } from './components/rux-clock/rux-clock';
/* eslint-enable no-unused-vars */

/** Class representing a single Clock instance. */
export class AstroApp extends LitElement {
  static get properties() {
    return {
      appName: {
        type: String,
      },
      _progress: {
        type: Number,
      },
    };
  }

  constructor() {
    super();
    this.appName = 'Astro 4.0';
  }

  render() {
    return html`
      <h1>Astro 4.0</h1>
      <rux-clock></rux-clock>
    `;
  }
}
customElements.define('astro-app', AstroApp);
