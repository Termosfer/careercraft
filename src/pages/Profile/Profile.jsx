import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import EditSVG from "../../components/SVG/EditSVG";
import "./Profile.css"



const Profile = () => {
  return (
    <div className="profile-cont">
      <Container className="cont-prof">
        <Form className=" border rounded-4 p-5 ">
          <Row className=" w-100 d-flex justify-content-between">
            <Col>
              <h2 className="pers-info-h2">Personal Information</h2>
            </Col>
            <Col className="d-flex justify-content-end">
              <Button className=" btn-edit px-3 py-2 border-0 bg-primary text-light text-end">
                Edit
                <EditSVG/>
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
