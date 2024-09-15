import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import EditSVG from "../../components/SVG/EditSVG";
import "./Profile.css";
import { useSelector } from "react-redux";
import Graph from "../../assets/img/Graph.png";
import Graph2 from "../../assets/img/Graph2.png";
import { Link } from "react-router-dom";
const Profile = () => {
  const user = useSelector((state) => state.user.username);

  return (
    <div className="profile-cont">
      <div className="bg-profile"></div>
      <Container className="cont-prof w-75 px-5">
        {user && (
          <div className="profile-div">
            <div className="cont-h1-profile">
              <h1 className="profile-h1">
                {user.name && user.surname
                  ? user.name.slice(0, 1).toUpperCase() +
                    user.surname.slice(0, 1).toUpperCase()
                  : ""}
              </h1>
            </div>
            <div className="d-flex flex-column pb-2">
              <span className="fw-semibold">
                {user.name + " " + user.surname}
              </span>
              <span className="fs-7">{user.email}</span>
            </div>
          </div>
        )}

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
              <p>{user.email}</p>
            </Col>
          </Row>

          <Row className="prof-p">
            <Col>
              <label htmlFor="">Phone</label>
              <p>+994 55 555 55 55</p>
            </Col>

            <Col></Col>
          </Row>
        </Form>
        <Form className="border rounded-4 personal-cont mt-4">
          <Row className="w-100 d-flex">
            <Col>
              <h4 className="pers-info-h4 fw-semibold">Address</h4>
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
              <label htmlFor="">Country</label>
              <p>-</p>
            </Col>
            <Col>
              <label htmlFor="">City/State</label>
              <p>-</p>
            </Col>
          </Row>
        </Form>
        <div className="d-flex justify-content-between mt-5">
          <div className="bgColor-softSkill text-white">
            <img src={Graph} alt="graph" className="graph-img" />
            <div className="p-5 softSkill-info">
              <h1>Soft Skills Results</h1>
              <p>
                Review your performance across key areas to enhance your
                professional abilities.
              </p>
              <Link to="/freetest/test-result">
                <Button
                  type="submit"
                  variant="primary"
                  className="mt-5 px-4 button-view"
                >
                  View Results
                </Button>
              </Link>
            </div>
          </div>
          <div className="bgColor-softSkill text-white">
            <img src={Graph2} alt="graph" className="graph-img2" />
            <div className="p-5 softSkill-info">
              <h1>Hard Skills Results</h1>
              <p>
                Unlock detailed insights on your technical skills and
                professional growth.
              </p>
              <Button
                type="submit"
                variant="primary"
                className="mt-5 px-4 button-view"
              >
                View Results
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
