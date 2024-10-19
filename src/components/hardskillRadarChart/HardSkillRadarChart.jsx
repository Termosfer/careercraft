import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";
const HardSkillRadarChart = ({ allReport }) => {
  const data = [
    {
      name: "Research & Discovery",
      x: allReport && allReport[7] ? allReport[7].percentageCorrect : "",
    },
    {
      name: "Product Analytics",
      x: allReport && allReport[5] ? allReport[5].percentageCorrect : "",
    },
    {
      name: "Product Planning",
      x: allReport && allReport[8] ? allReport[8].percentageCorrect : "",
    },
    {
      name: "Customer Experience Management",
      x: allReport && allReport[6] ? allReport[6].percentageCorrect : "",
    },
    {
      name: "Business Domain",
      x: allReport && allReport[4] ? allReport[4].percentageCorrect : "",
    },
    {
      name: "Business Model & Economy",
      x: allReport && allReport[3] ? allReport[3].percentageCorrect : "",
    },
    {
      name: "Sales & Marketing",
      x: allReport && allReport[2] ? allReport[2].percentageCorrect : "",
    },
    {
      name: "Product Design",
      x: allReport && allReport[1] ? allReport[1].percentageCorrect : "",
    },
    {
      name: "Development & Delivery",
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
      {<PolarAngleAxis dataKey="name" />}
      {<PolarRadiusAxis
        angle={90}
        ticks={[0, 20, 40, 60, 80, 100]}
        domain={[0, 0]}
        tickFormatter={(value) => value}
      />}
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

export default HardSkillRadarChart;
