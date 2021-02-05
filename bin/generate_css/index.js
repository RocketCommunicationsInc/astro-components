#!/usr/bin/env node
/* eslint-disable */
const Core = require('../core');
const fs = require("fs");
const os = require("os");

class GenerateCss extends Core{
    constructor(){
        super();
    }

    run(){
        const file = `${this.iconsPath}astro-new.svg`;
        fs.readFile(file, "utf-8", (err, data) => {
            if (err) throw err;
            this.generateCssFile(data);
        });
    }

    generateCssFile(svgStr){
        const arr = svgStr.split("\n");
        const newArr = [];
    
        arr.forEach((line) => {
        const hasId = line.indexOf("g id=");
        const matches = line.match(/\"(.*?)\"/g);
        
        if (hasId > -1 && matches && matches.length > 0 && matches[0].indexOf('-icon') === -1) {
            const id = matches[0].replace(/\"/g, "");
            
            newArr.push(`.rux-icon-${id}{

            }`);
        }
        });
    
        return newArr.join('\n');
    }
}

module.exports = new GenerateCss();