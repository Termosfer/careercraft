import React from "react";
import QushSVG from "../../components/SVG/QushSVG";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./packages.css";
import photo1 from "../../assets/img/photo1.png";
import photo2 from "../../assets/img/photo2.png";
import photo3 from "../../assets/img/photo3.png";
import { FaPlus } from "react-icons/fa6";
import pack1 from "../../assets/img/pack2.png"
import pack2 from "../../assets/img/pack1.png"

const Packages = () => {
  return (
    <div className="packages">
      <Container>
        <div className="package-header ">
          <h2 className="text-center pb-5">
            Unlock Your Full Potential with <span className="title-cc">CareerCraft</span> Premium
          </h2>
          <div className="row gap-2 packages-boxes justify-content-center">
            <Card className="mt-5">
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="text-center">Free Plan</Card.Title>
                <div>
                  <h3 className="text-center">
                    $0<span>/month</span>
                  </h3>
                  <ul>
                    <li>
                      <QushSVG />
                      Key soft skills assessment
                    </li>
                    <li>
                      <QushSVG />
                      Personalized soft skills guidance
                    </li>
                    <li>
                      <QushSVG />
                      Access to soft skills resources
                    </li>
                    <li>
                      <QushSVG />
                      Career plan for soft skills improvement
                    </li>
                  </ul>
                </div>
                <div className="">
                  <button className="btn btn-outline-primary w-100">
                    Get Started
                  </button>
                </div>
              </Card.Body>
            </Card>

            <Card className="mb-5">
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="text-center">Pro Plan</Card.Title>
                <div>
                  <h3 className="text-center">
                    $29<sup>.99</sup>
                    <span>/month</span>
                  </h3>
                  <ul>
                    <li>
                      <QushSVG />
                      50% hard skills assessment
                    </li>
                    <li>
                      <QushSVG />
                      Personalized guidance based on results
                    </li>
                    <li>
                      <QushSVG />
                      Resources for improving 50% of hard skills
                    </li>
                    <li>
                      <QushSVG />
                      Unlimited progress tracking
                    </li>
                    <li>
                      <QushSVG />
                      Priority support
                    </li>
                  </ul>
                </div>
                <Button variant="primary" className="w-100">Get started</Button>
              </Card.Body>
            </Card>

            <Card className="mt-5">
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="text-center">Premium Plan</Card.Title>
                <div>
                  <h3 className="text-center">
                    $99<sup>.99</sup>
                    <span>/month</span>
                  </h3>
                  <ul>
                    <li>
                      <QushSVG />
                      Product management assessment
                    </li>
                    <li>
                      <QushSVG />
                      Tailored career guidance for all hard skills
                    </li>
                    <li>
                      <QushSVG />
                      Access to a curated hard skills resource library
                    </li>
                    <li>
                      <QushSVG />
                      Personalized mentorship sessions
                    </li>
                  </ul>
                </div>
                <button className="btn btn-outline-primary w-100">
                  Get Started
                </button>
              </Card.Body>
            </Card>
          </div>


          <div className="elevate-cont">
            <Card className="elevate-card" style={{ width: "50rem" }}>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <div className="text-img row">
                  <div className="col-7">
                    <Card.Title className="elevate-h">Elevate Premium</Card.Title>
                    <p>
                      Elevate your career by gaining full access to advanced
                      skill assessments and personalized growth recommendations.{" "}
                    </p>
                    <ul>
                      <li>
                        <QushSVG />
                        Advanced hard skills insights
                      </li>
                      <li>
                        <QushSVG />
                        Personalized learning paths
                      </li>

                      <li>
                        <QushSVG />
                        Exclusive career resources
                      </li>
                    </ul>
                  </div>
                  <img className="col-1" src={pack1} alt="" />
                  <img className="pack2" src={pack2} alt="" />
                </div>
                <Button variant="primary">Buy now</Button>
              </Card.Body>
            </Card>

          </div>
        </div>
      </Container>

      <div className="blue-section">
        <Container>
          <h1 className="fs-1 text-center px-5">
            Trusted by thousands of professionals and organizations worldwide.
          </h1>

          <div className="profiles-cont d-flex justify-content-center gap-5">
            <div className="profiles-p">
              <img src={photo1} alt="" />
              <div className="txt-p py-4">
                “CareerCraft has transformed the way we approach skill
                development. The platform has cut down our training time by 50%,
                allowing us to focus on scaling with precision.”

                <div className="position">
                  <h6>– Jane Doe</h6>
                  <p>Talent Development Manager</p>
                </div>
              </div>
            </div>

            <div className="profiles-p pp-2">
              <img src={photo2} alt="" />
              <div className="txt-p py-4">
                “CareerCraft has streamlined our team's learning process,
                helping us improve both efficiency and consistency.”
                <div className="position">
                  <h6>– Mark Johnson</h6>
                  <p>Learning & Development Lead</p>
                </div>
              </div>
            </div>

            <div className="profiles-p">
              <img src={photo3} alt="" />
              <div className="txt-p py-4">
                “CareerCraft helped us centralize all our training materials and
                resources, offering guidance on how to upskill effectively.”

                <div className="position ">
                  <h6>– Sarah Lee</h6>
                  <p>Operations Manager</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="faq-section">
        <Container className="text-center">
          <h4 className="pb-5 fw-bold">FAQ</h4>

          <div className="questions">
            <p>
              <FaPlus />
              Can I upgrade my package after enrolling in a lower-tier plan?
            </p>
            <hr />
            <p>
              <FaPlus /> Are the courses self-paced or instructor-led?
            </p>
            <hr />
            <p>
              <FaPlus /> Is there a trial version available for CareerCraft
              packages?
            </p>
            <hr />
            <p>
              <FaPlus />
              Can I cancel my subscription at any time?
            </p>
            <hr />
            <p>
              <FaPlus />
              Are CareerCraft packages suitable for professionals at all career
              levels?
            </p>
            <hr />
          </div>
        </Container>
      </div>

      <div className="package-bottom-section w-100">
        <Container className="bottom-cont w-75">
          <div className="h3-p">
            <h3 className="title-career">
              Ready to Elevate Your Career?
            </h3>
            <p>
              Unlock your potential with CareerCraft’s personalized skill development packages. Tailor your learning journey and stand out in your profession with expert guidance and resources.
            </p>
          </div>
          <Button variant="primary">Get Started Now</Button>
        </Container>
      </div>
    </div>
  );
};

export default Packages;
