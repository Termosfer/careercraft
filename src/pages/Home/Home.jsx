import React, { useEffect, useState } from "react";
import "./Home.css";
import "axios";
import axios from "axios";
import image from "../../assets/img/7f9f8a75fed290e7cf1f91b9c71d3685.png";
import box1 from "../../assets/img/box1.png";
import box2 from "../../assets/img/box2.png";

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
          <button className="btn btn-primary me-3">Book a Demo</button>
          <button className="btn btn-outline-primary">Explore Courses</button>
          <p>
            <img className="w-75" src={image} alt="/" />
          </p>
        </div>
      </section>
      <section className="section2">
        <div className="py-5 d-flex justify-content-evenly container">
          <div className="box1">
            <p className="fw-bold">AI-Powered Personalization</p>
            <p>
              We tailor exercises based on user progress for continuous
              improvement. This adaptive learning approach ensures that each
              user receives the most relevant and effective training, maximizing
              their skill development potential.
            </p>
            <img src={box1} alt="" />
          </div>
          <div className="box1">
            <p className="fw-bold">
              AI-Driven Performance Analysis and Recommendations
            </p>
            <p>
              We tailor exercises based on user progress for continuous
              improvement. This adaptive learning approach ensures that each
              user receives the most relevant and effective training, maximizing
              their skill development potential.
            </p>
            <img src={box2} alt="" />
          </div>
        </div>
        <div className=""></div>
      </section>
    </div>
  );
};
export default Home;
