import { html, render } from 'lit-html';
import { RuxSegmentedButton } from '../src/components/rux-segmented-button/rux-segmented-button.js';
import Readme from '../src/components/rux-segmented-button/README.md';

export default {
  title: 'Components|Segmented Button',
};

export const SegmentedButton = () => {
  const segmentButtonArray = [
    { label: 'First Item' },
    { label: 'Second Item', selected: true },
    { label: 'Third Item' },
  ];

  return html`
    <div style="padding: 10vh 5vw; display: flex; justify-content: center;">
      <rux-segmented-button .data="${segmentButtonArray}"></rux-segmented-button>
    </div>
  `;
};

SegmentedButton.story = {
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
