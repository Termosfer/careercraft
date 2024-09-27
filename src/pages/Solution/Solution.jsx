import React from 'react'
import { Container, Button } from 'react-bootstrap'
import img__20 from "../../assets/solutionImg/img__20.png"
import img__21 from "../../assets/solutionImg/img__21.png"
import img__22 from "../../assets/solutionImg/img__22.png"
import img__23 from "../../assets/solutionImg/img__23.png"
import img__24 from "../../assets/solutionImg/img__24.png"
import img__25 from "../../assets/solutionImg/img__25.png"
import img__26 from "../../assets/solutionImg/img__26.png"
import img__27 from "../../assets/solutionImg/img__27.png"
import img__28 from "../../assets/solutionImg/img__28.png"
import img__29 from "../../assets/solutionImg/img__29.png"
import img__30 from "../../assets/solutionImg/img__30.png"
import img__31 from "../../assets/solutionImg/img__31.png"
import img__32 from "../../assets/solutionImg/img__32.png"
import img__33 from "../../assets/solutionImg/img__33.png"
import "./solution.css"
const Solution = () => {
  return (
    <>
      <div className='bg-solutions'>
        <img src={img__20} alt="" className='img__20' />
        <img src={img__21} alt="" className='img__21' />
        <Container className='w-75 p-5 '>
          <div className='pb-5 d-flex flex-column  gap-4'>
            <h1 className='w-50 text-center mx-auto'>Empower Your <span className='text-primary'>Career</span> with <span className='text-primary'>Tailored</span> Growth Paths</h1>
            <p className='w-75 mx-auto text-center p-text'>Revolutionize your personal and professional development with AI-driven assessments, customized learning, and career guidance.</p>

            <div className='text-center py-5 category'>
              <button type='btn' className='btn btn-primary px-4 py-2'>Start Your Journey</button>
            </div>
            <div className='d-flex justify-content-center gap-4  category'>
              <div className=' bg-category'>
                <div className='bg_img  d-flex align-items-center justify-content-center'>
                  <img src={img__22} alt="img__22" className='img__22' />
                </div>
                <span>Product Owner</span>
              </div>
              <div className=' bg-category'>
                <div className='bg_img  d-flex align-items-center justify-content-center'>
                  <img src={img__25} alt="img__22" className='img__22' />
                </div>
                <span>Product Owner</span>
              </div>
              <div className=' bg-category'>
                <div className='bg_img  d-flex align-items-center justify-content-center'>
                  <img src={img__26} alt="img__22" className='img__22' />
                </div>
                <span>Product Owner</span>
              </div>
            </div>
            <div className='d-flex justify-content-center gap-4 category'>
              <div className=' bg-category'>
                <div className='bg_img  d-flex align-items-center justify-content-center'>
                  <img src={img__27} alt="img__22" className='img__22' />
                </div>
                <span>Product Owner</span>
              </div>
              <div className=' bg-category'>
                <div className='bg_img  d-flex align-items-center justify-content-center'>
                  <img src={img__24} alt="img__22" className='img__22' />
                </div>
                <span>Product Owner</span>
              </div>
              <div className=' bg-category'>
                <div className='bg_img  d-flex align-items-center justify-content-center'>
                  <img src={img__23} alt="img__22" className='img__22' />
                </div>
                <span>Product Owner</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container className='w-75 p-5'>
        <div>
          <h1>Skill & Career <span className='text-primary'>Assessments</span></h1>
          <p className='p__text'>Our AI-powered assessments analyze your unique skill set and deliver actionable insights to drive your growth. Whether you're starting out or advancing your career, CareerCraft identifies skill gaps and provides the right tools, courses, and resources to bridge them. With personalized guidance, you'll strengthen key areas, enhance your expertise, and stay on track to achieve your career goals.</p>
        </div>
        <div className='card__img pt-4 d-flex justify-content-between'>
          <div className='bgColor'>
            <img src={img__30} alt="" className='img__30' />
            <div className='p-4'>
              <h3 className='text-white'>Comprehensive Assessments</h3>
              <p className='p__text__bgColor'>Evaluate hard and soft skills across various domains.</p>
            </div>
            <img src={img__28} alt="img__28" className='img__28' />
          </div>
          <div>
            <div className='bgColor'>
              <img src={img__30} alt="" className='img__30' />
              <div className='p-4'>
                <h3 className='text-white'>Tailored Feedback</h3>
                <p className='p__text__bgColor'>Receive detailed reports outlining your strengths, areas for improvement, and personalized growth recommendations.</p>
              </div>
              <img src={img__29} alt="img__29" className='img__29' />
            </div>
          </div>
        </div>

        <div className='py-5'>
          <h1>Customized <span className='text-primary'>Learning</span> Paths</h1>
          <p className="p__text1">Using data from your assessments, CareerCraft creates a personalized learning path tailored specifically to your needs. Gain access to expertly curated resources, immersive interactive courses, and targeted skill-building activities that align with your unique career goals.</p>

          <div className='d-flex'>
            <div className='d-flex flex-column justify-content-around'>

              <div className='d-flex gap-2'>
                <div>
                  <img src={img__31} alt="img__31" className='img__31' />
                </div>
                <span className='w-75'>AI-Based Recommendations: Your journey is crafted through AI to match your career ambitions.</span>
              </div>
              <div className='d-flex gap-2'>
                <div >
                  <img src={img__31} alt="img__31" className='img__31' />
                </div>
                <span className='w-75'>Rich Resource Library: Articles, videos, and e-learning modules available at your fingertips.</span>
              </div>
              <div className='d-flex gap-2'>
                <div>
                  <img src={img__31} alt="img__31" className='img__31' />
                </div>
                <span className='w-75'>Progress Tracking: Monitor your growth through milestones and keep moving forward.</span>
              </div>
              <div className='d-flex gap-2'>
                <div>
                  <img src={img__31} alt="img__31" className='img__31' />
                </div>
                <span className='w-75'>Personalized Skill Assessments: Gain insights into your strengths and areas for improvement with tailored evaluations.</span>
              </div>
            </div>
            <div>
              <img src={img__32} alt="img__32" className='img__32' />
            </div>
          </div>
          <div className='text-center pt-5'>
            <button type="button" className='btn btn-primary px-4 py-2'>Discover Your Path</button>
          </div>
        </div>

        <div className='bg__color py-5 px-4'>
          <div className='d-flex'>
            <div className='d-flex flex-column '>
              <h1 className='mb-4'><span className='text-primary'>Results</span> that Matter</h1>
              <span className='w-75'>Our results speak for themselves. CareerCraft has been instrumental in career transitions, promotions, and personal development milestones, driving countless success stories.</span>
            </div>
            <div className='d-flex align-items-center mt-4 gap-4'>
              <div className='text-center'>
                <h1 className='text-primary fw-bold'>+200</h1>
                <span className='span-text'>Professionals have boosted their skills with CareerCraft.</span>
              </div>
              <div className='text-center'>
                <h1 className='text-primary fw-bold'>75%</h1>
                <span className='span-text'>Professionals advanced to higher roles with our guidance.</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className='bg__img__33'>
        <div className="package-bottom-section w-100">
          <Container className="bottom-cont w-75">
            <div className="h3-p">
              <h3 className="title-career">
                Ready to Elevate Your Career?
              </h3>
              <p>
                Unlock your potential with CareerCraft’s personalized skill development packages. Tailor your learning journey and stand out in your profession with expert guidance and resources.
              </p>
            </div>
            <Button variant="primary">Get Started Now</Button>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Solution