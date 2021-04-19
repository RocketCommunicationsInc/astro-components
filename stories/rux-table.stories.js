/* eslint-disable no-unused-vars */
import { html, render } from 'lit-html';
import { boolean, number, text, array, withKnobs } from '@storybook/addon-knobs';
import { Grid } from 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import '../story-assets/ag-grid-astro.css';
import TableReadme from '../src/css/documentation/table-README.md';
import agGridReadme from '../src/css/documentation/ag-grid-README.md';
/* eslint-enable no-unused-vars */

const columnData = [
  { headerName: '', field: 'control' },
  { headerName: 'Current Tag', field: 'currentTag' },
  { headerName: 'Original Tag', field: 'originalTag' },
  { headerName: 'Sensor', field: 'sensor' },
  { headerName: 'ASTAT', field: 'astat' },
  { headerName: 'Obs Time', field: 'obsTime' },
  { headerName: 'Ob Type', field: 'obType' },
  { headerName: 'Az/Rt Asc', field: 'azRtAsc' },
  { headerName: 'El/Dec', field: 'elDec' },
  { headerName: 'Range', field: 'range' },
  { headerName: 'Range Rate', field: 'rangeRate' },
];

const agColumnData = [
  { headerName: 'Current Tag', field: 'currentTag' },
  { headerName: 'Original Tag', field: 'originalTag' },
  { headerName: 'Sensor', field: 'sensor' },
  { headerName: 'ASTAT', field: 'astat' },
  { headerName: 'Obs Time', field: 'obsTime' },
  { headerName: 'Ob Type', field: 'obType' },
  { headerName: 'Az/Rt Asc', field: 'azRtAsc' },
  { headerName: 'El/Dec', field: 'elDec' },
  { headerName: 'Range', field: 'range' },
  { headerName: 'Range Rate', field: 'rangeRate' },
];

