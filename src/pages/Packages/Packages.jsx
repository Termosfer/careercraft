import { useRef, useState } from "react";
import "./packages.css";
import QushSVG from "../../components/SVG/QushSVG";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import photo1 from "../../assets/img/photo1.png";
import photo2 from "../../assets/img/photo2.png";
import photo3 from "../../assets/img/photo3.png";
import pack2 from "../../assets/img/pack2.png";
import pack1 from "../../assets/img/pack1.webp";
import plus from "../../assets/img/plus.png"
const Packages = () => {
  const topRef = useRef(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const handleScrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [open, setOpen] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const toggle = (index) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [index]: !prevOpen[index],
    }));
  };
  const handleClick = () => {
    if (token) {
      sessionStorage.setItem("shouldReload", "true");
      navigate("/freetest/hard-skill-test-result");
    } else {
      navigate("/auth/login");
    }
  };
  return (
    <div className="packages">
      <div ref={topRef}></div>
      <Container className="w-75">
        <div className="package-header pt-5 px-4">
          <h1 className="text-center pb-5">
            Unlock Your Full Potential with
            <span className="title-cc"> CareerCraft</span> Premium
          </h1>
          <Row className="py-5">
            <Col md={4} className="pt-5">
              <div className="packages-boxes py-4">
                <div>
                  <h5 className="text-center">Free Plan</h5>
                  <h3 className="text-center">$0<span>/month</span></h3>
                </div>
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
                <div>
                  <button className="btn btn-outline-primary w-100 py-2">
                    Get Started
                  </button>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="packages-boxes boxes  py-4">
                <div>
                  <h5 className="text-center">Pro Plan</h5>
                  <h3 className="text-center">$29<sup>.99</sup><span>/month</span>
                  </h3>
                </div>
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
                <div>
                  <button
                    onClick={handleClick}
                    className="btn btn-primary w-100 py-2"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </Col>
            <Col md={4} className="pt-5">
              <div className="packages-boxes 
              py-4">
                <div>
                  <h5 className="text-center">Premium Plan</h5>
                  <h3 className="text-center">$79<sup>.99</sup><span>/month</span>
                  </h3>
                </div>
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
                <div>
                  <button className="btn btn-outline-primary w-100 py-2">
                    Get Started
                  </button>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="elevate p-5">
            <Col lg={6} className="">
              <div className="left___side">
                  <h1>Elevate Premium</h1>
                  <p className="w-100">
                    Elevate your career by gaining full access to advanced skill
                    assessments and personalized growth recommendations.{" "}
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

                <div>
                <Button
                  variant="primary"
                  className=" w-25 py-2"
                  onClick={handleScrollToTop}
                  >
                  Buy now
                </Button>
                  </div>
              </div>
            </Col>
            <Col lg={6} className="">
              <div className="right___side ms-5">
                <img className="pack2" src={pack2} alt="pack1" />
                <img className="pack1" src={pack1} alt="pack2" />
              </div>
            </Col>
          </Row>
          
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
                  <h6>&ndash; Jane Doe</h6>
                  <p>Talent Development Manager</p>
                </div>
              </div>
            </div>

            <div className="profiles-p pp-2">
              <img src={photo2} alt="" />
              <div className="txt-p py-4">
                “CareerCraft has streamlined our team&apos;s learning process,
                helping us improve both efficiency and consistency.”
                <div className="position">
                  <h6>&ndash; Mark Johnson</h6>
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
                  <h6>&ndash; Sarah Lee</h6>
                  <p>Operations Manager</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="faq-section">
        <Container className="text-center  px-5">
          <h4 className="pb-5 fw-bold">FAQ</h4>
          <div className="questions">
            <div>
              <div onClick={() => toggle(1)}>
                <div className={`icon ${open[1] ? "rotate" : ""}`}>
                  <img src={plus} alt="plus" className="plus" />
                </div>
                Can I upgrade my package after enrolling in a lower-tier plan?
              </div>
              <div className={`question-answer ${open[1] ? "open" : ""}`}>
                <p>
                  Absolutely. You can upgrade to a higher-tier package at any
                  time.
                </p>
              </div>
              <hr />
            </div>
            <div>
              <div onClick={() => toggle(2)}>
                <div className={`icon ${open[2] ? "rotate" : ""}`}>
                  <img src={plus} alt="plus" className="plus" />
                </div>
                Are the courses self-paced or instructor-led?
              </div>
              <div className={`question-answer ${open[2] ? "open" : ""}`}>
                <p>
                  We offer a mix of self-paced and instructor-led courses,
                  tailored to your selected package.
                </p>
              </div>
              <hr />
            </div>
            <div>
              <div onClick={() => toggle(3)}>
                <div className={`icon ${open[3] ? "rotate" : ""}`}>
                  <img src={plus} alt="plus" className="plus" />
                </div>
                Is there a trial version available for CareerCraft packages?
              </div>
              <div className={`question-answer ${open[3] ? "open" : ""}`}>
                <p>
                  Yes, we provide a free trial for select packages, allowing you
                  to explore our offerings before committing.
                </p>
              </div>
              <hr />
            </div>
            <div>
              <div onClick={() => toggle(4)}>
                <div className={`icon ${open[4] ? "rotate" : ""}`}>
                  <img src={plus} alt="plus" className="plus" />
                </div>
                Can I cancel my subscription at any time?
              </div>
              <div className={`question-answer ${open[4] ? "open" : ""}`}>
                <p>
                  Yes, you may cancel your subscription at any time, with no
                  additional fees or penalties.
                </p>
              </div>
              <hr />
            </div>
            <div>
              <div onClick={() => toggle(5)}>
                <div className={`icon ${open[5] ? "rotate" : ""}`}>
                  <img src={plus} alt="plus" className="plus" />
                </div>
                Are CareerCraft packages suitable for professionals at all
                career levels?
              </div>
              <div className={`question-answer ${open[5] ? "open" : ""}`}>
                <p>
                  Yes, our packages are designed to support professionals across
                  all career stages, from entry-level to experienced executives.
                </p>
              </div>
              <hr />
            </div>
          </div>
        </Container>
      </div>

      <div className="package-bottom-section w-100">
        <Container className="bottom-cont w-75">
          <div className="h3-p">
            <h3 className="title-career">Ready to Elevate Your Career?</h3>
            <p>
              Unlock your potential with CareerCraft’s personalized skill
              development packages. Tailor your learning journey and stand out
              in your profession with expert guidance and resources.
            </p>
          </div>
          <Link to="/freetest">
            <Button variant="outline-light">Get Started Now</Button>
          </Link>
        </Container>
      </div>
    </div>
  );
};

export default Packages;
