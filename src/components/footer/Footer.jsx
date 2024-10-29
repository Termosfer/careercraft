import { Container, Row, Col } from "react-bootstrap/";
import "./footer.css";
import logo from "../../assets/img/footerLogo.png";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <Container className="w-75 p-5">
        <Row>
          <Col xs={12} md={12} lg={3} className="mb-4 mb-md-3">
            <div className="div__text d-flex flex-column align-items-lg-start align-items-md-center align-items-center ">
              <img src={logo} className="logo mb-3" alt="logo" />
              <div
                className="text-md-start text-nowrap"
              >
                <p className="my-0">Empowering Growth Through</p>
                <p>Personalized Learning Solutions</p>
              </div>
              <div
                className="d-flex justify-content-lg-between justify-content-md-center justify-content-between gap-md-4 gap-4 text-nowrap"
                style={{ color: "#0F77FF" }}
              >
                <Link to={"https://www.facebook.com/"} aria-label="Facebook"><FaFacebookF /></Link>
                <Link to={"https://x.com/"} aria-label="Twitter"><FaTwitter /></Link>
                <Link to={"https://www.instagram.com/"} aria-label="Instagram"><FaInstagram /></Link>
                <Link to={"www.linkedin.com/"} aria-label="LinkedIn"><FaLinkedinIn /></Link>
                <Link to={"https://www.youtube.com/"} aria-label="Youtube"><FaYoutube /></Link>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={2} className="mb-4 mb-md-0">
            <div
              className="div__text mx-5 d-flex flex-column align-items-md-center align-items-center align-items-lg-start text-nowrap text"
            >
              <h1 className="mb-4">
                Product
              </h1>
              <Link to={"/Features"}>Features</Link>
              <Link to={"/packages"}>Pricing</Link>
              <Link to={"/Case Studies"}>Case Studies</Link>
              <Link to={"/Reviews"}>Reviews</Link>
              <Link to={"/Updates"}>Updates</Link>
            </div>
          </Col>
          <Col xs={12} md={6} lg={2} className="mb-4 mb-md-0">
            <div
              className="div__text mx-5 d-flex flex-column align-items-md-center align-items-center align-items-lg-start text-nowrap text  "
            >
              <h2 className="mb-4">
                Company
              </h2>
              <Link to={"/about"}>About</Link>
              <Link to={"/contact"}>Contact us</Link>
              <Link to={"/Blog"}>Blog</Link>
            </div>
          </Col>
          <Col xs={12} md={6} lg={2} className="mb-4 mb-md-0">
            <div
              className="div__text mx-5 d-flex flex-column align-items-md-center align-items-center align-items-lg-start text-nowrap text"

            >
              <h3 className="mb-4">
                Support
              </h3>
              <Link to={"/Getting Started"}>Getting Started</Link>
              <Link to={"/Help Center"}>Help Center</Link>
              <Link to={"/Report a bug"}>Report a bug</Link>
              <Link to={"/Chat support"}>Chat support</Link>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="mb-4 mb-md-0">
            <div
              className="div__text mx-5 d-flex flex-column align-items-md-center align-items-center align-items-lg-start text-nowrap text"
            >
              <h4 className="mb-4">
                Contact us
              </h4>
              <Link to={"/"} aria-label="contact">
                <CiMail /> contact@company.com
              </Link>
              <Link to={"/"} aria-label="Phone">
                <BsTelephone /> (+994)000 00 00
              </Link>
              <Link to={"/"} aria-label="Baku">
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
          <span>©{new Date().getFullYear()} - CareerCraft LLC</span>
          <span className="text-center text-md-start">
            All Rights Reserved | Terms and Conditions | Privacy Policy
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
