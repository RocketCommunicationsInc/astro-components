/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/polymer';
import { html, render } from 'lit-html';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { RuxButton } from '../src/components/rux-button/rux-button.js';
import { RuxIcon } from '../src/components/rux-icon/rux-icon.js'; // not finished yet
import Readme from '../src/components/rux-button/README.md';
/* eslint-enable no-unused-vars */

storiesOf('Components|Buttons', module)
  .addDecorator(withKnobs)
  .add(
    'Standard Button',
    () => {

      const sizeOptions = {
        Standard: '',
        Small: 'small',
        Large: 'large'
      };
 


      const disabled = boolean('Disabled', false);
      const size = select('Size', sizeOptions, '');
      const withOutline = boolean('With outline', false);
      const withIcon = boolean('With icon', false);
      return html`
        <div style="padding: 10%; display: flex; justify-content: center;">
          <rux-button 
            .size="${size}" ?disabled="${disabled}" 
            .type="${withOutline ? 'outline' : null}" 
            .icon="${withIcon ? 'utility:caution' : null}" 
            >Button</rux-button>
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
  )
  .add(
    'Button Variants',
    () => {
      return html`
        <style>
         .button-list { 
           list-style-type: none;
           margin: 0 2rem 0 0;
           padding: 0;
           display: flex;
           flex-flow: column;
         }
         .button-list li {
           margin: 0 .5rem 1rem 0 ;
         } 
        </style>
        <div style="padding: 5% 2rem; display: flex; flex-flow: row wrap; justify-content: space-evenly;">
          <ul class="button-list">
            <h3>Small</h3>
            <li>
              <rux-button size="small">Small Button</rux-button>
            </li>
            <li>
              <rux-button size="small" icon="utility:caution">Small Button with Icon</rux-button>
            </li>
            <li>
              <rux-button size="small" disabled="">Small Disabled Button</rux-button>
            </li>
            <li>
              <rux-button size="small" type="outline">Small Outline Button</rux-button>
            </li>
            <li>
              <rux-button size="small" type="outline" disabled>Small Disabled Outline Button</rux-button>
            </li>
          </ul>
          <ul class="button-list">
            <h3>Standard</h3>
            <li>
              <rux-button>Standard Button</rux-button>
            </li>
            <li>
              <rux-button icon="utility:caution">Standard Button with Icon</rux-button>
            </li>
            <li>
              <rux-button disabled="">Standard Disabled Button</rux-button>
            </li>
            <li>
              <rux-button type="outline">Standard Outline Button</rux-button>
            </li>
            <li>
              <rux-button type="outline" disabled>Standard Disabled Outline Button</rux-button>
            </li>
          </ul>
          <ul class="button-list">
            <h3>Large</h3>
            <li>
              <rux-button size="large">Large Button</rux-button>
            </li>
            <li>
              <rux-button size="large" icon="utility:caution">Large Button with Icon</rux-button>
            </li>
            <li>
              <rux-button size="large" disabled="">Large Disabled Button</rux-button>
            </li>
            <li>
              <rux-button size="large" type="outline">Large Outline Button</rux-button>
            </li>
            <li>
              <rux-button size="large" type="outline" disabled="">Large Disabled Outline Button</rux-button>
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
        markdown: Readme,
      },
    },
  );
