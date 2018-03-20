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
      tracks: {
        type: Array
      },
      playbackControls: {
        type: String,
        value: null
      },
      zoomControl: {
        type: Boolean,
        value: false
      },
      catchPlayheadControl: {
        type: Boolean,
        value: false
      },
      _scale: {
        type: Number,
        value: 100,
        observer: "_updateTimelineScale"
      }
    };
  }

  static get template() {
    return html`
      <link rel="stylesheet" href="src/astro-components/rux-timeline/rux-timeline.css">
      
        <header class="rux-timeline__header">
          <rux-status status="ok"></rux-status>
          <h1>[[label]]</h1>
          <rux-slider
            min=[[_minScale]]
            max=[[_maxScale]]
            val={{_scale}}></rux-slider>
          <!-- <rux-button on-click="_catchPlayhead">P</rux-button> //-->
        </header>

        
        
        <section class="rux-timeline__viewport" on-wheel="_scroll">
          
        
          <div id="x" class="rux-timeline__viewport__track-container">
            <dom-repeat id="rux-timeline-tracks" items=[[tracks]]>
              <template>
              <rux-timeline-track 
                label=[[item.label]]
                regions=[[item.regions]]
                scale=[[_scale]]
                duration=[[_duration]]></rux-timeline-track>
              </template>
            </dom-repeat>
            
            
            <div id="rux-timeline__playhead"></div>
          
          </div>  
          <footer id="rux-timeline__ruler" class="rux-timeline__ruler"></footer>
        </section>

        <!--<footer class="rux-timeline__footer">Footer FPO</footer>//-->
      `;
  }
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    this._playhead = this.shadowRoot.getElementById("rux-timeline__playhead");
    this._track = this.shadowRoot.getElementById("x");

    this._duration = this.data.duration;
    this._minScale = 100;
    this._maxScale = 500;

    this.tracks = this.data.tracks;

    const _timer = setInterval(() => {
      this._updatePlayhead();
    }, 10);

    this._ruler = this.shadowRoot.getElementById("rux-timeline__ruler");
    this._tics = new Array();
    this._setTics();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  _catchPlayhead() {
    // if(this._playhead.offsetLeft > 1000) {
    //   this.
    // }
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

  _updatePlayhead(timestamp) {
    const now = new Date();
    const then = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      0,
      0,
      0
    );
    // time of today, like right now
    const dif = now.getTime() - then.getTime();

    const place = dif / this._duration;
    const loc = this._track.offsetWidth * place;

    this._playhead.style.left =
      dif * this._track.offsetWidth / this._duration + "px";
  }

  _updateTimelineScale() {
    this._updateTics();
    // this._updateRegionScale();
  }

  _updateTics() {
    if (!this._tics) return;

    this._scale = Number(this._scale);
    this._track.style.width = this._scale + "%";
    this._ruler.style.width = this._scale + "%";

    this._tics.forEach((tic, i) => {
      tic.style.left =
        3600000 * i * this._track.offsetWidth / this._duration + "px";
    });
  }

  _setTics() {
    if (!this._track) return;
    let y = this._getLabels();

    y.forEach((tic, i) => {
      let z = document.createElement("div");
      z.style.left =
        3600000 * i * this._track.offsetWidth / this._duration + "px";
      z.innerHTML = y[i];

      this._ruler.appendChild(z);
      this._tics[i] = z;
    });
  }

  _isScaling() {
    // this._updateTics();
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

      this._scale = _delta;
    } else {
      e.currentTarget.scrollLeft += Math.floor(e.deltaY);
    }
  }
}
customElements.define("rux-timeline", RuxTimeline);
