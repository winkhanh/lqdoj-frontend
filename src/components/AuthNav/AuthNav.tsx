import React, { useContext } from 'react';
import { AuthorizingPageContext, AuthState } from '../../contexts/GlobalStates/GlobalStates';
import { Button, Dropdown, DropdownButton, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Text } from '../Text/Text'

const AuthNav: React.FC = () => {
    const authPage = useContext(AuthorizingPageContext);
    const name = "BANG";
    const { isAuthed, isAdmin } = useContext(AuthState);
    if (!isAuthed)
        return (
            <Button type="button" onClick={() => { authPage.toggle(); }} variant="outline-light">
                {Text('AUTH_BUTTON')}
            </Button>
        );
    else
        return (
            <Nav>
                {(isAdmin) ? (<Nav.Link as={Link} to="/admin">
                    {Text('NAV_ADMIN')}
                </Nav.Link>) : null}
                <DropdownButton id="profile-dropdown" title={name} variant="outline-light" alignRight>
                    <Dropdown.Item as={Link} to="/me">
                        {Text('PROFILE_BUTTON')}
                    </Dropdown.Item>
                    <Dropdown.Item as={Button} variant="outline-danger">
                        {Text('DEAUTH_BUTTON')}
                    </Dropdown.Item>
                </DropdownButton>
            </Nav>
        )

};

export default AuthNav;