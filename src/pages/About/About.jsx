import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/AboutUsImg/Logo.png";
import img__1 from "../../assets/AboutUsImg/img__1.png";
import img__2 from "../../assets/AboutUsImg/img__2.png";
import img__3 from "../../assets/AboutUsImg/img__3.png";
import img__4 from "../../assets/AboutUsImg/img__4.png";
import img__7 from "../../assets/AboutUsImg/img__7.png";
import img__6 from "../../assets/AboutUsImg/img__6.png";
import img__5 from "../../assets/AboutUsImg/img__5.png";
import img__8 from "../../assets/AboutUsImg/img__8.png";
import img__10 from "../../assets/AboutUsImg/img__10.png";
import img__11 from "../../assets/AboutUsImg/img__11.png";
import img__12 from "../../assets/AboutUsImg/img__12.png";
import img__13 from "../../assets/AboutUsImg/img__13.png";
import img__14 from "../../assets/AboutUsImg/img__14.png";
import img__15 from "../../assets/AboutUsImg/img__15.png";
import "./about.css"
const About = () => {
  return (
    <Container className="w-75 py-5 px-3">
      <h1 className="text-center">Transform Your <span className="text-primary">Career Journey</span> with Cutting-Edge <span className="text-primary">AI Technology</span></h1>
      <Row className="px-3 py-5">
        <Col className="mb-3 pt-5"><img src={img__1} alt="img__1" className="img__1" /></Col>
        <Col className="mb-3"><img src={img__2} alt="img__2" className="img__1" /></Col>
        <Col className="mb-3 pt-5"><img src={img__3} alt="img__3" className="img__1" /></Col>
        <Col className="mb-3"><img src={img__4} alt="img__4" className="img__1" /></Col>
      </Row>

      <Col className="p-5 mx-2 bg-about">
        <div className="d-flex justify-content-between text-white pb-3">
          <h2 className="about-h2 fw-bold">Who We Are</h2>
          <img src={logo} className="logo__about" alt="logo" />
        </div>
        <p className="text-white p">CareerCraft Company revolutionizes skill enhancement with our innovative platform that integrates AI and advanced assessments. We provide personalized learning experiences and career guidance, designed to support individuals and organizations in achieving their unique goals. Our focus on cutting-edge technology and user-centric solutions drives continuous growth and ensures impactful professional development.</p>
      </Col>

      <Col className="py-5 mx-2">
        <h1 className="fw-bold pb-3">Our <span className="text-primary">Mission</span></h1>
        <p className="second-p">We are dedicated to putting our customers at the center of everything we do, providing tailored skill assessments and personalized career guidance. Using AI and advanced technology, we craft individualized learning paths that align with each person’s unique goals, ensuring continuous growth and success in their professional journey.</p>
      </Col>
      <div className="d-flex justify-content-between py-5">
        <img src={img__7} alt="img__7" className="img__7" />
        <div className="d-flex flex-column justify-content-between gap-5">
          <img src={img__5} alt="img__7" className="img__5" />
          <img src={img__6} alt="img__7" className="img__6" />
        </div>
      </div>
      <Row className="py-5 px-2">
        <Col className="d-flex flex-column gap-5 py-5 ps-1">
          <h1 className="fw-bold">Our <span className="text-primary">Vision</span></h1>
          <span className=" p">To empower every individual with personalized skill development and career guidance, creating opportunities for success through tailored, data-driven insights that meet their unique needs and aspirations.</span>
          <span className=" p">By leveraging advanced technologies and in-depth analysis, we ensure that every user receives guidance and support specifically designed to help them achieve their full potential.</span>
        </Col>
        <Col className=" px-1">
          <img src={img__8} alt="img__8" className="img__8" />
        </Col>
      </Row>
      <h1 className="fw-bold ">Core <span className="text-primary">Values</span></h1>
      <div className="bg__img">
        <Row className="w-75 mx-auto py-5">
          <Col lg={6} className="pb-4">
            <div className="d-flex  justify-content-between p-3 bg-white div-border">
              <div className="img-div px-3">
                <img src={img__11} alt="img_11" className="img__11" />
              </div>
              <div className="d-flex flex-column px-2">
                <h3 className="text-primary">Innovation</h3>
                <p>We embrace creativity and technology, constantly pushing the boundaries of what’s possible in soft skills development.</p>
              </div>
            </div>
          </Col>
          <Col lg={6} className="pb-4">
            <div className="d-flex  justify-content-between p-3 bg-white div-border">
              <div className="img-div px-3">
                <img src={img__10} alt="img_10" className="img__11" />
              </div>
              <div className="d-flex flex-column px-2">
                <h3 className="text-primary">Empowerment</h3>
                <p>We believe in the transformative power of skills and knowledge, empowering individuals to realize their full potential.</p>
              </div>
            </div>
          </Col>
          <Col className="pb-4">
          <div className="d-flex  justify-content-between p-3 bg-white div-border">
              <div className="img-div px-3">
                <img src={img__12} alt="img_12" className="img__11" />
              </div>
              <div className="d-flex flex-column px-2">
                <h3 className="text-primary">Accessibility</h3>
                <p>Learning is for everyone. We're committed to creating user-friendly, inclusive platforms that reach all learners.</p>
              </div>
            </div>
          </Col>
          <Col className="pb-4">
          <div className="d-flex  justify-content-between p-3 bg-white div-border">
              <div className="img-div px-3">
                <img src={img__13} alt="img_13" className="img__11" />
              </div>
              <div className="d-flex flex-column px-2">
                <h3 className="text-primary">Impact</h3>
                <p>Our success is measured by the positive effects we create for individuals, organizations, and communities worldwide.</p>
              </div>
            </div>
          </Col>
          <Col className="pb-4">
          <div className="d-flex  justify-content-between p-3 bg-white div-border">
              <div className="img-div px-3">
                <img src={img__15} alt="img_15" className="img__11" />
              </div>
              <div className="d-flex flex-column px-2">
                <h3 className="text-primary">Collaboration</h3>
                <p>We foster teamwork and partnerships, both internally and externally, to drive collective success.</p>
              </div>
            </div>
          </Col>
          <Col className="pb-4">
          <div className="d-flex  justify-content-between p-3 bg-white div-border">
              <div className="img-div px-3">
                <img src={img__14} alt="img_14" className="img__11" />
              </div>
              <div className="d-flex flex-column px-2">
                <h3 className="text-primary">Constant Progress</h3>
                <p>We are dedicated to constant innovation, improving our products and services to meet the evolving needs of our users.</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  )
};

export default About;
