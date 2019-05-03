import { configure, addDecorator, addParameters } from '@storybook/polymer';
import { withA11y } from '@storybook/addon-a11y';

import '../static/css/astro.core.css';

addParameters({
  options: {
    hierarchyRootSeparator: /\|/,
  },
});
addDecorator(withA11y);

function loadStories() {
  require('../stories/index.stories');

  const req = require.context('../stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    name: "Astro UXDS",
    addonPanelInRight: true,
    theme: undefined,
  },
});

configure(loadStories, module);
