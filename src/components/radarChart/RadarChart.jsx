import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";
const RChart = ({ allReport }) => {
  const data = allReport?.map((report) => ({
    name: report.skillName,
    x: report.percentageCorrect,
  }));

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
