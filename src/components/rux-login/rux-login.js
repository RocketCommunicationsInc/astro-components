import { LitElement, html } from 'lit-element';
import { RuxIcon } from '@astrouxds/rux-icon';
import { RuxButton } from '@astrouxds/rux-button';

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
        <form name="ruxLogin" id="ruxLogin" class="rux-form">
            <div class="rux-form-field">
              <label for="username">Username</label>
              <input id="username" class="rux-input" type="text" placeholder="username" />
            </div>
            <div class="rux-form-field">
              <label for="pass">Password</label>
              <input id="pass" class="rux-input" type="password"/>
            </div>
            <div class="rux-form-field">
              <rux-button size="large" type="submit">Submit</rux-button>
            </div>
        </form>
    `;
  }
}

customElements.define('rux-login', RuxLogin);
