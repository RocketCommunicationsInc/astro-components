import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxSpectrumAnalyzer extends PolymerElement {
  static get template() {
    return html`
    <style>
    svg {
      background-color: #1b3044;
      
    }
    
    .rux-spectrum-analyzer__bar {
      fill: #4586be;
    }
    
    .rux-spectrum-analyzer__bar-tip {
      fill: #b2bac0;
    }
    
    text,
    .rux-spectrum-analyzer__main-chart-label {
      fill: #bdc3c9;
    }
    
    .rux-spectrum-analyzer__main-chart-label {
      font-family: "Open Sans";
      font-weight: 300;
      font-size: 20px;
      text-transform: capitalize;
      margin-bottom: 5px;
    }
    
    .rux-spectrum-analyzer__chart-legend {
      text-transform: uppercase;
      font-size: 12px;
      font-weight: bold;
      fill: #fff;
    }
    
    g.rux-spectrum-analyzer__axis-label line {
      stroke: none;
    }
    
    .line {
      fill: none;
      stroke: steelblue;
      stroke-width: 2px;
    }
    
    .grid line {
      stroke: #455d6e;
      stroke-opacity: 0.3;
      shape-rendering: crispEdges;
    }
    
    .tick text {
      font-family: "Open Sans";
      font-weight: 300;
      font-size: 12px;
      color: #bdc3c9;
      font-weight: 300;
    }
    </style>
    `;
  }

  static get properties() {
    return {
      chartData: {
        type: Object,
        observer: "_update"
      },
      chartTitle: {
        type: String
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
      },
      dataSource: {
        type: String
      },
      dataSourceType: {
        type: String
      }
    };
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    var margin = { top: 40, right: 20, bottom: 30, left: 40 };
    var width = this.width - margin.left - margin.right;
    var height = this.height - margin.top - margin.bottom;

    var xDomain = [];
    for (var c = this.xScaleMin; c < this.xScaleMax; c += this.xScaleStep) {
      xDomain.push(c);
    }

    // set the ranges
    var x = d3
      .scaleBand()
      .range([0, width])
      .domain(xDomain)
      .padding(0);
    var y = d3
      .scaleLinear()
      .domain([this.yScaleMin, 0])
      .range([height, 0]);

    // append the svg object to the rux-spectrum-analyzer custom tag
    // append a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3
      .select(this.parentNode)
      .select("rux-spectrum-analyzer")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // add the X Axis
    svg
      .append("g")
      .attr("class", "rux-spectrum-analyzer__axis-label")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // gridlines in x axis function
    function make_x_gridlines() {
      return d3.axisBottom(x).ticks(5);
    }

    // gridlines in y axis function
    function make_y_gridlines() {
      return d3.axisLeft(y).ticks(5);
    }
    // add the X gridlines
    svg
      .append("g")
      .attr("class", "grid x-grid-lines")
      .attr("transform", "translate(0," + height + ")")
      .call(
        make_x_gridlines()
          .tickSize(-height)
          .tickFormat("")
      );

    // add the Y gridlines
    svg
      .append("g")
      .attr("class", "grid y-grid-lines")
      .call(
        make_y_gridlines()
          .tickSize(-width)
          .tickFormat("")
      );

    // add the y Axis
    svg
      .append("g")
      .attr("class", "rux-spectrum-analyzer__axis-label")
      .call(d3.axisLeft(y).ticks(5));

    // Add main chart label
    svg
      .append("text")
      .attr("x", -25)
      .attr("y", -15)
      .attr("class", "rux-spectrum-analyzer__main-chart-label")
      .text(this.chartTitle);

    // Add y axis label
    svg
      .append("text")
      .attr("x", -35)
      .attr("y", 292)
      .attr("class", "rux-spectrum-analyzer__chart-legend")
      .text(this.chartLegendY);

    // Add c axis label
    svg
      .append("text")
      .attr("x", 76)
      .attr("y", 332)
      .attr("class", "rux-spectrum-analyzer__chart-legend")
      .text(this.chartLegendX);

    // start animation
    var ws = new WebSocket(this.dataSource);

    ws.addEventListener("message", function(event) {
      var payload = JSON.parse(event.data);
      var graph = payload.graph;

      var data = graph;
      x.domain(
        data.map(function(d) {
          return d.f;
        })
      );
      y.domain([-27, 0]);

      // clear old bars and tips
      svg.selectAll(".rux-spectrum-analyzer__bar").remove();
      svg.selectAll(".rux-spectrum-analyzer__bar-tip").remove();

      // append the rectangles for the bar chart
      svg
        .selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "rux-spectrum-analyzer__bar")
        .attr("x", function(d) {
          return x(d.f);
        })
        .attr("width", x.bandwidth())
        .attr("y", function(d) {
          return y(d.p);
        })
        .attr("height", function(d) {
          return height - y(d.p);
        });

      svg
        .selectAll(".bar-tip")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "rux-spectrum-analyzer__bar-tip")
        .attr("x", function(d) {
          return x(d.f);
        })
        .attr("width", x.bandwidth())
        .attr("y", function(d) {
          return y(d.p) - 2;
        })
        .attr("height", 2);
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }

  ready() {
    super.ready();
  }
}
customElements.define("rux-spectrum-analyzer", RuxSpectrumAnalyzer);