const rowData = [
  { control: true, selected: false, currentTag: '999999991', originalTag: '100000001', sensor: '349', astat: 'SP_FULL', obsTime: '2020 158 01:23:45:678', obType: 'OBTYPE_2', azRtAsc: '150.4107', elDec: '10.5204', range: '3541.304', rangeRate: '-1.85068' },
  { control: true, selected: false, currentTag: '999999992', originalTag: '020000001', sensor: '349', astat: 'SP_FULL', obsTime: '2020 159 02:26:42:478', obType: 'OBTYPE_2', azRtAsc: '275.6166', elDec: '22.2304', range: '2741.404', rangeRate: 'NULL' },
  { control: true, selected: false, currentTag: '999999993', originalTag: '003000001', sensor: '373', astat: 'SP_FULL', obsTime: '2020 158 11:03:35:178', obType: 'OBTYPE_2', azRtAsc: '163.3307', elDec: '76.5604', range: '2641.454', rangeRate: '-34068' },
  { control: true, selected: false, currentTag: '999999994', originalTag: '000400001', sensor: '318', astat: 'FULL', obsTime: '2020 159 03:53:15:178', obType: 'OBTYPE_5', azRtAsc: '141.5507', elDec: '67.5204', range: '6741.3654', rangeRate: '-2.85458' },
  { control: true, selected: true, currentTag: '999999995', originalTag: '000050001', sensor: '432', astat: 'SP_FULL', obsTime: '2020 158 02:21:34:678', obType: 'OBTYPE_6', azRtAsc: '153.4187', elDec: '10.3404', range: '2941.784', rangeRate: '-4.85238' },
  { control: true, selected: false, currentTag: '999999996', originalTag: '000006001', sensor: '379', astat: 'SP_FULL', obsTime: '2020 158 03:25:52:678', obType: 'OBTYPE_9', azRtAsc: '144.4347', elDec: '34.7904', range: '8741.564', rangeRate: '-3.85678' },
  { control: true, selected: false, currentTag: '999999997', originalTag: '000400001', sensor: '379', astat: 'SP_FULL', obsTime: '2020 158 04:28:41:678', obType: 'OBTYPE_5', azRtAsc: '167.5503', elDec: '58.1204', range: '5441.3344', rangeRate: '-1.85068' },
  { control: true, selected: false, currentTag: '999999998', originalTag: '100000001', sensor: '312', astat: 'FULL', obsTime: '2020 158 05:23:38:678', obType: 'OBTYPE_4', azRtAsc: '159.4133', elDec: '189.5904', range: '3241.124', rangeRate: 'NULL' },
  { control: true, selected: false, currentTag: '999999999', originalTag: '200000001', sensor: '356', astat: 'FULL', obsTime: '2020 155 06:22:27:678', obType: 'OBTYPE_4', azRtAsc: '157.3307', elDec: '11.4504', range: '3451.356', rangeRate: 'NULL' },
  { control: true, selected: false, currentTag: '999999990', originalTag: '300000001', sensor: '356', astat: 'SP_FULL', obsTime: '2020 158 07:23:28:678', obType: 'OBTYPE_4', azRtAsc: '156.7807', elDec: '10.6704', range: '3591.356', rangeRate: 'NULL' },
  { control: true, selected: false, currentTag: '899999991', originalTag: '400000001', sensor: '376', astat: 'SP_FULL', obsTime: '2020 158 08:23:29:678', obType: 'OBTYPE_3', azRtAsc: '151.4107', elDec: '25.5604', range: '3231.334', rangeRate: '-4.23068' },
  { control: true, selected: false, currentTag: '799999991', originalTag: '500000001', sensor: '319', astat: 'SP_FULL', obsTime: '2020 155 09:23:31:678', obType: 'OBTYPE_1', azRtAsc: '155.4123', elDec: '27.8904', range: '3571.367', rangeRate: '-5.85488' },
  { control: true, selected: false, currentTag: '699999991', originalTag: '600000001', sensor: '319', astat: 'SP_FULL', obsTime: '2020 158 10:23:45:655', obType: 'OBTYPE_2', azRtAsc: '166.4707', elDec: '58.5904', range: '3241.564', rangeRate: '-9.85068' },
  { control: true, selected: false, currentTag: '599999991', originalTag: '700000001', sensor: '390', astat: 'FULL', obsTime: '2020 158 01:23:45:678', obType: 'OBTYPE_2', azRtAsc: '177.4167', elDec: '58.5219', range: '8841.984', rangeRate: '-6.85668' },
  { control: true, selected: false, currentTag: '499999991', originalTag: '000008001', sensor: '391', astat: 'FULL', obsTime: '2020 151 01:23:45:644', obType: 'OBTYPE_2', azRtAsc: '153.4807', elDec: '89.5219', range: '5541.784', rangeRate: '-6.85228' },
  { control: true, selected: false, currentTag: '399999991', originalTag: '000070001', sensor: '380', astat: 'FULL', obsTime: '2020 158 11:23:45:633', obType: 'OBTYPE_9', azRtAsc: '159.4127', elDec: '98.5216', range: '7841.784', rangeRate: '-2.85338' },
  { control: true, selected: false, currentTag: '299999991', originalTag: '000050001', sensor: '381', astat: 'FULL', obsTime: '2020 158 01:23:39:622', obType: 'OBTYPE_8', azRtAsc: '150.4117', elDec: '13.5289', range: '5741.564', rangeRate: '-3.85111' },
  { control: true, selected: false, currentTag: '199999991', originalTag: '000030001', sensor: '381', astat: 'FULL', obsTime: '2020 155 01:23:35:678', obType: 'OBTYPE_7', azRtAsc: '154.4197', elDec: '46.5257', range: '4341.894', rangeRate: '-7.85279' },
  { control: true, selected: false, currentTag: '919999991', originalTag: '090000001', sensor: '374', astat: 'FULL', obsTime: '2020 158 01:23:28:656', obType: 'OBTYPE_7', azRtAsc: '122.4157', elDec: '37.5249', range: '2841.344', rangeRate: '-5.85269' },
  { control: true, selected: false, currentTag: '929999991', originalTag: '020000001', sensor: '303', astat: 'SP_FULL', obsTime: '2020 156 01:23:45:634', obType: 'OBTYPE_2', azRtAsc: '133.9107', elDec: '78.5114', range: '7841.367', rangeRate: '-8.85444' },
  { control: true, selected: false, currentTag: '939999991', originalTag: '004000001', sensor: '309', astat: 'SP_FULL', obsTime: '2020 158 01:23:45:676', obType: 'OBTYPE_4', azRtAsc: '145.8107', elDec: '24.5194', range: '3567.378', rangeRate: '-8.85789' },
  { control: true, selected: false, currentTag: '949999991', originalTag: '005000001', sensor: '380', astat: 'SP_FULL', obsTime: '2020 157 01:23:29:678', obType: 'OBTYPE_2', azRtAsc: '172.8107', elDec: '25.5394', range: '3534.357', rangeRate: '-2.85345' },
  { control: true, selected: false, currentTag: '959999991', originalTag: '006000001', sensor: '381', astat: 'SP_FULL', obsTime: '2020 159 01:23:45:658', obType: 'OBTYPE_5', azRtAsc: '149.6107', elDec: '28.5364', range: '3567.334', rangeRate: '-2.850357' },
  { control: true, selected: false, currentTag: '969999991', originalTag: '007000001', sensor: '387', astat: 'SP_FULL', obsTime: '2020 158 01:23:45:378', obType: 'OBTYPE_4', azRtAsc: '159.5107', elDec: '89.5407', range: '3589.356', rangeRate: '-2.85348' },
];

