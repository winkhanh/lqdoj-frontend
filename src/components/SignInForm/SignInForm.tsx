import React, { useState, useContext } from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { doLogin } from '../../Global/GlobalFunctions/FetchingActions';
import { FetchContext, TokenContext, LanguageContext, AuthStateContext } from '../../Global/GlobalStates/GlobalStates';
import { ResponseDataType, TokenType } from '../../models';
interface FormProps {
    authModalToggle: Function
}

const SignInForm: React.FC<FormProps> = (props: FormProps) => {
    const { apiFetcher } = useContext(FetchContext);
    const { setToken } = useContext(TokenContext);
    const language = useContext(LanguageContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");    

    const linkClickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
        props.authModalToggle();
    }
    const loginHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        doLogin(
            apiFetcher,
            username,
            password,
            (loginResponse: ResponseDataType<TokenType>) => {                
                setToken(loginResponse.results.token);
                props.authModalToggle();                
            },
            (error: Error) => {
                console.log(error);
            }
        );

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
                    <Form.Label>{language.dictionary['FORM_PASSWORD']}</Form.Label>
                    <Form.Control type="password" placeholder="********" value={password} onChange={passwordHandler} />
                </Form.Group>
                <Form.Group controlId="formSignInCheckbox">
                    <Form.Check type="checkbox" label={language.dictionary['FORM_CHECKBOX']} />
                </Form.Group>
                <Form.Group controlId="formSignInCheckbox">
                    <Button onClick={loginHandler} variant="primary" type="button" block>
                        {language.dictionary['MODAL_SIGNIN']}
                    </Button>
                </Form.Group>
                <Form.Group>
                    <Link to="/forget_password" onClick={linkClickHandler}>{language.dictionary['FORGET_PASSWORD']}</Link>
                </Form.Group>
            </Form>
        </Col>
    )
};

export default SignInForm;