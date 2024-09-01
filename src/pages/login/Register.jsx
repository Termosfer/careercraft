import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import img from "../../assets/simon-lee-zft-W1kVEhg-unsplash.jpg";
import "./style.css";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../config/authRegister";
import {
  changeName,
  changeLastName,
  changeEmail,
  changePassword,
  clearInput,
} from "../../config/authSlice";
function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector((state) => state.auth.name);
  const surname = useSelector((state) => state.auth.surname);
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);
const data = useSelector(state=>state.registration.data)
console.log(data, "data")
  const handleChangeName = (e) => {
    dispatch(changeName(e.currentTarget.value));
  };
  const handleChangeLastName = (e) => {
    dispatch(changeLastName(e.currentTarget.value));
  };
  const handleChangeEmail = (e) => {
    dispatch(changeEmail(e.currentTarget.value));
  };
  const handleChangePassword = (e) => {
    dispatch(changePassword(e.currentTarget.value));
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    try {
      const userData = { name, surname, email, password };
      await dispatch(register(userData)).unwrap();
      toast.success("Successfully registered!");
      dispatch(clearInput());
      navigate("/auth/login");
    } catch (error) {
      toast.error("Registration failed.");
    }

    setValidated(true);
  };

  return (
    <div className="bg-img">
      <img className="register-img" src={img} alt="bg-img" />
      <div className="bg-img-cover">
        <Container className="w-75 p-5">
          <Row>
            <Col xs={12} md={6} lg={6}>
              <div className="d-flex flex-column">
                <div className="text-width mb-5 w-100">
                  <h1 className="color">Join CareerCraft Today!</h1>
                  <span className="color ">
                    Unlock your potential with cutting-edge soft skills
                    training. Register to access personalized evaluations,
                    tailored courses, and exclusive resources designed to help
                    you excel.
                  </span>
                </div>

                <h6 className="color mb-4">Sign Up Now:</h6>
                <ul className="color text-width w-100">
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
                <span className="color text-width w-100">
                  Ready to take the next step in your career? Register now and
                  start your journey to success with CareerCraft!
                </span>
              </div>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className="bg-light border rounded-4 px-5 py-4"
              >
                <h2 className="border-bottom fw-bold pb-2">
                  Create an account
                </h2>
                <Form.Group
                  as={Col}
                  md="12" /* className="w-100" */
                  controlId="validationCustom01"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First Name"
                    onChange={handleChangeName}
                    value={name}
                    className="shadow-none"
                  />
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationCustom02">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    onChange={handleChangeLastName}
                    value={surname}
                    className="shadow-none"
                  />
                </Form.Group>

                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="example@gmail.com"
                    required
                    onChange={handleChangeEmail}
                    value={email}
                    className="shadow-none"
                  />
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationCustom04">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                    onChange={handleChangePassword}
                    value={password}
                    className="shadow-none"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedbackType="invalid"
                  />
                </Form.Group>
                <Button type="submit" className="w-100 registration-btn">
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
