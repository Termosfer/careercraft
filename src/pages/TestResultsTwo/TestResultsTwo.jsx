import React, { useState } from 'react'
import data from "../../data/data.json"
import img from "../../assets/img/comm-p.png";
import AdditionalResources from "../../components/additionalResources/AdditionalResources";
import "./textresulttwo.css"
const TestResultsTwo = () => {
    console.log(data)
    const [activeSection, setActiveSection] = useState("Communication");
    const renderContent = () => {
        switch (activeSection) {
            case "Communication":
                return (
                    <div className="Communication">
                        {/* Communication İçeriği */}
                        <div className="Communication">
                            <h1 className='pt-5 h3-skillName'>{data.data[0].skillName}</h1>
                            <div className="low text-primary">
                                <span className="fw-bold">
                                    {`<50%`}
                                    <p className="fw-normal">Beginner</p>
                                </span>
                            </div>
                            <div className="section1 my-4">

                                {<>
                                    <div>{data.data[0].context.map((content, index) => {
                                        return (
                                            <div className='d-flex p-4' key={index}>
                                                <img className="w-25 me-3" src={content.img} alt="" />
                                                <div>
                                                    <h5 className='text-primary h5-title'>{content.title}</h5>
                                                    <p className='p-title'><span className="span-title">Action:</span>{content.action}</p>
                                                </div>
                                            </div>

                                        )
                                    }
                                    )}</div>
                                </>

                                }
                            </div>
                            <h1 className='h3-skillName'>Additional Resources</h1>
                            <div className='border p-5 d-flex gap-3'>
                                <div>
                                    <img src={img} alt="" className='comm-p' />
                                </div>
                                <div>
                                    <h3 className='h5-title'>Communication Skills</h3>
                                    <span className='span-title'>Academic Papers:</span>
                                    {
                                        data.data[0].communcations.map((communicate, index) => (

                                            communicate.papers.map((data, index) => (
                                                <ul key={index}>
                                                    <li>{data}</li>
                                                </ul>
                                            ))

                                        ))
                                    }
                                </div>
                            </div>
                            {/* <AdditionalResources/> */}
                        </div>
                    </div >
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
    )
}
export default TestResultsTwo