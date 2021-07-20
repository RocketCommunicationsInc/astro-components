import { LitElement, html, css } from 'lit-element'

/* eslint-disable no-unused-vars */
import { RuxTimelineTrack } from './rux-timeline-track.js'
import { RuxTimelineRegion } from './rux-timeline-region.js'

export class RuxTimeline extends LitElement {
    static get properties() {
        return {
            duration: {
                type: Number,
            },
            startTime: {
                type: String,
            },
            tracks: {
                type: Array,
            },
            playheadControl: {
                type: Boolean,
            },
            initialScale: {
                type: Number,
            },
            _scale: {
                type: Number,
            },
            timezone: {
                type: String,
            },
        }
    }

    constructor() {
        super()

        this.duration = 86400000
        this.startTime = null
        this.playheadControl = false
        this.initialScale = 100
        this._scale = 100
        this.timezone = 'UTC'

        // bind scroll listener to scroll event
        this._scrollListener = this._scroll.bind(this)

        // debounce for request animation frame
        this._last = 0
    }

    render() {
        return html`
            <link rel="stylesheet" href="./css/astro.core.min.css" />
            <section class="rux-timeline__viewport">
                <div class="rux-timeline__viewport__labels">
                    ${this.tracks.map(
                        (track, index) => html`
                            <div
                                id="label-${index}"
                                label="${track.label}"
                                index="${index}"
                                class="rux-timeline__track__label-container"
                            >
                                <div class="rux-timeline__track__label">
                                    ${track.label}
                                </div>
                            </div>
                        `
                    )}
                </div>

                <div id="rux-timeline__viewport__track-container">
                    <div id="rux-timeline__viewport__tracks">
                        <div id="rux-timeline__tracks">
                            ${this.tracks.map(
                                (track, index) => html`
                                    <rux-timeline-track
                                        aria-labelledby="label-${index}"
                                        label="${track.label}"
                                        index="${index}"
                                        scale="${this._scale}"
                                        duration="${this._duration}"
                                        .regions="${track.regions}"
                                    ></rux-timeline-track>
                                `
                            )}
                        </div>
                        <div id="rux-timeline__current-time"></div>
                        <div id="rux-timeline__playhead"></div>
                        <div id="rux-timeline__ruler"></div>
                    </div>
                </div>
            </section>

            <footer class="rux-timeline__footer">Footer FPO</footer>
        `
    }

