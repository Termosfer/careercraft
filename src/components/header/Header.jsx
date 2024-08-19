import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { Container, DropdownToggle, Nav, Navbar } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../../assets/Logo.png";
import Image from "react-bootstrap/Image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData, logout } from "../../config/authLogin";
import { RiArrowDropDownLine, RiArrowDownSLine } from "react-icons/ri"
function CollapsibleExample() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [active, setActive] = useState(false)
  const user = useSelector((state) => state.login.user);

  const bgColors = ["#D3E5FF", "#FFD6D3", "#D3FFE0", "#F6FFD3", "#F6D3FF", "#FFD3EE", "#D3F7FF"]
  const txtColors = ["#3480EC", "#BB342A", "#15B24A", "#AFB215", "#8015B2", "#FFD3EE", "#D3F7FF"]

const getRandomColor = (colors)=> colors[Math.floor(Math.random() * colors.length)]
const [background, setBackground] = useState(getRandomColor(bgColors));
  const [textColor, setTextColor] = useState(getRandomColor(txtColors));
  const handlerClick = () => {
    setActive(!active)
  }

  useEffect(() => {
    dispatch(userData());
  }, [dispatch]);
  const handlerLogout = () => {
    dispatch(logout())
    navigate("/")
  }
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
              <div className="d-flex align-items-center gap-2">
                <Link to="/free-trial" className="ms-1 login">
                  Book a Demo
                </Link>
                <div className="position-relative">
                  <div className="d-flex align-items-center  gap-1 cursor-pointer" onClick={handlerClick}>
                    <h1 className="rounded-circle" id="dropdown-basic" style={{backgroundColor: background, color: textColor, border:"none"}}>
                      {user.name.slice(0, 1) + user.surname.slice(0, 1)}
                    </h1>
                    <RiArrowDownSLine style={{ color: textColor}}/>
                  </div>
                  {
                    active && (<ul className="position-absolute ">
                      <li to="/user/profile" className="li">Profile</li>
                      <li className="li" onClick={handlerLogout}>
                        Logout
                      </li>
                    </ul>)
                  }

                </div>

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
