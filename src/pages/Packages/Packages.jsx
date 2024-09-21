import React from 'react'
import QushSVG from '../../components/SVG/QushSVG'
import { Card, Button, Container } from 'react-bootstrap'
import "./packages.css"
import photo1 from "../../assets/img/photo1.png"
import photo2 from "../../assets/img/photo2.png"
import photo3 from "../../assets/img/photo3.png"
import { FaPlus } from "react-icons/fa6";



const Packages = () => {
  return (
    <div className="packages">
      <Container>
        <div className="package-header bg-primary">
          <h2 className='text-center'>Unlock Your Full Potential with <span>CareerCraft</span> Premium</h2>
          <div className="row gap-2 packages-boxes justify-content-center">
            <Card style={{ width: "16rem" }}>
              <Card.Body>
                <Card.Title>Free Plan</Card.Title>
                <Card.Text>
                  <h3>$0<span>/month</span></h3>
                  <ul>
                    <li>
                      <QushSVG />
                      Key soft skills assessment</li>
                    <li>
                      <QushSVG />
                      Personalized soft skills guidance
                    </li>
                    <li>
                      <QushSVG />
                      Access to soft skills resources
                    </li>
                    <li>
                      <QushSVG />
                      Career plan for soft skills improvement
                    </li>
                  </ul>
                </Card.Text>
                <button className="btn btn-outline-primary w-100">Get Started</button>
              </Card.Body>
            </Card>

            <Card style={{ width: '16rem' }}>
              <Card.Body>
                <Card.Title>Free Plan</Card.Title>
                <Card.Text>
                  <h3>$29<sup>.99</sup><span>/month</span></h3>
                  <ul >
                    <li>
                      <QushSVG />
                      50% hard skills assessment</li>
                    <li>
                      <QushSVG />
                      Personalized guidance based on results
                    </li>
                    <li>
                      <QushSVG />
                      Resources for improving 50% of hard skills
                    </li>
                    <li>
                      <QushSVG />
                      Unlimited progress tracking
                    </li>
                    <li>
                      <QushSVG />
                      Priority support
                    </li>
                  </ul>
                </Card.Text>
                <Button variant="primary">Get started</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '16rem' }}>
              <Card.Body>
                <Card.Title>Free Plan</Card.Title>
                <Card.Text>
                  <h3>$99<sup>.99</sup><span>/month</span></h3>
                  <ul>
                    <li>
                      <QushSVG />
                      Product management assessment</li>
                    <li>
                      <QushSVG />
                      Tailored career guidance for all hard skills
                    </li>
                    <li>
                      <QushSVG />
                      Access to a curated hard skills resource library
                    </li>
                    <li>
                      <QushSVG />
                      Personalized mentorship sessions
                    </li>

                  </ul>
                </Card.Text>
                <button className="btn btn-outline-primary w-100">Get Started</button>
              </Card.Body>
            </Card>


            <div className="elevate-cont">
              <Card className='elevate-card' style={{ width: '50rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>Elevate Premium</Card.Title>
                  <Card.Text>
                    <p>Elevate your career by gaining full access to advanced skill assessments and personalized growth recommendations. </p>
                    <ul>
                      <li>
                        <QushSVG />
                        Key soft skills assessment</li>
                      <li>
                        <QushSVG />
                      </li>

                      <li>
                        <QushSVG />
                      </li>
                    </ul>
                  </Card.Text>
                  <Button variant="primary">Buy now</Button>
                </Card.Body>
              </Card>
            </div>
          </div>

        </div>


      </Container>


      <div className="blue-section">
        <Container>
          <h1 className='fs-1 text-center px-5'>Trusted by thousands of professionals and organizations worldwide.</h1>

          <div className="profiles-cont d-flex justify-content-around">

            <div className="profiles-p">
              <img src={photo1} alt="" />
              <div className="txt-p py-4">
                “CareerCraft has transformed the way we approach skill development. The platform has cut down our training time by 50%, allowing us to focus on scaling with precision.”
              </div>
              <div className="position">
                <h6>– Jane Doe</h6>
                <p>Talent Development Manager</p>
              </div>
            </div>

            <div className="profiles-p">
              <img src={photo2} alt="" />
              <div className="txt-p py-4">
                “CareerCraft has streamlined our team's learning process, helping us improve both efficiency and consistency.”
              </div>
              <div className="position">
                <h6>– Mark Johnson
                </h6>
                <p>Learning & Development Lead</p>
              </div>
            </div>
            <div className="profiles-p">
              <img src={photo3} alt="" />
              <div className="txt-p py-4">
                “CareerCraft helped us centralize all our training materials and resources, offering guidance on how to upskill effectively.”
              </div>
              <div className="position">
                <h6>– Sarah Lee</h6>
                <p>Operations Manager</p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="faq-section">
        <Container>
          <h4>FAQ</h4>
          
          <div className="questions">
            <p><FaPlus />Can I upgrade my package after enrolling in a lower-tier plan?</p>
            <p><FaPlus /> Are the courses self-paced or instructor-led?</p>
            <p><FaPlus /> Is there a trial version available for CareerCraft packages?</p>
            <p><FaPlus />Can I cancel my subscription at any time?</p>
            <p><FaPlus />Are CareerCraft packages suitable for professionals at all career levels?</p>
          </div>
        </Container>
      </div>


    </div>
  )
}

export default Packages