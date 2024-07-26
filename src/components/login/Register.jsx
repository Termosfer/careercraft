import { Form, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
function Register() {
 /*  const [register, setRegister] = useState({
    name: "",
    surname: "",
    email: "",
    address: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      axios.post("http://44.203.152.52:8080/registration", register);
      console.log(register, "register");
      toast.success('Successfully toasted!')
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }; */

  return (

    <div className="bg-img">
      <Container>
        <Row>
          <Col>asd</Col>
          <Col>asdad</Col>
        </Row>
      </Container>
    </div>
    
        /* <div className="register">
          <form action="" className="w-75" onSubmit={handleSubmit}>
            <h3 className="text-center">Create an Account</h3>
            <label htmlFor="name" className="fs-5">
              Name:
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-100 mb-2 py-2 ps-2 border rounded "
              required
              onChange={(e) =>
                setRegister({ ...register, name: e.target.value })
              }
              value={register.name}
            />
            <label htmlFor="surname" className="fs-5">
              Surname:
            </label>
            <input
              type="text"
              name="surname"
              placeholder="Your surname"
              className="w-100 mb-2 py-2 ps-2 border rounded"
              required
              onChange={(e) =>
                setRegister({ ...register, surname: e.target.value })
              }
              value={register.surname}
            />
            <label htmlFor="email" className="fs-5">
              Email:
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-100 mb-2 py-2 ps-2 border rounded"
              required
              onChange={(e) =>
                setRegister({ ...register, email: e.target.value })
              }
              value={register.email}
            />
            <label htmlFor="address" className="fs-5">
              Address:
            </label>
            <input
              type="text"
              name="address"
              placeholder="Your Address"
              className="w-100 mb-2 py-2 ps-2 border rounded"
              required
              onChange={(e) =>
                setRegister({ ...register, address: e.target.value })
              }
              value={register.address}
            />
            <label htmlFor="password" className="fs-5">
              Password:
            </label>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              className="w-100 mb-4 py-2 ps-2 border rounded"
              required
              onChange={(e) =>
                setRegister({ ...register, password: e.target.value })
              }
              value={register.password}
            />
            <button className="btn btn-success w-100 py-2">Register</button>
          </form>
        </div> */

  );
}

export default Register;
