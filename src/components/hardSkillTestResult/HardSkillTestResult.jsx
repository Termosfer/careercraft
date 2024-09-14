import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import ChartAxe from "../chartAxe/ChartAxe";
import star from "../../assets/img/star.png";
import RChart from '../radarChart/RadarChart';
const HardSkillTestResult = () => {
  return (
    <Container className="w-75 px-5">
      <h1 className="text-center">Your Detailed Hard Skills Results</h1>
      <Row>
        <Col>
          <p>Congratulations! </p>
          <span>
            Your overall score is 84% (Advanced), reflecting your strong
            proficiency across key areas. You’re excelling in Product Design and
            Sales & Marketing, with room to grow in Business Domain and Product
            Analytics. Continue leveraging your strengths and focus on the areas
            for improvement to reach even higher levels of expertise.
          </span>
          <p className="mt-3">Keep up the great work! 🌟</p>
        </Col>
        <Col>
          <div className="right-side">
            <div className="w-75 text-center">
              <ProgressBar />
            </div>
          </div>
        </Col>
      </Row>
      <Col lg={10} className="mt-2 mx-auto">
        <h2 className="text-center fw-bold">Skill Level Comparison</h2>
        <p className="text-center">
          See How Your Skills Compare to the Industry Average
        </p>
        <p className="text-center">
          The bar graph below provides a visual comparison of your skill levels
          against industry averages. This helps you understand where you stand
          and identify areas for further development.
        </p>
        <ChartAxe />
        <div
          className="d-flex align-items-center justify-content-center border m-auto rounded mt-4 py-2 px-1 gap-1"
          style={{ width: "max-content" }}
        >
          <img src={star} width={20} height={20} alt="star" />
          <span>
            You rank in the top <span className="text-primary">20%</span> for
            <span className="text-primary"> Product Analytics</span> among peers
            in your industry.
          </span>
        </div>
        <div className="chart-bg-color d-flex flex-column align-items-center">
          <h2 className="text-center pt-5">Here’s Your Results...</h2>
          <RChart  />
        </div>
      </Col>
    </Container>
  );
};

export default HardSkillTestResult;
