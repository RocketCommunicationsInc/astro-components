/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/polymer';
import { html, render } from 'lit-html';
import { boolean, number, range, withKnobs } from '@storybook/addon-knobs';
import { RuxProgress } from '../src/components/rux-progress/rux-progress.js';
import Readme from '../src/components/rux-progress/README.md';
/* eslint-enable no-unused-vars */

storiesOf('Components|Progress', module)
    .addDecorator(withKnobs)
    .add(
        'Determinate Progress',
        () => {
          const progressLabel = 'Progress';
          const progressDefaultValue = 50;
          const progressOptions = {
            range: true,
            min: 0,
            max: 100,
            step: 1,
          };
          const progress = number(progressLabel, progressDefaultValue, progressOptions);
          const showLabel = boolean('Label', false);
          return html`
        <div style="margin: 3rem auto;  padding: 2rem; text-align: center;">
          <rux-progress value="${progress}" ?label="${showLabel}"></rux-progress>
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
