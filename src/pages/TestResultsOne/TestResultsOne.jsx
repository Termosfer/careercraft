import React, { useEffect, useState } from "react";
import "./TestResultsOne.css";
import AdditionalResources from "../../components/additionalResources/AdditionalResources";
import { useDispatch, useSelector } from "react-redux";
import { getSSResults } from "../../config/getSoftSkillResults";
import { getAllReports, getReports } from "../../config/authReport";

const TestResultsOne = () => {
  const dispatch = useDispatch();
  const ssData = useSelector((state) => state.softSkillResult.softResult);
  const allReport = useSelector((state) => state.report.allreport);
  const [skill, setSkill] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getSSResults());
      await dispatch(getAllReports(1));
      await dispatch(getReports(1));
      setLoading(false);
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (allReport && allReport.length > 0) {
      setSkill(
        allReport.map((allRep) => ({
          skillId: allRep.skillId,
          skillLevel: allRep.skillLevel,
        }))
      );
    }
  }, [allReport]);

  const [activeSection, setActiveSection] = useState("Communication");

  const renderSkeleton = () => (
    <>
      <div className="skeleton-loader">
        <div className="skeleton-img"></div>
        <div className="skeleton-section">
          <div className="skeleton-header" />
          <div className="skeleton-content">
            <div className="skeleton-line" />
            <div className="skeleton-line" />
          </div>
        </div>
      </div>
    </>
  );
  const renderSkeletonn = () => (
    <>
      <div className="skeleton-header mt-5"></div>
    </>
  );

  const renderContentBySkill = (skillIndex) => {
    const skillItem = allReport[skillIndex];
    const skillLevel =
      skillItem.skillLevel.slice(0, 1) +
      skillItem.skillLevel.slice(1).toLowerCase();
    return (
      <div
        className={`section ${skillItem.skillName
          .toLowerCase()
          .replace(" ", "-")}`}
      >
        <div className="section1 my-5">
          <h3 className="fw-semibold">
            {skillItem.skillName}{" "}
            <span className="text-primary">{skillLevel}</span> Level
          </h3>
          <div className="low text-primary text-center">
            <p className="fw-bold p1">
              {skillItem.skillLevel === "BEGINNER" && "<60% "}
              {skillItem.skillLevel === "INTERMEDIATE" && "<80% "}
              {skillItem.skillLevel === "ADVANCED" && ">80% "}
            </p>
            <p className="p2">{skillLevel}</p>
          </div>
        </div>

        {skill?.map((skillItem) => (
          <div key={skillItem.skillId}>
            {ssData?.map((ssDat) => (
              <div key={ssDat.id}>
                {ssDat.level === skillItem.skillLevel &&
                  ssDat.skillId === skillItem.skillId &&
                  ssDat.skillId === skillIndex + 1 && (
                    <div>
                      <div className="border d-flex p-4">
                        <img
                          className="me-3 soft__img"
                          src={ssDat.imageUrl}
                          alt="imageUrl"
                        />
                        <div>
                          <h5>{ssDat.description}</h5>
                          <p>
                            <span>Action:</span> {ssDat.action}
                          </p>
                          <p>
                            <span>Courses:</span>
                            {ssDat.additionalResources.courses
                              .slice(0, 2)
                              .map((c, index) => (
                                <span
                                  key={index}
                                  className="text-secondary-emphasis fw-normal"
                                >
                                  {c}
                                  <br />
                                </span>
                              ))}
                          </p>
                          <p>
                            <span>Blogs:</span>
                            {ssDat.additionalResources.blogs
                              .slice(0, 2)
                              .map((c, index) => (
                                <span
                                  key={index}
                                  className="text-secondary-emphasis fw-normal"
                                >
                                  {c}
                                  <br />
                                </span>
                              ))}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
              </div>
            ))}
          </div>
        ))}

        <div className="mt-5 mb-4">
          <h3 className="fw-semibold">Additional Resources</h3>
        </div>
        {skill?.map((skillItem) => (
          <div key={skillItem.skillId}>
            {ssData?.map((ssDat) => (
              <div key={ssDat.id}>
                {ssDat.level === skillItem.skillLevel &&
                  ssDat.skillId === skillItem.skillId &&
                  ssDat.skillId === skillIndex + 1 && (
                    <AdditionalResources addRes={ssDat} />
                  )}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div>
          {renderSkeletonn()}
          {renderSkeleton()}
          {renderSkeleton()}
          {renderSkeleton()}
        </div>
      );
    }

    switch (activeSection) {
      case "Communication":
        return renderContentBySkill(4);
      case "Personal Qualities":
        return renderContentBySkill(3);
      case "Critical Thinking":
        return renderContentBySkill(2);
      case "Leadership":
        return renderContentBySkill(1);
      case "Teamwork":
        return renderContentBySkill(0);
      default:
        return null;
    }
  };

  return (
    <div className="TestResultsOne">
      <div className="container w-75 px-5">
        <div className="toggle mt-5">
          {[
            "Communication",
            "Personal Qualities",
            "Critical Thinking",
            "Leadership",
            "Teamwork",
          ].map((section) => (
            <div
              key={section}
              onClick={() => setActiveSection(section)}
              className={activeSection === section ? "active" : ""}
            >
              {section}
            </div>
          ))}
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default TestResultsOne;
