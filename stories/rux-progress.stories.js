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
            min: 1,
            max: 100,
            step: 1,
          };
          const progress = number(progressLabel, progressDefaultValue, progressOptions);
          const hideLabel = boolean('Label', true);
          return html`
        <div style="margin: 3rem auto;  padding: 2rem; text-align: center;">
          <rux-progress value="${progress}" ?hide-label="${hideLabel}"></rux-progress>
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
        'Determinate Progress (Max)',
        () => {
          const maxValueLabel = 'Max';
          const maxValueDefaultValue = 10;

          const progressLabel = 'Progress';
          const progressDefaultValue = 1;
          const progressOptions = {
            range: true,
            min: 1,
            max: maxValueDefaultValue,
            step: 1,
          };

          const progress = number(progressLabel, progressDefaultValue, progressOptions);
          const maxLimit = number(maxValueLabel, maxValueDefaultValue);
          const hideLabel = boolean('Label', false);
          return html`
        <div style="margin: 3rem auto;  padding: 2rem; text-align: center;">
          <rux-progress value="${progress}" max="${maxLimit}" ?hide-label="${hideLabel}"></rux-progress>
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
