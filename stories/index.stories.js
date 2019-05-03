import { storiesOf } from '@storybook/polymer';
import { linkTo } from '@storybook/addon-links';
import { document } from 'global';

import '../src/polymer-demo/polymer-playground-app.html';
import '../src/polymer-demo/playground-button.html';
import '../src/polymer-demo/storybook-welcome-to-polymer.html';

storiesOf('Demo|Welcome', module).add('Welcome', () => {
  const el = document.createElement('storybook-welcome-to-polymer');
  el.goToButton = linkTo('Demo|Button');
  return el;
});

storiesOf('Demo|App', module).add(
  'full app',
  () => '<polymer-playground-app title="Storybook for Polymer"></polymer-playground-app>'
);

storiesOf('Demo|Button', module)
  .add('rounded', () => '<playground-button></playground-button>')
  .add('square', () => '<playground-button is-square></playground-button>');
