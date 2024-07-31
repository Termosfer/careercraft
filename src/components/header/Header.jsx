import "./style.css";
import { MdLogin } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/Logo.png";
import Login from "../../pages/login/Login";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/esm/Button";
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className="d-flex align-items-center justify-content-center w-75 px-5">
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <Image src={logo} className="logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto d-flex justify-content-between column-gap-4 ">
            <Link to="/" className="text-decoration-none text-dark">Home</Link>
            <Link to="/about" className="text-decoration-none text-dark">About Us</Link>
            <Link to="/solutions" className="text-decoration-none text-dark">Solutions</Link>
            <Link to="/services" className="text-decoration-none text-dark">Services</Link>
            <Link to="/resources" className="text-decoration-none text-dark">Resources</Link>
            <Link to="/contact" className="text-decoration-none text-dark">Contacts</Link>
          </Nav>
          <Nav className="d-flex align-items-center column-gap-3">
            <NavLink to="/register" className="text-decoration-none signup">
              Sign Up
            </NavLink>
            <Login />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