const agRowData = [
  { selected: false, currentTag: '999999991', originalTag: '100000001', sensor: '349', astat: 'SP_FULL', obsTime: '2020 158 01:23:45:678', obType: 'OBTYPE_2', azRtAsc: '150.4107', elDec: '10.5204', range: '3541.304', rangeRate: '-1.85068' },
  { selected: false, currentTag: '999999992', originalTag: '020000001', sensor: '349', astat: 'SP_FULL', obsTime: '2020 159 02:26:42:478', obType: 'OBTYPE_2', azRtAsc: '275.6166', elDec: '22.2304', range: '2741.404', rangeRate: 'NULL' },
  { selected: false, currentTag: '999999993', originalTag: '003000001', sensor: '373', astat: 'SP_FULL', obsTime: '2020 158 11:03:35:178', obType: 'OBTYPE_2', azRtAsc: '163.3307', elDec: '76.5604', range: '2641.454', rangeRate: '-34068' },
  { selected: false, currentTag: '999999994', originalTag: '000400001', sensor: '318', astat: 'FULL', obsTime: '2020 159 03:53:15:178', obType: 'OBTYPE_5', azRtAsc: '141.5507', elDec: '67.5204', range: '6741.3654', rangeRate: '-2.85458' },
  { selected: true, currentTag: '999999995', originalTag: '000050001', sensor: '432', astat: 'SP_FULL', obsTime: '2020 158 02:21:34:678', obType: 'OBTYPE_6', azRtAsc: '153.4187', elDec: '10.3404', range: '2941.784', rangeRate: '-4.85238' },
  { selected: false, currentTag: '999999996', originalTag: '000006001', sensor: '379', astat: 'SP_FULL', obsTime: '2020 158 03:25:52:678', obType: 'OBTYPE_9', azRtAsc: '144.4347', elDec: '34.7904', range: '8741.564', rangeRate: '-3.85678' },
  { selected: false, currentTag: '999999997', originalTag: '000400001', sensor: '379', astat: 'SP_FULL', obsTime: '2020 158 04:28:41:678', obType: 'OBTYPE_5', azRtAsc: '167.5503', elDec: '58.1204', range: '5441.3344', rangeRate: '-1.85068' },
  { selected: false, currentTag: '999999998', originalTag: '100000001', sensor: '312', astat: 'FULL', obsTime: '2020 158 05:23:38:678', obType: 'OBTYPE_4', azRtAsc: '159.4133', elDec: '189.5904', range: '3241.124', rangeRate: 'NULL' },
  { selected: false, currentTag: '999999999', originalTag: '200000001', sensor: '356', astat: 'FULL', obsTime: '2020 155 06:22:27:678', obType: 'OBTYPE_4', azRtAsc: '157.3307', elDec: '11.4504', range: '3451.356', rangeRate: 'NULL' },
  { selected: false, currentTag: '999999990', originalTag: '300000001', sensor: '356', astat: 'SP_FULL', obsTime: '2020 158 07:23:28:678', obType: 'OBTYPE_4', azRtAsc: '156.7807', elDec: '10.6704', range: '3591.356', rangeRate: 'NULL' },
  { selected: false, currentTag: '899999991', originalTag: '400000001', sensor: '376', astat: 'SP_FULL', obsTime: '2020 158 08:23:29:678', obType: 'OBTYPE_3', azRtAsc: '151.4107', elDec: '25.5604', range: '3231.334', rangeRate: '-4.23068' },
  { selected: false, currentTag: '799999991', originalTag: '500000001', sensor: '319', astat: 'SP_FULL', obsTime: '2020 155 09:23:31:678', obType: 'OBTYPE_1', azRtAsc: '155.4123', elDec: '27.8904', range: '3571.367', rangeRate: '-5.85488' },
  { selected: false, currentTag: '699999991', originalTag: '600000001', sensor: '319', astat: 'SP_FULL', obsTime: '2020 158 10:23:45:655', obType: 'OBTYPE_2', azRtAsc: '166.4707', elDec: '58.5904', range: '3241.564', rangeRate: '-9.85068' },
  { selected: false, currentTag: '599999991', originalTag: '700000001', sensor: '390', astat: 'FULL', obsTime: '2020 158 01:23:45:678', obType: 'OBTYPE_2', azRtAsc: '177.4167', elDec: '58.5219', range: '8841.984', rangeRate: '-6.85668' },
  { selected: false, currentTag: '499999991', originalTag: '000008001', sensor: '391', astat: 'FULL', obsTime: '2020 151 01:23:45:644', obType: 'OBTYPE_2', azRtAsc: '153.4807', elDec: '89.5219', range: '5541.784', rangeRate: '-6.85228' },
  { selected: false, currentTag: '399999991', originalTag: '000070001', sensor: '380', astat: 'FULL', obsTime: '2020 158 11:23:45:633', obType: 'OBTYPE_9', azRtAsc: '159.4127', elDec: '98.5216', range: '7841.784', rangeRate: '-2.85338' },
  { selected: false, currentTag: '299999991', originalTag: '000050001', sensor: '381', astat: 'FULL', obsTime: '2020 158 01:23:39:622', obType: 'OBTYPE_8', azRtAsc: '150.4117', elDec: '13.5289', range: '5741.564', rangeRate: '-3.85111' },
  { selected: false, currentTag: '199999991', originalTag: '000030001', sensor: '381', astat: 'FULL', obsTime: '2020 155 01:23:35:678', obType: 'OBTYPE_7', azRtAsc: '154.4197', elDec: '46.5257', range: '4341.894', rangeRate: '-7.85279' },
  { selected: false, currentTag: '919999991', originalTag: '090000001', sensor: '374', astat: 'FULL', obsTime: '2020 158 01:23:28:656', obType: 'OBTYPE_7', azRtAsc: '122.4157', elDec: '37.5249', range: '2841.344', rangeRate: '-5.85269' },
  { selected: false, currentTag: '929999991', originalTag: '020000001', sensor: '303', astat: 'SP_FULL', obsTime: '2020 156 01:23:45:634', obType: 'OBTYPE_2', azRtAsc: '133.9107', elDec: '78.5114', range: '7841.367', rangeRate: '-8.85444' },
  { selected: false, currentTag: '939999991', originalTag: '004000001', sensor: '309', astat: 'SP_FULL', obsTime: '2020 158 01:23:45:676', obType: 'OBTYPE_4', azRtAsc: '145.8107', elDec: '24.5194', range: '3567.378', rangeRate: '-8.85789' },
  { selected: false, currentTag: '949999991', originalTag: '005000001', sensor: '380', astat: 'SP_FULL', obsTime: '2020 157 01:23:29:678', obType: 'OBTYPE_2', azRtAsc: '172.8107', elDec: '25.5394', range: '3534.357', rangeRate: '-2.85345' },
  { selected: false, currentTag: '959999991', originalTag: '006000001', sensor: '381', astat: 'SP_FULL', obsTime: '2020 159 01:23:45:658', obType: 'OBTYPE_5', azRtAsc: '149.6107', elDec: '28.5364', range: '3567.334', rangeRate: '-2.850357' },
  { selected: false, currentTag: '969999991', originalTag: '007000001', sensor: '387', astat: 'SP_FULL', obsTime: '2020 158 01:23:45:378', obType: 'OBTYPE_4', azRtAsc: '159.5107', elDec: '89.5407', range: '3589.356', rangeRate: '-2.85348' },
];





