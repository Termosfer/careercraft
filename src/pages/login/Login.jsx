import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style.css";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import img from "../../assets/simon-lee-zft-W1kVEhg-unsplash.jpg";
import { Container } from "react-bootstrap";

const Login = () => {
  const [show, setShow] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForgot = () => {};

  useEffect(() => {
    console.log(email, ":email", password, ":password");
  }, [email, password]);

  return (
    <div className="login-pg">
      <div className="bg-img ">
        <img className="register-img " src={img} alt="bg-img" />
        <div className="bg-img-cover">
          <Container className="cont-login">
            <Form className=" border rounded-4 p-3" id="login-f">
              <h2 className="login-header">Login to your account</h2>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  style={{ outline: "none", boxShadow: "none" }}
                  type="email"
                  placeholder="Enter your email"
                  autoFocus
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput2"
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
                  style={{ outline: "none", boxShadow: "none" }}
                  type="password"
                  placeholder="Enter your password"
                  autoFocus
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button className="w-100 log-btn" variant="primary">
                Login now
              </Button>

              <div className="text-center dont-acc pb-2">
                Don't Have An Account?{" "}
                <Link to="/register" className="text-decoration-none pb-2">
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
