/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/polymer';
import { html, render } from 'lit-html';
import { text, boolean, date, withKnobs } from '@storybook/addon-knobs';
import { RuxGlobalStatusBar } from '../src/components/rux-global-status-bar/rux-global-status-bar.js';
import { RuxClock } from '../src/components/rux-clock/rux-clock.js';
import Readme from '../src/components/rux-global-status-bar/README.md';

/* eslint-enable no-unused-vars */

storiesOf('Components|Global Status Bar', module)
  .addDecorator(withKnobs)
  .add(
    'Global Status Bar',
    () => { 

      const appnameKnob = text('App Name', 'Astro Global Status Bar');
      const versionKnob = text('Version', '4.1.0 alpha');


      return html`
        <div style="display: flex; justify-content: center;">
          <rux-global-status-bar
            .appname="${appnameKnob}" 
            .version="${versionKnob}"
            ></rux-global-status-bar>
        </div>
      `
    },{
      exports: {
        render,
        html,
      },
      notes: {
        markdown: Readme,
      },
    },  
  )
  .add(
    'Global Status Bar with Slot Content',
    () => { 

      function dateWrapper(name, defaultValue) {
        const stringTimestamp = date(name, defaultValue)
        return new Date(stringTimestamp)
      }

      const appnameKnob = text('App Name', 'Astro Global Status Bar');
      const versionKnob = text('Version', '4.1.0 alpha');

      return html`
        <div style="display: flex; justify-content: center;">
          <rux-global-status-bar class="dark-theme"
            .appname="${appnameKnob}" 
            .version="${versionKnob}">
            <rux-clock></rux-clock>
            <div><!--Any HTML here --></div>
            <rux-button>Master Off</rux-button>
          </rux-global-status-bar>
        </div>
      `
    },{
      exports: {
        render,
        html,
      },
      notes: {
        markdown: Readme,
      },
    },  
  )
