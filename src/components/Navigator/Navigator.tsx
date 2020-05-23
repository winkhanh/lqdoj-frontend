import React, { useContext} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AuthModal from '../AuthModal/AuthModal';
import AuthNav from '../AuthNav/AuthNav';
import {AuthorizingPageContext, LanguageContext} from '../../contexts/GlobalFunctions/GlobalState';


const Navigator: React.FC = () => {
    const authPage=useContext(AuthorizingPageContext);
    const languageContext = useContext(LanguageContext);
    const dictionary = languageContext.dictionary;

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="/">Online Judger</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
                <Nav className="mr-auto" >
                    {dictionary.navItems.map((item: Array<string>) => {
                        return (
                            <NavItem key={item[0]}>
                                <Nav.Link as={NavLink} exact to={item[1]}>{item[2]}</Nav.Link>
                            </NavItem>
                        )
                    })}
                </Nav>
                <AuthNav/>
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
