import React from 'react';
import {Container, Navbar, Offcanvas, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {ABOUT_ME_ROUTE, POST_ROUTE} from "../utils/const";

const NavBar = () => {
  return (
    <Navbar expand={false} variant='dark' bg='secondary'>
      <Container>
        <Navbar.Brand href="/posts">Forum</Navbar.Brand>
        <Navbar.Toggle aria-controls='offcanvasNavbar' />
        <Navbar.Offcanvas
          id='offcanvasNavbar'
          aria-labelledby='offcanvasNavbarLabel'
          placement="start"
          className='bg-secondary menu'
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id='offcanvasNavbarLabel'>
              Меню
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to={POST_ROUTE}>Посты</Nav.Link>
              <Nav.Link as={Link} to={ABOUT_ME_ROUTE}>Обо мне</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;