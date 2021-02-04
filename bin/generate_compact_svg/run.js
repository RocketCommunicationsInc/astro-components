/* eslint-disable */
const SVGO = require("svgo");
const fs = require("fs");
const os = require("os");
const prompt = require("prompt-sync")();

const svgo_inst = new SVGO({
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

const getInputFilePath = () => {
  const homedir = os.homedir();
  let filePath = prompt('Please enter path to file: ',  '/Documents/astro-exports/Solid.svg');
  return os.homedir() + filePath;
};

const cleanUpIds = (svgStr) => {
  const arr = svgStr.split("\n");
  const newArr = [];

  arr.forEach((line) => {
    const hasId = line.indexOf("g id=");
    const matches = line.match(/\"(.*?)\"/g);
    if (hasId > -1 && matches && matches.length > 0) {
      const originalId = matches[0].replace('"', "");
      const newId = originalId
        .substring(originalId.lastIndexOf("/") + 1)
        .toLowerCase();
      line = line.replace(originalId, newId);
    }
    newArr.push(line);
  });

  return newArr.join('\n');
};

const run = () => {
  console.log('Pressing [Enter] will during promps will use default values');
  
  const filePath = getInputFilePath();
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    
    svgo_inst.optimize(data).then((res) => {
      res.data = cleanUpIds(res.data);
  
      const savePath = __dirname + "/../../static/icons/";
      const fileName = prompt("Please enter desired file name: ", 'astro-new.svg');
  
      fs.writeFile(savePath + fileName, res.data, (err) => {
        if (err) throw err;
        console.log("\x1b[33m", 'Modify svg viewBox to the size of exported icons');
        console.log("\x1b[32m", "The file has been successfully generated!");
      });
    });
  });
};

run();

