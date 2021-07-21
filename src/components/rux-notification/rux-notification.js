import { LitElement, html } from 'lit-element'

/* eslint-disable-next-line no-unused-vars */
import { RuxIcon } from '../rux-icon/rux-icon'
/* eslint-enable-next-line no-unused-vars */

export class RuxNotification extends LitElement {
    static get properties() {
        return {
            message: {
                type: String,
            },
            status: {
                type: String,
            },
            target: {
                type: String,
                reflect: true,
            },
            closeAfter: {
                type: Number,
            },
            open: {
                type: Boolean,
                reflect: true,
            },
        }
    }

    constructor() {
        super()
        this.message = ''
        this.status = 'standby'
        this.target = 'local'
        this.closeAfter = null
        this.open = false
        this.timeoutRef = null
    }

    updated() {
        if (this._closeAfter && this.open) {
            this.timeoutRef = setTimeout(() => {
                this.open = false
            }, this._closeAfter)
        }
    }

    _onClick() {
        if (this.timeoutRef) {
            clearTimeout(this.timeoutRef)
        }
        this.open = false
    }

    // convert given time to milliseconds, enforce default 2s minimum delay
    get _closeAfter() {
        if (this.closeAfter && this.closeAfter <= 10) {
            // if the number is 10 or less, it must be ms
        }

        if (
            (this.closeAfter && this.closeAfter > 10000) ||
            (this.closeAfter && this.closeAfter < 2000)
        ) {
            // if this number is larger than 10s or smaller than 2s, enforce minimum 2s delay
            this.closeAfter = 2000
        }

        return this.closeAfter
    }

    render() {
        return html`
            <style>
                :host {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: nowrap;
                    flex-grow: 1;
                    align-items: center;
                    align-content: center;

                    top: -4.375rem;
                    left: 0;

                    height: 4.375rem;
                    width: 100%;

                    position: absolute;
                    padding: 0 1.25rem;
                    background-color: var(--colorStandbyLighten1);
                    transition: top 0.5s ease;

                    box-sizing: border-box;
                    font-size: var(--fontSizeXL);
                    color: var(--notificationTextColor);
                }
                :host([open]) {
                    top: 0;
                }

                :host,
                :host([status='standby']) {
                    background-color: var(--colorStandbyLighten1);
                    stroke: var(--colorStandbyDarken1);
                    fill: var(--colorStandbyDarken1);
                }

                :host([status='normal']) {
                    background-color: var(--colorNormalLighten2);
                    stroke: var(--colorNormalDarken1);
                    fill: var(--colorNormalDarken1);
                }

                :host([status='caution']) {
                    background-color: var(--colorCautionLighten1);
                    stroke: var(--colorCautionDarken1);
                    fill: var(--colorCautionDarken1);
                }

                :host([status='critical']) {
                    background-color: var(--colorCriticalLighten1);
                    stroke: var(--colorCriticalDarken1);
                    fill: var(--colorCriticalDarken1);
                }
            </style>

            <div class="rux-notification__message">${this.message}</div>
            <rux-icon
                role="button"
                label="Close notification"
                @click="${this._onClick}"
                icon="close"
                size="small"
            ></rux-icon>
        `
    }
}
customElements.define('rux-notification', RuxNotification)
