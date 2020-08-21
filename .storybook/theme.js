import { create } from '@storybook/theming';

let light = create({
  base: 'normal',

  colorPrimary: 'rgb(0, 90, 143)',
  colorSecondary: 'rgb(77, 172, 255)',

  // UI
  appBg: 'rgb(226, 230, 238)',
  appContentBg: 'white',
  appBorderColor: '#DDD',
  appBorderRadius: 3,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: '"Roboto Mono", monospace',

  // Text colors
  textColor: 'rgb(16, 25, 35)',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor:  'rgb(77, 172, 255)',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: '#DDD',
  inputTextColor: 'black',
  inputBorderRadius: 3,

  brandTitle: 'AstroUXDS',
  brandUrl: 'https://astrouxds.com',
  brandImage: 'astro-logo-small-light.svg',
});

let dark = create({
  base: 'dark',

  colorPrimary: 'rgb(77, 172, 255)',
  colorSecondary: 'rgb(60, 82, 105)',

  // // UI
  appBg: 'rgb(20, 31, 44)',
  appContentBg: 'rgb(32, 50, 70)',
  appBorderColor: 'rgba(255,255,255, .125)',
  appBorderRadius: 0,

  // // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: '"Roboto Mono", monospace',

  // // Text colors
  textColor: 'white',
  textInverseColor: 'rgba(0,0,0,0.9)',

  // // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor:  'rgb(77, 172, 255)',
  barBg: 'rgb(32, 50, 70)',

  // Form colors
  inputBg: 'white',
  inputBorder: '#DDD',
  inputTextColor: 'black',
  inputBorderRadius: 3,

  brandTitle: 'AstroUXDS',
  brandUrl: 'https://astrouxds.com',
  brandImage: 'astro-logo-small-dark.svg',
});

export default {light, dark}