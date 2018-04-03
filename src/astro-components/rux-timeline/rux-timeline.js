import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";
import "/node_modules/@polymer/polymer/lib/elements/dom-repeat.js";
import { RuxStatus } from "../rux-status/rux-status.js";
import { RuxSlider } from "../rux-slider/rux-slider.js";
import { RuxTimelineTrack } from "./rux-timeline-track.js";
import { RuxTimelineRegion } from "./rux-timeline-region.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxTimeline extends PolymerElement {
  static get properties() {
    return {
      label: {
        type: String,
        value: "Timeline"
      },
      data: {
        type: Object
      },
      duration: {
        type: Number,
        value: 86400000
      },
      startTime: {
        type: Date,
        value: false
      },
      status: {
        type: String,
        value: "null"
      },
      tracks: {
        type: Array
      },
      playbackControls: {
        type: String,
        value: false
      },
      zoomControl: {
        type: Boolean,
        value: false
      },
      playheadControl: {
        type: Boolean,
        value: false
      },
      selected: {
        type: Object,
        notify: true
      },
      initialScale: {
        type: Number
      },
      _scale: {
        type: Number,
        observer: "_updateTimelineScale"
      },
      timezone: {
        type: String,
        value: "utc"
      },
      selectedRegion: {
        type: Object,
        notify: true
      }
    };
  }

  static get template() {
    return html`
      
      <style>

      :host {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      
        width: 100%;
        padding: 0;

        box-sizing: border-box;
      }
      
      *,
      *:after,
      *:before {
        box-sizing: border-box;
      }

      .rux-timeline__header,
      .rux-timeline__footer {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        padding: 0 1em;
        /* background-color: rgba(255, 255, 255, 0.1); */
        /* background-color: hsl(204,53%,12%); */
        background-color: #24384d;
        z-index: 10;
      }

      .rux-timeline__header {
        box-shadow: 0 2px 6px rgba(0,0,0,0.2);
      }
      
      .rux-timeline__header h1 {
        font-size: 1.25rem;
        font-weight: 300;
        margin-left: 0.5em;
      }
      
      .rux-timeline__header rux-slider {
        margin-left: auto;
        margin-right: 0;
      }

      .rux-timeline__footer {
        display: none;
      }
      
      
      rux-timeline-track {
        height: 60px;
        margin: 1px 0;
      }

      rux-timeline-track:nth-child(even) {
        background-color: rgba(255, 255, 255, 0.01);
      }
      rux-timeline-track:nth-child(odd) {
        /* background-color: rgba(255, 255, 255, 0.04); */
        background-color: #1e2f41;
      }
      
      #rux-timeline__ruler {
        display: block;
        position: relative;
        margin-top: auto;
        color: #bdc3c9;
        /* background-color: rgba(0, 0, 0, 0.15); */
        background-color: #24384d;
        height: 2em;
        box-shadow: 0 -2px 6px rgba(0,0,0,0.2)
      }
      
      #rux-timeline__ruler div {
        font-size: 0.675rem;
        top: 0;
        height: 20px;
        position: absolute;
        /* border-left: 1px solid rgba(255, 255, 255, 0.1); */
        padding: 0.35rem 0 0 0.35rem;
      }
      

      #rux-timeline__playhead {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 3px;
        background-color: rgba(255,255,255,0.4);
        z-index: 100;
        display: none;
      }


      #rux-timeline__current-time {
        position: absolute;
        top: 0;
        left: 0;
        height: calc(100% - 32px);
        width: 1px;
        background-color: #5cb3ff;
        z-index: 200;
        display: none;
      }
      #rux-timeline__current-time::before {
        content: "";
        position: absolute;
        top: 0;
        left: -6px;
        height: 5px;
        width: 13px;
        background-color: #5cb3ff;
      }

      #rux-timeline__current-time::after {
        content: "";
        position: absolute;
        top: 5px;
        left: -6px;
        height: 5px;
        width: 13px;
        border-color: #5cb3ff;
      
        border-top: 6px solid #5cb3ff;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
      }
      

        .rux-timeline__viewport {
          position: relative;
          display: flex;
          
          justify-content: flex-start;
          width: 100%;
          z-index: 5;
        }

        .rux-timeline__track__label {
          padding: 0 1em;
          width: 100%;
          /* background-color: #0e202e; */
          background-color: hsl(204, 53%, 14%);
          font-size: 0.875rem;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          height: 62px;
          
        }

        .rux-timeline__viewport__labels {
          position: relative;
          width: 7.875rem;
          z-index: 200;

          background-color: hsl(204, 53%, 14%);
          box-shadow: 5px 0 2.5px rgba(0,0,0,0.13);
        }

        #rux-timeline__viewport__track-container {
          position: relative;
          overflow-y: scroll;
          z-index: 0;
          width: 100%;
        }
        </style>
      
        <header class="rux-timeline__header">
          <rux-status status="[[status]]"></rux-status>
          <h1>[[label]]</h1>
          <rux-slider
            min=[[_minScale]]
            max=[[_maxScale]]
            hide-input=true
            val={{_scale}}></rux-slider>
        </header>

        
        
        <section class="rux-timeline__viewport">

          <div class="rux-timeline__viewport__labels">
            <template is="dom-repeat" id="rux-timeline-tracks" items=[[tracks]]>
              <div class="rux-timeline__track__label">[[item.label]]</div>
            </template>
          </div>


          
          <div id="rux-timeline__viewport__track-container">
            <div id="rux-timeline__viewport__tracks">
            <template is="dom-repeat" id="rux-timeline-track-template" items=[[tracks]]>
              
              <rux-timeline-track 
                regions=[[item.regions]]
                scale=[[_scale]]
                duration=[[_duration]]
                selected-region={{selectedRegion}}></rux-timeline-track>
              </template>
            
            <div id="rux-timeline__current-time"></div>
            <div id="rux-timeline__playhead"></div>
            <div id="rux-timeline__ruler"></div>
            </div>
          </div>  
          
        </section>

        <footer class="rux-timeline__footer">Footer FPO</footer>
      `;
  }
  constructor() {
    super();

    // set a default scale if one doesn’t exist
    if (!this.initialScale) this.initialScale = 100;

    // bind scroll listener to scroll event
    this._scrollListener = this._scroll.bind(this);

    this._windowListener = this._onWindowResize.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();

    // hard coded min/max scale (for now)
    this._minScale = 100;
    this._maxScale = 500;

    // get the playhead
    this._playhead = this.shadowRoot.getElementById("rux-timeline__playhead");

    // get the current time indicator
    this._currentTime = this.shadowRoot.getElementById(
      "rux-timeline__current-time"
    );

    // get the track container; this is the larger container for
    // tracks, ruler, playhead and current time indicator
    this._track = this.shadowRoot.getElementById(
      "rux-timeline__viewport__track-container"
    );
    this._track.addEventListener("wheel", this._scrollListener, {
      passive: true
    });

    // get the timeline ruler
    this._ruler = this.shadowRoot.getElementById("rux-timeline__ruler");

    // get the tracks container; this differs from the track_container
    // in that it only contains the tracks.
    this._tracks = this.shadowRoot.getElementById(
      "rux-timeline__viewport__tracks"
    );

    // if duration is less than 1000 then assume the
    // data was in hours.
    // NOTE: Refactor the underscore _duration is redundant
    // at this point
    // NOTE: a future enhancement would be to allow for
    // some form of passing time in e.g. 12h for 12 hours
    if (this.duration < 1000) {
      this.duration = this.duration * 60 * 60 * 1000;
    }
    this._duration = this.duration;
    this._durationHours = this._duration / 1000 / 60 / 60;

    this._scale = this.initialScale;

    if (this.playheadControl) {
      this._playhead.style.display = "block";
      const _playheadTimer = setInterval(() => {
        this._updatePlayhead();
      }, 10);
    }

    const _currentTimeTimer = setInterval(() => {
      this._updateCurrentTime();
    }, 500);

    this._tics = new Array();
    this._setTics();

    window.addEventListener("resize", this._windowListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this._track.removeEventListener("wheel", this._scrollListener);

    window.removeEventListener("resize");
  }

  _catchPlayhead() {
    // if(this._playhead.offsetLeft > 1000) {
    //   this.
    // }
  }

  _onWindowResize() {
    this._updateTimelineScale();
  }

  _getLabels() {
    return [
      "00:00",
      "01:00",
      "02:00",
      "03:00",
      "04:00",
      "05:00",
      "06:00",
      "07:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00"
    ];
  }

  _updateCurrentTime(timestamp) {
    const now = new Date();
    const utc = new Date(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      now.getUTCHours(),
      now.getUTCMinutes(),
      now.getUTCSeconds()
    );
    const then = new Date(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      0,
      0,
      0
    );

    // time of today, like right now
    const dif = utc.getTime() - then.getTime();
    const loc = dif * this._ruler.offsetWidth / this._duration;

    if (loc >= this._ruler.offsetWidth) {
      this._currentTime.style.display = "none";
    } else {
      this._currentTime.style.display = "block";
      this._currentTime.style.left = loc + "px";
    }

    // This is a very ugly way of targeting grandchildren form a parent
    // but for demo it’ll have to do.
    const _t = this.shadowRoot.querySelectorAll("rux-timeline-track");
    _t.forEach(track => {
      var _r = track.shadowRoot.querySelectorAll("rux-timeline-region");

      _r.forEach(region => {
        region.dispatchEvent(
          new CustomEvent("playhead", {
            detail: { loc: loc }
          })
        );
      });
    });
  }

  _updatePlayhead() {
    let loc = this._playhead.offsetLeft;

    loc += 1 * (this._scale / 100);
    if (loc >= this._tracks.offsetWidth) {
      loc = 0;
    }
    this._playhead.style.left = loc + "px";
  }

  _updateTimelineScale() {
    // scale tracks container
    this._tracks.style.width = Number(this._scale) + "%";

    if (!this._tics) return;
    this._tics.forEach((tic, i) => {
      tic.style.left =
        3600000 * i * this._ruler.offsetWidth / this._duration + "px";
    });
  }

  _setTics() {
    if (!this._track) return;
    let y = this._getLabels();

    // trim the tic marks to match a duration of less than 24 hours
    // NOTE: this is all good and well for the demo, but makes loads
    // of assumptions, in fact the whole notion of making the timeline
    // duration based does.
    if (this._durationHours < 24) {
      y.splice(this._durationHours, y.length - 1);
    }

    y.forEach((tic, i) => {
      let z = document.createElement("div");
      z.style.left =
        3600000 * i * this._tracks.offsetWidth / this._duration + "px";
      z.innerHTML = y[i];

      this._ruler.appendChild(z);
      this._tics[i] = z;
    });
  }

  /*
  **
  ** Mostly a dev feature, but maybe useful to end users. Scroll the timeline with the mouse wheel
  **
  */
  _scroll(e) {
    if (e.altKey) {
      let _delta = (this._scale += e.deltaY / 10);

      if (_delta < this._minScale) {
        _delta = this._minScale;
      } else if (_delta > this._maxScale) {
        _delta = this._maxScale;
      }

      this._scale = Math.floor(_delta);
    } else {
      e.currentTarget.scrollLeft += Math.floor(e.deltaY);
    }
  }
}
customElements.define("rux-timeline", RuxTimeline);
