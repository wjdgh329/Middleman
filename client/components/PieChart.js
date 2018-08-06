import React, { Component } from 'react';
import * as d3 from '../d3/d3';
// import {updateBarChart} from './BarChart'


export default class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = { color: d3.scale.category20(),
      datasetBarChart: [
        { group: "All", category: "Oranges", measure: 63850.4963 },
        { group: "All", category: "Apples", measure: 78258.0845 },
        { group: "All", category: "Grapes", measure: 60610.2355 },
        { group: "All", category: "Figs", measure: 30493.1686 },
        { group: "All", category: "Mangos", measure: 56097.0151 },
        { group: "Sam", category: "Oranges", measure: 19441.5648 },
        { group: "Sam", category: "Apples", measure: 25922.0864 },
        { group: "Sam", category: "Grapes", measure: 9720.7824 },
        { group: "Sam", category: "Figs", measure: 6480.5216 },
        { group: "Sam", category: "Mangos", measure: 19441.5648 },
        { group: "Peter", category: "Oranges", measure: 22913.2728 },
        { group: "Peter", category: "Apples", measure: 7637.7576 },
        { group: "Peter", category: "Grapes", measure: 23549.7526 },
        { group: "Peter", category: "Figs", measure: 1909.4394 },
        { group: "Peter", category: "Mangos", measure: 7637.7576 },
        { group: "John", category: "Oranges", measure: 1041.5124 },
        { group: "John", category: "Apples", measure: 2430.1956 },
        { group: "John", category: "Grapes", measure: 15275.5152 },
        { group: "John", category: "Figs", measure: 4166.0496 },
        { group: "John", category: "Mangos", measure: 11803.8072 },
        { group: "Rick", category: "Oranges", measure: 7406.3104 },
        { group: "Rick", category: "Apples", measure: 2545.9192 },
        { group: "Rick", category: "Grapes", measure: 1620.1304 },
        { group: "Rick", category: "Figs", measure: 8563.5464 },
        { group: "Rick", category: "Mangos", measure: 3008.8136 },
        { group: "Lenny", category: "Oranges", measure: 7637.7576 },
        { group: "Lenny", category: "Apples", measure: 35411.4216 },
        { group: "Lenny", category: "Grapes", measure: 8332.0992 },
        { group: "Lenny", category: "Figs", measure: 6249.0744 },
        { group: "Lenny", category: "Mangos", measure: 11803.8072 },
        { group: "Paul", category: "Oranges", measure: 3182.399 },
        { group: "Paul", category: "Apples", measure: 867.927 },
        { group: "Paul", category: "Grapes", measure: 1808.18125 },
        { group: "Paul", category: "Figs", measure: 795.59975 },
        { group: "Paul", category: "Mangos", measure: 578.618 },
        { group: "Steve", category: "Oranges", measure: 2227.6793 },
        { group: "Steve", category: "Apples", measure: 3442.7771 },
        { group: "Steve", category: "Grapes", measure: 303.77445 },
        { group: "Steve", category: "Figs", measure: 2328.93745 },
        { group: "Steve", category: "Mangos", measure: 1822.6467 }
      ]}
  }

