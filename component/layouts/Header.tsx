import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link to={'/'}>
          <Navbar.Brand href="#home">KongBlog</Navbar.Brand></Link>
          <Nav className="me-auto">
            <Nav.Link href="#home">menu1</Nav.Link>
            <Nav.Link href="#features">menu2</Nav.Link>
            <Nav.Link href="#pricing">menu3</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
