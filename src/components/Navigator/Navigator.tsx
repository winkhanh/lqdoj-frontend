import React,{useContext} from 'react';
import {AuthorizingPageContext} from '../../contexts/GlobalFunctions/GlobalState';
import { Navbar, Nav, Button, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const listOfItem : [string, string][]=[
  ["/","Home"],
  ["/problems","Problems"],
  ["/contests","Contests"],
  ["/submissions","Submissions"],
  ["/faq","FAQ"]
];
interface NavigatorProps{
  
}

const Navigator: React.FC<NavigatorProps> = (props:NavigatorProps) => {
  const authPage=useContext(AuthorizingPageContext);
  
  
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
        <Button type="button" onClick={()=>{authPage.toggle();}} variant="outline-light">
          Sign in/Sign up
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigator;
