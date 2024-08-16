import React, { useEffect, useState } from "react";
import "./Home.css";
import "axios";
import axios from "axios";
import image from "../../assets/img/7f9f8a75fed290e7cf1f91b9c71d3685.png";
import S_2_img1 from "../../assets/img/S-2-img1.png";
import S_2_img2 from "../../assets/img/S-2-img2.png";
import S_2_img3 from "../../assets/img/S-2-img3.png";
import S_2_img4_1 from "../../assets/img/S-2-img4.1.png";
import S_2_img4_2 from "../../assets/img/S-2-img4.2.png";
import S_2_img4_3 from "../../assets/img/S-2-img4.3.png";
import S_2_img4_4 from "../../assets/img/S-2-img4.4.png";
import S_3_img1 from "../../assets/img/S-3-img1.png";
import S_4_img1 from "../../assets/img/S-4-img1.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homepage">
      <section className="section1">
        <div
          className="text-center pt-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p className="fw-bold fs-2">
            Transform Your Workforce with <br /> Next-Gen Soft Skills Training
          </p>
          <p className="fw-semibold">
            Forge Stronger Teams: Revolutionize Soft Skills Learning
          </p>
          <Link to="/free-trial" className="btnone btn btn-primary me-3 px-3">
            Book a Demo
          </Link>
          <button className="btntwo btn btn-outline-primary px-3">
            Explore Courses
          </button>
          <div style={{ marginBottom: "0" }}>
            <img className="w-75" src={image} alt="/" />
          </div>
        </div>
      </section>
      <section className="section2">
        <div className="container w-75 px-5">
          <div className="pb-3">
            <h4 className="text-center fw-semibold">
              Maximize Your Growth with <br />
              <span>Powerful Solutions</span>
            </h4>
          </div>
          <div className="box2">
            <div className="response bg-white rounded d-flex p-5">
              <div className="w-50 pe-4">
                <p className="fw-medium fs-3">
                  AI-Driven Performance Analysis and Recommendations 
                </p>
                <hr />
                <span>
                  We tailor exercises based on user progress for continuous
                  improvement. This adaptive learning approach ensures that each
                  user receives the most relevant and effective training,
                  maximizing their skill development potential.
                </span>
              </div>
              <div className="w-75 ps-4">
                <img className="w-100" src={S_2_img1} alt="" />
              </div>
            </div>
            <div className="response d-flex pt-4">
              <div className="bg-white rounded px-5 py-4 me-2 w-75">
                <p className="fw-semibold fs-4">AI-Powered Personalization</p>
                <span>
                  We provide personalized recommendations for enhanced
                  engagement. This approach ensures you receive the most
                  relevant resources to advance your career effectively.
                </span>
                <img className="w-100 pt-4" src={S_2_img2} alt="" />
              </div>
              <div className="bg-white rounded px-5 py-4 ms-2 w-75">
                <p className="fw-semibold fs-4">
                  In-Depth Soft Skills Assessment
                </p>
                <span>
                  Our evaluation delivers a precise analysis of your soft
                  skills, highlighting both strengths and areas for development.
                </span>
                <img className="w-100 pt-4" src={S_2_img3} alt="" />
              </div>
            </div>
          </div>
          <div className="pt-5">
            <h4 className="text-center fw-semibold my-5">
              Experience the Benefits of <br /> <span>CareerCraft</span>
            </h4>
            <div className="box3">
              <div className="box3items">
                <img className="w-25" src={S_2_img4_1} alt="" />
                <p className="fw-semibold">Tailored Growth Opportunities</p>
                <span>
                  Personalized development plans designed to match your unique
                  skills and career goals.
                </span>
              </div>
              <div className="box3items">
                <img className="w-25" src={S_2_img4_2} alt="" />
                <p className="fw-semibold">Targeted Skill Insights</p>
                <span>
                  Identify and address skill gaps with targeted resources for
                  focused improvement.
                </span>
              </div>
              <div className="box3items">
                <img className="w-25" src={S_2_img4_3} alt="" />
                <p className="fw-semibold">Enhanced Job Satisfaction</p>
                <span>
                  Identify and address skill gaps with targeted resources for
                  focused improvement.
                </span>
              </div>
              <div className="box3items">
                <img className="w-25" src={S_2_img4_4} alt="" />
                <p className="fw-semibold">Networking Opportunities</p>
                <span>
                  Connect with industry experts and build valuable professional
                  relationships.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section3">
        <div className="container w-75 px-5">
          <div className="border">
            <h4 className="fw-semibold pb-5">How It Works</h4>
            <div className="d-flex">
              <div className="w-25">
                <img className="w-25" src={S_3_img1} alt="" />
              </div>
              <div className="textbox">
                <div className="d-flex">
                  <div>
                    <p className="fw-semibold">Register Your Account</p>
                    <span>
                      Sign up to create your personalized CareerCraft account
                      with just <br /> a few details.
                    </span>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="">
                    <p className="fw-semibold">
                      Complete initial soft skills evaluation
                    </p>
                    <span>
                      Take our comprehensive evaluation to assess your current
                      soft
                      <br /> skills and identify areas for improvement.
                    </span>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="">
                    <p className="fw-semibold">
                      Receive personalized course recommendations
                    </p>
                    <span>
                      Get tailored course suggestions based on your evaluation
                      to target
                      <br /> your specific development needs.
                    </span>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="">
                    <p className="fw-semibold">
                      Engage in regular exercises and track progress
                    </p>
                    <span>
                      Participate in recommended exercises and monitor your
                      progress
                      <br /> with real-time updates on your achievements.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section4">
        <div className="box">
          <img className="w-100" src={S_4_img1} alt="/" />
          <div className="boxone">
            <div className="boxtext">
              <p className="fs-2 fw-semibold">
                Start Your Soft Skills Journey Today
              </p>
              <p>
                Unlock your potential with CareerCraft's personalized training
                solutions.
              </p>
              <button className="btnone btn btn-light text-primary me-2 px-3">
                Book a Demo
              </button>
              <button className="btntwo btn btn-outline-light ms-2 px-3">
                Explore Courses
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
