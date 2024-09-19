import React, { Component } from "react";

import CanvasJSReact from "@canvasjs/react-charts";
 /* var CanvasJSnpm install @canvasjs/chartsReact = require('@canvasjs/react-charts'); */

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ChartAxe = () => {


  const options = {
    animationEnabled: true,
    animationDuration: 2500,
    theme: "light2",
    axisX: {
      labelAngle: 0,
      labelFontSize: 9,
      crosshair: {
        enabled: true,
        snapToDataPoint: true,
      },
      lineThickness: 1,
      tickLength: 0,
    },
    axisY: {
      title: "",
      minimum: 0,  
      maximum: 100,  
      interval: 10,  
      crosshair: {
        enabled: true,
        snapToDataPoint: true,
        labelFormatter: function (e) {
          return e.value + "%";
        },
      },
      gridThickness: 1,
      lineThickness: 1,
      tickLength: 0,
    },
    axisX: {
     /*  title: "", */
      /* minimum: 0,  
      maximum: 50,  
      interval: 10, */  
      /* crosshair: {
        enabled: true,
        snapToDataPoint: true,
        labelFormatter: function (e) {
          return e.value + "%";
        },
      }, */
      gridThickness: 1,
      lineThickness: 1,
      tickLength: 0,
    },
 
    data: [
      {
        type: "area",
        yValueFormatString: "",
        color: "rgba(15, 119, 255, 0.5)",
        dataPoints: [
          { label: "Research & Discovery", y: 75.3 },
          { label: "Product Analytics", y: 83.97 },
          { label: "Product Planning", y: 73.49 },
          { label: "Customer Experience Management", y: 84.16 },
          { label: "Business Domain", y: 84.86 },
          { label: "Business Model & Economy", y: 84.97 },
          { label: "Sales & Marketing", y: 55.13 },
          { label: "Product Design", y: 85.71 },
          { label: "Development & Delivery", y: 84.63 },
        ],
      },
    ],
  };
  return (
    <div>
      <div>
        <CanvasJSChart
          options={options}
           /* onRef={ref => this.chart = ref} */ 
        />
        
      </div>
    </div>
  );
};

export default ChartAxe;
