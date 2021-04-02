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
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
};
