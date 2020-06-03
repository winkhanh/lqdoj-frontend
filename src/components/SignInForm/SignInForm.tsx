<<<<<<< HEAD
import React, { useState, useContext, useEffect } from 'react';
import {  Form, Col } from 'react-bootstrap';
=======
import React, { useState, useContext } from 'react';
import { Form, Col } from 'react-bootstrap';
>>>>>>> ca1f4b0c3d812c6d4f216f45207c9d55143fcaad
import { Link } from 'react-router-dom';

import { doLogin, LoadState } from '../../Global/GlobalFunctions/FetchingActions';
import { FetchContext, TokenContext, LanguageContext } from '../../Global/GlobalStates/GlobalStates';
import { ResponseDataType, TokenType } from '../../models';
import StatusButton from '../StatusButton/StatusButton';
interface FormProps {
    authModalToggle: Function
}

const SignInForm: React.FC<FormProps> = (props: FormProps) => {
    const { apiFetcher } = useContext(FetchContext);
    const { setToken } = useContext(TokenContext);
    const language = useContext(LanguageContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loadState, setLoadState] = useState(LoadState.NOTLOADING);
    useEffect(()=>{
        if (loadState === LoadState.LOADING) {
            doLogin(
                apiFetcher,
                username,
                password,
                (loginResponse: ResponseDataType<TokenType>) => {
                    setToken(loginResponse.results.token);
                    props.authModalToggle();
                    setLoadState(LoadState.NOTLOADING);
                },
                (error: Error) => {
                    console.log(error);
                    setLoadState(LoadState.NOTLOADING);
                }
            );
        }
    },[loadState, apiFetcher, username, password, setToken, props]);
    const linkClickHandler = () => {
        props.authModalToggle();
    }
    
    const loginHandler = () => {
        setLoadState(LoadState.LOADING);
    }
    const usernameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }
    const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }
    return (
        <Col>
            <Form className="mt-3">
                <Form.Group controlId="formSignInEmail">
                    <Form.Label>{language.dictionary['FORM_USERNAME']}</Form.Label>
                    <Form.Control type="text" placeholder={language.dictionary['FORM_USERNAME_PLACE_HOLDER']} value={username} onChange={usernameHandler} />
                </Form.Group>
                <Form.Group controlId="formSignInPassword">
                    <Form.Label>{language.dictionary['FORM_PASSWORD_1']}</Form.Label>
                    <Form.Control type="password" placeholder="********" value={password} onChange={passwordHandler} />
                </Form.Group>
                <Form.Group controlId="formSignInButton">
                    <StatusButton loadState={loadState} onClick={loginHandler}>
                        {language.dictionary['MODAL_SIGNIN']}
                    </StatusButton>

                </Form.Group>
                <Form.Group>
                    <Link to="/forget_password" onClick={linkClickHandler}>{language.dictionary['FORGET_PASSWORD']}</Link>
                </Form.Group>
            </Form>
        </Col>
    )
};

export default SignInForm;