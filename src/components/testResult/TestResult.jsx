import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./testresult.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import RChart from "../radarChart/RadarChart";
import { useDispatch, useSelector } from "react-redux";
import { getAllReports, getReports } from "../../config/authReport";
import { Link } from "react-router-dom";
import { getDownload } from "../../config/download";
import arrow from "../../assets/img/top-arrow.png";
import data from "../../data/ssdata.json";
const TestResult = () => {
  const dispatch = useDispatch();
  const totalReport = useSelector((state) => state.report.raport);
  const allReport = useSelector((state) => state.report.allreport);
  const user = useSelector((state) => state.user.username);
  const [color, setColor] = useState("#6FADFF");
  const [scoreName, setScoreName] = useState("Low");

  useEffect(() => {
    dispatch(getReports(1));
    dispatch(getAllReports(1));
  }, [dispatch]);

  useEffect(() => {
    if (totalReport) {
      if (
        totalReport[0].averagePercentageCorrect >= 60 &&
        totalReport[0].averagePercentageCorrect < 80
      ) {
        setColor("#0f77ff");
        setScoreName("Medium");
      } else if (totalReport[0].averagePercentageCorrect >= 80) {
        setColor("#094799");
        setScoreName("High");
      }
    }
  }, [totalReport]);
  const onButtonClick = () => {
    dispatch(getDownload(1));
  };
  useEffect(() => {
    const shouldReload = sessionStorage.getItem("shouldReload");
    if (shouldReload) {
      sessionStorage.removeItem("shouldReload");
      window.location.reload();
    }
  }, []);
  return (
    <>
      <Container className="w-75 test-res-cont p-5">
        <Row>
          <Col lg={12} className="py-4">
            <h1 className=" text-center pb-4">
              Thank you for completing the Soft Skills Assessment!
            </h1>
            <p className="text-center email-notif">
              Your detailed report has been emailed to{" "}
              <span className="text-primary">{user.email}</span>. If you don&apos;t
              see it in your inbox, please check your spam/junk folder.
            </p>
          </Col>
          <Col lg={6}>
            <div className="left-side d-flex flex-column">
              <p>How strong are your soft skills?</p>
              <div>
                <span>Did your overall score surprise you?</span>
                <p>
                  Take a moment to think about your strengths and where you can
                  grow. Every skill you improve brings you closer to being a
                  more effective professional.
                </p>
              </div>
              <div>
                <span>Elevate Your Potential:</span>
                <p>
                  Your score is a starting point. Explore each skill to see
                  where you excel and where there&apos;s room for improvement. Every
                  small step forward makes a difference.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="right-side">
              <div className="w-75 text-center">
                <span className="fw-bold fs-5">YOUR OVERALL SCORE</span>
                <h1 style={{ color: `${color}` }}>
                  {totalReport &&
                    totalReport[0].averagePercentageCorrect.toFixed(0)}
                  %
                </h1>

                <ProgressBar
                  now={totalReport && totalReport[0]?.averagePercentageCorrect}
                  className="w-75  mx-auto progressbar-test"
                />
              </div>
              <p className="fw-bold fs-4" style={{ color: `${color}` }}>
                {scoreName}
              </p>
            </div>
          </Col>
          <Col className="pt-5">
            <div className="d-flex gap-5">
              <div className="d-flex align-items-center gap-1">
                <span className="circle"></span>
                <span>low</span>
              </div>
              <div className="d-flex align-items-center gap-1">
                <span className="circle1"></span>
                <span>medium</span>
              </div>
              <div className="d-flex align-items-center gap-1">
                <span className="circle2"></span>
                <span>high</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="chart-bg-color d-flex flex-column align-items-center">
        <h2 className="text-center pt-5">Here&apos;s Your Results...</h2>
        <RChart allReport={allReport} />
      </div>
      <div className="skills-bg-color">
        <Container className="w-75 p-5">
          <Row>
            <Col className="pb-5">
              <h1 className="text-center pt-5">
                We&apos;ve Evaluated Your Soft Skills{" "}
              </h1>
              <h1 className="text-center">
                Across Key Areas for{" "}
                <span className="text-primary">Growth</span>
              </h1>
            </Col>
          </Row>
          <Row>
            {allReport?.slice(0, 3).map((reports) => {
              const description = data.find(
                (item) => item.skillId === reports.skillId
              )?.description;
              let scoreName;

              if (reports.percentageCorrect < 60) {
                scoreName = "Low";
              } else if (
                reports.percentageCorrect >= 60 &&
                reports.percentageCorrect < 80
              ) {
                scoreName = "Medium";
              } else {
                scoreName = "High";
              }
              return (
                <Col lg={4} className="mb-3" key={reports.skillId}>
                  <div className="skills-result-page pb-4">
                    <div className="d-flex flex-column">
                      <p className="fw-bolder">{reports.skillName}</p>
                      <span>{description}</span>
                    </div>
                    <div className="d-flex flex-column">
                      <ProgressBar
                        variant="primary"
                        now={reports.percentageCorrect}
                      />
                      <div className="d-flex justify-content-between text-primary fw-bolder">
                        <span>{reports.percentageCorrect}%</span>
                        <span>{scoreName}</span>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row className="d-flex justify-content-center">
            {allReport?.slice(3, 5).map((reports) => {
              const description = data.find(
                (item) => item.skillId === reports.skillId
              )?.description;
              let scoreName;
              if (reports.percentageCorrect < 60) {
                scoreName = "Low";
              } else if (
                reports.percentageCorrect >= 60 &&
                reports.percentageCorrect < 80
              ) {
                scoreName = "Medium";
              } else {
                scoreName = "High";
              }
              return (
                <Col lg={4} className="mb-3" key={reports.skillId}>
                  <div className="skills-result-page pb-4">
                    <div className="d-flex flex-column">
                      <p className="fw-bolder">{reports.skillName}</p>
                      <span>{description}</span>
                    </div>
                    <div className="d-flex flex-column">
                      <ProgressBar
                        variant="primary"
                        now={reports.percentageCorrect}
                      />
                      <div className="d-flex justify-content-between text-primary fw-bolder">
                        <span>{reports.percentageCorrect}%</span>
                        <span>{scoreName}</span>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          <div className=" d-flex justify-content-center gap-3 pt-5 ">
            <Link to="/freetest/test-result/testresultsone">
              <Button variant="outline-primary" className="px-5">
                View Details
              </Button>
            </Link>
            <Button
              variant="outline-primary"
              className="px-4"
              onClick={onButtonClick}
            >
              Download Report
            </Button>
          </div>
        </Container>
      </div>
      <div className="hard__skill_bgColor">
        <img src={arrow} alt="top-arrow" className="top__arrow" />
        <img src={arrow} alt="top-arrow" className="top__arrow1" />
        <Container className="w-75 p-5 text-center text-light d-grid gap-5">
          <div>
            <h1 className="pb-2 h1__hard-skill">
              Transform Your Career with In-Demand Hard Skills
            </h1>
            <p className="w-75 m-auto">
              Unlock your potential with tailored hard skills training designed
              for today&apos;s job market. From data analysis to software
              development, our expert-led courses empower you to excel and stand
              out.
            </p>
          </div>
          <div className="pt-4">
            <Link to="/packages">
              <Button variant="outline-light" className="px-4 py-2">
                View Hard Skills
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default TestResult;
