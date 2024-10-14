import React from "react";
import "./contact.css"
import { Button, Container } from "react-bootstrap";
import img__34 from "../../assets/contactImg/img__34.png"
import img__35 from "../../assets/contactImg/img__35.png"
import img__36 from "../../assets/contactImg/img__36.png"
import img__37 from "../../assets/contactImg/img__37.png"
import img__38 from "../../assets/contactImg/img__38.png"
import img__39 from "../../assets/contactImg/img__39.png"
import img__40 from "../../assets/contactImg/img__40.png"
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="bg-contact">
      <Container className="w-75 p-5">
        <div className="d-flex gap-5">
          <div className="left__side">
            <div className="text-white">
              <h1>Get In Touch</h1>
              <p>Have A Question Or Need Assistance? Fill Out The Form Below, And We’ll Get Back To You As Soon As Possible.</p>
            </div>
            <div className="text-white d-flex flex-column gap-3">
              <div className="d-flex align-items-center gap-2">
                <div className="bg-img__34">
                  <img src={img__34} alt="img__34" className="img__34" />
                </div>
                <div className="d-flex flex-column">
                  <span>Email</span>
                  <span>info@careercraft.com</span>
                </div>
              </div>
              <div className="d-flex align-items-center gap-2">
                <div className="bg-img__34">
                  <img src={img__35} alt="img__35" className="img__34" />
                </div>
                <div className="d-flex flex-column">
                  <span>Address</span>
                  <span>CareerCraft HQ50 <br />Nizami Avenue, Suite 456 Baku</span>
                </div>
              </div>
              <div className="d-flex align-items-center gap-2">
                <div className="bg-img__34">
                  <img src={img__36} alt="img__36" className="img__34" />
                </div>
                <div className="d-flex flex-column">
                  <span>Phone</span>
                  <span>+994 00 000 00 00</span>
                </div>
              </div>
            </div>
            <div className="d-flex gap-4">
              <div className="bg-img__34">
                <img src={img__37} alt="img__37" className="img__34" />
              </div>
              <div className="bg-img__34">
                <img src={img__38} alt="img__38" className="img__34" />
              </div>
              <div className="bg-img__34">
                <img src={img__39} alt="img__39" className="img__34" />
              </div>
              <div className="bg-img__34">
                <img src={img__40} alt="img__40" className="img__34" />
              </div>
            </div>
          </div>
          <div className="right__side">
            <Form
              className="border"
              id="login__f"
            >
              <h2 className="login-header">Let’s Chat, Reach Out to Us</h2>
              <Form.Group className="mb-2" controlId="formEmail">
                <Form.Label className="label">Full Name</Form.Label>
                <Form.Control
                  className="field__input"
                  type="text"
                  placeholder="Enter full name"
                  autoFocus

                />
              </Form.Group>
              <Form.Group className="" controlId="formEmail">
                <Form.Label className="label">Email</Form.Label>
                <Form.Control
                  className="field__input"
                  type="email"
                  placeholder="example@gmail.com"
                  autoFocus
                />
              </Form.Group>
              {<Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="label">Message</Form.Label>
                <Form.Control
                  className="text__area" as="textarea" rows={3} placeholder="Please provide a brief description of your inquiry or request." />
              </Form.Group>}

              <Button
                type="submit"
                className="w-100 py-2 "
                variant="primary"
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
