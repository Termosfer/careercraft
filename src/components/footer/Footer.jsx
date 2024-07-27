import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube} from "react-icons/fa";
const Footer = () => {
  return (
    <Footer style={{background: "#086EFF"
}}>

    <Container>
      <Row>
        <Col>
          <div className="d-flex flex-column row-gap-2 text-light">
            <h3 className="fst-italic">CareerCraft</h3>
            <div className="d-flex flex-column">

            <span>Empowering Growth Through </span>
            <span>Personalized Learning Solutions</span>
            </div>
            <div className="d-flex align-items-center column-gap-2">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram  />
            <FaLinkedinIn />
            <FaYoutube />
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
    </Footer>
  );
};

export default Footer;
