import React, { useState } from 'react';
import { Navbar, Nav, Button, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AuthModal from '../AuthModal/AuthModal'

const navItems: [number, string, string][] = [
    [0, "/", "Home"],
    [1, "/problems", "Problems"],
    [2, "/contests", "Contests"],
    [3, "/submissions", "Submissions"],
    [4, "/faq", "FAQ"]
];

const Navigator: React.FC = () => {
    const [authModalDisplay, authModalToggle] = useState(false);
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="/">Online Judger</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
                <Nav className="mr-auto" >
                    {navItems.map((item) => {
                        return (
                            <NavItem key={item[0]}>
                                <Nav.Link as={NavLink} exact to={item[1]}>{item[2]}</Nav.Link>
                            </NavItem>
                        )
                    })}
                </Nav>
                <Button type="button" onClick={() => authModalToggle(!authModalDisplay)} variant="outline-light">
                    Sign in/Sign up
                </Button>
                <AuthModal
                    authModalDisplay={authModalDisplay}
                    authModalToggle={authModalToggle}
                >
                </AuthModal>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigator;
