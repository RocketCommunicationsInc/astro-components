/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/polymer';
import { html, render } from 'lit-html';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { RuxToggle } from '../src/components/rux-toggle/rux-toggle.js';
import Readme from '../src/components/rux-toggle/README.md';
/* eslint-enable no-unused-vars */

storiesOf('Components|Toggle', module)
  .addDecorator(withKnobs)
  .add(
    'Toggle',
    () => {
      const disabled = boolean('Disabled', false);
      const checked = boolean('Checked', false);
      return html`
        <div style="margin: 3rem auto; max-width: 5rem; text-align: center;">
          <rux-toggle .disabled=${disabled} .checked=${checked}></rux-toggle>
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
