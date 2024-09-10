import React, { useState, useEffect, useRef } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/simon-lee-zft-W1kVEhg-unsplash.jpg";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { changeConfirmPass, changeNewPass } from "../../config/authSlice";
import { resetPass } from "../../config/authLogin";
const ResetPass = () => {
  const [show1, setShow1] = useState(false); // Şifre görünürlüğünü kontrol eden state
  const [show, setShow] = useState(false); // Şifre görünürlüğünü kontrol eden state
  const [time, setTime] = useState(180);
  const [inputs, setInputs] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });
  const [confirmPass, setConfirmPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [active, setActive] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const newPassword = useSelector((state) => state.auth.newPass);
  const confirmPassword = useSelector((state) => state.auth.confirmPass);
  const errorMessage = useSelector((state) => state.login.errorMessage);
  const changenewPass = (e) => {
    dispatch(changeNewPass(e.currentTarget.value));
    setConfirmPass(e.currentTarget.value);
    setActive(false);
    if (e.currentTarget.value == confirmPass) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const changeconfirmPass = (e) => {
    dispatch(changeConfirmPass(e.currentTarget.value));
    setNewPass(e.currentTarget.value);
    setActive(false);
    if (e.currentTarget.value == confirmPass) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      navigate("/");
    }
  }, [time]);

  const inputRefs = useRef([]);

  const handleInputChange = (e, index) => {
    if (
      e.target.value.length >= e.target.maxLength &&
      index < inputRefs.current.length - 1
    ) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handleReset = async (e) => {
    e.preventDefault();
    const token = `${inputs.input1}${inputs.input2}${inputs.input3}${inputs.input4}`;
    const reset = {
      newPassword,
      confirmPassword,
      token,
    };
    dispatch(resetPass(reset));
    const resultAction = await dispatch(resetPass(reset));
    if (resetPass.fulfilled.match(resultAction)) {
      navigate("/auth/login");
    }
  };
  const handlePassword1 = () => {
    setShow1(!show1); // Şifre görünürlüğünü kontrol eden fonksiyon
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
              onSubmit={handleReset}
            >
              <h2 className="login-header">Reset Your Password</h2>

              <Form.Group
                className="mb-2 pass-form-part"
                controlId="formPassword"
              >
                <Form.Label className="form-label-pass d-flex justify-content-between align-items-center">
                  <span>New Password</span>
                </Form.Label>
                <Form.Control
                  className="field-input"
                  style={{ outline: "none", boxShadow: "none" }}
                  type={show1 ? "text" : "password"}
                  placeholder="Enter your password"
                  autoFocus
                  onChange={changenewPass}
                />
                {errorMessage && (
                  <span className="text-danger">{errorMessage}.</span>
                )}
                <div className="icon-cont" onClick={handlePassword1}>
                  {show1 ? (
                    <IoEyeOffOutline color="#98A2B3" />
                  ) : (
                    <IoEyeOutline color="#98A2B3" />
                  )}
                </div>
              </Form.Group>

              <Form.Group className=" pass-form-part" controlId="formPassword1">
                <Form.Label className="form-label-pass d-flex justify-content-between align-items-center">
                  <span>Confirm New Password</span>
                </Form.Label>
                <Form.Control
                  className="field-input"
                  style={{
                    outline: "none",
                    boxShadow: "none",
                    borderColor: active ? "#dee2e6" : "red",
                  }}
                  type={show ? "text" : "password"}
                  placeholder="Enter your password"
                  autoFocus
                  onChange={changeconfirmPass}
                />
                {active ? (
                  ""
                ) : (
                  <span className="text-danger">Passwords don't match</span>
                )}
                <div className="icon-cont" onClick={handlePassword}>
                  {show ? (
                    <IoEyeOffOutline color="#98A2B3" />
                  ) : (
                    <IoEyeOutline color="#98A2B3" />
                  )}
                </div>
              </Form.Group>
              <div className="d-flex justify-content-between px-1">
                <span className="dont-acc">Enter your verification code:</span>
                <span className="dont-acc border rounded-circle m-0">
                  {time}
                </span>
              </div>
              <div className="d-flex align-items-center justify-content-around">
                <Form.Control
                  className="field-input text-center"
                  style={{
                    outline: "none",
                    boxShadow: "none",
                    width: "50px",
                    height: "50px",
                  }}
                  type="text"
                  autoFocus
                  maxLength={1}
                  onChange={(e) => {
                    setInputs({ ...inputs, input1: e.target.value });
                    handleInputChange(e, 0);
                  }}
                  ref={(el) => (inputRefs.current[0] = el)}
                  value={inputs.input1}
                />
                <Form.Control
                  className="field-input text-center"
                  style={{
                    outline: "none",
                    boxShadow: "none",
                    width: "50px",
                    height: "50px",
                  }}
                  type="text"
                  autoFocus
                  maxLength={1}
                  onChange={(e) => {
                    setInputs({ ...inputs, input2: e.target.value });
                    handleInputChange(e, 1);
                  }}
                  ref={(el) => (inputRefs.current[1] = el)}
                  value={inputs.input2}
                />
                <Form.Control
                  className="field-input text-center"
                  style={{
                    outline: "none",
                    boxShadow: "none",
                    width: "50px",
                    height: "50px",
                  }}
                  type="text"
                  placeholder=""
                  autoFocus
                  maxLength={1}
                  onChange={(e) => {
                    setInputs({ ...inputs, input3: e.target.value });
                    handleInputChange(e, 2);
                  }}
                  ref={(el) => (inputRefs.current[2] = el)}
                  value={inputs.input3}
                />
                <Form.Control
                  className="field-input text-center"
                  style={{
                    outline: "none",
                    boxShadow: "none",
                    width: "50px",
                    height: "50px",
                  }}
                  type="text"
                  placeholder=""
                  autoFocus
                  maxLength={1}
                  onChange={(e) => {
                    setInputs({ ...inputs, input4: e.target.value });
                    handleInputChange(e, 3);
                  }}
                  ref={(el) => (inputRefs.current[3] = el)}
                  value={inputs.input4}
                />
              </div>

              <Button
                /* onClick={handleLogin} */ type="submit"
                className="w-100 log-btn"
                variant="primary"
              >
                Reset Your Pass
              </Button>
            </Form>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
