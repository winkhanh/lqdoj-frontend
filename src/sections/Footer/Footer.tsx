import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import LanguageSelector from '../../components/LanguageSelector/LanguageSelector';

const LinkK = ()=>{
    return (
        <a href="https://www.linkedin.com/in/wkhanh-le/" rel="noopener noreferrer" target="_blank">
            Khanh
        </a>
    )
};
const LinkB = ()=>{
    return (
        <a href="https://www.linkedin.com/in/le-ly-bang-nguyen/" rel="noopener noreferrer" target="_blank">
            Bang
        </a>
    )
};
const Footer: React.FC = () => {
    return (
        <React.Fragment>
            <Navbar bg="dark" expand="lg" variant="dark" fixed="bottom">
                <Nav className="mr-auto">
                    <Nav.Item>
                        <LanguageSelector />
                    </Nav.Item>
                    <Nav.Item>
                        <div style={{color : "white"}}>
                                Developed with Love by <LinkK/> and <LinkB/>
                        </div>
                    </Nav.Item>
                </Nav>
            </Navbar>  
        </React.Fragment>
    );
};

export default Footer;