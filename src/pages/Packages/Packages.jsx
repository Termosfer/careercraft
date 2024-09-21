import React from 'react'
import QushSVG from '../../components/SVG/QushSVG'
import { Card, Button } from 'react-bootstrap'
import "./packages.css"



const Packages = () => {
  return (
    <div>

      <div className="package-header">
        <h2 className='text-center'>Unlock Your Full Potential with <span>CareerCraft</span> Premium</h2>
        <div className="row gap-2 packages-boxes justify-content-center">
          <Card style={{ width: '16rem' }}>
            <Card.Body>
              <Card.Title>Free Plan</Card.Title>
              <Card.Text>
                <h3><span>$0</span>/month</h3>
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
                  <li>
                    <QushSVG />
                  </li>
                  <li>
                    <QushSVG />
                  </li>
                </ul>
              </Card.Text>
              <Button variant="primary">Get Started</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '16rem' }}>
            <Card.Body>
              <Card.Title>Free Plan</Card.Title>
              <Card.Text>
                <h3><span>$29.99</span>/month</h3>
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
                  <li>
                    <QushSVG />
                  </li>
                  <li>
                    <QushSVG />
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
                <h3><span>$49.99</span>/month</h3>
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
                  <li>
                    <QushSVG />
                  </li>
                  <li>
                    <QushSVG />
                  </li>
                </ul>
              </Card.Text>
              <Button variant="primary">Get Started</Button>
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
    </div>
  )
}

export default Packages