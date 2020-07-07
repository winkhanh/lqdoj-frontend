import React, { useContext } from 'react';
import { AuthModalContext, AuthStateContext, LanguageContext, FetchContext, TokenContext } from '../../Global/GlobalStates/GlobalStates';
import { Button, Dropdown, DropdownButton, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { doLogout } from '../../Global/GlobalFunctions/FetchingActions';
import { ResponseDataType } from '../../models';
import AdminOnly from '../AdminOnly/AdminOnly';

const AuthNav: React.FC = () => {
    const language = useContext(LanguageContext);
    const authPage = useContext(AuthModalContext);
    const { authState } = useContext(AuthStateContext);
    const { apiFetcher } = useContext(FetchContext);
    const { setToken } = useContext(TokenContext);

    const logoutHandler = () => {
        doLogout(
            apiFetcher,
            authState.getState().token,
            (logoutRes: ResponseDataType<{}>) => {
                setToken("");
            },
            (error: Error) => {
                console.log(error);
            }
        );
    }

    if (!authState.getState().isAuthed)
        return (
            <Button type="button" onClick={() => { authPage.toggle(); }} variant="outline-light">
                {language.dictionary['AUTH_BUTTON']}
            </Button>
        );
    else {
        return (
            <Nav>
                <AdminOnly>
                    <Nav.Link as={Link} to="/admin">
                        {language.dictionary['NAV_ADMIN']}
                    </Nav.Link>
                </AdminOnly>
                <DropdownButton id="profile-dropdown" title={authState.getState().user.username} variant="outline-light" alignRight>
                    <Dropdown.Item as={Link} to="/me">
                        {language.dictionary['PROFILE_BUTTON']}
                    </Dropdown.Item>
                    <Dropdown.Item as={Button} onClick={logoutHandler}variant="outline-danger">
                        {language.dictionary['DEAUTH_BUTTON']}
                    </Dropdown.Item>
                </DropdownButton>
            </Nav>
        )
    }

};

export default AuthNav;