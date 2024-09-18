import React from "react";
import { Container, Row, Col, Table, ProgressBar } from "react-bootstrap";
import ChartAxe from "../chartAxe/ChartAxe";
import star from "../../assets/img/star.png";
import { Gauge, gaugeClasses } from '@mui/x-charts';
import "./hardskill.css";
import { Link } from "react-router-dom";
import HardSkillRadarChart from "../hardskillRadarChart/HardSkillRadarChart";
const HardSkillTestResult = () => {

  return (
    <>
      <Container className="w-75 px-5">
        <h1 className="text-center py-5">Your Detailed Hard Skills Results</h1>
        <Row className="pb-5">
          <Col lg={7}>
            <p>Congratulations! </p>
            <span>
              Your overall score is <span className="text-primary fw-bolder">84% (Advanced)</span>, reflecting your strong
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
              <Gauge width={400} height={170} value={30} startAngle={-90} endAngle={90} sx={{
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
          <ChartAxe />
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
        <HardSkillRadarChart />
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
                <ProgressBar variant="primary" now={60} />
                Advanced
              </td>
              <td>Focus on conducting longitudinal studies and exploring advanced ethnographic techniques to uncover deeper consumer insights.</td>
              <td>Apply these techniques in real-world projects, particularly in untapped market segments. Consider collaborating with industry experts to refine your approach.</td>
            </tr>
            <tr>
              <td>Product Analytics</td>
              <td><ProgressBar variant="primary" now={60} /> Intermediate </td>
              <td>Enhance your skills in predictive analytics and data storytelling.</td>
              <td>Integrate advanced analytics tools like Power BI or Looker into your workflow. Participate in online forums or communities to stay updated on best practices.</td>
            </tr>
            <tr>
              <td>Product Planning</td>
              <td><ProgressBar variant="primary" now={60} /> Beginner </td>
              <td>Dive into advanced Agile frameworks and portfolio management.</td>
              <td>Experiment with lean planning techniques for more flexible, rapid iteration cycles. Share your strategies with peers for feedback and improvement.</td>
            </tr>
            <tr>
              <td>Customer Experience Management</td>
              <td><ProgressBar variant="primary" now={60} /> Advanced</td>
              <td>Create detailed customer journey maps and identify pain points.</td>
              <td>Run a customer journey workshop with cross-functional teams. Implement feedback loops to continuously improve the customer experience.</td>
            </tr>
            <tr>
              <td>Business Domain</td>
              <td><ProgressBar variant="primary" now={60} /> Beginner</td>
              <td>Deepen your understanding of industry trends and competitive landscape.</td>
              <td>Stay updated on industry reports and news. Network with professionals in your field to exchange insights and enhance your knowledge.</td>
            </tr>
            <tr>
              <td>Business Model & Economy</td>
              <td><ProgressBar variant="primary" now={60} /> Intermediate</td>
              <td>Strengthen your economic analysis and identify revenue streams in emerging markets.</td>
              <td>Test different business models through case studies or simulations. Analyze how various economic conditions impact these models.</td>
            </tr>
            <tr>
              <td>Sales & Marketing</td>
              <td><ProgressBar variant="primary" now={60} /> Intermediate</td>
              <td>Enhance your data-driven marketing tactics and conversion rate optimization.</td>
              <td>Run A/B tests on your campaigns to refine your messaging. Engage with a mentor to review your strategies and identify new opportunities.</td>
            </tr>
            <tr>
              <td>Product Design</td>
              <td><ProgressBar variant="primary" now={60} /> Intermediate</td>
              <td>Explore voice and gesture-based design, focusing on micro-interactions and seamless transitions.</td>
              <td>Work on VUI projects or design prototypes incorporating AR/VR. Share your designs in design communities to get feedback and refine your approach.</td>
            </tr>
            <tr>
              <td>Development & Delivery</td>
              <td><ProgressBar variant="primary" now={60} /> Intermediate</td>
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
                  <ProgressBar variant="primary" now={60} />
                  <div className='d-flex justify-content-between text-primary fw-bolder'>
                    <span>50%</span>
                    <span>scoreName</span>
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
                  <ProgressBar variant="primary" now={60} />
                  <div className='d-flex justify-content-between text-primary fw-bolder'>
                    <span>50%</span>
                    <span>scoreName</span>
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
                  <ProgressBar variant="primary" now={60} />
                  <div className='d-flex justify-content-between text-primary fw-bolder'>
                    <span>50%</span>
                    <span>scoreName</span>
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
                  <ProgressBar variant="primary" now={60} />
                  <div className='d-flex justify-content-between text-primary fw-bolder'>
                    <span>50%</span>
                    <span>scoreName</span>
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
                  <ProgressBar variant="primary" now={60} />
                  <div className='d-flex justify-content-between text-primary fw-bolder'>
                    <span>50%</span>
                    <span>scoreName</span>
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
                  <ProgressBar variant="primary" now={60} />
                  <div className='d-flex justify-content-between text-primary fw-bolder'>
                    <span>50%</span>
                    <span>scoreName</span>
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
                  <ProgressBar variant="primary" now={60} />
                  <div className='d-flex justify-content-between text-primary fw-bolder'>
                    <span>50%</span>
                    <span>scoreName</span>
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
                  <ProgressBar variant="primary" now={60} />
                  <div className='d-flex justify-content-between text-primary fw-bolder'>
                    <span>50%</span>
                    <span>scoreName</span>
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
                  <ProgressBar variant="primary" now={60} />
                  <div className='d-flex justify-content-between text-primary fw-bolder'>
                    <span>50%</span>
                    <span>scoreName</span>
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
