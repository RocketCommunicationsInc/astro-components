import { LitElement, html, css } from 'lit-element'

export class RuxTimelineRegion extends LitElement {
    static get properties() {
        return {
            id: {
                type: String,
            },
            label: {
                type: String,
            },
            status: {
                type: String,
            },
            scale: {
                type: Number,
            },
            trackWidth: {
                type: Number,
            },
            hidden: {
                type: Boolean,
                value: false,
            },
            duration: {
                type: Number,
            },
            startTime: {
                type: String,
            },
            endTime: {
                type: String,
            },
            detail: {
                type: Object,
            },
            selected: {
                type: Boolean,
                reflect: true,
            },
            temporality: {
                type: String,
                reflect: true,
            },
            _initialState: {
                type: Object,
            },
        }
    }

    constructor() {
        super()
        this.status = 'off'
        this.scale = 100
        this.hidden = false
        this.selected = false
        this.temporality = 'past'

        this._windowListener = this._onWindowResize.bind(this)
    }

    render() {
        return html`
            <div
                class="container"
                label="${this.label}: ${this._formatTime(
                    this.startTime
                )}-${this._formatTime(this.endTime)}"
            >
                <div
                    class="rux-region__segment rux-region__header rux-region__segment rux-region__header"
                >
                    <rux-status
                        class="light-theme"
                        status="${this.status}"
                    ></rux-status>
                    <div class="rux-region__label">${this.label}</div>
                </div>
                <div class="rux-region__segment rux-region__time">
                    <span class="rux-region__time__start-time"
                        >${this._formatTime(this.startTime)}</span
                    >
                    <span class="rux-region__time__end-time"
                        >${this._formatTime(this.endTime)}</span
                    >
                </div>
            </div>
        `
    }

    static get styles() {
        return css`
            :host {
                position: absolute;
                display: flex;
                flex-direction: column;

                font-size: 1rem;
                top: 0;
                background-color: var(--timelineRegionBackgroundColor);
                color: var(--timelineRegionTextColor);
                overflow: hidden;

                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;

                border: 1px solid var(--timelineRegionBorderColor);

                box-sizing: border-box;
                height: 60px;

                z-index: 1;
                filter: none;
            }

            :host([hidden]) {
                background-color: #203246;
                opacity: 0.8;
                z-index: 0;
                border-color: #203246;
            }

            *,
            *:after,
            *:before {
                box-sizing: inherit;
            }

            .filtered {
                opacity: 0.5;
            }

            :host(.current),
            :host([temporality='present']) {
                border: 1px solid var(--timelineRegionBorderColor);
                transition: border 0.267s ease-in-out;
            }

            :host([selected]) {
                border: 1px solid var(--timelineRegionSelectedBorderColor) !important;
                background-color: var(--timelineRegionSelectedBackgroundColor);

                z-index: 1;
            }

            :host([temporality='past']) {
                color: rgba(255, 255, 255, 0.5);
                /* filter: brightness(85%); */
            }

            :host(.future),
            :host([temporality='future']) {
                border: 1px dotted var(--timelineRegionSelectedBorderColor);
            }

            :host([status='normal']) {
                border-color: var(--timelineRegionBorderColor);
            }

            :host([status='critical']) {
                border-color: var(--timelineRegionStatusColorCritical);
            }

            :host([status='serious']) {
                border-color: var(--timelineRegionStatusColorSerious);
            }

            :host([status='caution']) {
                border-color: var(--timelineRegionStatusColorCaution);
            }

            :host([status='standby']) {
                border-color: var(--timelineRegionStatusColorStandby);
            }

            :host([status='off']) {
                border-color: var(--timelineRegionStatusColorOff);
            }

            .rux-region__segment {
                display: flex;
                align-items: center;
                padding: 0 1em;
                margin: 0;
                height: 30px !important;
                line-height: 1;
            }

            .rux-region__header {
                display: flex;
                justify-content: flex-start;
                align-items: center;

                height: 50%;
            }

            :host .rux-region__label {
                white-space: nowrap;
                overflow: hidden;
                color: var(--timelineRegionTextColor);
                text-overflow: ellipsis;
                font-size: var(--fontSizeMD);
            }

            :host([selected]) .rux-region__label,
            :host([selected]) .rux-region__time {
                color: var(--timelineRegionSelectedTextColor);
            }

            :host(.small) .rux-region__label {
                width: 45px;
            }

            :host(.compact) .rux-region__label {
                display: none;
            }

            .rux-region__header rux-status {
                margin-right: 0.5rem;
            }

            :host .rux-region__time {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                color: var(--timelineRegionTextColor);
                height: 50%;
                font-size: var(--fontSizeSM);
            }

            :host(.small) .rux-region__time {
                display: none;
            }

            :host(.compact) .rux-region__time {
                display: none;
            }

            .rux-region__time__end-time {
                margin-left: 0.25rem;
            }

            .rux-region__time__end-time::before {
                content: '-';
                margin-right: 0.25rem;
            }
        `
    }

