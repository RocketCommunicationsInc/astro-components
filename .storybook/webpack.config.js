const path = require('path');
const webpack = require('webpack');
const defaultConfig = require('@open-wc/demoing-storybook/default-storybook-webpack-config.js');

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: [/\.stories\.js$/, /index\.js$/],
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    include: [path.resolve(__dirname, '../src')],
    enforce: 'pre',
  });
  config.plugins.push(new webpack.IgnorePlugin(/vertx/));
  return defaultConfig({ config, transpilePackages: ['lit-html', 'lit-element', '@open-wc'] });
};
