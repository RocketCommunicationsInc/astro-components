import { storiesOf } from '@storybook/polymer';
import { linkTo } from '@storybook/addon-links';
import { document } from 'global';

import '../../src/storybook-demo/polymer-playground-app.html';
import '../../src/storybook-demo/playground-button.html';
import '../../src/storybook-demo/storybook-welcome-to-polymer.html';

storiesOf('Storybook Demo|Welcome', module).add('Welcome', () => {
  const el = document.createElement('storybook-welcome-to-polymer');
  el.goToButton = linkTo('Demo|Button');
  return el;
});

storiesOf('Storybook Demo|App', module).add(
    'full app',
    () => '<polymer-playground-app title="Storybook for Polymer"></polymer-playground-app>'
);

storiesOf('Storybook Demo|Button', module)
    .add('rounded', () => '<playground-button></playground-button>')
    .add('square', () => '<playground-button is-square></playground-button>');
