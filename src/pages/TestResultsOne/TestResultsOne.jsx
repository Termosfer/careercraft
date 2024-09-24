import React, { useEffect, useState } from "react";
import "./TestResultsOne.css";
import img1 from "../../assets/TestResultsOneImg/TestResultsImgOne.png";
import img2 from "../../assets/TestResultsOneImg/TestResultsImg2.png";
import img3 from "../../assets/TestResultsOneImg/TestResultsImg3.png";
import img4 from "../../assets/TestResultsOneImg/TestResultsImg4.png";
import img5 from "../../assets/TestResultsOneImg/TestResultsImg5.png";
import AdditionalResources from "../../components/additionalResources/AdditionalResources";
import { useDispatch, useSelector } from "react-redux";
import { getSSResults } from "../../config/getSoftSkillResults";
import { getAllReports } from "../../config/authReport";

const TestResultsOne = () => {
  const dispatch = useDispatch()
  const ssData = useSelector(state => state.softSkillResult.softResult)
  const allReport = useSelector(state => state.report.allreport)
  // console.log(allReport, "all")
  /* console.log(ssData, "asdadada") */
  const [skill, setSkill] = useState([])
  useEffect(() => {
    dispatch(getSSResults())
    dispatch(getAllReports())
  }, [])

  useEffect(() => {
    if (allReport && allReport.length > 0) {
      setSkill((skill) =>
        allReport.map((allRep) => ({
          ...skill,
          skillId: allRep.skillId,
          skillLevel: allRep.skillLevel,
        }))
      );
    }
  }, [allReport]);
  // console.log(skill, "ads")

  const [activeSection, setActiveSection] = useState("Communication");

  const renderContent = () => {
    switch (activeSection) {
      case "Communication":
        return (

          <div className="Communication">

            <div className="section1 my-5">
              <h3 className="fw-semibold">
                Communication <span className="text-primary">{allReport && allReport[0].skillLevel}</span>{" "}
                Level
              </h3>



              <div className="low text-primary">
                <span className="fw-bold">
                  {`<50%`}
                  <p className="fw-normal">Beginner</p>
                </span>
              </div>
            </div>


            {skill?.map((skillItem) => (
              <div key={skillItem.skillId}>
                {ssData?.map((ssDat) => (
                  <div key={ssDat.id}>
                    {ssDat.level === skillItem.skillLevel && ssDat.skillId === skillItem.skillId && ssDat.skillId === 5 &&
                      (
                        <div>

                          <div className="border d-flex p-4 ">
                            <img className="me-3 soft__img" src={ssDat.imageUrl} alt="imageUrl" />
                            <div>
                              <h5>{ssDat.description && ssDat.description}</h5>
                              <p>
                                <span>Action:</span> {ssDat.action}
                              </p>
                              <p>
                                <span>Courses:</span>
                                {ssDat.additionalResources.courses.slice(0, 2).map((c) => (
                                  <>
                                    <span className="text-secondary-emphasis fw-normal" >  {c}</span> <br />
                                  </>
                                ))}
                              </p>
                              <p>
                                <span>Blogs:</span>
                                {ssDat.additionalResources.blogs.slice(0, 2).map((c) => (
                                  <>
                                    <span className="text-secondary-emphasis fw-normal" >  {c}</span> <br />
                                  </>
                                ))}
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    }
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
                    {ssDat.level === skillItem.skillLevel && ssDat.skillId === skillItem.skillId && ssDat.skillId === 5 &&
                      (
                        <AdditionalResources addRes={ssDat} />

                      )
                    }

                  </div>
                ))}

              </div>
            ))}
          </div>

        );
      case "Personal Qualities":
        return (
          <div className="PersonalQualities">
            <h3 className="my-5">
              Diğer Personal Qualities içerikleri burada olacak
            </h3>
          </div>
        );
      case "Critical Thinking":
        return (
          <div className="Critical Thinking">
            <h3 className="my-5">
              Diğer Critical Thinking içerikleri burada olacak
            </h3>
          </div>
        );
      case "Leadership":
        return (
          <div className="Leadership">
            <h3 className="my-5">Diğer Leadership içerikleri burada olacak</h3>
          </div>
        );
      case "Teamwork":
        return (
          <div className="Teamwork">
            <h3 className="my-5">Diğer Teamwork içerikleri burada olacak</h3>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="TestResultsOne">
      <div className="container w-75 px-5">
        <div className="toggle mt-5">
          <div
            onClick={() => setActiveSection("Communication")}
            className={activeSection === "Communication" ? "active" : ""}
          >
            Communication
          </div>
          <div
            onClick={() => setActiveSection("Personal Qualities")}
            className={activeSection === "Personal Qualities" ? "active" : ""}
          >
            Personal Qualities
          </div>
          <div
            onClick={() => setActiveSection("Critical Thinking")}
            className={activeSection === "Critical Thinking" ? "active" : ""}
          >
            Critical Thinking
          </div>
          <div
            onClick={() => setActiveSection("Leadership")}
            className={activeSection === "Leadership" ? "active" : ""}
          >
            Leadership
          </div>
          <div
            onClick={() => setActiveSection("Teamwork")}
            className={activeSection === "Teamwork" ? "active" : ""}
          >
            Teamwork
          </div>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default TestResultsOne;
