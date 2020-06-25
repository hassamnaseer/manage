import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Button } from "semantic-ui-react";
import { Col, Container, Row } from "react-bootstrap";

const Landing = () => {
  return (
    <Fragment>
    <Header />
    
    <Container className="first" fluid>
      <div className="first-1">
        <Col lg="5">
          <h1>Bring everyone together to build better products.</h1>
          <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
          <Button className="btn" primary>Get Started</Button>
        </Col>
        
        <img src="images/illustration-intro.svg" />
      </div>
    </Container>

    <Container className="second" fluid>
      <Row lg="2" className="second-1">
        <Col lg="5">
          <h1>What’s different about Manage?</h1>
          <p className="second-p">Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
        </Col>
        
        <Row>
          <Col lg="8">
            <Button className="heading-btn" primary disabled>01</Button><span className="hh4">Track company-wide progress</span>
            <p className="sub">See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
          </Col>
          <Col lg="8">
          <Button className="heading-btn" primary disabled>02</Button><span className="hh4">Advanced built-in reports</span>
            <p className="sub">Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
          </Col>
          <Col lg="8">
          <Button className="heading-btn" primary disabled>03</Button><span className="hh4">Everything you need in one place</span>
            <p className="sub">Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
          </Col>
        </Row>
      </Row>
    </Container>

    <section id="testimonials">
      <div id="testimonials-cover">
        <h1 className="text-center">What they’ve said</h1>

        <Container fluid>
          <Row>
            <Col md="12">
              <div id="customers-testimonial" className="text-center owl-carousel owl-theme">
                <div className="testimonial">
                  <img src="images/avatar-anisha.png" className="img-responsive img-circle" alt="" />
                  <div className="testimonial-author">
                    <p><strong>Anisha Li</strong></p>
                  </div>
                  <blockquote className="text-center">
                    <p>Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.</p>
                  </blockquote>
                </div>

                <div className="testimonial">
                  <img src="images/avatar-ali.png" className="img-responsive img-circle" alt="" />
                  <div className="testimonial-author">
                    <p><strong>Ali Bravo</strong></p>
                  </div>
                  <blockquote className="text-center">
                    <p>We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.</p>
                  </blockquote>
                </div>

                <div className="testimonial">
                  <img src="images/avatar-richard.png" className="img-responsive img-circle" alt="" />
                  <div className="testimonial-author">
                    <p><strong>Richard Watts</strong></p>
                  </div>
                  <blockquote className="text-center">
                    <p>Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!</p>
                  </blockquote>
                </div>

                <div className="testimonial">
                  <img src="images/avatar-shanai.png" className="img-responsive img-circle" alt="" />
                  <div className="testimonial-author">
                    <p><strong>Shanai Gough</strong></p>
                  </div>
                  <blockquote className="text-center">
                    <p>Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.</p>
                  </blockquote>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </section>


    <Footer />
    </Fragment>
  )
}

export default Landing