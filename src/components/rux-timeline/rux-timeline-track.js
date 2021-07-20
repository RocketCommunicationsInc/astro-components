import { LitElement, html, css } from 'lit-element'

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */

export class RuxTimelineTrack extends LitElement {
    static get properties() {
        return {
            id: {
                type: String,
            },
            index: {
                type: Number,
                reflect: true,
            },
            regions: {
                type: Array,
            },
            scale: {
                type: Number,
            },
            duration: {
                type: Number,
            },
            selectedRegion: {
                type: Object,
            },
        }
    }

    constructor() {
        super()

        this.id = 'RTT-' + Math.floor(Math.random() * 1000)
        this._windowListener = this._onWindowResize.bind(this)
    }

    render() {
        return html`
            <div class="rux-timeline__track">
                <ol class="rux-timeline__regions">
                    ${this.regions.map(
                        (region) => html`
                            <li>
                                <rux-timeline-region
                                    id="${region.id}"
                                    class="rux-timeline-region rux-timeline-region--main"
                                    label="${region.label}"
                                    status="${region.status}"
                                    startTime="${region.startTime}"
                                    endTime="${region.endTime}"
                                    scale="${this.scale}"
                                    duration="${this.duration}"
                                    @click="${this._onClick}"
                                >
                                </rux-timeline-region>
                            </li>
                        `
                    )}
                </ol>
            </div>
        `
    }

    static get styles() {
        return css`
            :host {
                display: flex;
                width: 100%;

                flex-wrap: wrap;
            }

            :host([selected]) {
                height: auto;
            }

            :host([selected]) .rux-timeline-region--main {
                display: none;
            }

            .rux-timeline__track {
                position: relative;
                display: block;
                height: 60px;
                width: 100%;

                box-sizing: border-box;
                overflow: hidden;
            }

            *,
            *:after,
            *:before {
                box-sizing: inherit;
            }

            .rux-timeline__track {
                position: relative;
            }

            ol {
                display: block;
                list-style: none;
                padding: 0;
                margin: 0;
            }
        `
    }

    connectedCallback() {
        super.connectedCallback()

        this.addEventListener('update', this._windowListener)
    }

    disconnectedCallback() {
        super.disconnectedCallback()

        this.removeEventListener('update', this._windowListener)
    }

    firstUpdated() {
        this.trackWidth = this.shadowRoot.querySelectorAll(
            '.rux-timeline__track'
        )[0].offsetWidth
    }

    _resetSelected() {
        // reset any region that may be selected
        if (!this.selectedRegion) return
        this.shadowRoot
            .querySelectorAll('rux-timeline-region')
            .forEach((region) => {
                region.removeAttribute('selected')
            })
    }

    isReserved(region) {
        return region.reserved
    }

    _onClick(e) {
        const _region = e.currentTarget

        this._resetSelected()
        if (_region.hasAttribute('selected')) {
            this.selectedRegion = {}
        } else {
            _region.setAttribute('selected', '')

            const now = new Date()
            const utcNow = new Date(
                now.getUTCFullYear(),
                now.getUTCMonth(),
                now.getUTCDate(),
                now.getUTCHours(),
                now.getUTCMinutes(),
                now.getUTCSeconds()
            )

            let temporality = 'past'

            if (
                utcNow.getTime() > _region.startTime &&
                utcNow.getTime() < _region.endTime
            ) {
                temporality = 'present'
            } else if (utcNow.getTime() < _region.startTime) {
                temporality = 'future'
            }

            this.selectedRegion = {
                id: _region.id,
                label: _region.label,
                status: _region.status,
                startTime: _region.startTime,
                endTime: _region.endTime,
                temporality: temporality,
            }
        }
    }

    _regionChanged() {
        this._resetSelected()
    }

    _onWindowResize() {
        this.trackWidth = this.shadowRoot.querySelectorAll(
            '.rux-timeline__track'
        )[0].offsetWidth
    }
}
customElements.define('rux-timeline-track', RuxTimelineTrack)
