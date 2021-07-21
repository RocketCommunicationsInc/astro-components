import { LitElement, html, css, unsafeCSS } from 'lit-element'
import { RuxIcon } from '@astrouxds/rux-icon'
import { RuxButton } from '@astrouxds/rux-button'

import inputStyles from '!!css-loader!sass-loader!../../scss/core/input.scss'
import checkboxStyles from '!!css-loader!sass-loader!../../scss/core/checkbox.scss'
import formsStyles from '!!css-loader!sass-loader!../../scss/core/forms.scss'

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
            invalid: {
                type: Boolean,
            },
        }
    }

    static get styles() {
        return css`
            ${unsafeCSS(inputStyles.toString())}
            ${unsafeCSS(checkboxStyles.toString())}
      ${unsafeCSS(formsStyles.toString())}
        `
    }

    constructor() {
        super()
        this.email = ''
        this.password = ''
        this.sso = false
        this.invalid = false
        this.passwordVisible = false
    }

    _changePasswordVisibility() {
        this.passwordVisible = !this.passwordVisible
    }

    render() {
        const passwordField = !this.sso
            ? html`
                  <div class="rux-form__group ${this.invalid ? 'mb-0' : ''}">
                      <div class="rux-form-field rux-form-field--withIcon">
                          <label for="pass">Password</label>
                          <input
                              type="${this.passwordVisible
                                  ? 'text'
                                  : 'password'}"
                              id="pass"
                              class="rux-input"
                              minlength="3"
                          />
                          <rux-icon
                              @click="${this._changePasswordVisibility}"
                              icon="${this.passwordVisible
                                  ? 'visibility-off'
                                  : 'visibility'}"
                              size="base"
                              color="var(--primary)"
                          >
                          </rux-icon>
                      </div>
                      <div class="rux-form-field">
                          <div class="rux-checkbox">
                              <input
                                  type="checkbox"
                                  name="remember"
                                  id="remember"
                              />
                              <label for="remember">Remember me</label>
                          </div>
                      </div>
                  </div>
              `
            : null

        const formError = this.invalid
            ? html`
                  <div class="rux-form-field rux-form-field--invalid">
                      <span class="rux-error-text"
                          >Email ${!this.sso ? 'or password' : null} not
                          found</span
                      >
                  </div>
              `
            : null

        return html`
            <style>
                .rux-checkbox {
                    margin: 0.5rem 0 1rem 0 !important;
                    line-height: 1.2;
                }

                .rux-form__group {
                    margin-bottom: 2.25rem;
                }

                .rux-form__help {
                    font-size: 16px;
                    color: var(--controlLabelColor);
                    display: flex;
                    align-items: center;
                    margin: 0px;
                    margin-top: 8px;
                }

                .rux-form__help rux-icon {
                    margin-right: 6px;
                }

                .rux-form-field--withIcon {
                    position: relative;
                }

                .rux-form-field--withIcon rux-icon:hover {
                    cursor: pointer;
                }

                .rux-form-field--withIcon input {
                    padding-right: 2rem;
                }

                .rux-form-field--withIcon rux-icon {
                    position: absolute;
                    right: 6px;
                    bottom: 5px;
                }

                .ml-auto {
                    margin-left: auto;
                }

                .rux-form-field > label {
                    margin-bottom: 0.5rem;
                }

                .rux-form-field--invalid {
                    margin-bottom: 0.6rem;
                }

                .rux-form-field--invalid .rux-error-text {
                    display: block;
                }

                .mb-0 {
                    margin-bottom: 0px;
                }

                /* VALIDATION */
                .rux-error-text {
                    display: none;
                }

                .rux-form-field input:invalid {
                    border: 1px solid var(--inputInvalidBorderColor);
                }

                .rux-form-field input:invalid + .rux-error-text {
                    display: block;
                }
            </style>

            <form name="ruxLogin" id="ruxLogin" class="rux-form">
                <div
                    class="rux-form__group ${this.invalid && this.sso
                        ? 'mb-0'
                        : ''}"
                >
                    <div class="rux-form-field">
                        <label for="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            class="rux-input"
                            .value="${this.email}"
                            placeholder="Email@astro.com"
                        />
                        <span class="rux-error-text">Invalid email format</span>
                    </div>
                    ${this.sso
                        ? html`
                              <div class="rux-form-field">
                                  <p class="rux-form__help">
                                      <rux-icon
                                          icon="lock"
                                          size="base"
                                          color="var(--primary)"
                                      ></rux-icon>
                                      SSO Enabled
                                  </p>
                              </div>
                          `
                        : ``}
                </div>

                ${passwordField} ${formError}

                <div class="rux-form-field">
                    <rux-button class="ml-auto" size="medium" type="submit"
                        >Sign in</rux-button
                    >
                </div>
            </form>
        `
    }
}

customElements.define('rux-sign-in', RuxSignIn)
