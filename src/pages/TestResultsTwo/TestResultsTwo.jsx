import React, { useEffect, useState } from 'react'
import data from "../../data/data.json"
import img from "../../assets/img/comm-p.png";
import right from "../../assets/TestResultsOneImg/right-arrow.png"
import left from "../../assets/TestResultsOneImg/left-arrow.png"
import AdditionalResources from "../../components/additionalResources/AdditionalResources";
import "./textresulttwo.css"
import { useDispatch, useSelector } from 'react-redux';
import { getHardSkillReport, getHardSkillReports } from '../../config/authReport';
import { Container } from 'react-bootstrap';
const TestResultsTwo = () => {
    console.log(data)
    const dispatch = useDispatch()
    const hsData = useSelector(state => state.report.hardSkillRaport)
    const allHSData = useSelector(state => state.report.hardSkillRaports)
    const [activeIndex, setActiveIndex] = useState(0)
    const activeSkill = data.data[activeIndex];
    

    useEffect(() => {
        dispatch(getHardSkillReport())
        dispatch(getHardSkillReports())
    }, [dispatch])

    const clickLeftArrow = () => {
        setActiveIndex(prevIndex => (prevIndex === 0 ? data.data.length - 1 : prevIndex - 1));
    };

    const clickRightArrow = () => {
        setActiveIndex(prevIndex => (prevIndex === data.data.length - 1 ? 0 : prevIndex + 1));
    };


    return (
        <Container className='w-75 p-5'>
            <div className='skillNames'>
                <div className='skillNames__1 skillNames-active'>Research & Discovery</div>
                <div className='skillNames__1'>Product Analytics</div>
                <div className='skillNames__1'>Product Planning</div>
                <div className='skillNames__1'>Customer Experience</div>
                <div className='skillNames__1'>Business Domain</div>
                <div className='skillNames__1'>Business Model & Economy</div>
                <div className='skillNames__1'>Sales & Marketing</div>
                <div className='skillNames__1'>Product Design</div>
                <div className='skillNames__1'>Development & Delivery</div>

            </div>
            <div className="communication">
                <div className='arrow'>
                    <img src={left} alt="left-arrow" className='arrow1' onClick={clickLeftArrow} />
                    <img src={right} alt="right-arrow" className='arrow1' onClick={clickRightArrow} />
                </div>
                <div className="section1 my-4 d-flex justify-content-between align-items-center">
                    <h3 className='fw-semibold'>{activeSkill.skillName}</h3>
                    <div className="low text-primary text-center">
                        <span className="fw-bold">
                            {`<50%`}
                        </span>
                        <p className="p__level fw-normal">Beginner</p>
                    </div>
                </div>
                <div className="section1 my-4">

                    {<>
                        <div>{activeSkill.context.map((content, index) => {
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
                            activeSkill.communcations.map((communicate, index) => (

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
            </div >
        </Container>
    );
    
}
export default TestResultsTwo