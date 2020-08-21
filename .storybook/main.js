const path = require('path');

module.exports = {
  // stories: ['../stories/**/*.stories.js'], // load stories via preview.js per: https://github.com/storybookjs/storybook/issues/9793
  addons: [
    'storybook-readme',
    'storybook-addon-themes', // preview-only theme picker
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-actions',
    // '@storybook/addon-viewport', bug present, enabled when fixed: https://github.com/storybookjs/storybook/issues/10204
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION' if you need it
    // we could have the production deploys always pull published packages instead someday
    
    // this points storybook to local versions of astrouxds instead
    config.resolve.alias = {
      '@astrouxds': path.join(__dirname, '../src/components/'),
    };

    // Return the altered config
    return config;
  },
};