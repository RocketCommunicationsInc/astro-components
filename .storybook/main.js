module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: [
    'storybook-readme',
    'storybook-addon-themes', // preview-only theme picker
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
  ]
};
