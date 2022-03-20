import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg='primary' expand='lg' variant='dark'>
      <Container>
        <Navbar.Brand>
          <Link to='/'>NoteZipper</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='m-auto'>
            <Form inline>
              <FormControl
                type='text'
                placeholder='Search'
                className='mr-sm-2'
              />
            </Form>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to='/notes'>My Notes</Link>
            </Nav.Link>
            <NavDropdown title='Vivek' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Profile</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
