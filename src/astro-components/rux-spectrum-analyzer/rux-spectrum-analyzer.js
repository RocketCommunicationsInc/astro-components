import "/node_modules/@polymer/polymer/polymer.js";
import {
  html,
  Element as PolymerElement
} from "/node_modules/@polymer/polymer/polymer-element.js";
// import "./d3.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxSpectrumAnalyzer extends PolymerElement {
  static get template() {
    return `
      <script src="//cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.js"></script>
      <link rel="stylesheet" href="src/astro-components/rux-spectrum-analyzer/rux-spectrum-analyzer.css">
    `;
  }
  static get properties() {
    return {
      chartData: {
        type: Object,
        observer: "_update"
      },
      chartLegendX: {
        type: String
      },
      chartLegendY: {
        type: String
      },
      xScaleMin: {
        type: Number
      },
      xScaleMax: {
        type: Number
      },
      xScaleStep: {
        type: Number
      },
      yScaleMin: {
        type: Number
      },
      yScaleMax: {
        type: Number
      },
      height: {
        type: Number
      },
      width: {
        type: Number
      }
    };
  }
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
    // let ws = new WebSocket('ws://dev-dv.rocketcom.com:40510');
    let margin = { top: 20, right: 30, bottom: 50, left: 90 };
    let width = this.width - margin.left - margin.right;
    let height = this.height - margin.top - margin.bottom;
    var xScale = d3.scale.ordinal().rangeRoundBands([0, width], 0.1);
    var yScale = d3.scale.linear().range([height, 0]);
    var xAxis = d3.svg
      .axis()
      .scale(xScale)
      .orient("bottom");
    var yAxis = d3.svg
      .axis()
      .scale(yScale)
      .orient("left")
      .ticks(10);
    var xScaleDomain = this._buildXDomain(
      this.xScaleMin,
      this.xScaleMax,
      this.xScaleStep
    );
    xScale.domain(xScaleDomain);
    yScale.domain([this.yScaleMin, this.yScaleMax]);
    const svg = d3
      .select(this.root)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr("class", "chart");
    // text label for the x axis
    svg
      .append("text")
      .attr(
        "transform",
        "translate(" +
          (width / 2 + margin.left / 2) +
          " ," +
          (height + margin.top + 35) +
          ")"
      )
      .attr("class", "y axis-label")
      .text(this.chartLegendX);
    // text label for the y axis
    svg
      .append("text")
      .attr("y", 100)
      .attr("x", 0)
      .attr("class", "axis-label")
      .text(this.chartLegendY);
    const chart = svg
      .append("g")
      .attr("class", "graph")
      .attr("transform", `translate(${margin.left},${margin.top})`);
    chart
      .append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(0,${height})`)
      .call(xAxis);
    chart
      .append("g")
      .attr("class", "y axis")
      .call(yAxis);
    // // clean up the labeling of the x-axis
    var ticks = svg.selectAll(".x .tick text");
    ticks.attr("class", function(d, i) {
      if (i === 0 || i % 4 != 0) {
        d3.select(this).remove();
      }
    });
    //      reference to the graph
    this.graph = d3.select(this.root.querySelector(".graph"));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  ready() {
    super.ready();
    console.log("d3", d3);
  }
  _update(data) {
    this._clear();
    this._draw(data);
  }
  _clear() {
    this.graph.selectAll(".bar").remove();
  }
  _draw(data) {
    // Using a forEach loop to make use of lexical this, but
    // currently performance of forEach is substantially slower
    // than a standard for().
    //console.log('draw',data);
    this.chartData.forEach(data => {
      this.graph
        .selectAll(".bar")
        .data(this.chartData)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", data => {
          return data.frequency;
        })
        .attr("y", data => {
          return data.power;
        })
        .attr("height", data => {
          return this.height - data.power;
        })
        .attr("width", 10);
      // this is the original x/y/height data with the xScale/yScale applied
      // couldnâ€™t get thsoe functions to return.
      //
      // Side note, not knowing anything about d3, but rather than replacing
      // the bars is it possible to transition them?
      /*
        .attr("x", function(d) { return xScale(d.frequency); })
        .attr("y", function(d) { return yScale(d.power); })
        .attr("height", function(d) { return height - yScale(d.power); })
        */
    });
  }
  _buildXDomain(min, max, step) {
    var xDomain = [];
    for (var c = min; c < max; c = c + step) {
      xDomain.push(c);
    }
    return xDomain;
  }
}
customElements.define("rux-spectrum-analyzer", RuxSpectrumAnalyzer);
