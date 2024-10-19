import React, { useEffect, useState, useRef } from "react";
import data from "../../data/data.json";
import img from "../../assets/img/comm-p.png";
import right from "../../assets/TestResultsOneImg/right-arrow.png";
import left from "../../assets/TestResultsOneImg/left-arrow.png";
import "./textresulttwo.css";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllReports } from "../../config/authReport";

const TestResultsTwo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [skillName, setSkillName] = useState([]);
  const [level, setLevel] = useState();
  const [percent, setPercent] = useState("");
  const activeSkill = data.data[activeIndex];
  const skillRefs = useRef([]);
  const dispatch = useDispatch();
  const allreports = useSelector((state) => state.report.allreport);
  useEffect(() => {
    dispatch(getAllReports(2));
  }, [dispatch]);
  useEffect(() => {
    if (skillRefs.current[activeIndex]) {
      skillRefs.current[activeIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    }

    const index = allreports.find(
      (item) => item.skillId === activeSkill.skillId
    );
    setSkillName(index);
    if (skillName && skillName.skillLevel) {
      const level =
        skillName.skillLevel.slice(0, 1) +
        skillName.skillLevel.slice(1).toLowerCase();
      setLevel(level);
      if (level == "Intermediate") {
        setPercent("<80%");
      } else if (level == "Advanced") {
        setPercent(">80%");
      } else {
        setPercent("<60%");
      }
    }
  }, [activeIndex, allreports, skillName]);
  const clickLeftArrow = () => {
    setActiveIndex(activeIndex === 0 ? data.data.length - 1 : activeIndex - 1);
  };

  const clickRightArrow = () => {
    setActiveIndex(activeIndex === data.data.length - 1 ? 0 : activeIndex + 1);
  };
  return (
    <Container className="w-75 p-5">
      <div className="skillNames">
        {data.data.map((skill, index) => {
          return (
            <div
              key={index}
              ref={(el) => (skillRefs.current[index] = el)}
              className={`skillNames__1 ${
                index === activeIndex ? "skillNames-active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {skill.skillName}
            </div>
          );
        })}
      </div>
      <div className="communication">
        <div className="arrow">
          <img
            src={left}
            alt="left-arrow"
            className="arrow1"
            onClick={clickLeftArrow}
          />
          <img
            src={right}
            alt="right-arrow"
            className="arrow1"
            onClick={clickRightArrow}
          />
        </div>
        <div className="section1 my-4 d-flex justify-content-between align-items-center">
          <h3 className="fw-semibold">
            {skillName?.skillName} <span className="text-primary">{level}</span>{" "}
            level
          </h3>
          <div className="low text-primary text-center">
            <span className="fw-bold">{percent}</span>
            <p className="p__level fw-normal">{level}</p>
          </div>
        </div>
        <div className="section1 my-4">
          {activeSkill.context.map((content, index) => {
            return (
              <div className="d-flex p-4 content__border my-4" key={index}>
                <img
                  className="me-3 content__img"
                  src={content.img}
                  alt="img"
                />
                <div>
                  <h5 className="text-primary h5-title">{content.title}</h5>
                  <span className="p-title">Action:</span>
                  <span className="span-title">{content.action}</span>
                </div>
              </div>
            );
          })}
        </div>
        <h1 className="h3-skillName">Additional Resources</h1>
        <div className="border p-5 d-flex gap-3 communicate">
          <div>
            <img src={img} alt="img" className="comm-p" />
          </div>
          <div>
            <h3 className="h5-title">{activeSkill.skillName}</h3>
            <span className="span-title">Academic Papers:</span>
            {activeSkill.communcations.map((communicate) =>
              communicate.papers.map((data, index) => (
                <ul key={index} className="mt-2">
                  <li className="ul__li">{data}</li>
                </ul>
              ))
            )}
            <span className="span-title">Books:</span>
            {activeSkill.communcations.map((communicate) =>
              communicate.books.map((data, index) => (
                <ul key={index} className="mt-2">
                  <li className="ul__li">{data}</li>
                </ul>
              ))
            )}
            <span className="span-title">Blogs:</span>
            {activeSkill.communcations.map((communicate) =>
              communicate.blogs.map((data, index) => (
                <ul key={index} className="mt-2">
                  <li className="ul__li">{data}</li>
                </ul>
              ))
            )}
            <span className="span-title">Courses:</span>
            {activeSkill.communcations.map((communicate) =>
              communicate.courses.map((data, index) => (
                <ul key={index} className="mt-2">
                  <li className="ul__li">{data}</li>
                </ul>
              ))
            )}
            <span className="span-title">Tools:</span>
            {activeSkill.communcations.map((communicate) =>
              communicate.tools.map((data, index) => (
                <ul key={index} className="mt-2">
                  <li className="ul__li">{data}</li>
                </ul>
              ))
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TestResultsTwo;
