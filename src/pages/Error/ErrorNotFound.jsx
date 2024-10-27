import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import "./error.css";
import notFound from "../../assets/img/p404.png";

const ErrorNotFound = () => {
  return (
    <>
      <div className="notF-page">
        <Container className="w-75">
          <div className="notfound d-flex">
            <div className="text-nf">
              <h3>Oops...This page is not Found.</h3>
              <Link to={"/"} className="d-flex align-items-center">
                <IoArrowBackCircleOutline className="me-1 " />
                Back to Home Page
              </Link>
            </div>
            <img className="img" src={notFound} alt="" />
          </div>
        </Container>
      </div>
    </>
  );
};

export default ErrorNotFound;
