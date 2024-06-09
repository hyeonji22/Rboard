import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Link to='/'>
              <Navbar.Brand>KongBlog</Navbar.Brand>
            </Link>
            <Nav className="me-auto">
              <Nav.Link href="#home">menu1</Nav.Link>
              <Nav.Link href="#features">menu2</Nav.Link>
              <Nav.Link href="#pricing">menu3</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }

export default Header
