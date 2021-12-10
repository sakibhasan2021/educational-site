import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import './Header.css';

const Header = () => {
    return (
        <div  >
             <Navbar  bg="dark" expand="lg">
  <Container >
    
    <Navbar.Brand  > 
       <Link to ="/"  className= "text-decoration-none font-weight-bold" >
      Home  </Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto my-3 navbar-container">
        <Nav.Link >
          <Link to="/product"  className= "text-decoration-none text-white mx-3" >
                    Courses
          </Link>
        </Nav.Link>
          <Nav.Link >
           <Link to="/moreCourses"  className= "text-decoration-none text-white mx-3" >
                  More Courses
          </Link>
        </Nav.Link>
       
        <Nav.Link >
           <Link to="/subscribe"  className= "text-decoration-none text-white" >
                   subscribe
          </Link>
        </Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;

