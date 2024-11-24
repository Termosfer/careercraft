import { Container, Row, Col } from "react-bootstrap/";
import "./footer.css";
import logo from "../../assets/img/footerLogo.png";
import email from "../../assets/profileImg/email.png"
import phone from "../../assets/profileImg/phone.png"
import location from "../../assets/profileImg/location.png"
import fa from "../../assets/profileImg/Facebook.webp"
import twit from "../../assets/profileImg/Twitter.webp"
import ins from "../../assets/profileImg/Instagram.webp"
import linked from "../../assets/profileImg/LinkedIn.webp"
import you from "../../assets/profileImg/YouTube.webp"
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
                className="div__text2 d-flex justify-content-lg-between justify-content-md-center justify-content-between gap-md-4 gap-4 text-nowrap"
              >
                <Link to={"https://www.facebook.com/"} aria-label="Facebook"><img src={fa} alt="facebook" className="fa"/></Link>
                <Link to={"https://x.com/"} aria-label="Twitter"><img src={twit} alt="twitter" /></Link>
                <Link to={"https://www.instagram.com/"} aria-label="Instagram"><img src={ins} alt="instagram" /></Link>
                <Link to={"www.linkedin.com/"} aria-label="LinkedIn"><img src={linked} alt="linkedin" /></Link>
                <Link to={"https://www.youtube.com/"} aria-label="Youtube"><img src={you} alt="youtube" className="you"/></Link>
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
                <img src={email} alt=""  /> contact@company.com
              </Link>
              <Link to={"/"} aria-label="Phone">
                <img src={phone} alt=""  /> (+994)000 00 00
              </Link>
              <Link to={"/"} aria-label="Baku">
                <img src={location} alt=""  /> Baku, Azerbaijan
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
