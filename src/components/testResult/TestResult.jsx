import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./testresult.css"
import ProgressBar from "react-bootstrap/ProgressBar";
import RChart from '../radarChart/RadarChart';
import { useDispatch, useSelector } from 'react-redux';
import { getAllReports, getReports } from '../../config/authReport';
const TestResult = () => {
    const email = localStorage.getItem("email")
    const dispatch = useDispatch()
    const totalReport = useSelector(state => state.report.raport)
    const allReport = useSelector(state => state.report.allreport)
    console.log(allReport)
    const [color, setColor] = useState("#6FADFF")
    const [scoreName, setScoreName] = useState("low")
    // console.log(color, "df")
    useEffect(() => {
        if (totalReport) {
            if (totalReport[0].averagePercentageCorrect > 33 && totalReport[0].averagePercentageCorrect < 66) {
                setColor("#0f77ff")
                setScoreName("medium")
            } else if (totalReport[0].averagePercentageCorrect >= 66) {
                setColor("#094799")
                setScoreName("high")
            }
        }
    }, [totalReport])
    useEffect(() => {
        dispatch(getReports())
        dispatch(getAllReports())
    }, [dispatch])
    // console.log(totalReport, "totalReport")
    return (
        <>
            <Container className='w-75 p-5'>
                <Row>
                    <Col lg={12} className='py-4'>
                        <h1 className=' text-center pb-4'>Thank you for completing the Soft Skills Assessment!</h1>
                        <p className='fw-bolder' style={{ fontSize: "19px" }}>Your detailed report has been emailed to <span className='text-primary'>{email}</span>. If you don’t see it in your inbox, please check your spam/junk folder.</p>
                    </Col>
                    <Col lg={7}>

                        <div className='left-side d-flex flex-column'>
                            <p>How strong are your soft skills?</p>
                            <div>
                                <span>Did your overall score surprise you?</span>
                                <p>Take a moment to think about your strengths and where you can grow. Every skill you improve brings you closer to being a more effective professional.</p>
                            </div>
                            <div>
                                <span>Elevate Your Potential:</span>
                                <p>Your score is a starting point. Explore each skill to see where you excel and where there's room for improvement. Every small step forward makes a difference.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className='right-side'>
                            <div className='w-75 text-center'>
                                <span className='fw-bold fs-5'>YOUR OVERALL SCORE</span>
                                <h1 style={{ color: `${color}` }}>{totalReport && totalReport[0].averagePercentageCorrect}%</h1>
                                <ProgressBar now={totalReport && totalReport[0].averagePercentageCorrect} className='w-75 m-auto progressbar-test' style={{ backgroundColor: `${color} !important` }} />
                                <p className='fw-bold fs-4' style={{ color: `${color}` }}>{scoreName}</p>
                            </div>
                        </div>
                    </Col>
                    <Col className='pt-5'>
                        <div className='d-flex gap-5'>
                            <div className='d-flex align-items-center gap-1'>
                                <span className='circle'></span>
                                <span>low</span>
                            </div>
                            <div className='d-flex align-items-center gap-1'>
                                <span className='circle1'></span>
                                <span>medium</span>
                            </div>
                            <div className='d-flex align-items-center gap-1'>
                                <span className='circle2'></span>
                                <span>high</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='chart-bg-color d-flex flex-column align-items-center'>
                <h2 className='text-center pt-5'>Here’s Your Results...</h2>
                <RChart />
            </div>
            <div className='skills-bg-color'>
                <Container className='w-75 p-5'>
                    <Row>
                        <Col className='pb-5'>
                            <h1 className='text-center pt-5'>We've Evaluated Your Soft Skills </h1>
                            <h1 className='text-center'>Across Key Areas for <span className='text-primary'>Growth</span></h1>
                        </Col>
                    </Row>
                    <Row >
                        <Col lg={4} >
                            <div className='skills-result-page pb-4'>
                                <div className='d-flex flex-column'>
                                    <p className='fw-bolder'>{allReport && allReport[4].skillName}</p>
                                    <span>The ability to clearly and effectively convey ideas, ensuring that your message is understood by others.</span>
                                </div>
                                <div className="d-flex flex-column">
                                    <ProgressBar variant="primary" now={allReport && allReport[4].percentageCorrect} />
                                    <div className='d-flex justify-content-between text-primary fw-bolder'>
                                        <span>{allReport && allReport[4].percentageCorrect}%</span>
                                        <span>medium</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='skills-result-page pb-4'>
                                <div className='d-flex flex-column'>
                                    <p className='fw-bolder'>{allReport && allReport[3].skillName}</p>
                                    <span>The character traits such as integrity, resilience, and adaptability that influence how you approach challenges and interact with others.</span>
                                </div>
                                <div className="d-flex flex-column">
                                    <ProgressBar variant="primary" now={allReport && allReport[3].percentageCorrect} />
                                    <div className='d-flex justify-content-between text-primary fw-bolder'>
                                        <span>{allReport && allReport[3].percentageCorrect}%</span>
                                        <span>medium</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        
                        <Col lg={4}>
                            <div className='skills-result-page pb-4'>
                                <div className='d-flex flex-column'>
                                    <p className='fw-bolder'>{allReport && allReport[2].skillName}</p>
                                    <span>The capacity to objectively analyze information, assess different perspectives, and make informed decisions.</span>
                                </div>
                                <div className="d-flex flex-column">
                                    <ProgressBar variant="primary" now={allReport && allReport[2].percentageCorrect} />
                                    <div className='d-flex justify-content-between text-primary fw-bolder'>
                                        <span>{allReport && allReport[2].percentageCorrect}%</span>
                                        <span>medium</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2} className=' pt-3'></Col>

                        <Col lg={4} className=' pt-3'>
                            <div className='skills-result-page pb-4'>
                                <div className='d-flex flex-column'>
                                    <p className='fw-bolder'>{allReport && allReport[1].skillName}</p>
                                    <span>The ability to inspire, guide, and influence others towards achieving shared goals.</span>
                                </div>
                                <div className="d-flex flex-column">
                                    <ProgressBar variant="primary" now={allReport && allReport[1].percentageCorrect} />
                                    <div className='d-flex justify-content-between text-primary fw-bolder'>
                                        <span>{allReport && allReport[1].percentageCorrect}%</span>
                                        <span>medium</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} className=' pt-3'>
                            <div className='skills-result-page pb-4'>
                                <div className="d-flex flex-column">
                                    <p className='fw-bolder'>{allReport && allReport[0].skillName}</p>
                                    <span>The ability to work collaboratively with others, contributing to group objectives and supporting team members.</span>
                                </div>
                                <div className='d-flex flex-column'>
                                    <ProgressBar variant="primary" now={allReport && allReport[0].percentageCorrect} />
                                    <div className='d-flex justify-content-between text-primary fw-bolder'>
                                        <span>{allReport && allReport[0].percentageCorrect}%</span>
                                        <span>medium</span>
                                    </div>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </>
    )
}

export default TestResult