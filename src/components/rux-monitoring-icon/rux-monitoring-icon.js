import { LitElement, html, css } from 'lit-element';

/* eslint-disable no-unused-vars */
import { RuxIcon } from '../rux-icon/rux-icon.js';
import { RuxStatus } from '../rux-status/rux-status.js';
import { filterNotifications } from './filterNotifications.js';
/* eslint-enable no-unused-vars */

export class RuxMonitoringIcon extends LitElement {
  static get properties() {
    return {
      status: {
        type: String,
        reflect: true,
      },
      label: {
        type: String,
      },
      sublabel: {
        type: String,
      },
      notifications: {
        type: Number,
      },
      icon: {
        type: String,
      },
    };
  }

  constructor() {
    super();

    this.status = 'null';
  }

  render() {
    return html`
      <div
        id="rux-advanced-status__icon"
        class="rux-advanced-status rux-status--${this.status}"
        title="${this.notifications} ${this.label} ${this.sublabel}"
      >
        <div class="rux-advanced-status__icon-group">
          <rux-status status="${this.status}"></rux-status>

          ${this.iconTemplate} ${this.badgeTemplate}
        </div>

        ${this.labelTemplate}
      </div>
    `;
  }

  get iconTemplate() {
    return html`
      <rux-icon icon="${this.icon}" class="rux-status--${this.status}"></rux-icon>
    `;
  }

  get badgeTemplate() {
    return html`
      <div class="rux-advanced-status__badge" ?hidden="${!this.notifications}">
        ${filterNotifications(this.notifications)}
      </div>
    `;
  }

  get labelTemplate() {
    return html`
      <div class="rux-advanced-status__label">
        ${this.label}
        <span class="rux-advanced-status__sublabel" ?hidden="${!this.sublabel}">${this.sublabel}</span>
      </div>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        padding: 0;
      }

      *[hidden] {
        display: none !important;
      }

      *,
      *:before,
      *:after {
        box-sizing: border-box;
      }

      .rux-advanced-status {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        position: relative;

        margin: 0;

        line-height: 0;

        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .rux-advanced-status__icon-group {
        display: flex;
        position: relative;

        margin: 0 auto;
        width: 4.5rem;

        /*
            Faux icon grid. Usefull for gross alignment
          border: 1px solid red;

          background-image: linear-gradient(
            to right,
            rgba(255, 0, 0, 0) 0,
            rgba(255, 0, 0, 0) 49%,
            rgba(0, 255, 0, 1) 50%,
            rgba(0, 255, 0, 1) 51%,
            rgba(0, 255, 0, 0) 52%,
            rgba(0, 255, 0, 0) 100%
          );
           */
      }

      rux-icon {
        order: 2;
        margin: 0 auto;
      }

      rux-status {
        position: absolute;
        top: -0.4rem;
        left: -0.4rem;
        margin: 0;
      }

      .rux-advanced-status__badge {
        display: block;
        z-index: 2;
        order: 3;

        position: absolute;
        bottom: -0.75rem;
        right: -0.4rem;

        border: 1px solid rgba(255, 255, 255, 0.6);
        border-radius: 3px;
        padding: 0.65rem 0.25rem;

        color: var(--fontColor, #fff);
        font-size: 0.775rem;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        background-color: #000;
      }

      .rux-advanced-status__label {
        color: var(--fontColor, #fff);
        font-size: 0.875rem;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 1.2;
        overflow: hidden;

        margin-top: 1rem;

        width: 100%;
        max-width: 6.25rem;
      }

      .rux-advanced-status__sublabel {
        font-size: 0.65em;
        color: var(--fontColor, #fff);
        opacity: 0.6;
        display: block;
      }

      :host([status='off']) {
        stroke: var(--colorOff, rgb(158, 167, 173));
        fill: var(--colorOff, rgb(158, 167, 173));
      }

      :host([status='standby']) {
        stroke: var(--colorStandby, rgb(45, 204, 255));
        fill: var(--colorStandby, rgb(45, 204, 255));
      }

      /* .rux-status--normal { */
      :host([status='normal']) {
        stroke: var(--colorNormal, rgb(86, 240, 0));
        fill: var(--colorNormal, rgb(86, 240, 0));
      }

      :host([status='caution']) {
        stroke: var(--colorCaution, rgb(252, 232, 58));
        fill: var(--colorCaution, rgb(252, 232, 58));
      }

      :host([status='serious']) {
        stroke: var(--colorSerious, rgb(255, 179, 0));
        fill: var(--colorSerious, rgb(255, 179, 0));
      }

      :host([status='critical']) {
        stroke: var(--colorCritical, rgb(255, 56, 56));
        fill: var(--colorCritical, rgb(255, 56, 56));
      }
    `;
  }
}

customElements.define('rux-monitoring-icon', RuxMonitoringIcon);
