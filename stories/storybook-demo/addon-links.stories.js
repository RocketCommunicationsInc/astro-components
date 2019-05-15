import { storiesOf } from '@storybook/polymer';
import { linkTo } from '@storybook/addon-links';
import { document } from 'global';

import '../../src/storybook-demo/simple-button.html';

storiesOf('Storybook Demo|Addon|Links', module).add('With Create Element', () => {
  const el = document.createElement('simple-button');
  el.title = 'Go to welcome';
  el.handleClick = linkTo('Welcome');
  return el;
});
