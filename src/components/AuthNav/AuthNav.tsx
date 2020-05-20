import React, {useContext} from 'react';
import {AuthorizingPageContext , AuthState} from '../../contexts/GlobalFunctions/GlobalState';
import {Button, Dropdown, DropdownButton} from 'react-bootstrap';
import {Link} from 'react-router-dom';
const AuthNav: React.FC = () =>{
    const authPage=useContext(AuthorizingPageContext);
    const name= "BANG";
    const {isAuthed, isAdmin}=useContext(AuthState);
    if (!isAuthed)
        return (
            <Button type="button" onClick={()=>{authPage.toggle();}} variant="outline-light">
                Sign in/Sign up
            </Button>
        );
    else
        return (
            <React.Fragment>
                {(isAdmin)?(<Link to="/admin">
                    Admin Page
                </Link>):null}
                <DropdownButton id="profile-dropdown" title={name} variant="outline-light" alignRight>
                    <Dropdown.Item as={Link} to="/me">Profile</Dropdown.Item>
                    <Dropdown.Item as={Button} variant="outline-danger">Logout</Dropdown.Item>
                </DropdownButton>
            </React.Fragment>
        )
    
};

export default AuthNav;