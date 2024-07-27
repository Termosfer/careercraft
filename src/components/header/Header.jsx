import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MdLogin } from "react-icons/md";
import "./style.css";
import Login from "../../pages/login/Login";
import Button from "react-bootstrap/esm/Button";
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className="d-flex align-items-center justify-content-center">
        <Navbar.Brand
          href="/"
          className="fst-italic fw-bold fs-3 text-primary ms-auto"
        >
          CareerCraft
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto fw-bold">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/solutions">Solutions</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/resources">Resources</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Nav className="">
            <Nav.Link href="/register">
              <Button variant="primary">Sign Up</Button>
            </Nav.Link>
            <Nav.Link>
              <Login />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
