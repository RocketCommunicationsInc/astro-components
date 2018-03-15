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
import { RuxSlider } from "../astro-components/rux-slider/rux-slider.js";
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

      .button-library li {
        border: 1px solid rgba(255,255,255,0.2);
        
        margin-top: -1px;
        margin-left: -1px;
      
        text-align: center;
        padding: 1em;
        
      }

      .button-library figcaption {
        margin-top: 0.5rem;
      }


      

      .icon-library figcaption {
        font-family: monospace;
        margin-top: 0.5rem;
      }

      code {
        font-family: monospace;
        font-size: 1.1rem;
        padding: 0.2rem 0.5rem;
        
        background-color: rgba(50,159,255,0.25);
      }


      .rux-slider-container {
        max-width: 25rem;
      }

      .color-palette {
        display: flex;
        flex-direction: column;
      }

      .color-palette li {
        display: block;
        height: 5rem;
        width: 7rem;
        
      }

      

      .default-icon {
        background-color: hsl(212.4, 72.4%, 58.8%);
      }
      .default-icon----4 {
        background-color: hsl(212.4, 72.4%, 18.8%);
      }
      .default-icon----3 {
        background-color: hsl(212.4, 72.4%, 28.8%);
      }
      .default-icon----2 {
        background-color: hsl(212.4, 72.4%, 38.8%);
      }
      .default-icon----1 {
        background-color: hsl(212.4, 72.4%, 48.8%);
      }
      .default-icon--1 {
        background-color: hsl(212.4, 72.4%, 68.8%);
      }
      .default-icon--2 {
        background-color: hsl(212.4, 72.4%, 78.8%);
      }
      .default-icon--3 {
        background-color: hsl(212.4, 72.4%, 88.8%);
      }
      .default-icon--4 {
        background-color: hsl(212.4, 72.4%, 98.8%);
      }


    </style>
    
    <rux-global-status-bar
      appname="RUX">
      <rux-tabs>
        <rux-tab id="tab-dialog">Dialog</rux-tab>
        <rux-tab id="tab-progress">Progress</rux-tab>
        <rux-tab id="tab-colors">Colors</rux-tab>
        <rux-tab id="tab-slider">Slider</rux-tab>
        <rux-tab id="tab-clock">Clock</rux-tab>
        <rux-tab id="tab-status-indicator">Status</rux-tab>
        <rux-tab id="tab-icons">Icons</rux-tab> 
        <rux-tab id="tab-buttons">Buttons</rux-tab>
        <rux-tab id="tab-segmented-button">Segmented Button</rux-tab>
        <rux-tab id="tab-data-visualization">Data</rux-tab>
        <rux-tab id="tab-form">Form</rux-tab>
        <rux-tab id="tab-log">Log</rux-tab>
        <rux-tab id="tab-text-formatting">Text</rux-tab>
        <rux-tab id="tab-timeline">Timeline</rux-tab>
      </rux-tabs>
    </rux-global-status-bar>




    <rux-tab-panels>

      <rux-tab-panel aria-labeledby="tab-colors">
        <section>
          <h1>Default Icon Color</h1>
          <ul class="color-palette">
            <li class="default-icon----4"></li>
            <li class="default-icon----3"></li>
            <li class="default-icon----2"></li>
            <li class="default-icon----1"></li>
            <li class="default-icon"></li>
            <li class="default-icon--1"></li>
            <li class="default-icon--2"></li>
            <li class="default-icon--3"></li>
            <li class="default-icon--4"></li>
          </ul>
        </section>
      </rux-tab-panel>

      <rux-tab-panel aria-labeledby="tab-slider">
        <section>
          <h1>Slider (WIP)</h1>
          <code>&lt;rux-slider&gt;</code> </p>
          <div class="rux-slider-container">
          <rux-slider
            label="Label"
            val={{sliderObj.value}}></rux-slider>
          </div>
          <div class="output">Slider Value is = [[sliderObj.value]]</div>
        </section>
        <section>
          <h1>Slider Custom Range and Step(WIP)</h1>
          <code>&lt;rux-slider&gt;</code> </p>
          <div class="rux-slider-container">
          <rux-slider
            min={{sliderObjTwo.min}}
            max={{sliderObjTwo.max}}
            step={{sliderObjTwo.step}}
            axis-labels=[[sliderObjTwo.labels]]
            val={{sliderObjTwo.value}}></rux-slider>
          </div>
          <div class="output">Slider Value is = [[sliderObjTwo.value]]</div>
        </section>
        <section>
          <h1>Slider with Labels</h1>
          <code>&lt;rux-slider&gt;</code> </p>
          <div class="rux-slider-container">
          <rux-slider
            axis-labels=[[sliderObjThree.labels]]
            val={{sliderObjThree.value}}></rux-slider>
          </div>
          <div class="output">Slider Value is = [[sliderObjThree.value]]</div>
        </section>
      </rux-tab-panel>

      <rux-tab-panel aria-labeledby="tab-segmented-button">
        <section>
          <h1>Segmented Button (WIP)</h1>
          <code>&lt;rux-segmented-button&gt;</code> is highly stylized version of a radio button group offering a distinct user choice. Buttons are defined via a standard JavaScript Array of Objects. Each object must have a button label and supports additional key/value pairs.  e.g., <code>segmentedButtons = [{ "label" : "Hour" }, { "label" : "Day" }, { "label" : "Week" } }]</code> will produce the follwing segmented button</p>
          <rux-segmented-button
            data={{segmentOne}}></rux-segmented-button>
          <div class="output">Output = [[segmentOne.selected.label]]</div>

          <rux-segmented-button
            data={{segmentTwo}}></rux-segmented-button>
            <div class="output">Output = [[segmentTwo.selected.value.result]]</div>
        </section>
      </rux-tab-panel>

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

      <rux-tab-panel aria-labeledby="tab-progress">
      <section>
        <h1>Indeterminate Progress</h1>
        <p>If no value paramater is passed (i.e., the current status of progress) it is assumed the progress of the event is indeterminate and the indeterminate spinning progress bar will be used. The default state of <code>&lt;rux-progress&gt;</code> is indeterminate.</p>
        <rux-progress></rux-progress>
      </section>
      <section>
        <h1>Determinate Progress</h1>
        <p>To display a progress indicator with relative indication of progress add a <code>value</code> param; the value param accepts a valid Number and uses a default range of 0-100.</p>
        <rux-progress value=50></rux-progress>
      </section>
      <section>
        <h1>Determinate Progress with Label</h1>
        <p>A numeric output can also be displayed to the right of the progress bar by passing in <code>label=true</code>.</p>
        <rux-progress 
          value=50
          label=true></rux-progress>
      </section>
      <section>
        <h1>Determinate Progress (Custom Max Range)</h1>
        <p>Determinate Progress also accepts custom max value for progress values that don’t reflect percentages. The following sample shows a progress bar with a max value of 50,000 and a value of 13,500.</p>
        <rux-progress
          max=50000
          value=13500></rux-progress>
      </section>
     

    </rux-tab-panel>


      <rux-tab-panel aria-labeledby="tab-buttons">
        <section>
          <h1>Standard Buttons</h1>
          <ul class="button-library">
            <li><figure><rux-button>Standard Button</rux-button><figcaption>Button</figcaption></figure></li>
            <li><figure><rux-button default>Standard Button</rux-button><figcaption>Default</figcaption></figure></li>
            <li><figure><rux-button disabled>Standard Button</rux-button><figcaption>Disabled</figcaption></figure></li>
          </ul>    
        </section>

        <section>
          <h1>Large Buttons</h1>
          <ul class="button-library">
            <li><figure><rux-button type="large">Large Button</rux-button><figcaption>Button</figcaption></figure></li>
            <li><figure><rux-button type="large" default>Large Button</rux-button><figcaption>Default</figcaption></figure></li>
            <li><figure><rux-button type="large" disabled>Large Button</rux-button><figcaption>Disabled</figcaption></figure></li>
          </ul>    
        </section> 
        
        
        <section>
          <h1>Small Buttons</h1>
          <ul class="button-library">
            <li><figure><rux-button type="small">Small Btn</rux-button><figcaption>Button</figcaption></figure></li>
            <li><figure><rux-button type="small" default>Small Btn</rux-button><figcaption>Default</figcaption></figure></li>
            <li><figure><rux-button type="small" disabled>Small Btn</rux-button><figcaption>Disabled</figcaption></figure></li>
          </ul>    
        </section> 

        <section>
          <h1>Button with Icon</h1>
          <ul class="button-library">
            <li><figure><rux-button icon="default:caution">Icon Button</rux-button><figcaption>Button</figcaption></figure></li>
            <li><figure><rux-button icon="default:caution" default>Icon Button</rux-button><figcaption>Default</figcaption></figure></li>
            <li><figure><rux-button icon="default:caution" disabled>Icon Button</rux-button><figcaption>Disabled</figcaption></figure></li>
            <li><figure><rux-button type="large" icon="default:caution">Large Icon Button</rux-button><figcaption>Disabled</figcaption></figure></li>
          </ul>    
        </section>
        
        
        <section>
          <h1>Icon Button</h1>
          <ul class="button-library">
            <li><figure><rux-button type="icon" icon="default:settings">Settings</rux-button><figcaption>Button</figcaption></figure></li>
            <li><figure><rux-button type="icon" icon="default:settings" default>Settings</rux-button><figcaption>Default</figcaption></figure></li>
            <li><figure><rux-button type="icon" icon="default:settings" disabled>Settings</rux-button><figcaption>Disabled</figcaption></figure></li>
          </ul>    
        </section>


        <section>
          <h1>Button as Icon (WIP)</h1>
          <ul class="button-library">
            <li><figure><rux-button icon="media-controls:play"></rux-button><figcaption>Button</figcaption></figure></li>
            <li><figure><rux-button icon="media-controls:play" default></rux-button><figcaption>Default</figcaption></figure></li>
            <li><figure><rux-button icon="media-controls:play" disabled></rux-button><figcaption>Disabled</figcaption></figure></li>
          </ul>    
        </section>

        <section>
          <h1>Button Group (WIP)</h1>
          <ul class="button-group">
            <li><rux-button icon="media-controls:pause"></rux-button></li>
            <li><rux-button icon="media-controls:play"></rux-button></li>
          </ul>    
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
        <rux-dialog
          message="This is a dialog box with a very long message to see what happens when it wraps to a second line."
          confirm-text="Ok"
          deny-text="Cancel"></rux-dialog>
        <rux-button class="rux-launch-button" on-click="_launchModal">Launch Modal</rux-button>
        <div>I’m just sitting here listening for a modal window event: [[modalEventOutcome]]
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
      <rux-tab-panel aria-labeledby="tab-form">
          <h2>Buttons</h2>
          <h2>Checkbox</h2>
          <h2>Input Fields</h2>
          <h2>Radio Button</h2>
      </rux-tab-panel>
     
      <rux-tab-panel aria-labeledby="tab-log">

      
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

    // this.modalWindowEvent = "nonthing";
    this.modalEventOutcome = "None yet";

    window.addEventListener("modal-event", this._modalEventAction);

    this.sliderObj = {
      value: 10
    };
    this.sliderObjTwo = {
      value: 0,
      min: -10,
      max: 10,
      step: 0.1,
      labels: "min,mid,max"
    };
    this.sliderObjThree = {
      value: 10,
      labels: "min,mid,max"
    };

    this.fakeAOS = Date.now() - 1000000;
    this.fakeLOS = new Date();
    this.segmentOne = [
      {
        label: "Hour"
      },
      {
        label: "Day"
      },
      {
        label: "Week"
      }
    ];

    this.segmentTwo = [
      {
        label: "Good",
        value: {
          result: "Can’t be fast."
        }
      },
      {
        label: "Fast",
        value: {
          result: "Can’t be good."
        }
      },
      {
        label: "Cheap",
        value: {
          result: "Can’t be fast."
        }
      }
    ];
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: "astro-app"
      }
    };
  }

  _modalEventAction(e) {
    console.log("modal evvent", e);
    console.log("confirm", e.detail.confirm);
    console.log("message", this.modalEventOutcome);
    console.log(this);
    if (e.detail.confirm) {
      this.modalEventOutcome = "You agreed!";
    } else {
      this.modalEventOutcome = "You didn’t agree";
    }
  }
  _launchModal() {
    console.log("launch modal");
    const _modal = this.shadowRoot.querySelectorAll("rux-dialog")[0];
    _modal.setAttribute("open", "");
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
