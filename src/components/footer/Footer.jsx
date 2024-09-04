import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import logo from "../../assets/footerLogo.png";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div style={{ background: "#f8f8f8" }} className="py-4">
      <Container className="p-5 w-75 p-5">
        <Row>
          <Col xs={12} md={12} lg={3} className="mb-4 mb-md-3">
            <div className="d-flex flex-column align-items-lg-start align-items-md-center align-items-center pt-2">
              <img src={logo} className="logo mb-3" alt="logo" />
              <div
                className=" text-md-start text-nowrap"
                style={{ color: "#838383" }}
              >
                <p className="my-0 ">Empowering Growth Through</p>
                <p>Personalized Learning Solutions</p>
              </div>
              <div
                className="d-flex justify-content-lg-between justify-content-md-center justify-content-between gap-md-4 gap-4 text-nowrap"
                style={{ color: "#0F77FF" }}
              >
                <FaFacebookF className="" />
                <FaTwitter className="" />
                <FaInstagram className="" />
                <FaLinkedinIn className="" />
                <FaYoutube className="" />
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={2} className="mb-4 mb-md-0">
            <div
              className="mx-5 d-flex flex-column align-items-md-center align-items-center align-items-lg-start text-nowrap text"
              style={{ color: "#838383" }}
            >
              <h4 className="mb-4" style={{ color: "#0F77FF" }}>
                Product
              </h4>
              <span>Features</span>
              <span>Pricing</span>
              <span>Case Studies</span>
              <span>Reviews</span>
              <span>Updates</span>
            </div>
          </Col>
          <Col xs={12} md={6} lg={2} className="mb-4 mb-md-0">
            <div
              className="mx-5 d-flex flex-column align-items-md-center align-items-center align-items-lg-start text-nowrap text  "
              style={{ color: "#838383" }}
            >
              <h4 className="mb-4" style={{ color: "#0F77FF" }}>
                Company
              </h4>
              <span>About</span>
              <span>Contact us</span>
              <span>Blog</span>
            </div>
          </Col>
          <Col xs={12} md={6} lg={2} className="mb-4 mb-md-0">
            <div
              className="mx-5 d-flex flex-column align-items-md-center align-items-center align-items-lg-start text-nowrap text"
              style={{ color: "#838383" }}
            >
              <h4 className="mb-4" style={{ color: "#0F77FF" }}>
                Support
              </h4>
              <span>Getting Started</span>
              <span>Help Center</span>
              <span>Report a bug</span>
              <span>Chat support</span>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="mb-4 mb-md-0">
            <div
              className="mx-5 d-flex flex-column align-items-md-center align-items-center align-items-lg-start text-nowrap text"
              style={{ color: "#838383" }}
            >
              <h4 className="mb-4" style={{ color: "#0F77FF" }}>
                Contact us
              </h4>
              <span>
                <CiMail /> contact@company.com
              </span>
              <span>
                <BsTelephone /> (+994)000 00 00
              </span>
              <span>
                <CiLocationOn /> Baku, Azerbaijan
              </span>
            </div>
          </Col>
        </Row>
        <div className="pt-5"></div>
        <div
          className="d-flex flex-column flex-md-row justify-content-between text-dark py-3 border-top text-center"
          style={{ fontSize: "12px" }}
        >
          <span>©{new Date().getFullYear()}– CareerCraft LLC</span>
          <span className="text-center text-md-start">
            All Rights Reserved | Terms and Conditions | Privacy Policy
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
