/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/polymer';
import { html, render } from 'lit-html';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { RuxPushButton } from '../src/components/rux-push-button/rux-push-button.js';
import Readme from '../src/components/rux-push-button/README.md';
/* eslint-enable no-unused-vars */

storiesOf('Components|Push Button', module)
    .addDecorator(withKnobs)
    .add(
        'Push Button',
        () => {
          const disabled = boolean('Disabled', false);
          const checked = boolean('Checked', false);
          return html`
        <div style="padding: 10%; display: flex; justify-content: center;">
          <rux-push-button ?disabled="${disabled}" ?checked="${checked}">Push Button Label</rux-push-button>
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
        }
    )
    .add(
        'All Push Button Variants',
        () => {
          return html`
        <style>
          .button-list {
            list-style-type: none;
            margin: 0 1rem 0 0;
            padding: 0;
            display: flex;
            flex-flow: column;
          }
          .button-list li {
            margin: 0 1rem 1rem 0;
            display: flex;
          }
          .button-list li rux-button:not(:last-child) {
            margin-right: 1rem;
          }
        </style>
        <div style="padding: 8vh 2vw; display: flex; flex-flow: row wrap; justify-content: space-evenly;">
          <ul class="button-list">
            <li><rux-push-button>Push Button</rux-push-button></li>
            <li>
              <rux-push-button checked>Push Button Checked</rux-push-button>
            </li>
            <li>
              <rux-push-button disabled>Push Button Disabled</rux-push-button>
            </li>
            <li>
              <rux-push-button checked disabled>Push Button Disabled Checked</rux-push-button>
            </li>
          </ul>
        </div>
      `;
        },
        {
          exports: {
            render,
            html,
          },
          notes: {
            markdown:
          '_Readme content copied from [Rux-Buttons](/?path=/info/components-buttons--standard-button) below for your convenience._\n\n' +
          Readme,
          },
        }
    );
