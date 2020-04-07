import { html, render } from 'lit-html';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { withActions, configureActions } from '@storybook/addon-actions';

import { RuxModal } from '../src/components/rux-modal/rux-modal.js';
import Readme from '../src/components/rux-modal/README.md';

export default {
  title: 'Components|Dialog Box',
  decorators: [withKnobs],
  decorators: [withActions('modalClosed', { depth: 100 }), withKnobs],
};

export const DialogBox = () => {
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
        confirmText="${confirmText}"
        denyText="${denyText}"
        ?open="${toggleModal}"
      ></rux-modal>
    </div>
  `;
};

DialogBox.story = {
  parameters: {
    exports: {
      render,
      html,
    },
    readme: {
      sidebar: Readme,
    },
  },
};
