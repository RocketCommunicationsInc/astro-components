import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import { RuxTimeline } from "/src/astro-components/rux-timeline/rux-timeline.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxTimelineSample extends PolymerElement {
  static get template() {
    return html`

		<rux-timeline
				status="ok"
				duration=8
				label="8 Hour Timeline" 
				initial-scale=100
				data={{timelineSimple}}
				tracks=[[tracks]]
				playback-controls="footer" 
				zoom-control=true>
			</rux-timeline>

    `;
  }
  static get properties() {
    return {
      timeline: {
        type: Object,
        notify: true
      },
      timelineSimple: {
        type: Object,
        notify: true
      },
      passPlanSatellites: {
        type: Array,
        notify: true
      },
      tracks: {
        type: Array,
        notify: true
      }
    };
  }

  constructor() {
    super();

    const today = new Date();

    this.tracks = [
      {
        label: "LEO",
        regions: [
          {
            label: "DSP-1 F17",
            status: "caution",
            startTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              0,
              30,
              0
            ),
            endTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              2,
              30,
              0
            )
          },
          {
            label: "GPS-IIA-17",
            status: "caution",
            startTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              3,
              0,
              0
            ),
            endTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              6,
              0,
              0
            )
          },
          {
            label: "GPS-IIR-2",
            status: "ok",
            startTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              6,
              30,
              0
            ),
            endTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              7,
              30,
              0
            )
          },
          {
            label: "DSP-1-18 F20",
            status: "error",
            startTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              15,
              0,
              0
            ),
            endTime: new Date(
              today.getUTCFullYear(),
              today.getUTCMonth(),
              today.getUTCDate(),
              20,
              30,
              0
            )
          }
        ]
      }
    ];
  }

  connectedCallback() {
    super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  ready() {
    super.ready();
  }
}
customElements.define("rux-timeline-sample", RuxTimelineSample);
