import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
const listOfItem : [string, string][]=[
  ["/","Home"],
  ["/problems","Problems"],
  ["/contests","Contests"],
  ["/submissions","Submissions"],
  ["/faq","FAQ"]
];
const Navigator : React.FC = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="/">Online Judger</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/problems">Problems</Nav.Link>
                <Nav.Link href="/contests">Contests</Nav.Link>
                <Nav.Link href="/submissions">Submissions</Nav.Link>
                <Nav.Link href="/faq">FAQ</Nav.Link>
              </Nav>
              <Button variant="outline-success">
                Sign in
              </Button>
            </Navbar.Collapse>
          </Navbar>
    );
};

export default Navigator;