componentDidMount(){
  this.makePieChart();
  this.makeBarChart();
  // console.log(this.props)
}
  dsBarChartBasics= ()=> {
  var margin = { top: 30, right: 5, bottom: 20, left: 50 },
    width = 500 - margin.left - margin.right,
    height = 250 - margin.top - margin.bottom,
    colorBar = d3.scale.category20(),
    barPadding = 1;

  return {
    margin: margin,
    width: width,
    height: height,
    colorBar: colorBar,
    barPadding: barPadding
  };
}
  datasetBarChosen = (group) => {
  var ds = [];
  for (let x in this.state.datasetBarChart) {
    if (this.state.datasetBarChart[x].group == group) {
      ds.push(this.state.datasetBarChart[x]);
    }
  }
  return ds;
}
  makeBarChart() {
    var formatAsPercentage = d3.format("%"),
      formatAsPercentage1Dec = d3.format(".1%"),
      formatAsInteger = d3.format(","),
      fsec = d3.time.format("%S s"),
      fmin = d3.time.format("%M m"),
      fhou = d3.time.format("%H h"),
      fwee = d3.time.format("%a"),
      fdat = d3.time.format("%d d"),
      fmon = d3.time.format("%b");


    var datasetBarChart = [
      { group: "All", category: "Oranges", measure: 63850.4963 },
      { group: "All", category: "Apples", measure: 78258.0845 },
      { group: "All", category: "Grapes", measure: 60610.2355 },
      { group: "All", category: "Figs", measure: 30493.1686 },
      { group: "All", category: "Mangos", measure: 56097.0151 },
      { group: "Sam", category: "Oranges", measure: 19441.5648 },
      { group: "Sam", category: "Apples", measure: 25922.0864 },
      { group: "Sam", category: "Grapes", measure: 9720.7824 },
      { group: "Sam", category: "Figs", measure: 6480.5216 },
      { group: "Sam", category: "Mangos", measure: 19441.5648 },
      { group: "Peter", category: "Oranges", measure: 22913.2728 },
      { group: "Peter", category: "Apples", measure: 7637.7576 },
      { group: "Peter", category: "Grapes", measure: 23549.7526 },
      { group: "Peter", category: "Figs", measure: 1909.4394 },
      { group: "Peter", category: "Mangos", measure: 7637.7576 },
      { group: "John", category: "Oranges", measure: 1041.5124 },
      { group: "John", category: "Apples", measure: 2430.1956 },
      { group: "John", category: "Grapes", measure: 15275.5152 },
      { group: "John", category: "Figs", measure: 4166.0496 },
      { group: "John", category: "Mangos", measure: 11803.8072 },
      { group: "Rick", category: "Oranges", measure: 7406.3104 },
      { group: "Rick", category: "Apples", measure: 2545.9192 },
      { group: "Rick", category: "Grapes", measure: 1620.1304 },
      { group: "Rick", category: "Figs", measure: 8563.5464 },
      { group: "Rick", category: "Mangos", measure: 3008.8136 },
      { group: "Lenny", category: "Oranges", measure: 7637.7576 },
      { group: "Lenny", category: "Apples", measure: 35411.4216 },
      { group: "Lenny", category: "Grapes", measure: 8332.0992 },
      { group: "Lenny", category: "Figs", measure: 6249.0744 },
      { group: "Lenny", category: "Mangos", measure: 11803.8072 },
      { group: "Paul", category: "Oranges", measure: 3182.399 },
      { group: "Paul", category: "Apples", measure: 867.927 },
      { group: "Paul", category: "Grapes", measure: 1808.18125 },
      { group: "Paul", category: "Figs", measure: 795.59975 },
      { group: "Paul", category: "Mangos", measure: 578.618 },
      { group: "Steve", category: "Oranges", measure: 2227.6793 },
      { group: "Steve", category: "Apples", measure: 3442.7771 },
      { group: "Steve", category: "Grapes", measure: 303.77445 },
      { group: "Steve", category: "Figs", measure: 2328.93745 },
      { group: "Steve", category: "Mangos", measure: 1822.6467 }
    ];

    // set initial group value
    var group = "All";






    var firstDatasetBarChart = this.datasetBarChosen(group);

    var basics = this.dsBarChartBasics();

    var margin = basics.margin,
      width = basics.width,
      height = basics.height,
      colorBar = basics.colorBar,
      barPadding = basics.barPadding;

    var xScale = d3.scale
      .linear()
      .domain([0, firstDatasetBarChart.length])
      .range([0, width]);

    // Create linear y scale
    // Purpose: No matter what the data is, the bar should fit into the svg area; bars should not
    // get higher than the svg height. Hence incoming data needs to be scaled to fit into the svg area.
    var yScale = d3.scale
      .linear()
      // use the max funtion to derive end point of the domain (max value of the dataset)
      // do not use the min value of the dataset as min of the domain as otherwise you will not see the first bar
      .domain([
        0,
        d3.max(firstDatasetBarChart, function (d) {
          return d.measure;
        })
      ])
      // As coordinates are always defined from the top left corner, the y position of the bar
      // is the svg height minus the data value. So you basically draw the bar starting from the top.
      // To have the y position calculated by the range function
      .range([height, 0]);

    //Create SVG element

    var svg = d3
      .select("#barChart")
      // .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr("id", "barChartPlot");

    var plot = svg
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    plot
      .selectAll("rect")
      .data(firstDatasetBarChart)
      .enter()
      .append("rect")
      .attr("x", function (d, i) {
        return xScale(i);
      })
      .attr("width", width / firstDatasetBarChart.length - barPadding)
      .attr("y", function (d) {
        return yScale(d.measure);
      })
      .attr("height", function (d) {
        return height - yScale(d.measure);
      })
      .attr("fill", "lightgrey");

    // Add y labels to plot

    plot
      .selectAll("text")
      .data(firstDatasetBarChart)
      .enter()
      .append("text")
      .text(function (d) {
        return formatAsInteger(d3.round(d.measure));
      })
      .attr("text-anchor", "middle")
      // Set x position to the left edge of each bar plus half the bar width
      .attr("x", function (d, i) {
        return (
          i * (width / firstDatasetBarChart.length) +
          (width / firstDatasetBarChart.length - barPadding) / 2
        );
      })
      .attr("y", function (d) {
        return yScale(d.measure) + 14;
      })
      .attr("class", "yAxis");
    /* moved to CSS
.attr("font-family", "sans-serif")
.attr("font-size", "11px")
.attr("fill", "white")
*/

    // Add x labels to chart

    var xLabels = svg
      .append("g")
      .attr(
        "transform",
        "translate(" + margin.left + "," + (margin.top + height) + ")"
      );

    xLabels
      .selectAll("text.xAxis")
      .data(firstDatasetBarChart)
      .enter()
      .append("text")
      .text(function (d) {
        return d.category;
      })
      .attr("text-anchor", "middle")
      // Set x position to the left edge of each bar plus half the bar width
      .attr("x", function (d, i) {
        return (
          i * (width / firstDatasetBarChart.length) +
          (width / firstDatasetBarChart.length - barPadding) / 2
        );
      })
      .attr("y", 15)
      .attr("class", "xAxis");
    //.attr("style", "font-size: 12; font-family: Helvetica, sans-serif")

    // Title

    svg
      .append("text")
      .attr("x", (width + margin.left + margin.right) / 2)
      .attr("y", 15)
      .attr("class", "title")
      .attr("text-anchor", "middle")
      .text("Overall Sales Breakdown 2012");
    //}

    // dsBarChart();

    /* ** UPDATE CHART ** */

    /* updates bar chart on request */


  }
  updateBarChart = (group, colorChosen) => {
    var formatAsPercentage = d3.format("%"),
      formatAsPercentage1Dec = d3.format(".1%"),
      formatAsInteger = d3.format(","),
      fsec = d3.time.format("%S s"),
      fmin = d3.time.format("%M m"),
      fhou = d3.time.format("%H h"),
      fwee = d3.time.format("%a"),
      fdat = d3.time.format("%d d"),
      fmon = d3.time.format("%b");
    var currentDatasetBarChart = this.datasetBarChosen(group);

    var basics = this.dsBarChartBasics();

    var margin = basics.margin,
      width = basics.width,
      height = basics.height,
      colorBar = basics.colorBar,
      barPadding = basics.barPadding;

    var xScale = d3.scale
      .linear()
      .domain([0, currentDatasetBarChart.length])
      .range([0, width]);

    var yScale = d3.scale
      .linear()
      .domain([
        0,
        d3.max(currentDatasetBarChart, function (d) {
          return d.measure;
        })
      ])
      .range([height, 0]);

    var svg = d3.select("#barChart svg");

    var plot = d3.select("#barChartPlot").datum(currentDatasetBarChart);

    /* Note that here we only have to select the elements - no more appending! */
    plot
      .selectAll("rect")
      .data(currentDatasetBarChart)
      .transition()
      .duration(750)
      .attr("x", function (d, i) {
        return xScale(i);
      })
      .attr("width", width / currentDatasetBarChart.length - barPadding)
      .attr("y", function (d) {
        return yScale(d.measure);
      })
      .attr("height", function (d) {
        return height - yScale(d.measure);
      })
      .attr("fill", colorChosen);

    plot
      .selectAll("text.yAxis") // target the text element(s) which has a yAxis class defined
      .data(currentDatasetBarChart)
      .transition()
      .duration(750)
      .attr("text-anchor", "middle")
      .attr("x", function (d, i) {
        return (
          i * (width / currentDatasetBarChart.length) +
          (width / currentDatasetBarChart.length - barPadding) / 2
        );
      })
      .attr("y", function (d) {
        return yScale(d.measure) + 14;
      })
      .text(function (d) {
        return formatAsInteger(d3.round(d.measure));
      })
      .attr("class", "yAxis");

    svg
      .selectAll("text.title") // target the text element(s) which has a title class defined
      .attr("x", (width + margin.left + margin.right) / 2)
      .attr("y", 15)
      .attr("class", "title")
      .attr("text-anchor", "middle")
      .text(group + "'s Sales Breakdown 2012");
  }

  makePieChart() {
    console.log('testingngsd', d3);

    var formatAsPercentage = d3.format("%"),
    formatAsPercentage1Dec = d3.format(".1%"),
    formatAsInteger = d3.format(","),
    fsec = d3.time.format("%S s"),
    fmin = d3.time.format("%M m"),
    fhou = d3.time.format("%H h"),
    fwee = d3.time.format("%a"),
    fdat = d3.time.format("%d d"),
    fmon = d3.time.format("%b");

      var dataset = [
        { category: "Sam", measure: 0.3 },
        { category: "Peter", measure: 0.25 },
        { category: "John", measure: 0.15 },
        { category: "Rick", measure: 0.05 },
        { category: "Lenny", measure: 0.18 },
        { category: "Paul", measure: 0.04 },
        { category: "Steve", measure: 0.03 }
      ];

      var width = 400,
        height = 400,
        outerRadius = Math.min(width, height) / 2,
        innerRadius = outerRadius * 0.999,
        // for animation
        innerRadiusFinal = outerRadius * 0.5,
        innerRadiusFinal3 = outerRadius * 0.45,
        color = d3.scale.category20(); //builtin range of colors
       // var d3_category20 = [ "#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d3", "#7f7f7f", "#c7c7c7", "#bcbd32", "#dbdb8d", "#17becf", "#9edae5" ];
      var vis = d3
        .select("#pieChart")
        // .append("svg:svg") //create the SVG element inside the <body>
        .data([dataset]) //associate our data with the document
        .attr("width", width) //set the width and height of our visualization (these will be attributes of the <svg> tag
        .attr("height", height)
        .append("svg:g") //make a group to hold our pie chart
        .attr(
          "transform",
          "translate(" + outerRadius + "," + outerRadius + ")"
        ); //move the center of the pie chart from 0, 0 to radius, radius

      var arc = d3.svg
        .arc() //this will create <path> elements for us using arc data
        .outerRadius(outerRadius)
        .innerRadius(innerRadius);

      // for animation
      var arcFinal = d3.svg
        .arc()
        .innerRadius(innerRadiusFinal)
        .outerRadius(outerRadius);
      var arcFinal3 = d3.svg
        .arc()
        .innerRadius(innerRadiusFinal3)
        .outerRadius(outerRadius);

      var pie = d3.layout
        .pie() //this will create arc data for us given a list of values
        .value(function(d) {
          return d.measure;
        }); //we must tell it out to access the value of each element in our data array

      var arcs = vis
        .selectAll("g.slice") //this selects all <g> elements with class slice (there aren't any yet)
        .data(pie) //associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties)
        .enter() //this will create <g> elements for every "extra" data element that should be associated with a selection. The result is creating a <g> for every object in the data array
        .append("svg:g") //create a group to hold each slice (we will have a <path> and a <text> element associated with each slice)
        .attr("class", "slice") //allow us to style things in the slices (like text)
        .on("mouseover", mouseover)
        .on("mouseout", mouseout)
       .on("click", this.up);

      arcs
        .append("svg:path")
        .attr("fill", function(d, i) {
          return color(i);
        }) //set the color for each slice to be chosen from the color function defined above
        .attr("d", arc) //this creates the actual SVG path using the associated data (pie) with the arc drawing function
        .append("svg:title") //mouseover title showing the figures
        .text(function(d) {
          return d.data.category + ": " + formatAsPercentage(d.data.measure);
        });

      d3.selectAll("g.slice")
        .selectAll("path")
        .transition()
        .duration(750)
        .delay(10)
        .attr("d", arcFinal);

      // Add a label to the larger arcs, translated to the arc centroid and rotated.
      // source: http://bl.ocks.org/1305337#index.html
      arcs
        .filter(function(d) {
          return d.endAngle - d.startAngle > 0.2;
        })
        .append("svg:text")
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
          return (
            "translate(" + arcFinal.centroid(d) + ")rotate(" + angle(d) + ")"
          );
        })
        //.text(function(d) { return formatAsPercentage(d.value); })
        .text(function(d) {
          return d.data.category;
        });

      // Computes the label angle of an arc, converting from radians to degrees.
      function angle(d) {
        var a = ((d.startAngle + d.endAngle) * 90) / Math.PI - 90;
        return a > 90 ? a - 180 : a;
      }

      // Pie chart title
      vis
        .append("svg:text")
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .text("Revenue Share 2012")
        .attr("class", "title");

      function mouseover() {
        d3.select(this)
          .select("path")
          .transition()
          .duration(750)
          //.attr("stroke","red")
          //.attr("stroke-width", 1.5)
          .attr("d", arcFinal3);
      }

      function mouseout() {
        d3.select(this)
          .select("path")
          .transition()
          .duration(750)
          //.attr("stroke","blue")
          //.attr("stroke-width", 1.5)
          .attr("d", arcFinal);
      }

      function up(d, i) {
        /* update bar chart when user selects piece of the pie chart */
        //updateBarChart(dataset[i].category);
        // this.state.onClick(d)
        // console.log(this.state)
        // console.log(this.props)

        //updateBarChart(d.data.category, color(i));
        // update info for elapsed time/speed
        // updateLineChart(d.data.category, color(i));
      }

  }
  up = (d, i) => {
    this.props.onClick(d);
    this.updateBarChart(d.data.category, this.state.color(i))
  }

  render() {
    return (
      <div id="charts">
        <svg id="pieChart">
        </svg>
        <svg id="barChart">
        </svg>
      </div>
    )
  }
}