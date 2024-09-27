import React, { useEffect } from "react";
import { Container, Row, Col, Table, ProgressBar } from "react-bootstrap";
import ChartAxe from "../chartAxe/ChartAxe";
import star from "../../assets/img/star.png";
import { Gauge, gaugeClasses } from '@mui/x-charts';
import "./hardskill.css";
import { Link } from "react-router-dom";
import HardSkillRadarChart from "../hardskillRadarChart/HardSkillRadarChart";
import { getHardSkillReport, getHardSkillReports } from "../../config/authReport";
import { useDispatch, useSelector } from "react-redux";
const HardSkillTestResult = () => {
  const dispatch = useDispatch()
  const { hardSkillRaport, hardSkillRaports } = useSelector(state => state.report)
  console.log(hardSkillRaport, "hard")
  console.log(hardSkillRaports, "hardSkill")
  useEffect(() => {
    dispatch(getHardSkillReport())
    dispatch(getHardSkillReports())
  }, [])
  const value = hardSkillRaport && hardSkillRaport[0] ? hardSkillRaport[0].averagePercentageCorrect.toFixed(0) : "";
  return (
    <>
      <Container className="w-75 px-5">
        <h1 className="text-center py-5">Your Detailed Hard Skills Results</h1>
        <Row className="pb-5">
          <Col lg={7}>
            <p>Congratulations! </p>
            <span>
              Your overall score is <span className="text-primary fw-bolder">{hardSkillRaport && hardSkillRaport[0] ? hardSkillRaport[0].averagePercentageCorrect.toFixed(0) : ""}% ({hardSkillRaport && hardSkillRaport[0] ? hardSkillRaport[0].skillLevel.charAt(0).toUpperCase() + hardSkillRaport[0].skillLevel.slice(1).toLowerCase() : ""})</span>, reflecting your strong
              proficiency across key areas. You’re excelling in Product Design and
              Sales & Marketing, with room to grow in Business Domain and Product
              Analytics. Continue leveraging your strengths and focus on the areas
              for improvement to reach even higher levels of expertise.
            </span>
            <p className="mt-3">Keep up the great work! 🌟</p>
          </Col>
          <Col lg={5}>
            <div className="">
              <p className="text-center fw-bolder fs-5">Your Overall Score</p>
              <Gauge width={400} height={170} value={value}  formatValue={(value) => `${value}%`} startAngle={-90} endAngle={90} sx={{
                [`& .${gaugeClasses.valueText}`]: {
                  fontSize: 50,
                  transform: 'translate(0px, -40px)',
                  fontWeight: "bold"
                },
              }} />
            </div>
          </Col>
        </Row>
        <Col lg={10} className="py-5 mx-auto">
          <h2 className="text-center fw-bold">Skill Level Comparison</h2>
          <p className="text-center pb-3">
            See How Your Skills Compare to the Industry Average
          </p>
          <p className="text-center">
            The bar graph below provides a visual comparison of your skill levels
            against industry averages. This helps you understand where you stand
            and identify areas for further development.
          </p>
          <ChartAxe hardSkillRaports={hardSkillRaports}/>
          <div
            className="star-div d-flex align-items-center justify-content-center border mx-auto rounded mt-4 py-2 px-1 gap-1">
            <img src={star} width={20} height={20} alt="star" />
            <span>
              You rank in the top <span className="text-primary">20%</span> for
              <span className="text-primary"> Product Analytics</span> among peers
              in your industry.
            </span>
          </div>
        </Col>
      </Container>
      <div className=" d-flex flex-column align-items-center">
        <h2 className="text-center pt-5">Here’s Your Results...</h2>
        <HardSkillRadarChart allReport={hardSkillRaports} />
      </div>
      <Container className="p-5">
        <h1 className="text-center pb-5"><span className="text-primary">Hard Skills</span> Overview & <span className="text-primary">Development</span> Plan</h1>
        <Table striped bordered hover className="bg-danger">
          <thead height={60}>
            <tr>
              <th>Hard Skills <span className="border rounded-pill px-3 py-1">9</span></th>
              <th >Current Skill Level</th>
              <th width={420}>Personalized Recommendations</th>
              <th width={420}>Action Plan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Research & Discovery</td>
              <td>
                <ProgressBar variant="primary" now={hardSkillRaports && hardSkillRaports[7] ? hardSkillRaports[7].percentageCorrect : ""} />
                {hardSkillRaports && hardSkillRaports[7] ? hardSkillRaports[7].skillLevel.charAt(0).toUpperCase() + hardSkillRaports[7].skillLevel.slice(1).toLowerCase() : ""}
              </td>
              <td>Focus on conducting longitudinal studies and exploring advanced ethnographic techniques to uncover deeper consumer insights.</td>
              <td>Apply these techniques in real-world projects, particularly in untapped market segments. Consider collaborating with industry experts to refine your approach.</td>
            </tr>
            <tr>
              <td>Product Analytics</td>
              <td><ProgressBar variant="primary" now={hardSkillRaports && hardSkillRaports[5] ? hardSkillRaports[5].percentageCorrect : ""} />
              {hardSkillRaports && hardSkillRaports[5] ? hardSkillRaports[5].skillLevel.charAt(0).toUpperCase() + hardSkillRaports[5].skillLevel.slice(1).toLowerCase() : ""}
               </td>
              <td>Enhance your skills in predictive analytics and data storytelling.</td>
              <td>Integrate advanced analytics tools like Power BI or Looker into your workflow. Participate in online forums or communities to stay updated on best practices.</td>
            </tr>
            <tr>
              <td>Product Planning</td>
              <td><ProgressBar variant="primary" now={hardSkillRaports && hardSkillRaports[8] ? hardSkillRaports[8].percentageCorrect : ""} /> 
              {hardSkillRaports && hardSkillRaports[8] ? hardSkillRaports[8].skillLevel.charAt(0).toUpperCase() + hardSkillRaports[8].skillLevel.slice(1).toLowerCase() : ""}
               </td>
              <td>Dive into advanced Agile frameworks and portfolio management.</td>
              <td>Experiment with lean planning techniques for more flexible, rapid iteration cycles. Share your strategies with peers for feedback and improvement.</td>
            </tr>
            <tr>
              <td>Customer Experience Management</td>
              <td><ProgressBar variant="primary" now={hardSkillRaports && hardSkillRaports[6] ? hardSkillRaports[6].percentageCorrect : ""} /> 
              {hardSkillRaports && hardSkillRaports[6] ? hardSkillRaports[6].skillLevel.charAt(0).toUpperCase() + hardSkillRaports[6].skillLevel.slice(1).toLowerCase() : ""}
              </td>
              <td>Create detailed customer journey maps and identify pain points.</td>
              <td>Run a customer journey workshop with cross-functional teams. Implement feedback loops to continuously improve the customer experience.</td>
            </tr>
            <tr>
              <td>Business Domain</td>
              <td><ProgressBar variant="primary" now={hardSkillRaports && hardSkillRaports[4] ? hardSkillRaports[4].percentageCorrect : ""} /> 
              {hardSkillRaports && hardSkillRaports[4] ? hardSkillRaports[4].skillLevel.charAt(0).toUpperCase() + hardSkillRaports[4].skillLevel.slice(1).toLowerCase() : ""}
              </td>
              <td>Deepen your understanding of industry trends and competitive landscape.</td>
              <td>Stay updated on industry reports and news. Network with professionals in your field to exchange insights and enhance your knowledge.</td>
            </tr>
            <tr>
              <td>Business Model & Economy</td>
              <td><ProgressBar variant="primary" now={hardSkillRaports && hardSkillRaports[3] ? hardSkillRaports[3].percentageCorrect : ""} /> 
              {hardSkillRaports && hardSkillRaports[3] ? hardSkillRaports[3].skillLevel.charAt(0).toUpperCase() + hardSkillRaports[3].skillLevel.slice(1).toLowerCase() : ""}
              </td>
              <td>Strengthen your economic analysis and identify revenue streams in emerging markets.</td>
              <td>Test different business models through case studies or simulations. Analyze how various economic conditions impact these models.</td>
            </tr>
            <tr>
              <td>Sales & Marketing</td>
              <td><ProgressBar variant="primary" now={hardSkillRaports && hardSkillRaports[2] ? hardSkillRaports[2].percentageCorrect : ""} /> 
              {hardSkillRaports && hardSkillRaports[2] ? hardSkillRaports[2].skillLevel.charAt(0).toUpperCase() + hardSkillRaports[2].skillLevel.slice(1).toLowerCase() : ""}
              </td>
              <td>Enhance your data-driven marketing tactics and conversion rate optimization.</td>
              <td>Run A/B tests on your campaigns to refine your messaging. Engage with a mentor to review your strategies and identify new opportunities.</td>
            </tr>
            <tr>
              <td>Product Design</td>
              <td><ProgressBar variant="primary" now={hardSkillRaports && hardSkillRaports[1] ? hardSkillRaports[1].percentageCorrect : ""} /> 
              {hardSkillRaports && hardSkillRaports[1] ? hardSkillRaports[1].skillLevel.charAt(0).toUpperCase() + hardSkillRaports[1].skillLevel.slice(1).toLowerCase() : ""}
              </td>
              <td>Explore voice and gesture-based design, focusing on micro-interactions and seamless transitions.</td>
              <td>Work on VUI projects or design prototypes incorporating AR/VR. Share your designs in design communities to get feedback and refine your approach.</td>
            </tr>
            <tr>
              <td>Development & Delivery</td>
              <td><ProgressBar variant="primary" now={hardSkillRaports && hardSkillRaports[0] ? hardSkillRaports[0].percentageCorrect : ""} /> 
              {hardSkillRaports && hardSkillRaports[0] ? hardSkillRaports[0].skillLevel.charAt(0).toUpperCase() + hardSkillRaports[0].skillLevel.slice(1).toLowerCase() : ""}
              </td>
              <td>Gain further exposure to DevOps and CI/CD processes for faster, reliable product delivery.</td>
              <td>Set up a CI/CD pipeline on a small-scale project and optimize it for faster deployment cycles. Document your process and share insights with your team.</td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <div className="bgColor-container">
        <Container className="w-75 p-5">
          <h1 className="text-center">We've <span className="text-primary">Assessed</span> Your Hard Skills</h1>
          <h1 className="text-center pb-5">Across Critical <span className="text-primary">Professional Domains</span></h1>
          <Row>
            <Col lg={4} className="mb-3">
              <div className='skills-result-page pb-4'>
                <div className='d-flex flex-column'>
                  <p className='fw-bolder'>Research & Discovery</p>
                  <span>The ability to gather and analyze data to uncover insights and identify opportunities for innovation.</span>
                  <Link>Read more</Link>
                </div>
                <div className="d-flex flex-column">
                  <ProgressBar variant="primary" now={hardSkillRaports && hardSkillRaports[7] ? hardSkillRaports[7].percentageCorrect : ""} />
                  <div className='d-flex justify-content-between text-primary fw-bolder'>
                    <span>{hardSkillRaports && hardSkillRaports[7] ? hardSkillRaports[7].percentageCorrect : ""}%</span>
                    <span>{hardSkillRaports && hardSkillRaports[7] ? hardSkillRaports[7].skillLevel.charAt(0).toUpperCase() + hardSkillRaports[7].skillLevel.slice(1).toLowerCase() : ""}</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} className="mb-3">
              <div className='skills-result-page pb-4'>
                <div className='d-flex flex-column'>
                  <p className='fw-bolder'>Product Analytics</p>
                  <span>The skill to interpret data related to product performance and user behavior to inform strategic decisions.</span>
                  <Link>Read more</Link>
                </div>
                <div className="d-flex flex-column">
                  <ProgressBar variant="primary" now={hardSkillRaports && hardSkillRaports[5] ? hardSkillRaports[5].percentageCorrect : ""} />
                  <div className='d-flex justify-content-between text-primary fw-bolder'>
                    <span>{hardSkillRaports && hardSkillRaports[5] ? hardSkillRaports[5].percentageCorrect : ""}%</span>
                    <span>{hardSkillRaports && hardSkillRaports[5] ? hardSkillRaports[5].skillLevel.charAt(0).toUpperCase() + hardSkillRaports[5].skillLevel.slice(1).toLowerCase() : ""}</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} className="mb-3">
              <div className='skills-result-page pb-4'>
                <div className='d-flex flex-column'>
                  <p className='fw-bolder'>Product Planning</p>
                  <span>The capability to develop strategies and roadmaps for product development and market entry.</span>
                  <Link>Read more</Link>
                </div>
                <div className="d-flex flex-column">
                  <ProgressBar variant="primary" now={hardSkillRaports && hardSkillRaports[8] ? hardSkillRaports[8].percentageCorrect : ""} />
                  <div className='d-flex justify-content-between text-primary fw-bolder'>
                    <span>{hardSkillRaports && hardSkillRaports[8] ? hardSkillRaports[8].percentageCorrect : ""}%</span>
                    <span>{hardSkillRaports && hardSkillRaports[8] ? hardSkillRaports[8].skillLevel.charAt(0).toUpperCase() + hardSkillRaports[8].skillLevel.slice(1).toLowerCase() : ""}</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} className="mb-3">
              <div className='skills-result-page pb-4'>
                <div className='d-flex flex-column'>
                  <p className='fw-bolder'>Customer Experience Management</p>
                  <span>Enhancing customer satisfaction and loyalty.</span>
                  <Link>Read more</Link>
                </div>
                <div className="d-flex flex-column">
                  <ProgressBar variant="primary" now={hardSkillRaports && hardSkillRaports[6] ? hardSkillRaports[6].percentageCorrect : ""} />
                  <div className='d-flex justify-content-between text-primary fw-bolder'>
                    <span>{hardSkillRaports && hardSkillRaports[6] ? hardSkillRaports[6].percentageCorrect : ""}%</span>
                    <span>{hardSkillRaports && hardSkillRaports[6] ? hardSkillRaports[6].skillLevel.charAt(0).toUpperCase() + hardSkillRaports[6].skillLevel.slice(1).toLowerCase() : ""}</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} className="mb-3">
              <div className='skills-result-page pb-4'>
                <div className='d-flex flex-column'>
                  <p className='fw-bolder'>Business Domain</p>
                  <span>Knowledge of industry trends, market dynamics, and competitive landscape to drive strategic decisions.</span>
                  <Link>Read more</Link>
                </div>
                <div className="d-flex flex-column">
                  <ProgressBar variant="primary" now={hardSkillRaports && hardSkillRaports[4] ? hardSkillRaports[4].percentageCorrect : ""} />
                  <div className='d-flex justify-content-between text-primary fw-bolder'>
                    <span>{hardSkillRaports && hardSkillRaports[4] ? hardSkillRaports[4].percentageCorrect : ""}%</span>
                    <span>{hardSkillRaports && hardSkillRaports[4] ? hardSkillRaports[4].skillLevel.charAt(0).toUpperCase() + hardSkillRaports[4].skillLevel.slice(1).toLowerCase() : ""}</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} className="mb-3">
              <div className='skills-result-page pb-4'>
                <div className='d-flex flex-column'>
                  <p className='fw-bolder'>Business Model & Economy</p>
                  <span>Developing business models and understanding economic impacts.</span>
                  <Link>Read more</Link>
                </div>
                <div className="d-flex flex-column">
                  <ProgressBar variant="primary" now={hardSkillRaports && hardSkillRaports[3] ? hardSkillRaports[3].percentageCorrect : ""} />
                  <div className='d-flex justify-content-between text-primary fw-bolder'>
                    <span>{hardSkillRaports && hardSkillRaports[3] ? hardSkillRaports[3].percentageCorrect : ""}%</span>
                    <span>{hardSkillRaports && hardSkillRaports[3] ? hardSkillRaports[3].skillLevel.charAt(0).toUpperCase() + hardSkillRaports[3].skillLevel.slice(1).toLowerCase() : ""}</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} className="mb-3">
              <div className='skills-result-page pb-4'>
                <div className='d-flex flex-column'>
                  <p className='fw-bolder'>Sales & Marketing</p>
                  <span>The skill to create and execute strategies for promoting products and driving sales growth.</span>
                  <Link>Read more</Link>
                </div>
                <div className="d-flex flex-column">
                  <ProgressBar variant="primary" now={hardSkillRaports && hardSkillRaports[2] ? hardSkillRaports[2].percentageCorrect : ""} />
                  <div className='d-flex justify-content-between text-primary fw-bolder'>
                    <span>{hardSkillRaports && hardSkillRaports[2] ? hardSkillRaports[2].percentageCorrect : ""}%</span>
                    <span>{hardSkillRaports && hardSkillRaports[2] ? hardSkillRaports[2].skillLevel.charAt(0).toUpperCase() + hardSkillRaports[2].skillLevel.slice(1).toLowerCase() : ""}</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} className="mb-3">
              <div className='skills-result-page pb-4'>
                <div className='d-flex flex-column'>
                  <p className='fw-bolder'>Product Design</p>
                  <span>The ability to create functional and aesthetically pleasing product designs that meet user needs.</span>
                  <Link>Read more</Link>
                </div>
                <div className="d-flex flex-column">
                  <ProgressBar variant="primary" now={hardSkillRaports && hardSkillRaports[1] ? hardSkillRaports[1].percentageCorrect : ""} />
                  <div className='d-flex justify-content-between text-primary fw-bolder'>
                    <span>{hardSkillRaports && hardSkillRaports[1] ? hardSkillRaports[1].percentageCorrect : ""}%</span>
                    <span>{hardSkillRaports && hardSkillRaports[1] ? hardSkillRaports[1].skillLevel.charAt(0).toUpperCase() + hardSkillRaports[1].skillLevel.slice(1).toLowerCase() : ""}</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} className="mb-3">
              <div className='skills-result-page pb-4'>
                <div className='d-flex flex-column'>
                  <p className='fw-bolder'>Development & Delivery</p>
                  <span>The skill to manage and execute the development process, ensuring timely and quality product delivery.</span>
                  <Link>Read more</Link>
                </div>
                <div className="d-flex flex-column">
                  <ProgressBar variant="primary" now={hardSkillRaports && hardSkillRaports[0] ? hardSkillRaports[0].percentageCorrect : ""} />
                  <div className='d-flex justify-content-between text-primary fw-bolder'>
                    <span>{hardSkillRaports && hardSkillRaports[0] ? hardSkillRaports[0].percentageCorrect : ""}%</span>
                    <span>
                      {hardSkillRaports && hardSkillRaports[0] ?
                        hardSkillRaports[0].skillLevel.charAt(0).toUpperCase() + hardSkillRaports[0].skillLevel.slice(1).toLowerCase() : ""}
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HardSkillTestResult;
