/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/polymer';
import { html, render } from 'lit-html';
import { boolean, text, number, select, withKnobs } from '@storybook/addon-knobs';
import { RuxIcon } from '../src/components/rux-icon/rux-icon.js';

/* eslint-enable no-unused-vars */

storiesOf('Components|Icons', module)
  .addDecorator(withKnobs)
  .add(
    'All Icons',
    () => {
      const groupId = 'Options';

      const colors = {
        Primary: '#005a8f',
        Secondary: '#4dacff',
        Tertiary: '#52667a',
        Quaternary: '#ced6e4',
      };

      const colorKnob = select('Color', colors, 'Secondary');

      const icons = [
        'altitude',
        'antenna',
        'antenna-off',
        'antenna-receive',
        'antenna-transmit',
        'equipment',
        'mission',
        'payload',
        'processor',
        'processor-alt',
        'netcom',
        'propulsion-power',
        'thermal',
        'satellite-off',
        'satellite-receive',
        'satellite-transmit',
      ];

      return html`
        <style>
          .icon-container {
            list-style: none;
            margin: 1rem 2rem;
            padding: 0;
            display: flex;
            flex-wrap: wrap;

            justify-content: center;
          }

          .icon-container li {
            display: block;
            margin: 1rem 1.5rem;
          }

          .icon-name {
            margin-top: 0.5rem;
            font-size: 0.75rem;
          }
        </style>
        <div style="margin: 3rem auto; text-align: center;">
          <rux-icon library="icons/astro.svg" icon="altitude" label="processor"></rux-icon>

          <ul class="icon-container">
            ${icons.map(
              icon =>
                html`
                  <li>
                    <rux-icon icon="${icon}" color="${colorKnob}"></rux-icon>
                    <div class="icon-name">${icon}</div>
                  </li>
                `,
            )}
          </ul>
        </div>
      `;
    },
    {
      exports: {
        render,
        html,
      },
    },
  );
