/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/polymer';
import { html, render } from 'lit-html';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { withActions, configureActions } from '@storybook/addon-actions';
import { document } from 'global';

import { RuxModal } from '../src/components/rux-modal/rux-modal.js';
import Readme from '../src/components/rux-modal/README.md';
/* eslint-enable no-unused-vars */

window.addEventListener('modalClosed', e => {
  console.log(e);
});

storiesOf('Components|Dialog Box', module)
  .addDecorator(withActions('modalClosed', { depth: 100 }))
  .addDecorator(withKnobs)
  .add(
    'Dialog Box',
    () => {
      const toggleModal = boolean('Enable Modal', true);
      const message = text('Modal Message', 'Modal Message');
      const title = text('Modal Title', 'Modal Title');
      const confirmText = text('Confirm Button Text', 'Release');
      const denyText = text('Deny Button Text', 'Cancel');
      return html`
        <div style="display: flex; flex-flow: column; justify-content: center;">
          <rux-modal
            message="${message}"
            title="${title}"
            confirm-text="${confirmText}"
            deny-text="${denyText}"
            ?open="${toggleModal}"
          ></rux-modal>
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