    static get styles() {
        return css`
            :host {
                display: flex;
                flex-direction: column;
                flex-grow: 1;

                width: 100%;
                padding: 0;

                box-sizing: border-box;
                transform: translateZ(0);
            }

            *,
            *:after,
            *:before {
                box-sizing: border-box;
            }

            .rux-timeline__header,
            .rux-timeline__footer {
                position: relative;

                display: flex;
                align-items: center;

                padding: 0 1em;

                background-color: var(--timelineHeaderBackgroundColor);

                z-index: 10;
            }

            .rux-timeline__header {
                padding: unset 1.25rem;
                justify-content: center;
            }

            .rux-timeline__header h1 {
                font-size: 1.25rem;
                font-weight: 300;
                margin-left: 0.5em;
            }

            .rux-timeline__header rux-slider {
                margin-left: auto;
                margin-right: 1rem;
            }

            /* the default .rux-button__icon expects you to be using .rux-button--large on the parent */
            .rux-timeline__header .rux-button .rux-button__icon {
                height: 1.1rem;
                width: 1.1rem;
                margin-left: -0.3125rem;
            }

            .rux-timeline__footer {
                display: none;
            }

            rux-timeline-track {
                /* height: 60px; */
                margin: 2px 0;
            }

            rux-timeline-track {
                background-color: var(--timelineTrackBackgroundColor);
            }

            #rux-timeline__ruler {
                display: flex;
                justify-content: space-between;
                position: relative;
                margin-top: auto;
                color: var(--timelineRulerTextColor);

                background-color: var(--timelineRulerBackgroundColor);
                height: 2em;
                width: 100%;

                /* box-shadow: 0 -2px 6px rgba(0,0,0,0.2) */
            }

            #rux-timeline__ruler div {
                font-size: 1rem;
                /* top: 0; */
                height: 20px;
                width: 100%;
                /* position: absolute; */
                border-left: 1px solid rgba(255, 255, 255, 0.1);
                padding-left: 0.25rem;
            }

            #rux-timeline__playhead {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 3px;
                background-color: rgba(255, 255, 255, 0.4);
                z-index: 100;
                display: none;
            }

            #rux-timeline__current-time {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 1px;
                background-color: var(--timelineRegionBorderColor);
                z-index: 200;
                display: none;
            }
            #rux-timeline__current-time::before {
                content: '';
                position: absolute;
                top: 0;
                left: -6px;
                height: 5px;
                width: 13px;
                background-color: var(--timelineRegionBorderColor);
            }

            #rux-timeline__current-time::after {
                content: '';
                position: absolute;
                top: 5px;
                left: -6px;
                height: 5px;
                width: 13px;
                border-color: #5cb3ff;

                border-top: 6px solid var(--timelineRegionBorderColor);
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
            }

            .rux-timeline__viewport {
                position: relative;
                display: flex;

                justify-content: flex-start;
                width: 100%;
                z-index: 5;

                overflow-y: hidden;
            }

            .rux-timeline__track__label-container {
                width: 100%;
                background-color: var(--timelineTrackLabelBackgroundColor);
                font-size: 1rem;
                display: flex;
                justify-content: flex-start;
                flex-wrap: wrap;
                height: 60px;
                margin: 2px 1px 2px 0;
            }

            .rux-timeline__track__subtracks {
                width: 100%;
                background-color: #203246;
            }

            .rux-timeline__track__label-container[selected] {
                height: auto;
            }

            .rux-timeline__track__label-container[selected]
                .rux-timeline__track__subtracks {
                display: block;
            }

            .rux-timeline__track__label--subtrack {
                background-color: var(--timelineTrackLabelBackgroundColor);
                margin: 2px 0;
            }

            .rux-timeline__track__label--subtrack:last-of-type {
                margin: 2px 0 0 0;
            }

            .rux-timeline__track__label {
                width: 100%;
                font-size: 1rem;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                height: 60px;
                padding: 0 0.9875rem;

                flex-grow: 0;
            }

            .rux-timeline__viewport__labels {
                flex-shrink: 0;
                position: relative;
                width: 12.875rem;
                z-index: 200;
                margin-right: 2px;
            }

            #rux-timeline__viewport__tracks {
                height: auto;
                position: relative;
            }

            #rux-timeline__tracks {
                position: relative;
            }

            #rux-timeline__viewport__track-container {
                position: relative;
                overflow-y: hidden;
                z-index: 0;
                width: 100%;
            }

            .rux-timeline__filter {
                list-style: none;
                padding: 0;
                margin: 0;
            }
        `
    }

    firstUpdated() {
        // get the playhead
        this._playhead = this.shadowRoot.getElementById(
            'rux-timeline__playhead'
        )

        // get the current time indicator
        this._currentTime = this.shadowRoot.getElementById(
            'rux-timeline__current-time'
        )

        // get the track container; this is the larger container for
        // tracks, ruler, playhead and current time indicator
        this._track = this.shadowRoot.getElementById(
            'rux-timeline__viewport__track-container'
        )

        // get the timeline ruler
        this._ruler = this.shadowRoot.getElementById('rux-timeline__ruler')

        // get the tracks container; this differs from the track_container
        // in that it only contains the tracks.
        this._tracks = this.shadowRoot.getElementById(
            'rux-timeline__viewport__tracks'
        )

        this._setTics()
    }

    connectedCallback() {
        super.connectedCallback()

        // hard coded min/max scale (for now)
        this._minScale = 100
        this._maxScale = 500

        // if duration is less than 1000 then assume the data was in hours.
        // NOTE: Refactor the underscore _duration is redundant at this point
        // NOTE: a future enhancement would be to allow for some form of passing
        // time in e.g. 12h for 12 hours
        if (this.duration < 1000) {
            this.duration = this.duration * 60 * 60 * 1000
        }
        this._duration = this.duration
        this._durationHours = this._duration / 1000 / 60 / 60

        this._scale = this.initialScale

        if (this.playheadControl) {
            this._playhead.style.display = 'block'
        }

        // if the browser supports the resizeObserver (currently Chrome 55+)
        // use that to handle both window and css transitions of width. This
        // provides a much smoother resize
        if ('ResizeObserver' in window) {
            this.resizeObserver = new ResizeObserver((entries) => {
                entries.forEach(() => {
                    this._setParams()
                })
            })
            this.resizeObserver.observe(this)

            // otherwise use a mutation observer to handle resizing via CSS/JS
            // and a window event listener to handle window resizing.
        } else {
            const _track = this.shadowRoot.getElementById(
                'rux-timeline__viewport__track-container'
            )

            this.mustationObserver = new MutationObserver((mutationList) => {
                mutationList.forEach(() => {
                    this._setParams()
                })
            })

            this.mustationObserver.observe(_track, {
                attributes: true,
                childList: false,
                subtree: true,
            })
        }

        // Animate the playhead
        this.currentTimeAnimator = window.requestAnimationFrame(
            this._updateCurrentTime.bind(this)
        )

        this.currentPlayheadAnimator = window.requestAnimationFrame(
            this._updatePlayhead.bind(this)
        )
    }

