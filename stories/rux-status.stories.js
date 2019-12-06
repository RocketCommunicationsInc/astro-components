/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/polymer';
import { html, render } from 'lit-html';
import { RuxStatus } from '../src/components/rux-status/rux-status.js';
import Readme from '../src/components/rux-status/README.md';
/* eslint-enable no-unused-vars */

storiesOf('Components|Status', module).add(
  'Status',
  () => {
    return html`
      <style>
        ul {
          display: flex;
          list-style: none;
          justify-content: space-around;

          padding: 0 1rem;
        }

        ul li {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      </style>
      <ul>
        <li>
          <rux-status status="off"></rux-status>
          <div class="label">Off</div>
        </li>
        <li>
          <rux-status status="standby"></rux-status>
          <div class="label">Standby</div>
        </li>
        <li>
          <rux-status status="normal"></rux-status>
          <div class="label">Normal</div>
        </li>
        <li>
          <rux-status status="caution"></rux-status>
          <div class="label">Caution</div>
        </li>
        <li>
          <rux-status status="serious"></rux-status>
          <div class="label">Serious</div>
        </li>
        <li>
          <rux-status status="critical"></rux-status>
          <div class="label">Critical</div>
        </li>
      </ul>
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