export default {
  title: 'Components|Table',
  decorators: [
    withKnobs,
  ],
};

export const HTMLTable = () => {
  return html`
    <div style="padding: 1rem;">
			<table class="rux-table">
			
        <tr class="rux-table__column-head"> 
        ${columnData.map((column) => html`
          ${column.headerName == '' ? html` ` : html`<th>${column.headerName}</th>`}
        `,)}
        </tr>
        ${rowData.map((row) => html`
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

        `,)}
      </table>
    </div>

  `;
};
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
};


export const HTMLControlsTable= () => {

	function checkBox(id){
			const checkInput = html`
				<span class="rux-checkbox">
					<input type="checkbox" name="checkbox${id}" id="checkbox${id}" />
					<label for="checkbox${id}"></label>
				</span>
			`;
		return checkInput;
  }
	return html`
		<div style="padding: 1rem;">
			<table class="rux-table">
				<tr class="rux-table__column-head"> 
				${columnData.map((column) => html`
					<th>${column.headerName}</th>
				`,)}
				</tr>
				${rowData.map((row, index) => html`
					<tr ?data-selected="${row.selected}">
						<td>${row.control ? html ` ${checkBox(index)}` : html ` &nbsp; `}</td>
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
				`,)}
			</table>
		</div>
	`;
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
};



