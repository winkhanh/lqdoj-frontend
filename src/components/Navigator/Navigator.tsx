import React from 'react';
import { Navbar, Nav, Button, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigator: React.FC = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" >
      <Navbar.Brand href="/">Online Judger</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <Nav className="mr-auto" >
          <NavItem>
            <Nav.Link as={NavLink} to="/problems">Problems</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link as={NavLink} to="/contests">Contests</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link as={NavLink} to="/submissions">Submissions</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link as={NavLink} to="/faq">FAQ</Nav.Link>
          </NavItem>
        </Nav>
        <Button variant="outline-light">
          Sign in
            </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigator
