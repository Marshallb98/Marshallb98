import React from "react";
import { Navbar, Nav }  from "react-bootstrap" 
function Header() {
  return (
    <div>
      <Navbar sticky="top" id="mainNav" bg="dark" expand="lg">
        <Navbar.Brand id="nameNav">Marshall Bertschy</Navbar.Brand>  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about"><i class="fas fa-info navI"> About Me</i></Nav.Link>
            <Nav.Link href="/projects"><i class="fas fa-project-diagram navI"> Projects</i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div> 
  );
}

export default Header;

