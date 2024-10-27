import {Container, Row, Col} from "react-bootstrap/";
import "./footer.css";
import logo from "../../assets/img/footerLogo.png";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div style={{ background: "#ffffff" }} className="py-4 footer">
      <Container className="w-75 p-5">
        <Row>
          <Col xs={12} md={12} lg={3} className="mb-4 mb-md-3">
            <div className="d-flex flex-column align-items-lg-start align-items-md-center align-items-center ">
              <img src={logo} className="logo mb-3" alt="logo" />
              <div
                className="text-md-start text-nowrap"
                style={{ color: "#838383" }}
              >
                <p className="my-0 ">Empowering Growth Through</p>
                <p>Personalized Learning Solutions</p>
              </div>
              <div
                className="d-flex justify-content-lg-between justify-content-md-center justify-content-between gap-md-4 gap-4 text-nowrap"
                style={{ color: "#0F77FF" }}
              >
                <Link><FaFacebookF className="" /></Link>
                <Link><FaTwitter className="" /></Link>
                <Link><FaInstagram className="" /></Link>
                <Link><FaLinkedinIn className="" /></Link>
                <Link><FaYoutube className="" /></Link>
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
              <Link>Features</Link>
              <Link>Pricing</Link>
              <Link>Case Studies</Link>
              <Link>Reviews</Link>
              <Link>Updates</Link>
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
              <Link>About</Link>
              <Link>Contact us</Link>
              <Link>Blog</Link>
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
              <Link>Getting Started</Link>
              <Link>Help Center</Link>
              <Link>Report a bug</Link>
              <Link>Chat support</Link>
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
              <Link>
                <CiMail /> contact@company.com
              </Link>
              <Link>
                <BsTelephone /> (+994)000 00 00
              </Link>
              <Link>
                <CiLocationOn /> Baku, Azerbaijan
              </Link>
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
