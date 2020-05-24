import React, { useContext } from 'react';
import { AuthorizingPageContext, AuthState } from '../../contexts/GlobalFunctions/GlobalState';
import { Button, Dropdown, DropdownButton, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TextFC } from '../Text/Text'

const AuthNav: React.FC = () => {
    const authPage = useContext(AuthorizingPageContext);
    const name = "BANG";
    const { isAuthed, isAdmin } = useContext(AuthState);
    if (!isAuthed)
        return (
            <Button type="button" onClick={() => { authPage.toggle(); }} variant="outline-light">
                {TextFC('AUTH_BUTTON')}
            </Button>
        );
    else
        return (
            <Nav>
                {(isAdmin) ? (<Nav.Link as={Link} to="/admin">
                    {TextFC('NAV_ADMIN')}
                </Nav.Link>) : null}
                <DropdownButton id="profile-dropdown" title={name} variant="outline-light" alignRight>
                    <Dropdown.Item as={Link} to="/me">
                        {TextFC('PROFILE_BUTTON')}
                    </Dropdown.Item>
                    <Dropdown.Item as={Button} variant="outline-danger">
                        {TextFC('DEAUTH_BUTTON')}
                    </Dropdown.Item>
                </DropdownButton>
            </Nav>
        )

};

export default AuthNav;