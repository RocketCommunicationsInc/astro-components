/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/polymer';
import { html, render } from 'lit-html';
import { button, text, withKnobs } from '@storybook/addon-knobs';
import { RuxLog } from '../src/components/rux-log/rux-log.js';
import Readme from '../src/components/rux-log/README.md';
/* eslint-enable no-unused-vars */

storiesOf('Components|Log', module)
  .addDecorator(withKnobs)
  .add(
    'Log',
    () => {

      // /* FAKE LOG DATA */
      const logStatuses = [
        "off",
        "standby",
        "normal",
        "caution",
        "serious",
        "critical"
      ];
      const logMessages = [
        "Antenna DGS 2 has weak signal.",
        "USA-177 experienced solar panel misalignment.",
        "Black FEP 121 is offline.",
        "Antenna DGS 1 went offline.",
        "Red FEP 201 is degraded.",
        "USA-168 suffered power degradation."
      ];
      // dates cannot be dynamically generated in a story https://github.com/storybooks/storybook/tree/master/addons/knobs#date
      const logData = [
        {
          "timestamp": new Date(1557503698781),
          "status": "off",
          "message": "Antenna DGS 1 went offline."
        },
        {
          "timestamp": new Date(1557503698781),
          "status": "serious",
          "message": "USA-177 experienced solar panel misalignment."
        },
        {
          "timestamp": new Date(1557503698781),
          "status": "caution",
          "message": "USA-168 suffered power degradation."
        },
        {
          "timestamp": new Date(1557503698781),
          "status": "standby",
          "message": "Antenna DGS 2 has weak signal."
        },
        {
          "timestamp": new Date(1557503698781),
          "status": "off",
          "message": "Black FEP 121 is offline."
        },
        {
          "timestamp": new Date(1557503698781),
          "status": "off",
          "message": "Antenna DGS 1 went offline."
        },
        {
          "timestamp": new Date(1557503698781),
          "status": "serious",
          "message": "USA-177 experienced solar panel misalignment."
        },
        {
          "timestamp": new Date(1557503698781),
          "status": "caution",
          "message": "USA-168 suffered power degradation."
        },
        {
          "timestamp": new Date(1557503698781),
          "status": "standby",
          "message": "Antenna DGS 2 has weak signal."
        },
        {
          "timestamp": new Date(1557503698781),
          "status": "off",
          "message": "Black FEP 121 is offline."
        }
      ];
      function _createLogItem() {
        return {
          timestamp: new Date(1557503698781),
          status: logStatuses[
            Math.floor(Math.random() * logStatuses.length)
          ],
          message: logMessages[
            Math.floor(Math.random() * logMessages.length)
          ]
        };
      }
      function _updateLog() { logData.unshift(_createLogItem()); };
      
      // button causes unintention re-render, don't use til fixed https://github.com/storybooks/storybook/issues/6675
      // button('Add log item', () => { _updateLog(); })

      let filter = text('Filter log', '')

      let JSONdebug = html`<pre>${JSON.stringify(logData, null, 2)}</pre>`;

      return html`
        <div style="display: flex; flex-flow: column; justify-content: center;">
          <rux-log 
            ._filterValue="${filter}"
            .data="${logData}">
          </rux-log>
        </div> 
      `;
    },
    {
      exports: {
        render,
        html,
      },
      notes: {
        markdown: Readme,
      },
    },
  );
