import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Link, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Login = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <NavLink to="/login" className="login text-decoration-none" onClick={handleShow}>Login</NavLink>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome back!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                style={{ outline: "none", boxShadow: "none" }}
                type="email"
                placeholder="Email..."
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                style={{ outline: "none", boxShadow: "none" }}
                type="password"
                placeholder="Password..."
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="w-100" variant="primary" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
        <span className="text-center pb-2">
          Don't have an account?{" "}
          <Link
            to="/register"
            onClick={handleClose}
            className="text-decoration-none pb-2"
          >
            Register
          </Link>
        </span>
      </Modal>
    </div>
  );
};

export default Login;
