/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/polymer';
import { html, render } from 'lit-html';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { RuxProgress } from '../src/components/rux-progress/rux-progress.js';
import Readme from '../src/components/rux-progress/README.md';
/* eslint-enable no-unused-vars */

storiesOf('Components|Progress', module)
    .addDecorator(withKnobs)
    .add(
        'Determinate Progress',
        () => {
          return html`
        <div style="margin: 3rem auto; max-width: 5rem; text-align: center;">
          <rux-progress value="100" max="100"></rux-progress>
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
        'Indeterminate Progress',
        () => {
          return html`
        <div style="margin: 3rem auto; max-width: 5rem; text-align: center;">
          <rux-progress></rux-progress>
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
