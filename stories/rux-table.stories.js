/* eslint-disable no-unused-vars */
import { html, render } from 'lit-html'
import { boolean, number, text, array, withKnobs } from '@storybook/addon-knobs'
import { Grid } from 'ag-grid-community'
import '!!style-loader!css-loader!ag-grid-community/dist/styles/ag-grid.css'
import '!!style-loader!css-loader!../story-assets/ag-grid-astro.css'
import TableReadme from '../src/documentation/table-README.md'
import agGridReadme from '../src/documentation/ag-grid-README.md'
/* eslint-enable no-unused-vars */

const getRandomNum = (min, max, roundTo = 0) => {
    const num = Math.random() * max + min
    return num.toFixed(roundTo)
}

const columnData = [
    { headerName: '', field: 'control' },
    { headerName: 'Current tag', field: 'currentTag' },
    { headerName: 'Original tag', field: 'originalTag' },
    { headerName: 'Sensor', field: 'sensor' },
    { headerName: 'ASTAT', field: 'astat' },
    { headerName: 'Obs time', field: 'obsTime' },
    { headerName: 'Ob type', field: 'obType' },
    { headerName: 'Az/Rt asc', field: 'azRtAsc' },
    { headerName: 'El/Dec', field: 'elDec' },
    { headerName: 'Range', field: 'range' },
    { headerName: 'Range rate', field: 'rangeRate' },
]

const agColumnData = columnData.slice(0)
agColumnData.shift()

const agRowData = Array(24)
for (let i = 0; i < agRowData.length; i++) {
    agRowData[i] = {
        selected: false,
        currentTag: getRandomNum(19999999, 9999999),
        originalTag: '0000' + getRandomNum(11111, 99999),
        sensor: getRandomNum(250, 450),
        astat: getRandomNum(-1, 3) > 0 ? 'FULL' : 'SP_FULL',
        obsTime: '2020 158 01:23:45:678',
        obType: 'OBTYPE_' + getRandomNum(1, 9),
        azRtAsc: getRandomNum(120, 150, 4),
        elDec: getRandomNum(1000, 3500, 3),
        range: getRandomNum(1500, 7500, 3),
        rangeRate: getRandomNum(-10, 10, 5),
    }
}

const rowData = agRowData.slice(0).map((item) => {
    item.control = true
    return item
})
rowData[4].selected = true

export default {
    title: 'Components/Table',
    decorators: [withKnobs],
}

export const HTMLTable = () => {
    return html`
        <div style="padding: 2rem;">
            <table class="rux-table">
                <tr class="rux-table__column-head">
                    ${columnData.map(
                        (column) => html`
                            ${column.headerName == ''
                                ? html``
                                : html`<th>${column.headerName}</th>`}
                        `
                    )}
                </tr>
                ${rowData.map(
                    (row) => html`
                        <tr ?data-selected="${row.selected}">
                            <td>${row.currentTag}</td>
                            <td>${row.originalTag}</td>
                            <td>${row.sensor}</td>
                            <td>${row.astat}</td>
                            <td>${row.obsTime}</td>
                            <td>${row.obType}</td>
                            <td>${row.azRtAsc}</td>
                            <td>${row.elDec}</td>
                            <td>${row.range}</td>
                            <td>${row.rangeRate}</td>
                        </tr>
                    `
                )}
            </table>
        </div>
    `
}
HTMLTable.story = {
    parameters: {
        exports: {
            render,
            html,
        },
        readme: {
            sidebar: TableReadme,
        },
    },
}

export const HTMLControlsTable = () => {
    function checkBox(id) {
        const checkInput = html`
            <span class="rux-checkbox">
                <input
                    type="checkbox"
                    name="checkbox${id}"
                    id="checkbox${id}"
                />
                <label for="checkbox${id}"></label>
            </span>
        `
        return checkInput
    }
    return html`
        <div style="display: flex; padding: 2vh; justify-content: center;">
            <table class="rux-table">
                <tr class="rux-table__column-head">
                    ${columnData.map(
                        (column) => html` <th>${column.headerName}</th> `
                    )}
                </tr>
                ${rowData.map(
                    (row, index) => html`
                        <tr ?data-selected="${row.selected}">
                            <td>
                                ${row.control
                                    ? html` ${checkBox(index)}`
                                    : html` &nbsp; `}
                            </td>
                            <td>${row.currentTag}</td>
                            <td>${row.originalTag}</td>
                            <td>${row.sensor}</td>
                            <td>${row.astat}</td>
                            <td>${row.obsTime}</td>
                            <td>${row.obType}</td>
                            <td>${row.azRtAsc}</td>
                            <td>${row.elDec}</td>
                            <td>${row.range}</td>
                            <td>${row.rangeRate}</td>
                        </tr>
                    `
                )}
            </table>
        </div>
    `
}

HTMLControlsTable.story = {
    parameters: {
        exports: {
            render,
            html,
        },
        readme: {
            sidebar: TableReadme,
        },
    },
}

export const AGGrid = () => {
    const gridOptions = {
        columnDefs: agColumnData,
        rowData: agRowData,
    }

    if (document.readyState !== 'loading') {
        setTimeout(startAGGrid, 0)
    }

    function startAGGrid() {
        const eGridDiv = document.querySelector('#myGrid')
        new Grid(eGridDiv, gridOptions)
    }

    return html`
        <style>
            .ag-theme-astro .ag-header-row {
                background-color: var(--tableHeaderBackgroundColor);
            }
            .ag-theme-astro .ag-header-cell {
                border-color: var(--tableHeaderBorderColor);
            }

            .ag-header-cell-text {
                font-weight: 400;
            }

            .ag-theme-astro .ag-row {
                background-color: var(--tableRowBackgroundColor);
                border-color: var(--tableRowBorderColor);
            }
            .ag-theme-astro .ag-row:hover {
                background-color: var(--tableRowHoverBackgroundColor);
                color: var(--tableRowHoverTextColor);
            }

            .ag-theme-astro
                .ag-ltr
                .ag-has-focus
                .ag-cell-focus:not(.ag-cell-range-selected) {
                background-color: var(--tableRowSelectedBackgroundColor);
                border-color: var(--tableRowSelectedBorderColor);
                color: var(--tableRowTextColor);
            }
            .ag-theme-astro
                .ag-ltr
                .ag-has-focus
                .ag-cell-focus:hover:not(.ag-cell-range-selected) {
                color: var(--tableRowTextColor);
            }
        </style>
        <div style="padding: 2rem;">
            <div
                id="myGrid"
                class="ag-theme-astro"
                style="width: 100%; height: 96vh"
            ></div>
        </div>
    `
}
AGGrid.story = {
    name: 'ag-Grid',
    parameters: {
        exports: {
            render,
            html,
        },
        readme: {
            sidebar: agGridReadme,
        },
    },
}
