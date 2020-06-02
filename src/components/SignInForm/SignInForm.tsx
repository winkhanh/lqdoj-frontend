import React, {useState, useContext} from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Text } from '../Text/Text';
import { doLogin } from '../../Global/GlobalFunctions/FetchingActions';
import {FetchContext, TokenContext} from '../../Global/GlobalStates/GlobalStates';
interface FormProps {
    authModalToggle: Function
}

const SignInForm: React.FC<FormProps> = (props: FormProps) => {
    const {apiFetcher} = useContext(FetchContext);
    const {setToken} = useContext(TokenContext);
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const linkClickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
        props.authModalToggle();        
    }
    const loginHandler = (event: React.MouseEvent<HTMLButtonElement>) =>{
        console.log("TRY");
        doLogin(
            apiFetcher,
            username,
            password,
            (token:string)=>{
                setToken(token);
                props.authModalToggle();
            },
            (error: Error)=>{
                console.log(error);
            }
        );
        
    }
    const usernameHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setUsername(event.target.value);
    }
    const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setPassword(event.target.value);
    }
    return (
        <Col>
            <Form className="mt-3">
                <Form.Group controlId="formSignInEmail">
                    <Form.Label>{Text('FORM_USERNAME')}</Form.Label>
                    <Form.Control type="text" placeholder={Text('FORM_USERNAME_PLACE_HOLDER')} value={username} onChange={usernameHandler}/>
                </Form.Group>
                <Form.Group controlId="formSignInPassword">
                    <Form.Label>{Text('FORM_PASSWORD')}</Form.Label>
                    <Form.Control type="password" placeholder="********" value={password} onChange={passwordHandler}/>
                </Form.Group>
                <Form.Group controlId="formSignInCheckbox">
                    <Form.Check type="checkbox" label={Text('FORM_CHECKBOX')} />
                </Form.Group>
                <Form.Group controlId="formSignInCheckbox">
                    <Button onClick={loginHandler} variant="primary" type="button" block>
                        {Text('MODAL_SIGNIN')}
                    </Button>
                </Form.Group>
                <Form.Group>
                    <Link to="/forget_password" onClick={linkClickHandler}>{Text('FORGET_PASSWORD')}</Link>
                </Form.Group>
            </Form>
        </Col>
    )
};

export default SignInForm;