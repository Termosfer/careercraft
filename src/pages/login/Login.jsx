import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/simon-lee-zft-W1kVEhg-unsplash.jpg";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/authLogin"; // Düzenlenmiş import
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5"; // İkonlar import edilmiş
import { changeEmail, changePassword, clearInput } from "../../features/authSlice";
import toast from "react-hot-toast";
const Login = () => {
  const [show, setShow] = useState(false); // Şifre görünürlüğünü kontrol eden state
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlerChangeEmail = (e) => {
    dispatch(changeEmail(e.currentTarget.value));
  };

  const handlerChangePassword = (e) => {
    dispatch(changePassword(e.currentTarget.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginData = { email, password };
      await dispatch(login(loginData)).unwrap();
      dispatch(clearInput())
      toast.success("Successfully registered!");
      navigate("/")
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleForgot = () => {
    // Şifreyi unuttum işlemleri
  };

  const handlePassword = () => {
    setShow(!show); // Şifre görünürlüğünü kontrol eden fonksiyon
  };

  return (
    <div className="login-pg">
      <div className="bg-img">
        <img className="register-img" src={img} alt="bg-img" />
        <div className="bg-img-cover">
          <Container className="cont-login">
            <Form
              className="border rounded-4 p-3"
              id="login-f"
              onSubmit={handleSubmit}
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
                  onChange={handlerChangeEmail}
                  value={email}
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
                  onChange={handlerChangePassword}
                  value={password}
                />
                <div className="icon-cont" onClick={handlePassword}>
                  {show ? (
                    <IoEyeOffOutline color="#98A2B3" />
                  ) : (
                    <IoEyeOutline color="#98A2B3" />
                  )}
                </div>
              </Form.Group>

              <Button className="w-100 log-btn" variant="primary" type="submit">
                Login now
              </Button>

              <div className="text-center dont-acc pb-2">
                Don't Have An Account?{" "}
                <Link to="/auth/register" className="text-decoration-none pb-2">
                  Sign Up
                </Link>
              </div>
            </Form>
          </Container>
            
        </div>
      </div>
    </div>
  );
};

export default Login;
