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


      rux-button.demo-button--hover button {
        background-color: red !important;
      }

      section {
        /* outline: 1px solid red; */
        margin: 1em;
        padding: 1em;
        background-color: rgba(0,0,0,0.2);
      }

      ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        width: auto;
        padding: 0;
        margin: 0;
        
      }

      ul li {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .icon-library li {
        border: 1px solid rgba(255,255,255,0.2);
        
        margin-top: -1px;
        margin-left: -1px;
        
        
        text-align: center;

        max-width: 100px;
        padding: 1em;
        
      }

      

      .icon-library figcaption {
        font-family: monospace;
        margin-top: 0.5rem;
      }

      code {
        font-family: monospace;
        font-size: 1.1rem;
        padding: 0.2rem 0.5rem;
        
        background-color: rgba(50,159,255,0.5);
      }


    </style>
    
    <rux-global-status-bar
      appname="RUX">
      <rux-tabs slot="tabs">
        <rux-tab id="tab-clock">Clock</rux-tab>
        <rux-tab id="tab-status-indicator">Status</rux-tab>
        <rux-tab id="tab-icons">Icons</rux-tab> 
        <rux-tab id="tab-buttons">Buttons</rux-tab>
        <rux-tab id="tab-data-visualization">Data</rux-tab>
        <rux-tab id="tab-dialog">Dialog</rux-tab>
        <rux-tab id="tab-form">Form</rux-tab>
        <rux-tab id="tab-icon">Icon</rux-tab>
        <rux-tab id="tab-log">Log</rux-tab>
        <rux-tab id="tab-progress">Progress</rux-tab>
        <rux-tab id="tab-text-formatting">Text</rux-tab>
        <rux-tab id="tab-timeline">Timeline</rux-tab>
      </rux-tabs>
    </rux-global-status-bar>

    <rux-tab-panels>
      <rux-tab-panel aria-labeledby="tab-icons">
       
        <section>
          <h1>Test Icon from Sketch Library</h1>
          <ul class="icon-library">
            <li><figure><rux-icon icon="test:mission"></rux-icon><figcaption>mission</figcaption></figure></li>
            <li><figure><rux-icon icon="advanced-status:mission"></rux-icon><figcaption>mission</figcaption></figure></li>
          </ul>
        </section>  

        <section>
          <h1>Default Icon Set</h1>
          <p>Standard Astro Icons that can be used across all types of Astro based applications.</p>
          <p>To use a defaul icon use the <code>default</code> namespace. E.g., <code>&lt;rux-icon icon="default:settings"&gt;&lt/rux-icon&gt;</code></p>
          <ul class="icon-library">
            <li><figure><rux-icon icon="default:settings"></rux-icon><figcaption>settings</figcaption></figure></li>
            <li><figure><rux-icon icon="default:notifications"></rux-icon><figcaption>notifications</figcaption></figure></li>
            <li><figure><rux-icon icon="default:caution"></rux-icon><figcaption>caution</figcaption></figure></li>
          </ul>
        </section>

        <section>
          <h1>Advanced Status Icons</h1>
          <p>Advanced Status Icons for SATCOM based applications.</p>
          <p>To use a defaul icon use the <code>advanced-status</code> namespace. E.g., <code>&lt;rux-icon icon="advanced-status:processor"&gt;&lt/rux-icon&gt;</code></p>
          <ul class="icon-library">
            <li><figure><rux-icon icon="advanced-status:mission"></rux-icon><figcaption>mission</figcaption></figure></li>
            <li><figure><rux-icon icon="advanced-status:equipment"></rux-icon><figcaption>equipment</figcaption></figure></li>
            <li><figure><rux-icon icon="advanced-status:processor"></rux-icon><figcaption>processor</figcaption></figure></li>
            <li><figure><rux-icon icon="advanced-status:antenna"></rux-icon><figcaption>antenna</figcaption></figure></li>
            <li><figure><rux-icon icon="advanced-status:antenna-transmit"></rux-icon><figcaption>antenna-transmit</figcaption></figure></li>
            <li><figure><rux-icon icon="advanced-status:antenna-receive"></rux-icon><figcaption>antenna-receive</figcaption></figure></li>
            <li><figure><rux-icon icon="advanced-status:satellite"></rux-icon><figcaption>satellite</figcaption></figure></li>
            <li><figure><rux-icon icon="advanced-status:satellite-transmit"></rux-icon><figcaption>satellite-transmit</figcaption></figure></li>
            <li><figure><rux-icon icon="advanced-status:satellite-receive"></rux-icon><figcaption>satellite-receive</figcaption></figure></li>
          </ul>
        </section>

        <section>
          <h1>EGS Advanced Status Icons</h1>
          <p>Advanced Status Icons for EGS based applications.</p>
          <p>To use a defaul icon use the <code>advanced-status-egs</code> namespace. E.g., <code>&lt;rux-icon icon="advanced-status-egs:netcom"&gt;&lt/rux-icon&gt;</code></p>
          <ul class="icon-library">
            <li><figure><rux-icon icon="advanced-status-egs:antenna"></rux-icon><figcaption>antenna</figcaption></figure></li>
            <li><figure><rux-icon icon="advanced-status-egs:payload"></rux-icon><figcaption>payload</figcaption></figure></li>
            <li><figure><rux-icon icon="advanced-status-egs:altitude"></rux-icon><figcaption>altitude</figcaption></figure></li>
            <li><figure><rux-icon icon="advanced-status-egs:propulsion-power"></rux-icon><figcaption>propulsion-power</figcaption></figure></li>
            <li><figure><rux-icon icon="advanced-status-egs:netcom"></rux-icon><figcaption>netcom</figcaption></figure></li>
            <li><figure><rux-icon icon="advanced-status-egs:thermal"></rux-icon><figcaption>thermal</figcaption></figure></li>
          </ul>
        </section>

        <section>
          <h1>Default Status Symbols</h1>
          <p>Note: It is recommended you use <code>&lt;rux-status status="ok"&gt;&lt/rux-status&gt;</code> instead of the raw status symbol icons. <code>&lt;rux-status&gt;</code> provides additional functionality beyond simple graphic represenations.</p>
          <p>Status icons have embedded fill colors as defined in the Astro UXDS Guideline. These colors cannot be overriden with the color property like other icons. <em><strong>Only standard status colors are supported.</strong></em>.</p>
          <ul class="icon-library">
            <li><figure><rux-icon icon="status:emergency"></rux-icon><figcaption>emergency</figcaption></figure></li>
            <li><figure><rux-icon icon="status:caution"></rux-icon><figcaption>caution</figcaption></figure></li>
            <li><figure><rux-icon icon="status:error"></rux-icon><figcaption>error</figcaption></figure></li>
            <li><figure><rux-icon icon="status:ok"></rux-icon><figcaption>ok</figcaption></figure></li>
            <li><figure><rux-icon icon="status:standby"></rux-icon><figcaption>standby</figcaption></figure></li>
            <li><figure><rux-icon icon="status:off"></rux-icon><figcaption>off</figcaption></figure></li>
          </ul>
        </section>
        
        
        
      

      </rux-tab-panel>
      <rux-tab-panel aria-labeledby="tab-buttons">
        <section>
          <h1>Standard Buttons</h1>
        </section>
      </rux-tab-panel>


      <rux-tab-panel aria-labeledby="tab-clock">
        
      <section>
      <h1>Clock</h1>
      <p>The default setting for <code>rux-clock</code> without any attributes is to present a 24-hour clock set to UTC time and the current day of the year.</p>
      <rux-clock></rux-clock>
    </section>
    <section>
      <h1>Clock with LOS/AOS Options</h1>
      <p><code>rux-clock</code> can be customized to include an Acquisition of Signal (AOS) and Loss of Signal (LOS) via the <code>aos</code> and <code>los</code> attributes. Expectec values are a JavaScript Date Object. AOS/LOS will not display is the respective attribute is not present or if the value is not a date.</p>
      <rux-clock
        aos=[[fakeAOS]]
        los=[[fakeLOS]]></rux-clock>
    </section>
    <section>
      <h1>Clock with Custom Time Zone</h1>
      <p><code>rux-clock</code> can use custom timezones. Timezones must be formatted in "Country/City".</p>
      <rux-clock
        timezone="America/Los_Angeles"></rux-clock>
    </section>
    <section>
      <h1>Clock with Hidden Timezone and Date</h1>
      <p>Both the date and timezone fields can be hidden via the <code>hide-date</code> and <code>hide-timezone</code> attributes.</p>
      <rux-clock
        aos="bad data"
        hide-date="true"
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
     
      <rux-tab-panel aria-labeledby="tab-log">

      
      </rux-tab-panel>
      <rux-tab-panel aria-labeledby="tab-progress">
      </rux-tab-panel>
      <rux-tab-panel aria-labeledby="tab-status-indicator">
        <section>
          <h1>Status Indicator</h1>
          <p>Standard status indicator symbols.</p>
          <ul class="icon-library">
            <li><figure><rux-status status="off"></rux-status><figcaption>off</figcaption></figure></li>
            <li><figure><rux-status status="standby"></rux-status><figcaption>standby</figcaption></figure></li>
            <li><figure><rux-status status="ok"></rux-status><figcaption>ok</figcaption></figure></li>
            <li><figure><rux-status status="error"></rux-status><figcaption>error</figcaption></figure></li>
            <li><figure><rux-status status="caution"></rux-status><figcaption>caution</figcaption></figure></li>
            <li><figure><rux-status status="emergency"></rux-status><figcaption>emergency</figcaption></figure></li>
          </ul>
        </section>
        <section>
        <h1>Advanced Status Icons</h1>
        <p>Advanced Status Icons extend beyond simple status to provide additional information and interactivity.</p>
        <ul class="icon-library">
          <li>
            <figure>
            <rux-status
              icon="advanced-status:mission"
              status="off"
              label="Label"
              sublabel="Sub-label">
            </rux-status>
            <figcaption></figcaption></figure>
          </li>
          <li>
            <figure>
            <rux-status
              icon="advanced-status:equipment"
              status="standby"
              label="Label"
              sublabel="Sub-label"
              notifications=10>
            </rux-status>
            <figcaption></figcaption></figure>
          </li>
          <li>
            <figure>
            <rux-status
              icon="advanced-status:processor"
              status="ok"
              label="Label"
              sublabel="Sub-label"
              notifications=100>
            </rux-status>
            <figcaption></figcaption></figure>
          </li>
          <li>
            <figure>
            <rux-status
              icon="advanced-status:antenna"
              status="error"
              label="Label"
              sublabel="Sub-label"
              notifications=1000>
            </rux-status>
            <figcaption></figcaption></figure>
          </li>
          <li>
            <figure>
            <rux-status
              icon="advanced-status:antenna-transmit"
              status="caution"
              label="Label"
              sublabel="Sub-label"
              notifications=10000>
            </rux-status>
            <figcaption></figcaption></figure>
          </li>
          <li>
            <figure>
            <rux-status
              icon="advanced-status:antenna-receive"
              status="emergency"
              label="Label"
              sublabel="Sub-label"
              notifications=100000>
            </rux-status>
            <figcaption></figcaption></figure>
          </li>
          <li>
            <figure>
            <rux-status
              icon="advanced-status:satellite"
              status="off"
              label="Label"
              sublabel="Sub-label"
              notifications=1000000>
            </rux-status>
            <figcaption></figcaption></figure>
          </li>
          <li>
            <figure>
            <rux-status
              icon="advanced-status:satellite-transmit"
              status="standby"
              label="Label"
              sublabel="Sub-label"
              notifications=1000000000>
            </rux-status>
            <figcaption></figcaption></figure>
          </li>
          <li>
            <figure>
            <rux-status
              icon="advanced-status:satellite-receive"
              status="ok"
              label="Label"
              sublabel="Sub-label"
              notifications=1000000000000>
            </rux-status>
            <figcaption></figcaption></figure>
          </li>
          <li>
          <figure>
          <rux-status
            icon="advanced-status-egs:antenna"
            status="off"
            label="Label"
            sublabel="Sub-label">
          </rux-status>
          <figcaption></figcaption></figure>
        </li>
        <li>
          <figure>
          <rux-status
            icon="advanced-status-egs:payload"
            status="standby"
            label="Label"
            sublabel="Sub-label"
            notifications=10>
          </rux-status>
          <figcaption></figcaption></figure>
        </li>
        <li>
          <figure>
          <rux-status
            icon="advanced-status-egs:altitude"
            status="ok"
            label="Label"
            sublabel="Sub-label"
            notifications=100>
          </rux-status>
          <figcaption></figcaption></figure>
        </li>
        <li>
          <figure>
          <rux-status
            icon="advanced-status-egs:propulsion-power"
            status="error"
            label="Label"
            sublabel="Sub-label"
            notifications=1000>
          </rux-status>
          <figcaption></figcaption></figure>
        </li>
        <li>
          <figure>
          <rux-status
            icon="advanced-status-egs:netcom"
            status="caution"
            label="Label"
            sublabel="Sub-label"
            notifications=10000>
          </rux-status>
          <figcaption></figcaption></figure>
        </li>
        <li>
          <figure>
          <rux-status
            icon="advanced-status-egs:thermal"
            status="emergency"
            label="Label"
            sublabel="Sub-label"
            notifications=100000>
          </rux-status>
          <figcaption></figcaption></figure>
        </li>
          
          
          
        </ul>
      </section>

      


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

    this.fakeAOS = Date.now() - 1000000;
    this.fakeLOS = new Date();
    this.timeSelector = {
      buttons: [
        {
          label: "Hour"
        },
        {
          label: "Day"
        },
        {
          label: "Week"
        }
      ]
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
