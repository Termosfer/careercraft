import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ChartAxe = ({allReport}) => {

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
      gridThickness: 1,
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
 
    data: [
      {
        type: "area",
        yValueFormatString: "",
        color: "rgba(15, 119, 255, 0.3)",
        dataPoints: [
          { label: "Research & Discovery", y: allReport && allReport[7] ? allReport[7].percentageCorrect : "" },
          { label: "Product Analytics", y: allReport && allReport[5] ? allReport[5].percentageCorrect : "" },
          { label: "Product Planning", y: allReport && allReport[8] ? allReport[8].percentageCorrect : "" },
          { label: "Customer Experience Management", y: allReport && allReport[6] ? allReport[6].percentageCorrect : "" },
          { label: "Business Domain", y: allReport && allReport[4] ? allReport[4].percentageCorrect : "" },
          { label: "Business Model & Economy", y: allReport && allReport[3] ? allReport[3].percentageCorrect : "" },
          { label: "Sales & Marketing", y: allReport && allReport[2] ? allReport[2].percentageCorrect : "" },
          { label: "Product Design", y: allReport && allReport[1] ? allReport[1].percentageCorrect : "" },
          { label: "Development & Delivery", y: allReport && allReport[0] ? allReport[0].percentageCorrect : "" },
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
