import React, { useEffect, useState } from "react";
import "./Home.css";
import "axios";
import axios from "axios";
import image from "../../assets/img/7f9f8a75fed290e7cf1f91b9c71d3685.png";
import img1 from "../../assets/img/box1.png";
import img2 from "../../assets/img/box2.png";
import img2_1 from "../../assets/img/box1.1.jpg";
import img2_2 from "../../assets/img/box1.2.jpg";
import img2_3 from "../../assets/img/box1.3.jpg";
import img3_1 from "../../assets/img/box3.1.jpg";
import img3_2 from "../../assets/img/box3.2.jpg";
import img4 from "../../assets/img/box4.jpg";

const Home = () => {
  return (
    <div>
      <section className="section1">
        <div className="text-center pt-5">
          <p className="fw-bold fs-2">
            Transform Your Workforce with <br /> Next-Gen Soft Skills Training
          </p>
          <p className="fw-semibold">
            Forge Stronger Teams: Revolutionize Soft Skills Learning
          </p>
          <button className="btn btn-primary me-3 px-3">Book a Demo</button>
          <button className="btn btn-outline-primary px-3">
            Explore Courses
          </button>
          <p style={{ marginBottom: "0" }}>
            <img className="w-75" src={image} alt="/" />
          </p>
        </div>
      </section>
      <section className="section2">
        <div className="boxone py-5 d-flex justify-content-evenly container">
          <div className="box">
            <p className="fw-bold">AI-Powered Personalization</p>
            <p>
              We tailor exercises based on user progress for continuous
              improvement. This adaptive learning approach ensures that each
              user receives the most relevant and effective training, maximizing
              their skill development potential.
            </p>
            <img src={img1} alt="" />
          </div>
          <div className="box">
            <p className="fw-bold">
              AI-Driven Performance Analysis and Recommendations
            </p>
            <p>
              We tailor exercises based on user progress for continuous
              improvement. This adaptive learning approach ensures that each
              user receives the most relevant and effective training, maximizing
              their skill development potential.
            </p>
            <img src={img2} alt="" />
          </div>
        </div>
        <div className="boxtwo d-flex container justify-content-evenly pb-5">
          <div className="box">
            <img className="w-100" src={img2_1} alt="" />
            <span className="fw-semibold">Expert-Crafted Content</span>
            <span>
              <br />
              Curated by industry professionals.
            </span>
          </div>
          <div className="box">
            <img className="w-100" src={img2_2} alt="" />
            <span className="fw-semibold">Regular, Practical Exercises</span>
            <span>
              <br />
              Real-world scenarios for skill enhancement.
            </span>
          </div>
          <div className="box">
            <img className="w-100" src={img2_3} alt="" />
            <span className="fw-semibold">Progress Tracking and Analytics</span>
            <span>
              <br />
              AI-generated insights for continuous improvement.
            </span>
          </div>
        </div>
      </section>
      <section className="section3">
        <div className="boxone">
          <div className="d-flex justify-content-center">
            <div className="box me-2">
              <img className="w-100" src={img3_1} alt="" />
              <p className="fw-semibold pt-3">For Employers</p>
              <p>
                Transform Your Workforce: Enhance the soft skills of employees
                to drive better teamwork, innovation, and adaptability within
                organization.
                <br />
                <p></p> Boost Organizational Success: Cultivate a workforce
                equipped with strong soft skills, leading to improved
                productivity and performance.
              </p>
              <button className="btn btn-primary w-100">See more</button>
            </div>
            <div className="box ms-2">
              <img className="w-100" src={img3_2} alt="" />
              <p className="fw-semibold pt-3">For Employers</p>
              <p>
                Tailored Growth Opportunities: Experience personalized
                development plans tailored to unique skill set and career goals.
                <br />
                <p></p>
                <br />
                Enhanced Job Satisfaction: Develop crucial soft skills, leading
                to increased job satisfaction and fulfillment in role.
              </p>
              <br />
              <button className="btn btn-primary w-100">See more</button>
            </div>
          </div>
        </div>
      </section>
      <section className="section4">
        <div className="box d-flex container justify-content-center py-5">
          <div className="me-5">
            <p className="fw-semibold fs-3">How It Works</p>
            <p>
              Simple steps to unlock your career <br /> potential and start
              learning today.
            </p>
            <button className="btn btn-light text-primary px-4">
              Get Started
            </button>
          </div>
          <div className="d-grid ms-5">
            <div className="box">
              <div className="num">1</div>
              <p>Register Your Account</p>
            </div>
            <div className="box">
              <div className="num">2</div>
              <p>Complete initial soft skills evaluation</p>
            </div>
            <div className="box">
              <div className="num">3</div>
              <p>Receive personalized course recommendations</p>
            </div>
            <div className="box">
              <div className="num">4</div>
              <p>Engage in regular exercises and track progress</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section5">
        <div className="box">
          <img className="w-100" src={img4} alt="/" />
          <div className="boxone">
            <div className="boxtext">
              <p className="fs-2 fw-semibold">
                Start Your Soft Skills Journey Today
              </p>
              <p>
                Unlock your potential with CareerCraft's personalized training
                solutions.
              </p>
              <button className="btn btn-light text-primary me-2 px-3">
                Book a Demo
              </button>
              <button className="btn btn-outline-light ms-2 px-3">
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