    connectedCallback() {
        super.connectedCallback()

        // this.addEventListener('update', this._windowListener);

        window.addEventListener('resize', this._windowListener)
    }

    disconnectedCallback() {
        super.disconnectedCallback()

        // this.removeEventListener('update', this._windowListener);

        window.removeEventListener('resize')
    }

    firstUpdated() {
        this._setDefaultSize()
    }

    _setDefaultSize() {
        const now = new Date()
        const today = new Date(
            now.getUTCFullYear(),
            now.getUTCMonth(),
            now.getUTCDate(),
            0,
            0,
            0
        ).getTime()
        const start = new Date(this.startTime).getTime()
        const end = new Date(this.endTime).getTime()

        this.trackWidth = this.parentElement.offsetWidth

        const left = ((start - today) * this.trackWidth) / this.duration
        const width = ((end - start) * this.trackWidth) / this.duration

        // set the initial values for each region
        //
        this._initialState = {
            width: width,
            left: left,
            scale: this.scale,
        }

        this._updateRegion()
    }

    _onWindowResize() {
        // console.log("window resize");
        this._setDefaultSize()
    }

    _getTime(time) {
        return time
        /* return new Date(
      time.getUTCFullYear(),
      time.getUTCMonth(),
      time.getUTCDate(),
      time.getUTCHours(),
      time.getUTCMinutes(),
      time.getUTCSeconds()
    ); */
    }

    _formatTime(time) {
        return new Date(time).toLocaleTimeString(this.locale, {
            hour12: false,
        })
    }

    _getRegionWidth() {
        return (
            this._initialState.width * (this.scale / this._initialState.scale)
        )
    }

    _getRegionLeft() {
        return this._initialState.left * (this.scale / this._initialState.scale)
    }

    _resetSize() {
        this.classList.remove('small', 'standard', 'compact')
    }

    _filterUpdated() {
        if (this.filter.toLowerCase() === 'none') {
            this.hidden = false
        } else if (this.filter.toLowerCase() !== this.status.toLowerCase()) {
            this.hidden = true
        } else {
            this.hidden = false
        }
    }

    _updateRegion() {
        const _width = this._getRegionWidth()
        const _left = this._getRegionLeft()

        this.style.left = _left + 'px'
        this.style.width = _width + 'px'

        this._resetSize()
        if (_width > 180) {
            // this is a normal sized widget
            this.classList.add('large')
        } else if (_width < 180 && _width > 140) {
            // this is a mid sized widget without its time element
            this.classList.add('medium')
        } else if (_width < 140 && _width > 40) {
            // this is a small widget without time or label
            this.classList.add('small')
        } else if (_width < 40) {
            // this is a small widget without time or label
            this.classList.add('compact')
        }
    }
}
customElements.define('rux-timeline-region', RuxTimelineRegion)
