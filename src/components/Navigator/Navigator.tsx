import React, { useContext } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AuthModal from '../AuthModal/AuthModal';
import AuthNav from '../AuthNav/AuthNav';
import { AuthorizingPageContext, LanguageContext } from '../../Global/GlobalStates/GlobalStates';



const Navigator: React.FC = () => {
    const authPage = useContext(AuthorizingPageContext);
    const language=useContext(LanguageContext);
    const navItems = language.dictionary['navItems'];

    return (
        <Navbar bg="dark" expand="lg" variant="dark" fixed="top" sticky="top">
            <Navbar.Brand href="/">Online Judger</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
                <Nav className="mr-auto" >
                    {navItems.map((item: Array<string>) => {
                        return (
                            <NavItem key={item[0]}>
                                <Nav.Link as={NavLink} exact to={item[1]}>{item[2]}</Nav.Link>
                            </NavItem>
                        )
                    })}
                </Nav>
                <AuthNav />
                <AuthModal
                    authModalDisplay={authPage.isDisplay}
                    authModalToggle={authPage.toggle}
                >
                </AuthModal>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigator;
