import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/Logo.png";
import Image from "react-bootstrap/Image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiArrowDownSLine } from "react-icons/ri"
import userImg from "../../assets/profileImg/user-square.png"
import logoutImg from "../../assets/profileImg/logout-03.png"
import settingImg from "../../assets/profileImg/elements.png"
import { logout, userData } from "../../config/authUser";
function CollapsibleExample() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [active, setActive] = useState(false)
  const user = useSelector(state => state.user.username)
  const token = localStorage.getItem("token")
  const email = localStorage.getItem("email")
  useEffect(() => {
    dispatch(userData(token))
  }, [dispatch, token])

  const handlerClick = () => {
    setActive(!active)
  }

  const handlerLogout = () => {
    dispatch(logout())
    setActive(false)
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
                    <h1 className="rounded-circle" id="dropdown-basic" style={{ backgroundColor: "#D3E5FF", color: "#408FFF", border: "none" }}>
                      {user.name && user.surname ? user.name.slice(0, 1) + user.surname.slice(0, 1) : ""}

                    </h1>
                    <RiArrowDownSLine style={{ color: "#408FFF" }} />
                  </div>
                  {

                    active && (
                      <div className="position-absolute p-3">
                        <div className="d-flex align-items-center gap-2 bottom">
                          <div>
                            <h1 className="rounded-circle" style={{ backgroundColor: "#D3E5FF", color: "#408FFF", border: "none" }}>
                              {user.name && user.surname ? user.name.slice(0, 1) + user.surname.slice(0, 1) : ""}
                            </h1>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="fs-8">{user.name + " " + user.surname}</span>
                            <span className="fs-7">{email}</span>
                          </div>
                        </div>
                        <div className="px-1 pt-2 d-flex flex-column gap-2 bottom ">
                          <div className="d-flex align-items-center gap-1  p-1 action-item"> <img src={userImg} alt="userimg" style={{ width: "20px", height: "20px" }} className="img-hover" /><span className="fs">Profile</span></div>
                          <div className="d-flex align-items-center gap-1  p-1 action-item"> <img src={settingImg} alt="setting" style={{ width: "20px", height: "20px" }} className="img-hover" /><span className="fs">Settings</span></div>
                        </div>
                        <div className="px-1 pt-2 gap-2 d-flex flex-column  ">

                          <div className="px-1  d-flex align-items-center p-1 gap-1 action-item " onClick={handlerLogout}>
                            <img src={logoutImg} alt="logout" style={{ width: "20px", height: "20px", }} className="img-hover" />
                            <span className="fs">Logout</span>
                          </div>
                        </div>
                      </div>
                    )
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
