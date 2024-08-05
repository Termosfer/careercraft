import "./style.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/Logo.png";
import Image from "react-bootstrap/Image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../config/authLogin";
function CollapsibleExample() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.user);
  const [active, setActive] = useState(false);
  console.log(user, "asd");
  useEffect(() => {
    dispatch(userData());
  }, [dispatch]);
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className="d-flex align-items-center justify-content-center w-75 px-5">
        <Link to="/" className="d-flex align-items-center">
          <Image src={logo} className="logo" alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto d-flex justify-content-between column-gap-4 ">
            <Link to="/" className="text-decoration-none text-dark">
              Home
            </Link>
            <Link to="/about" className="text-decoration-none text-dark">
              About Us
            </Link>
            <Link to="/solutions" className="text-decoration-none text-dark">
              Solutions
            </Link>
            <Link to="/services" className="text-decoration-none text-dark">
              Services
            </Link>
            <Link to="/resources" className="text-decoration-none text-dark">
              Resources
            </Link>
            <Link to="/contact" className="text-decoration-none text-dark">
              Contacts
            </Link>
          </Nav>
          <Nav className="d-flex align-items-center column-gap-2">
            {user ? (
              <div>
                <Link to="/auth/register" className="me-1 sign-up">
                  {user.name}
                </Link>
                <Link to="/auth/login" className="ms-1 login">
                  Book a Demo
                </Link>
              </div>
            ) : (
              <div>
                <Link to="/auth/register" className="me-1 sign-up">
                  Sign Up
                </Link>
                <Link to="/auth/login" className="ms-1 login">
                  Login
                </Link>{" "}
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
