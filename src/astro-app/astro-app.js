import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
import { RuxGlobalStatusBar } from "../astro-components/rux-global-status-bar/rux-global-status-bar.js";
import { RuxSegmentedButton } from "../astro-components/rux-segmented-button/rux-segmented-button.js";
import { RuxComponent } from "../astro-components/rux-component/rux-component.js";
import { RuxProgress } from "../astro-components/rux-progress/rux-progress.js";
import { RuxButton } from "../astro-components/rux-button/rux-button.js";
import { RuxStatus } from "../astro-components/rux-status/rux-status.js";
import { RuxIcon } from "../astro-components/rux-icon/rux-icon.js";
import { RuxTabs } from "../astro-components/rux-tabs/rux-tabs.js";
import { RuxPopUpMenu } from "../astro-components/rux-pop-up-menu/rux-pop-up-menu.js";
import { RuxClock } from "../astro-components/rux-clock/rux-clock.js";
import { RuxDialog } from "../astro-components/rux-dialog/rux-dialog.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class AstroApp extends PolymerElement {
  static get template() {
    return html`

    <style>
      :host {
        display: block;
        /* box-sizing: border-box; */
      }
    </style>
    
    <rux-global-status-bar
      appname="Astro App"
      version="v1.90">
      <rux-tabs slot="tabs">
        <rux-tab id="tab-clock">Clock</rux-tab>
        <rux-tab id="tab-data-visualization">Data</rux-tab>
        <rux-tab id="tab-dialog">Dialog</rux-tab>
        <rux-tab id="tab-form">Form</rux-tab>
        <rux-tab id="tab-icon">Icon</rux-tab>
        <rux-tab id="tab-log">Log</rux-tab>
        <rux-tab id="tab-progress">Progress</rux-tab>
        <rux-tab id="tab-status-indicator">Status</rux-tab>
        <rux-tab id="tab-text-formatting">Text</rux-tab>
        <rux-tab id="tab-timeline">Timeline</rux-tab>
      </rux-tabs>
    </rux-global-status-bar>

    <rux-tab-panels>
      <rux-tab-panel aria-labeledby="tab-clock">
       <section>
          <h1>Clock</h1>
          <h2>Rux Clock, no properties set (defaults to UTC)</h2>
          <rux-clock></rux-clock>
          <h2>Clock with LOS/AOS set, custom timezone, hidden date</h2>
          <rux-clock
            aos="00:10:11"
            los="00:11:11"
            timezone="America/Los_Angeles"></rux-clock>
          <h2>Clock with hidden timezone</h2>
          <rux-clock
            hide-timezone="true"></rux-clock>
        </section>
      </rux-tab-panel>
      <rux-tab-panel aria-labeledby="tab-data-visualization">
        <rux-spectrum-analyzer></rux-spectrum-analyzer>
      </rux-tab-panel>
      <rux-tab-panel aria-labeledby="tab-dialog">
        <rux-dialog></rux-dialog>
      </rux-tab-panel>
      <rux-tab-panel aria-labeledby="tab-form">
          <h2>Buttons</h2>
          <h2>Checkbox</h2>
          <h2>Input Fields</h2>
          <h2>Radio Button</h2>
      </rux-tab-panel>
      <rux-tab-panel aria-labeledby="tab-icon">
        <rux-button type="icon" icon="default:notifications">Notifications</rux-button>
        <rux-button type="icon" icon="default:settings">Settings</rux-button>
        <rux-button icon="advanced-status:netcom">Master Off</rux-button>
          <rux-status
            status="emergency"
            label="Netcom"
            sublabel="Ok"
            notifications="10"
            icon="advanced-status:netcom"></rux-status>
          <rux-status
            status="emergency"
            label="Advanced Status"
            notifications="1"
            sublabel="Error"
            icon="advanced-status:thermal"></rux-status>
          <rux-status
            status="standby"
            label="Standby"
            sublabel="Standby"
            notifications="100000"
            icon="advanced-status:propulsion-power"></rux-status>
      </rux-tab-panel>
      <rux-tab-panel aria-labeledby="tab-log">
      </rux-tab-panel>
      <rux-tab-panel aria-labeledby="tab-progress">
      </rux-tab-panel>
      <rux-tab-panel aria-labeledby="tab-status-indicator">
      </rux-tab-panel>
      <rux-tab-panel aria-labeledby="tab-text-formatting">
      </rux-tab-panel>
      <rux-tab-panel aria-labeledby="tab-timeline">
      </rux-tab-panel>
    </rux-tab-panels>
    `;
  }
  constructor() {
    super();
    this.name = "3.0 preview";
    this.timeSelector = {
      buttons: [{ label: "Hour" }, { label: "Day" }, { label: "Week" }]
    };
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: "astro-app"
      }
    };
  }
  _stringIt(obj) {
    return JSON.stringify(obj);
  }
  _showStatus(e) {
    console.log("showing status", e.target.getAttribute("id"));
    // this.root.getElementById('pop-menu').attribute('target',e.target)
    // console.log('pop-up-menu', this.root.getElementById('pop-menu'));
    this.root
      .getElementById("pop-menu")
      .setAttribute("target", e.target.getAttribute("id"));
  }
  connectedCallback() {
    super.connectedCallback();
  }
  disconnectedCallback() {
    suer.disconnectedCallback();
  }
  ready() {
    super.ready();
  }
}
customElements.define("astro-app", AstroApp);
