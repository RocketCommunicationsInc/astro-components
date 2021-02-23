#!/usr/bin/env node
/* eslint-disable */
const Core = require('../core');
const SVGO = require("svgo");
const fs = require("fs");
const os = require("os");
const prompt = require("prompt-sync")();

class AstroIconExport extends Core {
  constructor(){
    super();
    this.defaultSvg = '/Documents/astro-exports/Solid.svg';
    this.svgo_inst = new SVGO({
      plugins: [
        {
          cleanupAttrs: true,
        },
        {
          removeDoctype: true,
        },
        {
          removeXMLProcInst: true,
        },
        {
          removeComments: true,
        },
        {
          removeMetadata: true,
        },
        {
          removeTitle: true,
        },
        {
          removeDesc: true,
        },
        {
          removeUselessDefs: true,
        },
        {
          removeEditorsNSData: true,
        },
        {
          removeEmptyAttrs: true,
        },
        {
          removeHiddenElems: true,
        },
        {
          removeEmptyText: true,
        },
        {
          removeEmptyContainers: true,
        },
        {
          removeViewBox: false,
        },
        {
          cleanupEnableBackground: false,
        },
        {
          convertStyleToAttrs: true,
        },
        {
          convertColors: true,
        },
        {
          convertPathData: true,
        },
        {
          convertTransform: true,
        },
        {
          removeUnknownsAndDefaults: true,
        },
        {
          removeNonInheritableGroupAttrs: true,
        },
        {
          removeUselessStrokeAndFill: true,
        },
        {
          removeUnusedNS: true,
        },
        {
          cleanupIDs: false,
        },
        {
          cleanupNumericValues: true,
        },
        {
          moveElemsAttrsToGroup: true,
        },
        {
          moveGroupAttrsToElems: true,
        },
        {
          collapseGroups: true,
        },
        {
          removeRasterImages: false,
        },
        {
          mergePaths: true,
        },
        {
          convertShapeToPath: true,
        },
        {
          sortAttrs: true,
        },
        {
          removeDimensions: true,
        },
        {
          removeAttrs: { attrs: "(stroke|fill|transform)" },
        },
        {
          removeAttributesBySelector: {
            selector: "path",
            attributes: ["id"],
          },
        },
        {
          removeOffCanvasPaths: true,
        },
      ],
      js2svg: {
        pretty: true,
      },
    });
  }

  run(){
    // general guidance for a user
    console.log('Pressing [ENTER] during prompts will use default values');
    
    const filePath = this.getInputFilePath();
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) throw err;
      
      this.svgo_inst.optimize(data).then((res) => {
        res.data = this.cleanUpIds(res.data);

        const fileName = prompt("Please enter desired file name: ", 'astro.svg');
    
        fs.writeFile(this.iconsPath + fileName, res.data, (err) => {
          if (err) throw err;
          this.notify('warning', 'Modify svg viewBox to the size of exported icons');
          this.notify('success', "The svg file successfully generated!");
        });
      });
    });
  };
  
  getInputFilePath(){
    const homedir = os.homedir();
    let filePath = prompt('Please enter path to file: ',  this.defaultSvg);
    return os.homedir() + filePath;
  }

  cleanUpIds(svgStr){
    const arr = svgStr.split("\n");
    let newArr = [];
  
    arr.forEach((line) => {
      const hasId = line.indexOf("<g id=");
      const matches = line.match(/\"(.*?)\"/g);
      const isPath = line.indexOf('<path d=');
      
      if (hasId > -1 && matches && matches.length > 0) {
        const originalId = matches[0].replace(/\"/g, "");
        const newId = originalId
          .substring(originalId.lastIndexOf("/") + 1)
          .toLowerCase();
        line = line.replace(originalId, newId);
      }

      if (isPath > -1){
        if(line.trim().length < 60){
          line = '';
        }
      }

      newArr.push(line);
    });
    newArr = this.insertStyling(newArr);
    return newArr.join('\n');
  };

  insertStyling(arr){
    const style = '<style>g {display: none;} g:target {display: inline;}</style>';
    arr.splice(1, 0, style); 
    // Removes outer wrapper group that breaks svg
    // TODO: create cleaner way of removing unnecessary wrapping groups
    arr.splice(2, 1);
    arr.splice(arr.length -3, 1);
    return arr;
  }
};

module.exports = new AstroIconExport();