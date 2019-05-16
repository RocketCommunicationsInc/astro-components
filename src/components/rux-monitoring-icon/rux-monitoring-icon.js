import { LitElement, html } from 'lit-element';
/* eslint-disable no-unused-vars */
import { RuxIcon } from '../rux-icon/rux-icon.js';
import { RuxStatus } from '../rux-status/rux-status.js';
/* eslint-enable no-unused-vars */

export class RuxMonitoringIcon extends LitElement {
  static get properties() {
    return {
      status: {
        type: String,
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
      progress: {
        type: Number,
      },
      range: {
        type: Array,
      },
    };
  }

  constructor() {
    super();

    this._circumference = 56 * 2 * Math.PI;

    this.status = 'null';
  }

  firstUpdated() {
    super.connectedCallback();

    if (Number.isInteger(parseInt(this.progress, 10))) {
      this.icon = 'progress';
      if (!this.range) {
        this.range = [
          {
            threshold: 17,
            status: 'off',
          },
          {
            threshold: 33,
            status: 'standby',
          },
          {
            threshold: 81,
            status: 'serious',
          },
          {
            threshold: 49,
            status: 'normal',
          },
          {
            threshold: 65,
            status: 'caution',
          },

          {
            threshold: 100,
            status: 'critical',
          },
        ];
      }
    }

    this.range = this.range.sort((a, b) => (a.threshold > b.threshold ? 1 : -1));

    console.log(this.range);
  }

  updated(changedProperties) {
    if (changedProperties.get('progress')) {
      this.status = this.range.find(range => this.progress < range.threshold).status;

      const graphProgress = this._circumference - (this.progress / 100) * this._circumference;

      this.style.setProperty('--monitoring-progress', graphProgress);
    }
  }

  _filterNotifications() {
    const n = Math.floor(this.notifications);

    // don't show any values less than 0
    if (n <= 0) return null;

    // get the place value
    const thousand = Math.floor((n / 1000) % 1000); // only return a whole number
    const million = (n / 1000000) % 1000000; // return a decimal value for numbers like 1.2m
    const billion = (n / 1000000000) % 1000000000; // return a decimal value for numbers like 1.2b
    const trillion = (n / 1000000000000) % 1000000000000; // trillion is just to offer an overflow instance

    // set the display to its original state
    let _message = n;

    if (trillion >= 1) {
      _message = '∞';
    } else if (billion >= 1) {
      _message = `${billion.toFixed(1).toString()}b`;
    } else if (million >= 1) {
      _message = `${million.toFixed(1).toString()}m`;
    } else if (thousand >= 1) {
      _message = `${thousand}k`;
    }

    return _message;
  }

  render() {
    return html`
      <style>
        :host {
          display: inline-block;
          padding: 0;

          --monitoring-progress: 0;
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

        .rux-advanced-status__icon {
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

        .rux-status--off {
          stroke: var(--colorOff, rgb(158, 167, 173));
          fill: var(--colorOff, rgb(158, 167, 173));
        }

        .rux-status--standby {
          stroke: var(--colorStandby, rgb(45, 204, 255));
          fill: var(--colorStandby, rgb(45, 204, 255));
        }

        .rux-status--normal {
          stroke: var(--colorNormal, rgb(86, 240, 0));
          fill: var(--colorNormal, rgb(86, 240, 0));
        }

        .rux-status--caution {
          stroke: var(--colorCaution, rgb(252, 232, 58));
          fill: var(--colorCaution, rgb(252, 232, 58));
        }

        .rux-status--serious {
          stroke: var(--colorSerious, rgb(255, 179, 0));
          fill: var(--colorSerious, rgb(255, 179, 0));
        }

        .rux-status--critical {
          stroke: var(--colorCritical, rgb(255, 56, 56));
          fill: var(--colorCritical, rgb(255, 56, 56));
        }

        [data-progress] rux-icon {
          transition: stroke-dashoffset 0.367s, stroke 0.367s;
          transform-origin: 50% 50%;
        }

        .rux-advanced-status__progress {
          font-family: var(--fontFamilyMono);
          font-size: 0.8rem;
          line-height: 0.25;
          align-self: center;

          letter-spacing: -1px;
          text-align: center;
        }
      </style>

      <div
        id="rux-advanced-status__icon"
        class="rux-advanced-status rux-status--${this.status}"
        title="${this.notifications} ${this.label} ${this.sublabel}"
        ?data-progress="${this.progress}"
      >
        <div class="rux-advanced-status__icon-group">
          <rux-status status="${this.status}"></rux-status>

          <rux-icon icon="${this.icon}" class="rux-advanced-status__icon progress rux-status--${this.status}">
            <div class="rux-advanced-status__progress" ?hidden="${!this.progress}">
              ${this.progress}%
            </div>
          </rux-icon>

          <div class="rux-advanced-status__badge" ?hidden="${!this.notifications}">
            ${this._filterNotifications()}
          </div>
        </div>

        <div class="rux-advanced-status__label">
          ${this.label}
          <span class="rux-advanced-status__sublabel" ?hidden="${!this.sublabel}">${this.sublabel}</span>
        </div>
      </div>
    `;
  }
}

customElements.define('rux-monitoring-icon', RuxMonitoringIcon);
