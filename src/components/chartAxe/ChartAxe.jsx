import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ChartAxe = ({hardSkillRaports}) => {
console.log(hardSkillRaports, "hardskillasda")

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
          { label: "Research & Discovery", y: hardSkillRaports && hardSkillRaports[7] ? hardSkillRaports[7].percentageCorrect : "" },
          { label: "Product Analytics", y: hardSkillRaports && hardSkillRaports[5] ? hardSkillRaports[5].percentageCorrect : "" },
          { label: "Product Planning", y: hardSkillRaports && hardSkillRaports[8] ? hardSkillRaports[8].percentageCorrect : "" },
          { label: "Customer Experience Management", y: hardSkillRaports && hardSkillRaports[6] ? hardSkillRaports[6].percentageCorrect : "" },
          { label: "Business Domain", y: hardSkillRaports && hardSkillRaports[4] ? hardSkillRaports[4].percentageCorrect : "" },
          { label: "Business Model & Economy", y: hardSkillRaports && hardSkillRaports[3] ? hardSkillRaports[3].percentageCorrect : "" },
          { label: "Sales & Marketing", y: hardSkillRaports && hardSkillRaports[2] ? hardSkillRaports[2].percentageCorrect : "" },
          { label: "Product Design", y: hardSkillRaports && hardSkillRaports[1] ? hardSkillRaports[1].percentageCorrect : "" },
          { label: "Development & Delivery", y: hardSkillRaports && hardSkillRaports[0] ? hardSkillRaports[0].percentageCorrect : "" },
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
