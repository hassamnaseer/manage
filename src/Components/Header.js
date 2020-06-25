import React, { Fragment } from "react";
import { Button } from "semantic-ui-react";
import Hamburger from './Hamburger/Hamburger';
import { Col, Container, Row } from "react-bootstrap";

const Header = () => {

  return (
    <Fragment>
      <Container className="a" fluid>
        <Row>
          <Col>
          <nav>
            <img src="images/logo.svg" />

            <ul>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Community</a></li>
            </ul>

            <Button className="btn" primary>Get Started</Button>

            <Hamburger />
            
          </nav>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Header;
