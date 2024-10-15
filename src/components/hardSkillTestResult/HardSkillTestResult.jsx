import React, { useEffect } from "react";
import { Container, Row, Col, Table, ProgressBar, Button } from "react-bootstrap";
import "./hardskill.css";
import ChartAxe from "../chartAxe/ChartAxe";
import star from "../../assets/img/star.png";
import { Gauge, gaugeClasses } from "@mui/x-charts";
import { Link } from "react-router-dom";
import HardSkillRadarChart from "../hardskillRadarChart/HardSkillRadarChart";
import { useDispatch, useSelector } from "react-redux";
import { getDownload } from "../../config/download";
import data from "../../data/hsdata.json"
import { getAllReports, getReports } from "../../config/authReport";
const HardSkillTestResult = () => {
  const dispatch = useDispatch();
  const allReport = useSelector((state) => state.report.allreport);
  const totalReport = useSelector((state) => state.report.raport);
  console.log(totalReport, "total")
  console.log(allReport, "asd")
  useEffect(() => {
    const fetch = async () => {
      await dispatch(getReports(2));
      await dispatch(getAllReports(2));
    }
    fetch()
  }, [dispatch]);
  const onButtonClick = () => {
    dispatch(getDownload(2))
  };
  const value = totalReport && totalReport[0] ? totalReport[0].averagePercentageCorrect.toFixed(0) : "";

  return (
    <>
      <Container className="w-75 px-5">
        <h1 className="text-center py-5">Your Detailed Hard Skills Results</h1>
        <Row className="pb-5">
          <Col lg={7}>
            <p>Congratulations! </p>
            <span>
              Your overall score is{" "}
              <span className="text-primary fw-bolder">
                {totalReport && totalReport[0]
                  ? totalReport[0].averagePercentageCorrect.toFixed(0)
                  : ""}
                % (
                {totalReport && totalReport[0]
                  ? totalReport[0].skillLevel.slice(0, 1) +
                  totalReport[0].skillLevel.slice(1).toLowerCase()
                  : ""}
                )
              </span>
              , reflecting your strong proficiency across key areas. You’re
              excelling in Product Design and Sales & Marketing, with room to
              grow in Business Domain and Product Analytics. Continue leveraging
              your strengths and focus on the areas for improvement to reach
              even higher levels of expertise.
            </span>
            <p className="mt-3">Keep up the great work! 🌟</p>
          </Col>
          <Col lg={5}>
            <div className="">
              <p className="text-center fw-bolder fs-5">Your Overall Score</p>
              <Gauge
                width={400}
                height={170}
                value={value}
                /* formatValue={(value) => `${value}%`} */
                startAngle={-90}
                endAngle={90}
                sx={{
                  [`& .${gaugeClasses.valueText}`]: {
                    fontSize: 50,
                    transform: "translate(0px, -40px)",
                    fontWeight: "bold",
                  },
                }}
              />
            </div>
          </Col>
        </Row>
        <Col lg={10} className="py-5 mx-auto">
          <h2 className="text-center fw-bold">Skill Level Comparison</h2>
          <p className="text-center pb-3">
            See How Your Skills Compare to the Industry Average
          </p>
          <p className="text-center">
            The bar graph below provides a visual comparison of your skill
            levels against industry averages. This helps you understand where
            you stand and identify areas for further development.
          </p>
          <ChartAxe allReport={allReport} />
          <div className="star-div d-flex align-items-center justify-content-center border mx-auto rounded mt-4 py-2 px-1 gap-1">
            <img src={star} width={20} height={20} alt="star" />
            <span>
              You rank in the top <span className="text-primary">20%</span> for
              <span className="text-primary"> Product Analytics</span> among
              peers in your industry.
            </span>
          </div>
        </Col>
      </Container>
      <div className=" d-flex flex-column align-items-center">
        <h2 className="text-center pt-5">Here’s Your Results...</h2>
        <HardSkillRadarChart allReport={allReport} />
      </div>
      <Container className="p-5">
        <h1 className="text-center pb-5">
          <span className="text-primary">Hard Skills</span> Overview &{" "}
          <span className="text-primary">Development</span> Plan
        </h1>
        <Table striped bordered hover className="bg-danger">
          <thead height={60}>
            <tr>
              <th>
                Hard Skills{" "}
                <span className="border rounded-pill px-3 py-1">{allReport?.length}</span>
              </th>
              <th>Current Skill Level</th>
              <th width={420}>Personalized Recommendations</th>
              <th width={420}>Action Plan</th>
            </tr>
          </thead>
          <tbody>
            {
              allReport?.map(reports => {
                const description = data.table.find(item => item.skillId === reports.skillId);
                return (
                  <tr key={reports.skillId}>
                    <td>{reports.skillName}</td>
                    <td>
                      <ProgressBar variant="primary" now={reports.percentageCorrect} />
                      {reports.skillLevel.slice(0, 1) + reports.skillLevel.slice(1).toLowerCase()}
                    </td>
                    <td>{description?.recommendations}</td>
                    <td>{description?.action}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </Container>
      <div className="bgColor-container">
        <Container className="w-75 p-5">
          <h1 className="text-center">
            We've <span className="text-primary">Assessed</span> Your Hard
            Skills
          </h1>
          <h1 className="text-center pb-5">
            Across Critical{" "}
            <span className="text-primary">Professional Domains</span>
          </h1>
          <Row>
            {
              allReport?.map(reports => {
                const description = data.skill.find(item => item.skillId === reports.skillId);
                console.log(description,"asdfg")
                return (
                  <Col lg={4} className="mb-3" key={reports.skillId}>
                    <div className="skills-result-page pb-4">
                      <div className="d-flex flex-column">
                        <p className="fw-bolder">{reports.skillName}</p>
                        <span>{description?.description}</span>
                      </div>
                      <div className="d-flex flex-column">
                        <ProgressBar variant="primary" now={reports.percentageCorrect} />
                        <div className="d-flex justify-content-between text-primary fw-bolder">
                          <span>{reports.percentageCorrect}%</span>
                          <span>{reports.skillLevel.slice(0, 1) + reports.skillLevel.slice(1).toLowerCase()}</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                )
              })
            }
          </Row>
          <div className="d-flex justify-content-center gap-3 pt-5">
            <Link to="/freetest/hard-skill-test-result/testresultstwo">
              <Button variant="outline-primary" className="px-4">
                View Details
              </Button>
            </Link>
            <Button variant="outline-primary" className="px-4" onClick={onButtonClick}>
              Download Report
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HardSkillTestResult;
