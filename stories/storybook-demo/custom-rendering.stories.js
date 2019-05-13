import { storiesOf } from '@storybook/polymer';
import { document } from 'global';
import { html } from 'lit-html';
import { StringTemplateButton } from '../../src/storybook-demo/string-template-button';

import '../../src/storybook-demo/separated-button/separated-button.html';

storiesOf('Storybook Demo|Custom|Methods for rendering', module)
    .add('html string', () => '<div>Rendered with string</div>')
    .add('html with custom elements', () => '<separated-button title="Click me!"></separated-button>')
    .add('document.createElement', () => {
      const el = document.createElement('playground-button');
      el.setAttribute('title', 'Rendered with document.createElement');
      return el;
    })
    .add('Polymer instance', () => new StringTemplateButton())
    .add(
        'Lit html',
        () =>
          html`
        <separated-button title="yes!"></separated-button>
      `
    );
