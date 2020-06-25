import React, { Fragment } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { Input, Button } from "semantic-ui-react";

const Footer = () => {
  return (
    <div>
      <footer className="footer_part">
        <hr />
        <Container fluid className="b">
          <Row lg={1} sm={3} className="justify-content-around">
            <Col lg={3}>
              <div className="single_footer_part">
                <ul className="list-unstyled">
                  <li><a href="#"><img src="images/logo.svg" /></a></li>
                  
                  <li>
                    <a id="social1" className="social-icons" href="#"><img src="images/icon-facebook.svg" /></a>
                    <a className="social-icons" href="#"><img src="images/icon-youtube.svg" /></a>
                    <a className="social-icons" href="#"><img src="images/icon-twitter.svg" /></a>
                    <a className="social-icons" href="#"><img src="images/icon-pinterest.svg" /></a>
                    <a className="social-icons" href="#"><img src="images/icon-instagram.svg" /></a>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={5}>
              <Row>
                <Col>
                  <div className="single_footer_part">
                    <ul className="list-unstyled">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Pricing</a></li>
                      <li><a href="#">Products</a></li>
                      <li><a href="#">About Us</a></li>
                    </ul>
                  </div>
                </Col>

                <Col>
                  <div className="single_footer_part">
                    <ul className="list-unstyled">
                      <li><a href="#">Careers</a></li>
                      <li><a href="#">Community</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col lg={3}>
              <div className="single_footer_part">
                <ul className="list-unstyled">
                  <Input className="input1" style={{width: "70%"}} placeholder='Search...' />
                  <Button primary className="btn1" style={{marginLeft: 20, width: "22%"}} >GO</Button>
                </ul>
              </div>
              <div className="attribution">
                Coded by <a href="https://www.fiverr.com/hassamnaseer" target="_blank">Hassam Naseer</a>.
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Footer