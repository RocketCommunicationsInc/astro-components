#!/usr/bin/env node
/* eslint-disable */

class Core{
    constructor(){
        this.rootPath = `${__dirname}/../../`;
        this.srcPath = `${this.rootPath}static/`;
        this.cssPath = `${this.srcPath}/css/`;
        this.staticPath = `${this.rootPath}static/`;
        this.iconsPath = `${this.staticPath}icons/`;
    }

    notify(type, msg){
        let colorCode = null;
        switch(type){
            case 'success':
                colorCode = "\x1b[32m";
                break;
            case 'warning':
                colorCode = "\x1b[33m";
                break;
            case 'danger':
                colorCode = "\x1b[31m";
                break;
            case 'info':
                colorCode = "\x1b[36m";
                break;
        }

        colorCode = colorCode ? colorCode : "\x1b[37m";
        console.log(colorCode, msg);
    }
}

module.exports = Core;