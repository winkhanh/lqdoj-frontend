import React, {useState} from 'react';

import './Authorizing.scss';
import {ButtonGroup, Button} from 'react-bootstrap';

import SignInForm from '../../components/SignInForm/SignInForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

const Authorizing : React.FC = ()=>{
    const [switchVal,setSwitch] = useState(false);
    
    const handleSignIn = ()=> setSwitch(true);
    const handleSignUp = ()=> setSwitch(false);
    
    return (
        <div className={`authorizing-page authorizing-page--hide`}>
            <div className="authorizing-page_background"></div>
            <div className="authorizing-page_form">
                <ButtonGroup>
                    <Button type="button" onClick={handleSignIn}> Sign In </Button>
                    <Button type="button" onClick={handleSignUp}> Sign Up</Button>
                </ButtonGroup>
                {(switchVal?<SignInForm/>:<SignUpForm/>)}
            </div>
        </div>
    );
}

export default Authorizing;