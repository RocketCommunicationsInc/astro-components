/* eslint-disable no-unused-vars */
import { html, css } from 'lit-element'
import { RuxMonitoringIcon } from './rux-monitoring-icon.js'
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
            min: {
                type: Number,
            },
            max: {
                type: Number,
            },
        }
    }

    constructor() {
        super()

        this.progress = 0
        this.max = 100
        this.min = 0
        this._circumference = 56 * 2 * Math.PI
    }

    firstUpdated() {
        super.connectedCallback()

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
                        threshold: 49,
                        status: 'normal',
                    },
                    {
                        threshold: 65,
                        status: 'caution',
                    },
                    {
                        threshold: 81,
                        status: 'serious',
                    },
                    {
                        threshold: 101,
                        status: 'critical',
                    },
                ]
            }
            this.range = this.range.sort((a, b) =>
                a.threshold > b.threshold ? 1 : -1
            )

            this.updateProgress()
        }
    }

    updated(changedProperties) {
        if (changedProperties.get('progress')) {
            this.updateProgress()
        }
    }

    updateProgress() {
        this.status =
            this.range.find((range) => this.progress < range.threshold)
                .status || this.range[0]

        const graphProgress =
            this._circumference -
            (this.progress / this.max) * this._circumference

        this.style.setProperty('--monitoring-progress', graphProgress)
    }

    get iconTemplate() {
        return html`
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                style=""
                class="rux-status--${this.status}"
            >
                <g id="progress">
                    <circle
                        cx="60"
                        cy="60"
                        r="56"
                        fill="transparent"
                        stroke="rgba(40, 63, 88, 1)"
                        stroke-width="10"
                        transform="rotate(-90 61 60)"
                    />
                    <circle
                        cx="60"
                        cy="60"
                        r="56"
                        fill="transparent"
                        stroke-dasharray="351.8583772 351.8583772"
                        stroke-dashoffset="var(--monitoring-progress, 1)"
                        stroke-linecap="round"
                        stroke-width="10"
                        class="progress-ring__circle"
                        transform="rotate(-90 61 60)"
                    />
                </g>
            </svg>
            <div class="rux-advanced-status__progress">
                ${Math.ceil((this.progress / this.max) * 100)}%
            </div>
        `
    }

    static get styles() {
        return [
            super.styles,
            css`
                svg {
                    margin: 0 auto;
                    width: 3rem;
                    height: 3rem;
                }
                svg.rux-status--off {
                    stroke: var(--colorOff, rgb(158, 167, 173));
                    fill: var(--colorOff, rgb(158, 167, 173));
                }

                svg.rux-status--standby {
                    stroke: var(--colorStandby, rgb(45, 204, 255));
                    fill: var(--colorStandby, rgb(45, 204, 255));
                }

                svg.rux-status--normal {
                    stroke: var(--colorNormal, rgb(86, 240, 0));
                    fill: var(--colorNormal, rgb(86, 240, 0));
                }

                svg.rux-status--caution {
                    stroke: var(--colorCaution, rgb(252, 232, 58));
                    fill: var(--colorCaution, rgb(252, 232, 58));
                }

                svg.rux-status--serious {
                    stroke: var(--colorSerious, rgb(255, 179, 0));
                    fill: var(--colorSerious, rgb(255, 179, 0));
                }

                svg.rux-status--critical {
                    stroke: var(--colorCritical, rgb(255, 56, 56));
                    fill: var(--colorCritical, rgb(255, 56, 56));
                }

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
        ]
    }
}

customElements.define('rux-monitoring-progress-icon', RuxMonitoringProgressIcon)
