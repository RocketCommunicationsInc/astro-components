/* global window */
import astroThemes from './theme';
import {
  configure,
  addParameters,
  addDecorator,
} from '@storybook/web-components';
import { withA11y } from '@storybook/addon-a11y';
import { addReadme } from 'storybook-readme/html';

addDecorator(withA11y);
addDecorator(addReadme);

addParameters({
  themes: [
    { name: 'Light Theme', class: 'light-theme', color: '#eceff4'},
    { name: 'Dark Theme', class: 'dark-theme', color: '#192635', default: true },
  ],
  readme: {
    codeTheme: 'duotone-sea',
    theme: {
      // bodyBackgroundColor: '#969896',
      bodyColor: astroThemes.dark.textColor,
      linkColor: 'rgb(77, 172, 255)',
      hrColor: '#3c4c5d',
      // checkedRadioLabelColor: '#4078c0',
      // kbdColor: '#555',
      // kbdBackgroundColor: '#fcfcfc',
      // kbdBorderColor: '#ccc',
      // kbdBottomBorderColor: '#bbb',
      // kbdBoxShadowColor: '#bbb',
      preBackgroundColor: '#141f2c',
      // fontFamily:
      //   '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      // imgBackgroundColor: '#fff',
    
      tableTrBackgroundColor: '#182635',
      tableOddTrBackgroundColor: '#141f2c',
      tableTrBorderTopColor: '#3c4c5d',
      tableTdBorderColor: '#3c4c5d',
    
      codeBackgroundColor: '#060708',
      codeFontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace',
      preFontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace',
    
      // blockquoteBorderLeftColor: '#ddd',
      // h1h2BorderBottomColor: '#ddd',
      // h6Color: '#777',
    }
  }
});

const req = require.context('../stories', true, /\.stories\.(js|mdx)$/);
configure(req, module);
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
