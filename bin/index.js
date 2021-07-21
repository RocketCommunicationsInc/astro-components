#!/usr/bin/env node
/* eslint-disable */
const astroIconExport = require('./astro-icon-export')
const astroGenerateIconCss = require('./astro-generate-icon-css')

const yargs = require('yargs')

const options = yargs.usage('Usage: --a <action>').option('a', {
    alias: 'action',
    describe: 'Cli action',
    type: 'string',
    demandOption: false,
}).argv

switch (options.action) {
    case 'astro-icon-export':
        astroIconExport.run()
        break
    case 'astro-generate-icon-css':
        astroGenerateIconCss.run()
        break
}
