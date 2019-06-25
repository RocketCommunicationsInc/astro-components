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
          window.addEventListener('pop-up-menu-item-selected', (e) => {
            console.log('Pop Up Menu Item Selected', e.detail.data);
          });

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
              role: 'seperator',
            },
            {
              id: '4',
              label: 'Item 3',
            },
          ];

          return html`
        <style>
          #demo {
            padding: 5%;
            display: flex;
            justify-content: center;
          }

          #pop-demo {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
          }

          button {
            display: inline-block;
            position: absolute;
          }

          #tl {
            top: 2rem;
            left: 2rem;
          }

          #tr {
            top: 2rem;
            right: 2rem;
          }

          #bl {
            bottom: 2rem;
            left: 2rem;
          }

          #br {
            bottom: 2rem;
            right: 2rem;
          }

          #tc {
            top: 2rem;
            right: 50vw;
          }

          #bc {
            bottom: 2rem;
            right: 50vw;
          }
        </style>
        <div class="demo">
          <div id="pop-demo">
            <button aria-controls="popup-menu-1" aria-haspopup="true" class="button" id="tl">tl</button>
            <button aria-controls="popup-menu-2" aria-haspopup="true" class="button" id="tr">tr</button>
            <button aria-controls="popup-menu-3" aria-haspopup="true" class="button" id="bl">bl</button>
            <button aria-controls="popup-menu-4" aria-haspopup="true" class="button" id="br">br</button>
            <button aria-controls="popup-menu-5" aria-haspopup="true" class="button" id="tc">tv</button>
            <button aria-controls="popup-menu-6" aria-haspopup="true" class="button" id="bc">bc</button>
          </div>

          <rux-pop-up-menu id="popup-menu-1" .data="${data}"></rux-pop-up-menu>
          <rux-pop-up-menu id="popup-menu-2" .data="${data}"></rux-pop-up-menu>
          <rux-pop-up-menu id="popup-menu-3" .data="${data}"></rux-pop-up-menu>
          <rux-pop-up-menu id="popup-menu-4" .data="${data}"></rux-pop-up-menu>
          <rux-pop-up-menu id="popup-menu-5" .data="${data}"></rux-pop-up-menu>
          <rux-pop-up-menu id="popup-menu-6" .data="${data}"></rux-pop-up-menu>
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
