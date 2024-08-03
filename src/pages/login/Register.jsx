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
import { useDispatch, useSelector } from "react-redux";
import {
  changeName,
  changeLastName,
  changeEmail,
  changePassword,
  register
} from "../../features/authSlice";
function Register() {
  const dispatch =  useDispatch()
  const name = useSelector((state) => state.auth.name);
  const surname = useSelector((state) => state.auth.surname);
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);

  const handlerChangeName = (e) => {
    const value = e.target.value;
    console.log(value)
    /* setRegister((prev) => ({ ...prev, name: value })); */
    dispatch(changeName(value));
  };
const handlerChangeLastName = (e)=>{
dispatch(changeLastName(e.currentTarget.value))
}
const handlerChangeEmail = (e)=>{
dispatch(changeEmail(e.currentTarget.value))
}
const handlerChangePassword = (e)=>{
dispatch(changePassword(e.currentTarget.value))
}



  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  /* const [register, setRegister] = useState({
    name: "",
    surname: "",
    email: "",
    address: "",
    password: "",
  }); */



  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(register())
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
/* 
    try {
      await axios.post("http://44.203.152.52:8080/registration", register);
      toast.success("Successfully registered!");
      navigate("/");
    } catch (error) {
      toast.error("Registration failed.");
    } */

    setValidated(true);
  };

  return (
    <div className="bg-img">
      <img className="register-img" src={img} alt="bg-img" />
      <div className="bg-img-cover">
        <Container className="w-75 p-5">
          <Row /* className="d-flex align-items-center justify-content-center" */
          >
            <Col xs={6}>
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
            <Col xs={6}>
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className="bg-light border rounded-4 px-5 py-4 w-100"
              >
                <h2 className="border-bottom fw-bold pb-2">
                  Create an account
                </h2>
                <Form.Group
                  /* as={Col} */ md="4"
                  controlId="validationCustom01"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First Name"
                    /* onChange={(e) =>
                      setRegister({ ...register, name: e.target.value })
                    } */
                   onChange={handlerChangeName}
                   value={name} 
                  
                  />
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
                    onChange={handlerChangeLastName}
                    value={surname} 
                   /*  onChange={(e) =>
                      setRegister({ ...register, surname: e.target.value })
                    }
                    */
                  />
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
                    onChange={handlerChangeEmail}
                    value={email}
                    /* onChange={(e) =>
                      setRegister({ ...register, email: e.target.value })
                    }
                    */
                  />
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
                    onChange={handlerChangePassword}
                    value={password}
                    /* onChange={(e) =>
                      setRegister({ ...register, password: e.target.value })
                    }
                     */
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
