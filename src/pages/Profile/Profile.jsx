import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import EditSVG from "../../components/SVG/EditSVG";
import "./Profile.css"
import { useSelector } from "react-redux";



const Profile = () => {


  const user = useSelector(state => state.user.username)
  const email = localStorage.getItem("email")

  console.log(user, email, "asdadasd");


  return (
    <div className="profile-cont">
      <div className="bg-profile">
      </div>
      <Container className="cont-prof w-75 px-5">
      {
          user && (
            <div className="profile-div">
              <div className="cont-h1-profile">
                <h1 className="profile-h1">
                  {user.name && user.surname ? user.name.slice(0, 1).toUpperCase() + user.surname.slice(0, 1).toUpperCase() : ""}
                </h1>
              </div>
              <div className="d-flex flex-column pb-2">
                <span className="fw-semibold">{user.name + " " + user.surname}</span>
                <span className="fs-7">{email}</span>
              </div>
            </div>
          )
        }

        <Form className=" border rounded-4 personal-cont ">
          <Row className=" w-100 d-flex ">
            <Col>
              <h4 className="pers-info-h4 fw-semibold">Personal Information</h4>
            </Col>
            <Col className="d-flex justify-content-end">
              <Button className=" btn-edit px-3 py-2 border-0 bg-primary text-light text-end">
                Edit
                <EditSVG />
              </Button>
            </Col>
          </Row>
          
          <Row className="prof-p">
            <Col>
            <label htmlFor="">First name</label>
            <p>{user.name}</p>
            </Col>

            <Col>
            <label htmlFor="">Last name</label>
            <p>{user.surname}</p>
            </Col>
          </Row>

          <Row className="prof-p">
            <Col>
            <label htmlFor="">Gender</label>
            <p>Female</p>
            </Col>

            <Col>
            <label htmlFor="">Birthday</label>
            <p>23 March, 2001</p>
            </Col>
          </Row>

          <Row className="prof-p">
            <Col>
            <label htmlFor="">Bio</label>
            <p>IT Project Manager</p>
            </Col>

            <Col>
            <label htmlFor="">Email Address</label>
            <p>{email}</p>
            </Col>
          </Row>

          <Row className="prof-p">
            <Col>
            <label htmlFor="">Phone</label>
            <p>+994 55 555 55 55</p>
            </Col>

            <Col>
            
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Profile;
