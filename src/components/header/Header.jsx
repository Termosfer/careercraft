import "./style.css";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../../assets/Logo.png";
import Image from "react-bootstrap/Image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData, logout } from "../../config/authLogin";
function CollapsibleExample() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.user);
  console.log(user, "asd");
  useEffect(() => {
    dispatch(userData());
  }, [dispatch]);

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className="d-flex align-items-center justify-content-center justify-content-md-between w-75 px-md-5 px-3">
        <div className="d-flex align-items-center justify-content-md-between justify-content-between gap-md-5 gap-5 mx-auto">
          <Link to="/" className="d-flex align-items-center">
            <Image src={logo} className="logo" alt="logo" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto  d-flex align-items-md-center align-items-center justify-content-md-center column-gap-lg-4 text-nowrap">
            <Link to="/" className="text-decoration-none text-dark">
              Home
            </Link>
            <Link to="/about" className="text-decoration-none text-dark ">
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
          <Nav className="d-flex justify-content-md-between justify-content-between align-items-md-center align-items-center column-gap-2 mt-2 mt-lg-0 text-nowrap">
            {user ? (
              <>
                <Dropdown>
                  <Dropdown.Toggle className="sign-up" id="dropdown-basic">
                    {user.name}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item to="/user/profile">
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item onClick={()=>dispatch(logout())}>
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Link to="/auth/login" className="ms-1 login">
                  Book a Demo
                </Link>
              </>
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
