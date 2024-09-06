import React from "react";
import "./freetest.css";
import img1 from "../../assets/img/imgg1.png";
import img2 from "../../assets/img/imgg2.png";
import img3 from "../../assets/img/imgg3.png";
import img4 from "../../assets/img/imgg4.png";
import { Link } from "react-router-dom";
const FreeTest = () => {
  const token = localStorage.getItem("token");
  return (
    <main className="main">
      <div className="FreeTest">
        <div className="container w-75 px-5">
          <section className="section1 d-flex flex-column justify-content-center">
            <div className="text-blur p-5">
              <h1>Unlock Your Potential: Free Skill Level Test</h1>
              <p>
                Assess Your Current Skills And Discover Your Strengths With Our
                <br />
                Complimentary Test.
              </p>
              <Link
                to={token ? "/free-trial" : "/auth/login"}
                className="btn btn-primary px-4"
              >
                Start Free Test
              </Link>
            </div>
            <div className="text-blur p-5 mt-5">
              <p>
                Ready to find out where you stand? Our free skill level test
                provides insights into your current abilities and helps guide
                your professional growth. Start now to get a personalized skill
                assessment.
              </p>
            </div>
          </section>
        </div>
      </div>
      <section className="section2 container w-75 px-5">
        <div className="text-center py-5">
          <p className="fw-semibold fs-3 pb-4">
            Why Take the <span className="text-primary">Test?</span>
          </p>
          <div className="d-flex justify-content-between column-gap-3">
            <div className="a">
              <img className="img w-75" src={img1} alt="" />
              <h5 className="text-start">Get Insightful Feedback</h5>
              <p className="text-start">
                Receive detailed analysis on your skill levels in key areas
                relevant to your field.
              </p>
            </div>
            <div className="a">
              <img className="img w-75" src={img2} alt="" />
              <h5 className="text-start">Personalized Insights</h5>
              <p className="text-start">
                Based on your results, get tailored learning pathways and
                resources to enhance your skills.
              </p>
            </div>
            <div className="a">
              <img className="img w-75" src={img3} alt="" />
              <h5 className="text-start">Boost Your Career</h5>
              <p className="text-start">
                Identify strenghts and areas for improvement to advance in your
                career or make a career transition.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container w-75 px-5">
        <p className="text-center fs-3 fw-semibold py-5">
          How It <span className="text-primary">Works</span>
        </p>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column justify-content-around">
            <div className="">
              <p className="text-primary mb-0 fw-semibold">
                1. Register Easily
              </p>
              <span className="ps-3">
                Create an account to get started. It’s quick and simple!
              </span>
            </div>
            <div>
              <p className="text-primary mb-0 fw-semibold">2. Take the Test</p>
              <span className="ps-3">
                Answer a series of carefully crafted questions that assess{" "}
                <br /> <span className="ps-3">your skills and knowledge.</span>
              </span>
            </div>
            <div>
              <p className="text-primary mb-0 fw-semibold">
                3. Receive Results
              </p>
              <span className="ps-3">
                Instantly get your skill assessment results <br />{" "}
                <span className="ps-3">and personalized recommendations.</span>
              </span>
            </div>
          </div>
          <div>
            <img className="img4" src={img4} alt="" />
          </div>
        </div>
        <div className="text-center py-5">
          <button className="btn btn-primary px-4">Start Assessment</button>
        </div>
      </section>
    </main>
  );
};

export default FreeTest;
