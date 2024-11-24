import { useEffect, useState } from "react";
import "./test.css";
import AdditionalResources from "../../components/additionalResources/AdditionalResources";
import { useDispatch, useSelector } from "react-redux";
import { getSSResults } from "../../config/getSoftSkillResults";
import { getAllReports } from "../../config/authReport";
import { Container } from "react-bootstrap";
const Test = () => {
    const dispatch = useDispatch();
    const ssData = useSelector((state) => state.softSkillResult.softResult);
    const allReport = useSelector((state) => state.report.allreport);
    const [selectedSkill, setSelectedSkill] = useState(allReport[0]?.skillName || "Teamwork");
    const selectedReport = allReport.find(report => report.skillName === selectedSkill);
    const skillLevel = selectedReport ? selectedReport.skillLevel : "Beginner"
    let percent;
    if (skillLevel === "BEGINNER") {
        percent = "<60%"
    } else if (skillLevel === "INTERMEDIATE") {
        percent = "<80%"
    } else if (skillLevel === "ADVANCED") {
        percent = ">80%"
    }
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getSSResults());
            await dispatch(getAllReports(1));
        };
        fetchData();
    }, [dispatch]);

    const handleSkillClick = (skillName) => {
        setSelectedSkill(skillName);
    };
    return (
        <Container className="w-75 p-5">
            <div className=" border py-2 px-3 switcher">
                {
                    allReport?.map(reports => {
                        return (
                            <span key={reports.skillId} onClick={() => handleSkillClick(reports.skillName)} className={` py-2 switcher-button ${selectedSkill === reports.skillName ? 'active' : ''}`}>{reports.skillName}</span>
                        )
                    })
                }
            </div>
            <div className="d-flex align-items-center justify-content-between pt-5 pb-2">
                <h3 className="fs-2">{selectedSkill} <span className="text-primary"> {skillLevel.slice(0, 1) + skillLevel.slice(1).toLowerCase()}</span> Level</h3>
                <div className="low border">
                    <span className="fw-bold low-span1">{percent}</span>
                    <span className="low-span2">{skillLevel.slice(0, 1) + skillLevel.slice(1).toLowerCase()}</span>
                </div>
            </div>
            {allReport?.filter(report => report.skillName === selectedSkill).map((report) => {
                return (
                    <div key={report.skillId}>
                        {ssData?.filter(data => data.skillId === report.skillId && data.level === report.skillLevel).map((info, index) => {
                           return (
                                <div key={index} className="border d-flex p-3 gap-3 my-4 info__border">
                                    <img src={info.imageUrl} alt="image" className="soft__img" loading="lazy"/>
                                    <div className="info__text">
                                        <h4 className="text-primary">{info.description}</h4>
                                        <div>
                                            <span className="text-primary">Action:</span>
                                            <span>{info.action}</span>
                                        </div>
                                        <div className="pt-3">
                                            <span className="text-primary">Blogs:</span>
                                            {
                                                info.additionalResources.blogs.slice(0, 3).map((i, index) => (

                                                    <span key={index}>{i}</span>
                                                ))
                                            }
                                        </div>
                                        <div className="pt-2">
                                            <span className="text-primary">Courses:</span>
                                            {
                                                info.additionalResources.courses.slice(0, 2).map((n, index) => (
                                                    <span key={index}>  {n}</span>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
            <div className="mt-5 mb-4">
                <h3 className="fw-semibold">Additional Resources</h3>
            </div>
            {
                allReport?.filter(item => item.skillName === selectedSkill).map((report, index) => (
                    <div key={index}>
                        {
                            ssData?.filter(item => item.skillId === report.skillId && item.level === report.skillLevel).map((report, index) => (
                                <AdditionalResources addRes={report} key={index} />
                            ))
                        }
                    </div>
                ))
            }
        </Container>
    )
}

export default Test