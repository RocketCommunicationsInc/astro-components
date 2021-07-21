/* eslint-disable */
var onRun = function (context) {
    var sketch = require('sketch/dom')
    var document = sketch.getSelectedDocument()

    if (document) {
        var options = {
            scales: '1',
            formats: 'svg',
            trimmed: true,
            output: '~/Documents/astro-exports',
        }

        sketch.export(document.pages, options)
    } else {
        console.error('There was no open document')
    }
}
