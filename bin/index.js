#!/usr/bin/env node
/* eslint-disable */
const export_svg = require('./export_svg');
const generate_css = require('./generate_css');

const yargs = require("yargs");

const options = yargs
    .usage("Usage: --a <action>")
    .option("a", { alias: "action", describe: "Cli action", type: "string", demandOption: false })
    .argv;

switch(options.action){
    case 'export_svg':
        export_svg.run();
        break;
    case 'generate_css':
        generate_css.run();
        break;
}