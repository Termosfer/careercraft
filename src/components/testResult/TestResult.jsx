import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./testresult.css"
import ProgressBar from "react-bootstrap/ProgressBar";
import RChart from '../radarChart/RadarChart';
const TestResult = () => {
    return (
        <>
            <Container className='w-75 p-5'>
                <Row>
                    <Col lg={12} className='py-4'>
                        <h1 className=' text-center pb-4'>Thank you for completing the Soft Skills Assessment!</h1>
                        <p className='fw-bolder' style={{ fontSize: "19px" }}>Your detailed report has been emailed to shah.77@gmail.com. If you don’t see it in your inbox, please check your spam/junk folder.</p>
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
                            <h1 className='text-primary '>60%</h1>
                            <ProgressBar variant="primary" now={50} className='w-75 m-auto progressbar-test'/>
                            <p className='text-primary fw-bold fs-4'>medium</p>
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
                <RChart/>
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
                                    <p className='fw-bolder'>Communication</p>
                                    <span>The ability to clearly and effectively convey ideas, ensuring that your message is understood by others.</span>
                                </div>
                                <div className="d-flex flex-column">
                                    <ProgressBar variant="primary" now={50} />
                                    <div className='d-flex justify-content-between text-primary fw-bolder'>
                                        <span>65%</span>
                                        <span>medium</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='skills-result-page pb-4'>
                                <div className='d-flex flex-column'>
                                    <p className='fw-bolder'>Personal Qualities</p>
                                    <span>The character traits such as integrity, resilience, and adaptability that influence how you approach challenges and interact with others.</span>
                                </div>
                                <div className="d-flex flex-column">
                                    <ProgressBar variant="primary" now={50} />
                                    <div className='d-flex justify-content-between text-primary fw-bolder'>
                                        <span>65%</span>
                                        <span>medium</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='skills-result-page pb-4'>
                                <div className='d-flex flex-column'>
                                    <p className='fw-bolder'>Critical Thinking</p>
                                    <span>The capacity to objectively analyze information, assess different perspectives, and make informed decisions.</span>
                                </div>
                                <div className="d-flex flex-column">
                                    <ProgressBar variant="primary" now={30} />
                                    <div className='d-flex justify-content-between text-primary fw-bolder'>
                                        <span>65%</span>
                                        <span>medium</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2} className=' pt-3'></Col>
                        <Col lg={4} className=' pt-3'>
                            <div className='skills-result-page pb-4'>
                                <div className='d-flex flex-column'>
                                    <p className='fw-bolder'>Leadership</p>
                                    <span>The ability to inspire, guide, and influence others towards achieving shared goals.</span>
                                </div>
                                <div className="d-flex flex-column">
                                    <ProgressBar variant="primary" now={10} />
                                    <div className='d-flex justify-content-between text-primary fw-bolder'>
                                        <span>65%</span>
                                        <span>medium</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} className=' pt-3'>
                            <div className='skills-result-page pb-4'>
                                <div className="d-flex flex-column">
                                    <p className='fw-bolder'>Teamwork</p>
                                    <span>The ability to work collaboratively with others, contributing to group objectives and supporting team members.</span>
                                </div>
                                <div className='d-flex flex-column'>
                                    <ProgressBar variant="primary" now={76} />
                                    <div className='d-flex justify-content-between text-primary fw-bolder'>
                                        <span>65%</span>
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