export const AGGrid = () => {
  const gridOptions = {
    columnDefs: agColumnData,
    rowData: agRowData,
  };


  if ( document.readyState !== 'loading' ) {
    setTimeout(startAGGrid, 0);
  }

  function startAGGrid() {
    const eGridDiv = document.querySelector('#myGrid');
    new Grid(eGridDiv, gridOptions);
  }


	return html`
		<style>
			.ag-theme-astro .ag-header-row {
				background-color: var(--tableHeaderBackgroundColor);
			}
			.ag-theme-astro .ag-header-cell {
				border-color: var(--tableHeaderBorderColor);
			}
			
			.ag-header-cell-text{
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

			.ag-theme-astro .ag-ltr .ag-has-focus .ag-cell-focus:not(.ag-cell-range-selected){
				background-color: var(--tableRowSelectedBackgroundColor);
				border-color: var(--tableRowSelectedBorderColor);
				color: var(--tableRowTextColor);
			}
			.ag-theme-astro .ag-ltr .ag-has-focus .ag-cell-focus:hover:not(.ag-cell-range-selected) {
				color: var(--tableRowTextColor);
			}
		</style>
    <div style="display: flex; padding: 2vh; justify-content: center;">
      <div id="myGrid" class="ag-theme-astro" style="width: 100%; height: 96vh"></div> 
    </div>
  `;
};
AGGrid.story = {
  name: 'ag-grid',
  parameters: {
    exports: {
      render,
      html,
    },
    readme: {
      sidebar: agGridReadme,
    },
  },
};
