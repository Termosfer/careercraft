import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

const Profile = () => {
  return (
    <div className="profile-cont">
      <Container className="cont-prof">
      <Form className=" border rounded-4 p-3 ">
        <Row className="d-flex justify-content-around">
          <Col>First Name</Col>
          <Col>
            <Button className="px-5 py-2 border-0 bg-primary text-light text-end">
              Edit
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>Phone</Col>
          <Col>Job</Col>
        </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Profile;
