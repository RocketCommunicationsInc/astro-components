/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/polymer';
import { html, render } from 'lit-html';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { RuxPopUpMenu } from '../src/components/rux-pop-up-menu/rux-pop-up-menu.js';
import Readme from '../src/components/rux-pop-up-menu/README.md';
/* eslint-enable no-unused-vars */

storiesOf('Components|Pop Up Menu', module)
    .addDecorator(withKnobs)
    .add(
        'Pop Up Menu',
        () => {
          const data = [
            {
              id: '1',
              label: 'Item 1',
            },
            {
              id: '2',
              label: 'Item 2',
            },
            {
              id: '3',
              label: 'Item 4',
              role: 'seperator',
            },
          ];

          return html`
        <div style="padding: 10%; display: flex; justify-content: center;">
          <rux-pop-up-menu .data="${data}">Test</rux-pop-up-menu>

          <rux-pop-up-menu>
            <ul>
              <li>Custom</li>
            </ul>
          </rux-pop-up-menu>
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
    );
