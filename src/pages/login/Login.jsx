import React, { useState, useEffect } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/img/simon-lee-zft-W1kVEhg-unsplash.jpg";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fortgotHandle, loginUser } from "../../config/authLogin";
import toast from "react-hot-toast";

const Login = () => {
  const [show, setShow] = useState(false);
  const [userLogged, setUserLogged] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const message = useSelector((state) => state.login.message);
  const errormessage = useSelector((state) => state.login.errorMessage);

  const handlePassword = () => {
    setShow(!show);
  };

  const handleForgot = async () => {
    dispatch(fortgotHandle(userLogged.email));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(loginUser(userLogged));
    if (loginUser.fulfilled.match(resultAction)) {
      navigate("/");
    }
  };

  return (
    <>
      <div className="login-pg">
        <div className="bg-img">
          <img className="register-img" src={img} alt="bg-img" />
          <div className="bg-img-cover">
            <Container className="cont-login">
              <Form
                className="border rounded-4 p-3"
                id="login-f"
                onSubmit={handleLogin}
              >
                <h2 className="login-header">Login to your account</h2>
                <Form.Group className="mb-2" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    className="field-input"
                    style={{ outline: "none", boxShadow: "none" }}
                    type="email"
                    placeholder="Enter your email"
                    autoFocus
                    onChange={(e) =>
                      setUserLogged({ ...userLogged, email: e.target.value })
                    }
                    value={userLogged.email}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-2 pass-form-part"
                  controlId="formPassword"
                >
                  <Form.Label className="form-label-pass d-flex justify-content-between align-items-center">
                    <span>Password</span>
                    <span>
                      <Button
                        onClick={handleForgot}
                        className="p-0 border-0 bg-transparent text-primary text-decoration-none"
                      >
                        Forgot Password?
                      </Button>
                    </span>
                  </Form.Label>
                  <Form.Control
                    className="field-input"
                    style={{ outline: "none", boxShadow: "none" }}
                    type={show ? "text" : "password"}
                    placeholder="Enter your password"
                    autoFocus
                    onChange={(e) =>
                      setUserLogged({ ...userLogged, password: e.target.value })
                    }
                    value={userLogged.password}
                  />
                  <div className="icon-cont" onClick={handlePassword}>
                    {show ? (
                      <IoEyeOffOutline color="#98A2B3" />
                    ) : (
                      <IoEyeOutline color="#98A2B3" />
                    )}
                  </div>
                </Form.Group>

                <Button
                  type="submit"
                  className="w-100 log-btn"
                  variant="primary"
                >
                  Login now
                </Button>
                <span className="text-danger text-center">{errormessage}</span>

                <div className="text-center dont-acc pb-2">
                  Don't Have An Account?{" "}
                  <Link
                    to="/auth/register"
                    className="text-decoration-none pb-2"
                  >
                    Sign Up
                  </Link>
                </div>
              </Form>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
