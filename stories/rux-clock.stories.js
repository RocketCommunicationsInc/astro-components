/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/polymer';
import { html, render } from 'lit-html';
// import { boolean, withKnobs } from '@storybook/addon-knobs';
import { RuxClock } from '../src/components/rux-clock/rux-clock.js';

/* eslint-enable no-unused-vars */

storiesOf('Components|Clock', module)
  // .addDecorator(withKnobs)
  .add(
    'Clock',
    () => html`

      <div style="margin: 3rem auto; max-width: 20rem; text-align: center;">
        <rux-clock></rux-clock>
      </div>
    `,
    {
      exports: {
        render,
        html,
      },
    },
);
