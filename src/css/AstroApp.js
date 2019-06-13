import { html, css, LitElement } from 'lit-element';


export default class AstroApp extends LitElement {
  static get styles() {
    return css`
      :host {
        background: grey;
        display: block;
        padding: 25px;
      }
    `;
  }

  static get properties() {
    return {
      heading: { type: String },
    };
  }

  constructor() {
    super();
    this.heading = 'Hello world!';
  }

  render() {
    return html`
      <h2>${this.heading}</h2>
      <rux-icon icon="caution"></rux-icon>
      <div>
        <slot></slot>
      </div>
    `;
  }
}
