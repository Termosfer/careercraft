import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../../assets/simon-lee-zft-W1kVEhg-unsplash.jpg";
import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
function Register() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    try {
      axios.post("http://44.203.152.52:8080/registration", register);
      console.log(register, "register");
      toast.success('Successfully toasted!')
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    
    setValidated(true);
  };
   const [register, setRegister] = useState({
    name: "",
    surname: "",
    email: "",
    address: "",
    password: "",
  });
  const navigate = useNavigate();

  /* const handleSubmit = (e) => {
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
      <img src={img} alt="bg-img" />
      <div className="bg-img-cover">
        <Container className="mt-5">
          <Row className="d-flex align-items-center justify-content-center">
            <Col>
              <div className="d-flex flex-column">
                <div className="text-width mb-5">
                  <h1 className="color">Join CareerCraft Today!</h1>
                  <span className="color ">
                    Unlock your potential and transform your career with
                    cutting-edge soft skills training. By registering with us,
                    you'll gain access to personalized evaluations, tailored
                    courses, and exclusive resources designed to help you excel
                    in your field.
                  </span>
                </div>

                <h6 className="color mb-4">Sign Up Now:</h6>
                <ul className="color text-width">
                  <li>
                    Create Your Account: Fill in your details to get started.
                  </li>
                  <li>
                    Personalize Your Experience: Let us know your career goals
                    to receive customized recommendations.
                  </li>
                  <li>
                    Access Premium Content: Enjoy immediate access to a variety
                    of tools and resources to boost your professional growth.
                  </li>
                </ul>
                <span className="color text-width">
                  Ready to take the next step in your career? Register now and
                  start your journey to success with CareerCraft!
                </span>
              </div>
            </Col>
            <Col>
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className="bg-light border rounded-4 p-3 w-75"
              >
                <h2 className="border-bottom fw-bold pb-2">Registration</h2>
                <Form.Group
                  /* as={Col} */ md="4"
                  controlId="validationCustom01"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control required type="text" placeholder="First Name" onChange={(e) =>
                setRegister({ ...register, name: e.target.value })
              }
              value={register.name}/>
                  {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                </Form.Group>
                <Form.Group
                  /* as={Col} */ md="4"
                  controlId="validationCustom02"
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control required type="text" placeholder="Last name" onChange={(e) =>
                setRegister({ ...register, surname: e.target.value })
              }
              value={register.surname}/>
                  {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                </Form.Group>
                <Form.Group
                  /* as={Col} */
                  md="4"
                  controlId="validationCustomUsername"
                ></Form.Group>
                <Form.Group
                  /* as={Col} */ md="6"
                  controlId="validationCustom03"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="example@gmail.com"
                    required
                    onChange={(e) =>
                      setRegister({ ...register, email: e.target.value })
                    }
                    value={register.email}
                  />
                  {/* <Form.Control.Feedback type="invalid">
                      Please provide a valid email.
                    </Form.Control.Feedback> */}
                </Form.Group>
                <Form.Group
                  /* as={Col} */ md="3"
                  controlId="validationCustom04"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(e) =>
                      setRegister({ ...register, password: e.target.value })
                    }
                    value={register.password}
                  
                  />
                  {/*  <Form.Control.Feedback type="invalid">
                      Please provide a valid password.
                    </Form.Control.Feedback> */}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    /* feedback="You must agree before submitting." */
                    feedbackType="invalid"
                  />
                </Form.Group>
                <Button type="submit" className="w-100">
                  Registration
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
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
