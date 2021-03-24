import React from "react";
import { Container, Col, Image, Row, Jumbotron } from "react-bootstrap";
// import PortPic from "../assets/pics/PortPic.jpg";
import Divider from "./Divider"
function About() {
  return (
    <div>
      <Container fluid id="container">
        <Jumbotron>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <h1>About Me</h1>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Image  src={process.env.PUBLIC_URL + '/assets/pics/PortPic.jpg'}  roundedCircle className="portPic" />
            </Col>
          </Row>
          <Divider/>
        </Jumbotron>
        <Row>
          <Col>
            <p>
              Hello everyone my name is Marshall I am a 22 year old Fullstack
              Developer with a drive for getting things done and then doing it
              faster. The reason I do this is because I get bored really quickly
              and I have always worked in very fast paced jobs so if I am not
              moving then I am not achieving what can be!{" "}
            </p>{" "}
            <Divider/>
            <p>
              {" "}
              I have from ever since I was a kid been into technology and the
              advancements of them so it was an easy choice to choose Web Dev as
              a career choice. I started off learning HTML and CSS back in
              highschool and in my recent studies I have also obtained
              credintials in another language Javascript and server side
              technology such as Express, APIs, User Authentication, Node, and
              React with Database Integrations.
            </p>
            <Divider/>
            In my spare time I am an avid gamer and I love anything related to
            computers and technology. I love to build things and constantly
            change them because I love creating, having, and building the best!
            <p>
              {" "}
              My current project is working with Puppeteer to scrape pages and
              after that is to obtain an AWS <i class="fab fa-aws"></i> Cert.{" "}
            </p>
          </Col>
        </Row>
        <Divider/>
      </Container>
    </div>
  );
}

export default About;
