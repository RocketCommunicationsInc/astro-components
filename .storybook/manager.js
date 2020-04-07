// import '@storybook/addon-notes/register';
// import '@storybook/addon-knobs/register';
// import '@storybook/addon-links/register';
// import '@storybook/addon-a11y/register';
// import '@storybook/addon-storysource/register';
// import '@storybook/addon-actions/register';
// import '@storybook/addon-backgrounds/register';
// import '@storybook/addon-viewport/register';
// import '@storybook/addon-options/register';
// import 'storybook-dark-mode/register';

import themes from './theme';
import { addons } from '@storybook/addons';
addons.setConfig({
  panelPosition: 'right',
  selectedPanel: 'REACT_STORYBOOK/readme/panel',
  theme: themes.dark,
});
