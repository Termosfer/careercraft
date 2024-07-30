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
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    name: "",
    surname: "",
    email: "",
    address: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    try {
      await axios.post("http://44.203.152.52:8080/registration", register);
      toast.success("Successfully registered!");
      navigate("/");
    } catch (error) {
      toast.error("Registration failed.");
    }

    setValidated(true);
  };

  return (
    <div className="bg-img">
      <img className="register-img" src={img} alt="bg-img" />
      <div className="bg-img-cover">
        <Container className="my-5">
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
                  <Form.Control
                    required
                    type="text"
                    placeholder="First Name"
                    onChange={(e) =>
                      setRegister({ ...register, name: e.target.value })
                    }
                    value={register.name}
                  />
                  {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                </Form.Group>
                <Form.Group
                  /* as={Col} */ md="4"
                  controlId="validationCustom02"
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    onChange={(e) =>
                      setRegister({ ...register, surname: e.target.value })
                    }
                    value={register.surname}
                  />
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
                  Create account
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Register;
