import { LitElement, html, css } from 'lit-element';
/* eslint-disable no-unused-vars */
import { RuxMonitoringIcon } from './rux-monitoring-icon.js';
/* eslint-enable no-unused-vars */

export class RuxMonitoringProgressIcon extends RuxMonitoringIcon {
  static get properties() {
    return {
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
  }

  firstUpdated() {
    super.connectedCallback();

    if (Number.isInteger(parseInt(this.progress, 10))) {
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
      this.range = this.range.sort((a, b) => (a.threshold > b.threshold ? 1 : -1));
      this.updateProgress();
    }
  }

  updated(changedProperties) {
    if (changedProperties.get('progress')) {
      this.updateProgress();
    }
  }

  updateProgress() {
    this.status = this.range.find(range => this.progress < range.threshold).status;

    const graphProgress = this._circumference - (this.progress / 100) * this._circumference;

    this.style.setProperty('--monitoring-progress', graphProgress);
  }

  get iconTemplate() {
    return html`
      <rux-icon icon="progress" class="rux-status--${this.status}"></rux-icon>
      <div class="rux-advanced-status__progress">
        ${this.progress}%
      </div>
    `;
  }

  static get styles() {
    return [
      super.styles,
      css`
        [data-progress] rux-icon {
          transition: stroke-dashoffset 0.367s, stroke 0.367s;
          transform-origin: 50% 50%;
        }

        .rux-advanced-status__progress {
          font-family: var(--fontFamilyMono, 'monospace');
          margin-top: -0.125rem;
          margin-left: -0.125rem;
          font-size: 0.8rem;

          position: absolute;

          display: flex;
          justify-content: center;
          align-items: center;

          width: 100%;
          height: 100%;

          letter-spacing: -0.0625rem;
          text-align: center;
        }
      `,
    ];
  }
}

customElements.define('rux-monitoring-progress-icon', RuxMonitoringProgressIcon);
