import React, { useContext } from 'react';
import { AuthorizingPageContext, AuthStateContext } from '../../Global/GlobalStates/GlobalStates';
import { Button, Dropdown, DropdownButton, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Text } from '../Text/Text'

const AuthNav: React.FC = () => {
    const authPage = useContext(AuthorizingPageContext);
    const {authState} = useContext(AuthStateContext);
    const name = "BANG";
    if (!authState.getState().isAuthed)
        return (
            <Button type="button" onClick={() => { authPage.toggle(); }} variant="outline-light">
                {Text('AUTH_BUTTON')}
            </Button>
        );
    else
        return (
            <Nav>
                {(authState.getState().isStaff) ? (<Nav.Link as={Link} to="/admin">
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