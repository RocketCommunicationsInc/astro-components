import { configure, addDecorator, addParameters } from '@storybook/polymer';
import { withA11y } from '@storybook/addon-a11y';
import astroTheme from './theme';

import '../static/css/astro.core.css';

addParameters({
  options: {
    hierarchyRootSeparator: /\|/,
    addonPanelInRight: true,
  },
});


addParameters({
  darkMode: {
    dark: { ...astroTheme.dark },
    light: { ...astroTheme.light }
  }
});
addDecorator(withA11y);

function loadStories() {
  require('../stories/index.stories');

  const req = require.context('../stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
