import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
const RChart = ({ allReport }) => {
  const data = [
    {
      name: "Communication",
      x: allReport && allReport[4] ? allReport[4].percentageCorrect : "",
    },
    {
      name: "Personal Qualities",
      x: allReport && allReport[3] ? allReport[3].percentageCorrect : "",
    },
    {
      name: "Critical Thinking",
      x: allReport && allReport[2] ? allReport[2].percentageCorrect : "",
    },
    {
      name: "Leadership",
      x: allReport && allReport[1] ? allReport[1].percentageCorrect : "",
    },
    {
      name: "Teamwork",
      x: allReport && allReport[0] ? allReport[0].percentageCorrect : "",
    },
  ];
  /* const data = allReport?.map((report) => ({
    name: report.skillName,
    x: report.percentageCorrect,
  })); */

  return (
    <RadarChart
      height={650}
      width={650}
      className="w-100"
      outerRadius="80%"
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis
        angle={90}
        ticks={[0, 20, 40, 60, 80, 100]}
        domain={[0, 0]}
        tickFormatter={(value) => value}
      />
      <Radar
        dataKey="x"
        stroke="#0F77FF"
        fill="#408FFF"
        fillOpacity={0.5}
        dot={{ stroke: "#0F77FF", strokeWidth: 2, r: 1 }}
      />
    </RadarChart>
  );
};

export default RChart;
