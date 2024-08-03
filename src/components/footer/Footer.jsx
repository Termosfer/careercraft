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
    <div style={{ background: "#fff" }} className="py-4">
      <Container className="w-75 p-5">
        <Row>
          <Col>
            <div className="d-flex flex-column" >
              <img src={logo} className="logo mb-3" alt="logo" />
              <div className="d-flex flex-column text" style={{color:"#838383"}}>
                <p className="my-0">Empowering Growth Through </p>
                <p>Personalized Learning Solutions</p>
              </div>
              <div className="d-flex align-items-center column-gap-3" style={{color:"#0F77FF"}}>
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedinIn />
                <FaYoutube />
              </div>
            </div>
          </Col>
          <Col xs={9}>
            <div className="d-flex justify-content-between text">
              <div className="d-flex flex-column text" style={{color:"#838383"}}>
                <h4 className="mb-4" style={{color:"#0F77FF"}}>Product</h4>
                <span>Features</span>
                <span>Pricing</span>
                <span>Case Studies</span>
                <span>Reviews</span>
                <span>Updates</span>
              </div>
              <div className="d-flex flex-column text" style={{color:"#838383"}}>
                <h4 className="mb-4" style={{color:"#0F77FF"}}>Company</h4>
                <span>About</span>
                <span>Contact us</span>
                <span>Blog</span>
              </div>
              <div className="d-flex flex-column text" style={{color:"#838383"}}>
                <h4 className="mb-4" style={{color:"#0F77FF"}}>Support</h4>
                <span>Getting Started</span>
                <span>Help Center</span>
                <span>Report a bug</span>
                <span>Chat support</span>
              </div>
              <div className="d-flex flex-column text-dark text">
                <h4 className="mb-4" style={{color:"#0F77FF"}}>Contacts us</h4>
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
            </div>
          </Col>
        </Row>
        <div className="pt-5"></div>
        <div
          className="d-flex justify-content-between text-dark py-3 border-top"
          style={{ fontSize: "12px" }}
        >
          <span>©{new Date().getFullYear()}– CareerCraft LLC</span>
          <span>
            All Rights Reserved | Terms and Conditions | Privacy Policy
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
