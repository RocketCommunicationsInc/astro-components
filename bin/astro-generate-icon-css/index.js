#!/usr/bin/env node
/* eslint-disable */
const Core = require('../core')
const fs = require('fs')

class AstroGenerateIconCss extends Core {
    constructor() {
        super()
        this.icons = []
    }

    run() {
        const file = `${this.iconsPath}astro.svg`
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) throw err
            const generatedCss = this.generateCssFile(data)

            const cssFileName = 'astro-icons.scss'
            fs.writeFile(
                `${this.cssPath}/${cssFileName}`,
                generatedCss,
                (err) => {
                    if (err) throw err
                    this.notify(
                        'success',
                        'The css icons file successfully generated!'
                    )
                }
            )
        })
    }

    generateCssFile(svgStr) {
        const arr = svgStr.split('\n')
        const newArr = [`/**** DO NOT EDIT: AUTO GENERATED CSS ****/`]

        arr.forEach((line) => {
            const hasId = line.indexOf('g id=')
            const matches = line.match(/\"(.*?)\"/g)

            if (
                hasId > -1 &&
                matches &&
                matches.length > 0 &&
                matches[0].indexOf('-icon') === -1
            ) {
                const id = matches[0].replace(/\"/g, '')
                this.icons.push({
                    id: id,
                })
                newArr.push(
                    `.rux-icon--${id}{-webkit-mask: url("../icons/astro.svg#${id}") no-repeat;mask: url("../icons/astro.svg#${id}") no-repeat;}`
                )
            }
        })
        return newArr.join('\n')
    }
}

module.exports = new AstroGenerateIconCss()
