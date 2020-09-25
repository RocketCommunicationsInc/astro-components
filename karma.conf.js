/* eslint-disable import/no-extraneous-dependencies */
const { createDefaultConfig } = require('@open-wc/testing-karma');
const merge = require('deepmerge');

module.exports = (config) => {
  config.set(
      merge(createDefaultConfig(config), {
        files: [
        // runs all files ending with .test in the src folder,
        // can be overwritten by passing a --grep flag. examples:
        //
        // npm run test -- --grep src/foo/bar.test.js
        // npm run test -- --grep src/bar/*
          { pattern: config.grep ? config.grep : 'src/**/*.test.js', type: 'module' },
        ],
        esm: {
          nodeResolve: true,
        },
      // you can overwrite/extend the config further
      }),
  );
  return config;
};