    disconnectedCallback() {
        super.disconnectedCallback()

        this._track.removeEventListener('wheel', this._scrollListener)

        window.cancelAnimationFrame(this.currentTimeAnimator)
        window.cancelAnimationFrame(this.currentPlayheadAnimator)
    }

    _catchPlayhead() {
        // if(this._playhead.offsetLeft > 1000) {
        //   this.
        // }
    }

    _dispatchPlayheadEvent(time) {
        // TODO: use a while loop to have a more efficient sub-shadowDom inquisition
        const _t = this.shadowRoot.querySelectorAll('rux-timeline-track')
        _t.forEach((track) => {
            const _r = track.shadowRoot.querySelectorAll('rux-timeline-region')

            _r.forEach((region) => {
                // handles setting a timeline region to a past state
                if (time > region.startTime && time < region.endTime) {
                    region.temporality = 'present'
                } else if (time < region.startTime) {
                    region.temporality = 'future'
                } else if (time > region.endTime) {
                    region.temporality = 'past'
                }
            })
        })
    }

    _updateCurrentTime(time) {
        const now = new Date()
        const utc = new Date(
            now.getUTCFullYear(),
            now.getUTCMonth(),
            now.getUTCDate(),
            now.getUTCHours(),
            now.getUTCMinutes(),
            now.getUTCSeconds()
        )
        const then = new Date(
            now.getUTCFullYear(),
            now.getUTCMonth(),
            now.getUTCDate(),
            0,
            0,
            0
        )

        // time of today, like right now
        const dif = utc.getTime() - then.getTime()
        const loc = (dif * this._ruler.offsetWidth) / this._duration

        if (loc > this._ruler.offsetWidth) {
            this._currentTime.style.display = 'none'
        } else {
            this._currentTime.style.display = 'block'
            this._currentTime.style.left = loc + 'px'
            this.currentTimeAnimator = window.requestAnimationFrame(
                this._updateCurrentTime.bind(this)
            )
        }

        // throttle dispatching events to regions
        if (!this._last || time - this._last >= 1 * 5000) {
            this._last = time
            this._dispatchPlayheadEvent(utc)
        }
    }

    _updatePlayhead() {
        let loc = this._playhead.offsetLeft

        loc += 1 * (this._scale / 100)
        if (loc >= this._tracks.offsetWidth) {
            loc = 0
        }
        this._playhead.style.left = loc + 'px'
        this.currentPlayheadAnimator = window.requestAnimationFrame(
            this._updatePlayhead.bind(this)
        )
    }

    _updateTimelineScale() {
        // scale tracks container
        const scale = `${Number(this._scale)}%`
        this._tracks.style.width = scale
        this._track.style.width = scale
    }

    _setParams() {
        this._updateTimelineScale()
        // This is a very ugly way of targeting grandchildren form a parent
        // but for demo itâ€™ll have to do.
        const _t = this.shadowRoot.querySelectorAll('rux-timeline-track')
        _t.forEach((track) => {
            track.dispatchEvent(new CustomEvent('update'))
            const _r = track.shadowRoot.querySelectorAll('rux-timeline-region')

            _r.forEach((region) => {
                region.dispatchEvent(new CustomEvent('update'))
            })
        })
    }

    /*
    TODO: Consider moving the ruler to its own component entirely and moving
    all the tic/label logic there
  */
    _setTics() {
        // TODO: Allow for a start time that isnâ€™t midnight of the current day
        const start = 0

        // loop through the duration set for the timeline
        for (let i = start; i < this._durationHours; i++) {
            // create a new tic
            const tic = document.createElement('div')

            // generate a readable time label
            tic.innerHTML = `${i.toString().padStart(2, '0')}:00`

            // append to child
            this._ruler.appendChild(tic)
        }
    }

    /*
    Mostly a dev feature, but maybe useful to end users.
    Scroll the timeline with the mouse wheel
  */
    _scroll(e) {
        if (e.altKey) {
            let _delta = (this._scale += e.deltaY / 10)

            if (_delta < this._minScale) {
                _delta = this._minScale
            } else if (_delta > this._maxScale) {
                _delta = this._maxScale
            }

            this._scale = Math.floor(_delta)
        } else {
            e.currentTarget.scrollLeft += Math.floor(e.deltaY)
        }
    }
}
customElements.define('rux-timeline', RuxTimeline)
