import { LitElement, html} from 'lit-element';

export class RuxLogin extends LitElement {
  static get properties() {
    return {
      username: {
        type: String,
      },
      password: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.username = '';
    this.password = '';
  }

  render() {
    return html`
        <h1>Login Component</h1>
        <p>Username: ${this.username}</p>
        <p>Password: ${this.password}</p>
    `;
  }
}

customElements.define('rux-login', RuxLogin);
