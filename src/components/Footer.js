import React from "react";
import { Button, Navbar, Nav, Container } from "react-bootstrap";
function Footer() {
  return (
      <Container id="Footer" fluid className="navI" >
        <Navbar bg="dark" sticky="bottom" expand="lg">
          <Navbar.Brand id="nameNav2" >Contact Me</Navbar.Brand>
         <Nav.Link href="mailto:Marshall@marshallbertschy.com"> <Button variant="secondary">My Email</Button></Nav.Link>
         <Nav.Link href="https://www.dropbox.com/s/laolmwok47tlw8u/Marshall%20Resume.pdf?dl=0"><Button variant="secondary">Resume Download</Button></Nav.Link>
         <Nav.Link href="https://github.com/Marshallb98"><Button variant="secondary">GitHub</Button></Nav.Link>
         <Nav.Link href="https://www.linkedin.com/in/marshall-bertschy-5411851b1/"><Button variant="secondary">Linked In</Button></Nav.Link>
        </Navbar>
      </Container>
  );
}

export default Footer;
