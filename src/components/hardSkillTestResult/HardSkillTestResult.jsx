import React from "react";
import { Container, Row, Col, Table, ProgressBar } from "react-bootstrap";
import ChartAxe from "../chartAxe/ChartAxe";
import star from "../../assets/img/star.png";
import RChart from '../radarChart/RadarChart';
import { Gauge } from '@mui/x-charts';
const HardSkillTestResult = () => {

  const exampleData = [
    { name: "Communication", x: 70 },
    { name: "Personal Qualities", x: 85 },
    { name: "Critical Thinking", x: 60 },
    { name: "Leadership", x: 75 },
    { name: "Teamwork", x: 90 },
    { name: "Problem Solving", x: 65 },
    { name: "Time Management", x: 80 },
    { name: "Creativity", x: 55 },
    { name: "Technical Skills", x: 75 },
  ];
  return (
    <>
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
              <div>
                <p className="text-center">Your Overall Score</p>
                <Gauge width={350} height={150} value={40} startAngle={-90} endAngle={90} />
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
        </Col>
      </Container>
      <div className=" d-flex flex-column align-items-center">
        <h2 className="text-center pt-5">Here’s Your Results...</h2>
        <RChart allReport={exampleData} />
      </div>
      <Container className="p-5">
        <h1 className="text-center pb-5"><span className="text-primary">Hard Skills</span> Overview & <span className="text-primary">Development</span> Plan</h1>
        <Table striped bordered hover className="bg-danger">
          <thead height={60}>
            <tr style={{ fontSize: '14px', verticalAlign: "middle", textAlign: "center" }}>
              <th style={{textAlign:"left"}} >Hard Skills</th>
              <th style={{ whiteSpace: "nowrap" }}>Current Skill Level</th>
              <th width={420}>Personalized Recommendations</th>
              <th width={420}>Action Plan</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ fontSize: '12px', verticalAlign: "middle", textAlign: "center" }}>
              <td style={{textAlign:"left"}}>Research & Discovery</td>
              <td>
                <ProgressBar variant="primary" now={60} />
                Advanced
              </td>
              <td style={{textAlign:'left'}}>Focus on conducting longitudinal studies and exploring advanced ethnographic techniques to uncover deeper consumer insights.</td>
              <td style={{textAlign:'left'}}>Apply these techniques in real-world projects, particularly in untapped market segments. Consider collaborating with industry experts to refine your approach.</td>
            </tr>
            <tr style={{ fontSize: '12px', verticalAlign: "middle", textAlign: "center" }}>
              <td style={{textAlign:"left"}}>Product Analytics</td>
              <td><ProgressBar variant="primary" now={60} /> Intermediate </td>
              <td style={{textAlign:'left'}}>Enhance your skills in predictive analytics and data storytelling.</td>
              <td style={{textAlign:'left'}}>Integrate advanced analytics tools like Power BI or Looker into your workflow. Participate in online forums or communities to stay updated on best practices.</td>
            </tr>
            <tr style={{ fontSize: '12px', verticalAlign: "middle", textAlign: "center" }}>
              <td style={{textAlign:"left"}}>Product Planning</td>
              <td><ProgressBar variant="primary" now={60} /> Beginner </td>
              <td style={{textAlign:'left'}}>Dive into advanced Agile frameworks and portfolio management.</td>
              <td style={{textAlign:'left'}}>Experiment with lean planning techniques for more flexible, rapid iteration cycles. Share your strategies with peers for feedback and improvement.</td>
            </tr>
            <tr style={{ fontSize: '12px', verticalAlign: "middle", textAlign: "center" }}>
              <td style={{textAlign:"left"}}>Customer Experience Management</td>
              <td><ProgressBar variant="primary" now={60} /> Advanced</td>
              <td style={{textAlign:'left'}}>Create detailed customer journey maps and identify pain points.</td>
              <td style={{textAlign:'left'}}>Run a customer journey workshop with cross-functional teams. Implement feedback loops to continuously improve the customer experience.</td>
            </tr>
            <tr style={{ fontSize: '12px', verticalAlign: "middle", textAlign: "center" }}>
              <td style={{textAlign:"left"}}>Business Domain</td>
              <td><ProgressBar variant="primary" now={60} /> Beginner</td>
              <td style={{textAlign:'left'}}>Deepen your understanding of industry trends and competitive landscape.</td>
              <td style={{textAlign:'left'}}>Stay updated on industry reports and news. Network with professionals in your field to exchange insights and enhance your knowledge.</td>
            </tr>
            <tr style={{ fontSize: '12px', verticalAlign: "middle", textAlign: "center" }}>
              <td style={{textAlign:"left"}}>Business Model & Economy</td>
              <td><ProgressBar variant="primary" now={60} /> Intermediate</td>
              <td style={{textAlign:'left'}}>Strengthen your economic analysis and identify revenue streams in emerging markets.</td>
              <td style={{textAlign:'left'}}>Test different business models through case studies or simulations. Analyze how various economic conditions impact these models.</td>
            </tr>
            <tr style={{ fontSize: '12px', verticalAlign: "middle", textAlign: "center" }}>
              <td style={{textAlign:"left"}}>Sales & Marketing</td>
              <td><ProgressBar variant="primary" now={60} /> Intermediate</td>
              <td style={{textAlign:'left'}}>Enhance your data-driven marketing tactics and conversion rate optimization.</td>
              <td style={{textAlign:'left'}}>Run A/B tests on your campaigns to refine your messaging. Engage with a mentor to review your strategies and identify new opportunities.</td>
            </tr>
            <tr style={{ fontSize: '12px', verticalAlign: "middle", textAlign: "center" }}>
              <td style={{textAlign:"left"}}>Product Design</td>
              <td><ProgressBar variant="primary" now={60} /> Intermediate</td>
              <td style={{textAlign:'left'}}>Explore voice and gesture-based design, focusing on micro-interactions and seamless transitions.</td>
              <td style={{textAlign:'left'}}>Work on VUI projects or design prototypes incorporating AR/VR. Share your designs in design communities to get feedback and refine your approach.</td>
            </tr>
            <tr style={{ fontSize: '12px', verticalAlign: "middle", textAlign: "center" }}>
              <td style={{textAlign:"left"}}>Development & Delivery</td>
              <td><ProgressBar variant="primary" now={60} /> Intermediate</td>
              <td style={{textAlign:'left'}}>Gain further exposure to DevOps and CI/CD processes for faster, reliable product delivery.</td>
              <td style={{textAlign:'left'}}>Set up a CI/CD pipeline on a small-scale project and optimize it for faster deployment cycles. Document your process and share insights with your team.</td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <div style={{ background: "#EBF4FF" }}>
        <Container className="w-75 p-5">
          <h1 className="text-center">We've <span className="text-primary">Assessed</span> Your Hard Skills</h1>
          <h1 className="text-center pb-5">Across Critical <span className="text-primary">Professional Domains</span></h1>
          <Row>
            <Col lg={4} className="mb-3">
              <div className='skills-result-page pb-4'>
                <div className='d-flex flex-column'>
                  <p className='fw-bolder'>Name</p>
                  <span>The ability to clearly and effectively convey ideas, ensuring that your message is understood by others.</span>
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
                  <p className='fw-bolder'>Name</p>
                  <span>The ability to clearly and effectively convey ideas, ensuring that your message is understood by others.</span>
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
                  <p className='fw-bolder'>Name</p>
                  <span>The ability to clearly and effectively convey ideas, ensuring that your message is understood by others.</span>
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
                  <p className='fw-bolder'>Name</p>
                  <span>The ability to clearly and effectively convey ideas, ensuring that your message is understood by others.</span>
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
                  <p className='fw-bolder'>Name</p>
                  <span>The ability to clearly and effectively convey ideas, ensuring that your message is understood by others.</span>
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
                  <p className='fw-bolder'>Name</p>
                  <span>The ability to clearly and effectively convey ideas, ensuring that your message is understood by others.</span>
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
                  <p className='fw-bolder'>Name</p>
                  <span>The ability to clearly and effectively convey ideas, ensuring that your message is understood by others.</span>
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
                  <p className='fw-bolder'>Name</p>
                  <span>The ability to clearly and effectively convey ideas, ensuring that your message is understood by others.</span>
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
                  <p className='fw-bolder'>Name</p>
                  <span>The ability to clearly and effectively convey ideas, ensuring that your message is understood by others.</span>
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
