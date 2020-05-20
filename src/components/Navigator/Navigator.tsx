import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AuthNav from '../AuthNav/AuthNav';
const listOfItem : [string, string][]=[
  ["/","Home"],
  ["/problems","Problems"],
  ["/contests","Contests"],
  ["/submissions","Submissions"],
  ["/faq","FAQ"]
];

const Navigator: React.FC = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark"  >
      <Navbar.Brand href="/">Online Judger</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <Nav className="mr-auto" >
          {listOfItem.map((item,id)=>{return(
            <NavItem>
              <Nav.Link as={NavLink} exact to={item[0]}>{item[1]}</Nav.Link>
            </NavItem>
          )})}
        </Nav>
        <AuthNav/>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigator;
