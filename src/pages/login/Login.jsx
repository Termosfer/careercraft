import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/simon-lee-zft-W1kVEhg-unsplash.jpg";
// import { Link, NavLink } from "react-router-dom";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
import { login } from "../../config/authLogin"; // Düzenlenmiş import
import { changeEmail, changePassword, clearInput } from "../../config/authSlice";
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
      await dispatch(login(loginData)).then(action=>{
        localStorage.setItem("token", action.payload.accessToken)
      });
      dispatch(clearInput())
      toast.success("Successfully login!");
      navigate("/")
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

 

  const handlePassword = () => {
    setShow(!show); // Şifre görünürlüğünü kontrol eden fonksiyon
  };

  /* const handleForgot = async () => {
    try {
      await axios.post(`http://44.203.152.52:8080/api/password/reset-request?email=${email}`)
      console.log("sent mail");
      navigate("/checkMail")
    } catch (error) {
      console.log(error.response.data.message);
      
    }
  }

  const handleLogin= async()=>{
    try {
     const {data}= await axios.post("http://44.203.152.52:8080/api/auth/login",userLogged)
     localStorage.setItem("token", JSON.stringify(data.accessToken));
     navigate("/")
     console.log(data.accessToken);
     
    } catch (error) {
      console.log(error.response);
      
    }
  } */


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
                      /* onClick={handleForgot} */
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

              <Button /* onClick={handleLogin} */ type="submit" className="w-100 log-btn" variant="primary">
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
