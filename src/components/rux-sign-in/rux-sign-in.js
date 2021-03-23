import { LitElement, html } from 'lit-element';
import { RuxIcon } from '@astrouxds/rux-icon';
import { RuxButton } from '@astrouxds/rux-button';

export class RuxSignIn extends LitElement {
  static get properties() {
    return {
      email: {
        type: String,
      },
      password: {
        type: String,
      },
      sso: {
        type: Boolean,
      },
      passwordVisible: {
        type: Boolean,
      },
    };
  }

  constructor() {
    super();
    this.email = '';
    this.password = '';
    this.sso = false;
    this.passwordVisible = false;
  }

  _changeSSO() {
    this.sso = !this.sso;
  }

  _changePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  render() {
    return html`
        <style>
           :root {
              --padding: 0.5rem;
              --paddingLeft: 0.5rem;
              --paddingRight: 0.5rem;
              --paddingTop: 0.25rem;
              --paddingBottom: 0.25rem;
            }
            
            .rux-form-field {
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              align-items: flex-start;
            
              font-family: var(--fontFamily);
              font-size: var(--fontSize);
              color: var(--fontColor);

              min-width: 330px;
            }
            
            .rux-form-field input:required + label::after {
              content: "*";
                margin-left: 0.25rem;
                color: var(--inputTextColor);
            }
            
            .rux-form-field input {
              box-sizing: border-box;
              order: 2;
            
              height: 2.125rem;
              width: 100%;
              padding: 0 1rem;
            
              border: 1px solid var(--inputBorderColor);
              border-radius: 3px;
            
              font-size: var(--fontSize);
              color: var(--inputTextColor);
            }
            
            /* VALIDATION */
            .rux-form-field input:invalid {
              border: 1px solid var(--inputInvalidBorderColor);
            
              background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20128%20128%22%3E%0A%20%20%3Cpath%20fill%3D%22%23FF3030%22%20fill-rule%3D%22evenodd%22%20d%3D%22M64.031%205c8.461%200%2068.88%20107.243%2063.648%20114.184-5.232%206.942-120.805%205.477-127.212%200C-5.941%20113.708%2055.57%205%2064.03%205zm3.45%2075.894l1.822-34.893H56.946l1.82%2034.893h8.715zM56.803%2093.108c0%201.929.547%203.423%201.643%204.483%201.095%201.06%202.642%201.589%204.642%201.589%201.953%200%203.477-.542%204.572-1.625%201.095-1.084%201.643-2.566%201.643-4.447%200-1.952-.542-3.452-1.625-4.5-1.084-1.047-2.613-1.571-4.59-1.571-2.047%200-3.607.512-4.678%201.536-1.072%201.023-1.607%202.535-1.607%204.535z%22%2F%3E%0A%3C%2Fsvg%3E");
              background-repeat: no-repeat;
              background-size: 1.125rem;
              background-position: center right 0.5rem;
            }
            
            /* FOCUS RULES */
            .rux-form-field input:not([type="search"]):focus,
            .rux-form-field input:not([type="search"]):invalid:focus {
              border: 1px solid var(--inputFocusBorderColor) !important;
            }
            
            .rux-form-field input::selection {
              background-color: var(--colorSecondaryLighten3);
            }
            
            .rux-form-field__validation-message {
              display: none;
              position: absolute;
              max-width: 16rem;
              background-color: var(--colorCritical);
              width: 100%;
              padding: 0.25rem;
              right: 0;
              font-size: var(--fontSizeMD);
            }
            
            .rux-form-field input:invalid .rux-form-field__validation-message {
              display: block;
            }
            
            .rux-form-field input:disabled {
              opacity: var(--disabledOpacity);
              cursor: var(--disabledCursor);
            }
            
            .rux-form-field input:focus,
            .rux-form-field input:invalid:focus {
              border-color: var(--inputFocusBorderColor);
              outline: none;
              color: var(--inputFocusTextColor);
            }

            /* Checkbox */

            .rux-checkbox {
              display: flex;
              position: relative;
              margin: 0.5rem 0 1rem 0;
              line-height: 1.2;
            }

            .rux-checkbox input[type="checkbox"] {
              -webkit-appearance: none;
              display: none;
            }

            .rux-checkbox input[type="checkbox"] + label {
              position: relative;
              display: flex;

              align-items: center;
              justify-content: flex-start;

              color: var(--controlLabelColor);
              letter-spacing: 0.5px;
              cursor: pointer;
            }

            /* Box */
            .rux-checkbox input[type="checkbox"] + label::before {
              display: flex;
              flex-shrink: 0;
              flex-grow: 0;
              content: "";

              align-self: start;

              height: var(--controlOptionSize);
              width: var(--controlOptionSize);

              margin: 0 0.625rem 0 0;

              border: 1px solid var(--controlBorderColor);
              border-radius: 2px;
            }

            .rux-checkbox input[type="checkbox"] + label::before {
              border-radius: 2px;
            }

            .rux-checkbox input[type="checkbox"]:checked + label::before {
              background-color: var(--primary);
              border-color: var(--controlSelectedOutlineBorderColor);
            }

            .rux-checkbox input[type="checkbox"]:not(:disabled):hover + label:before,
            .rux-checkbox input[type="checkbox"]:not(:disabled):checked:hover + label:before{
              border-color: var(--controlHoverBorderColor);
            }

            .rux-checkbox input[type="checkbox"]:not(:disabled):checked:hover + label:before{
              background-color: var(--controlHoverBorderColor);
            }


            /* Checkmark */
            .rux-checkbox input[type="checkbox"]:checked + label::after {
              position: absolute;
              top: 5px;
              display: flex;
              content: "";
            }

            .rux-checkbox input[type="checkbox"]:checked + label::after{
              height: 6px;
              width: 12px;
              left: 3px;
              border-right: 2px solid var(--controlTextColor);
              border-top: 2px solid var(--controlTextColor);
              transform: rotate(125deg);
            }

            .rux-checkbox--indeterminate input[type="checkbox"]:checked + label::after{
              width: 10px;
              height: 5px;
              transform: rotate(0deg);
              border-right: 0px;
              border-top: 0px;
              border-bottom: 2px solid var(--controlTextColor);
              left: 4px;
            }

            .rux-checkbox input[type="checkbox"]:disabled + label {
              cursor: var(--disabledCursor);
              opacity: var(--disabledOpacity);
            }

            /* Cutom Sytles */
            .rux-form__group{
              margin-bottom: 2.25rem;
            }

            .rux-form__help{
              font-size: 16px;
              color: var(--controlLabelColor);
              display: flex;
              align-items: center;
              margin: 0px;
              margin-top: 8px;
            }

            .rux-form__help:hover{
              cursor: pointer;
            }

            .rux-form__help rux-icon{
              margin-right: 6px;
            }

            .rux-form-field--withIcon{
              position: relative;
            }

            .rux-form-field--withIcon input{
              padding-right: 2rem;
            }

            .rux-form-field--withIcon rux-icon{
              position: absolute;
              right: 6px;
              bottom: 5px;
            }

            .rux-form-field--withIcon rux-icon:hover{
              cursor: pointer;
            }

            .ml-auto{
              margin-left: auto;
            }

            .rux-form-field > label {
              margin-bottom: 0.5rem
            }
        </style>

        <form name="ruxLogin" id="ruxLogin" class="rux-form">
            <div class="rux-form__group">
              <div class="rux-form-field">
                <label for="email">Email</label>
                <input 
                  type="email"
                  id="email"
                  class="rux-input"
                  .value="${this.email}"
                  placeholder="Email@astro.com"
                />
              </div>
              ${this.sso ? html `
                <div class="rux-form-field">
                  <p class="rux-form__help">
                    <rux-icon icon="lock" size="base" color="var(--primary)"></rux-icon>
                    SSO Enabled
                  </p>
                </div>
                `: ``}
            </div>

            ${!this.sso ? html`
              <div class="rux-form__group">
                <div class="rux-form-field rux-form-field--withIcon">
                  <label for="pass">Password</label>
                  <input
                    type="${this.passwordVisible ? 'text' : 'password'}"
                    id="pass"
                    class="rux-input"  />
                  <rux-icon
                    @click="${this._changePasswordVisibility}"
                    icon="${this.passwordVisible ? 'visibility-off' : 'visibility'}"
                    size="base"
                    color="var(--primary)">
                  </rux-icon>
                  
                </div>
                <div class="rux-form-field">
                  <div class="rux-checkbox">
                    <input type="checkbox" name="remember" id="remember" />
                    <label for="remember">Remember me</label>
                  </div>
                </div>
              </div>
            ` : ``}
            
            
            <div class="rux-form-field">
              <rux-button class="ml-auto" size="medium" type="submit">Sign in</rux-button>
            </div>
        </form>
    `;
  }
}

customElements.define('rux-sign-in', RuxSignIn);
