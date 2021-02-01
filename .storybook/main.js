import "airbnb-js-shims";

module.exports = {
  // stories: ['../stories/**/*.stories.js'], // load stories via preview.js per: https://github.com/storybookjs/storybook/issues/9793
  addons: [
    "storybook-readme",
    "storybook-addon-themes", // preview-only theme picker
    "@storybook/addon-knobs",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-actions",
    // '@storybook/addon-viewport', bug present, enabled when fixed: https://github.com/storybookjs/storybook/issues/10204
  ],
};
