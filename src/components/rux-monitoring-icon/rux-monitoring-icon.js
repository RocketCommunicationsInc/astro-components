import { LitElement, html, css } from 'lit-element'
import { directive } from 'lit-html'
import { ifDefined } from 'lit-html/directives/if-defined'

/* eslint-disable no-unused-vars */
import { RuxIcon } from '../rux-icon/rux-icon.js'
import { RuxStatus } from '../rux-status/rux-status.js'
/* eslint-enable no-unused-vars */

export const collapseNumber = directive((val) => (part) => {
    try {
        const n = Math.floor(val)
        if (n.isNaN) return

        // don't show any values less than 0
        if (n <= 0) return null

        // get the place value
        const thousand = Math.floor((n / 1000) % 1000) // only return a whole number
        const million = (n / 1000000) % 1000000 // return a decimal value for numbers like 1.2m
        const billion = (n / 1000000000) % 1000000000 // return a decimal value for numbers like 1.2b
        const trillion = (n / 1000000000000) % 1000000000000 // trillion is just to offer an overflow instance

        // set the display to its original state
        let _shorthand = n

        if (trillion >= 1) {
            _shorthand = '∞'
        } else if (billion >= 1) {
            _shorthand = `${billion.toFixed(1).toString()}B`
        } else if (million >= 1) {
            _shorthand = `${million.toFixed(1).toString()}M`
        } else if (thousand >= 1) {
            _shorthand = `${thousand}K`
        }

        part.setValue(_shorthand)
        return _shorthand
    } catch (error) {}
})

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
            library: {
                type: String,
            },
        }
    }

    constructor() {
        super()

        this.status = 'normal'
        this.library = undefined
        this.label = ''
        this.sublabel = ''
        this.icon = ''
        this.notifications = 0
    }

    render() {
        return html`
            <div
                id="rux-advanced-status__icon"
                class="rux-advanced-status"
                title="${this.notifications} ${this.label} ${this.sublabel}"
            >
                <div class="rux-advanced-status__icon-group">
                    <rux-status status="${this.status}"></rux-status>

                    ${this.iconTemplate} ${this.badgeTemplate}
                </div>

                ${this.labelTemplate}
            </div>
        `
    }

    get iconTemplate() {
        return html`
            <rux-icon
                icon="${this.icon}"
                library="${ifDefined(this.library)}"
                class="rux-status--${this.status}"
            ></rux-icon>
        `
    }

    get badgeTemplate() {
        return html`
            <div
                class="rux-advanced-status__badge"
                ?hidden="${!this.notifications}"
            >
                ${collapseNumber(this.notifications)}
            </div>
        `
    }

    get labelTemplate() {
        return html`
            <div class="rux-advanced-status__label">
                ${this.label}
                <span
                    class="rux-advanced-status__sublabel"
                    ?hidden="${!this.sublabel}"
                    >${this.sublabel}</span
                >
            </div>
        `
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

                color: #fff;
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
                fill: var(--colorOff);
            }

            :host([status='standby']) {
                fill: var(--colorStandby);
            }

            /* .rux-status--normal { */
            :host([status='normal']) {
                fill: var(--colorNormal);
            }

            :host([status='caution']) {
                fill: var(--colorCaution);
            }

            :host([status='serious']) {
                fill: var(--colorSerious);
            }

            :host([status='critical']) {
                fill: var(--colorCritical);
            }
        `
    }
}

customElements.define('rux-monitoring-icon', RuxMonitoringIcon)
