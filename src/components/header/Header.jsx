import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/img/Logo.png";
import Image from "react-bootstrap/Image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
/* import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri"; */
import { logout } from "../../config/authLogin";
import { userData } from "../../config/authUser";
import UserSVG from "../SVG/UserSVG";
import SettingsSVG from "../SVG/SettingsSVG";
import { LogOutSVG } from "../SVG/LogOutSVG";
import uparrow from "../../assets/profileImg/uparrow.png"
import downarrow from "../../assets/profileImg/downarrow.png"
function CollapsibleExample() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const user = useSelector((state) => state.user.username);
  const token = localStorage.getItem("token");
  useEffect(() => {
    dispatch(userData(token));
  }, [token,dispatch]);

  const handlerClick = () => {
    setActive(!active);
  };

  const handlerLogout = () => {
    dispatch(logout());
    setActive(false);
    navigate("/");
  };
  return (
    <Navbar collapseOnSelect expand="lg" id="bg-nav">
      <Container className="d-flex align-items-center justify-content-center justify-content-md-between w-75 px-md-5 px-3 header-cont">
        <div className="d-flex align-items-center justify-content-md-between justify-content-between gap-md-4 gap-4 mx-auto">
          <Link to="/" className="d-flex align-items-center">
            <Image src={logo} className="logo" alt="logo" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto  d-flex align-items-md-center align-items-center justify-content-md-center column-gap-lg-4 text-nowrap list-menu">
            <Link to="/" className="text-decoration-none text-dark">
              Home
            </Link>
            <Link to="/about" className="text-decoration-none text-dark ">
              About Us
            </Link>
            <Link to="/solutions" className="text-decoration-none text-dark">
              Solutions
            </Link>

            <Link to="/packages" className="text-decoration-none text-dark">
              Pricing
            </Link>
            <Link to="/contact" className="text-decoration-none text-dark">
              Contacts
            </Link>
          </Nav>
          <Nav className="d-flex justify-content-md-between justify-content-between align-items-md-center align-items-center column-gap-2 mt-2 mt-lg-0 text-nowrap">
            {user ? (
              <div className="d-flex align-items-center gap-2">
                <Link to="/packages" className="ms-1 login">
                  Book a Demo
                </Link>
                <div className="position-relative">
                  <div
                    className="d-flex align-items-center  gap-1 cursor-pointer"
                    onClick={handlerClick}
                  >
                    <h1 className="rounded-circle" id="dropdown-basic">
                      {user.name && user.surname
                        ? user.name.slice(0, 1).toUpperCase() +
                          user.surname.slice(0, 1).toUpperCase()
                        : ""}
                    </h1>
                    {active ? <img src={uparrow} alt="uparrow" className="uparrow"/>: <img src={downarrow} alt="downarrow" className="downarrow"/> }
                  </div>
                  {active && (
                    <div className="position-absolute p-3">
                      <div className="d-flex align-items-center gap-2 bottom">
                        <div>
                          <h1
                            className="rounded-circle"
                            style={{
                              backgroundColor: "#D3E5FF",
                              color: "#408FFF",
                              border: "none",
                            }}
                          >
                            {user.name && user.surname
                              ? user.name.slice(0, 1).toUpperCase() +
                                user.surname.slice(0, 1).toUpperCase()
                              : ""}
                          </h1>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="fs-8">
                            {user.name + " " + user.surname}
                          </span>
                          <span className="fs-9">{user.email}</span>
                        </div>
                      </div>
                      <div className="px-1 pt-2 d-flex flex-column gap-2 bottom ">
                        <div className="d-flex align-items-center gap-1  p-1 action-item">
                          <Link
                            to="/profile"
                            className="fs text-decoration-none text-dark d-flex align-items-center gap-1 "
                            onClick={handlerClick}
                          >
                            <UserSVG />
                            Profile
                          </Link>
                        </div>
                        <div className="d-flex align-items-center gap-1  p-1 action-item">
                          <SettingsSVG />
                          <span className="fs">Settings</span>
                        </div>
                      </div>
                      <div className="px-1 pt-2 gap-2 d-flex flex-column  ">
                        <div
                          className="px-1  d-flex align-items-center p-1 gap-1 action-item "
                          onClick={handlerLogout}
                        >
                          <LogOutSVG />
                          <span className="fs">Logout</span>
                        </div>
                      </div>
                    </div>
                  )}
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
