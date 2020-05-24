import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {TextFC} from '../Text/Text';

const SignUpForm : React.FC = ()=>{
    return(
        <Form>
            <Form.Group controlId="formName">
                <Form.Label>{TextFC('FORM_NAME')}</Form.Label>
                <Form.Control type="text" placeholder={TextFC('FORM_NAME_PLACE_HOLDER')}/>
            </Form.Group>
            <Form.Group controlId="formSignUpEmail">
                <Form.Label>{TextFC('FORM_EMAIL')}</Form.Label>
                <Form.Control type="email" placeholder={TextFC('FORM_EMAIL_PLACE_HOLDER')}/>
            </Form.Group>
            <Form.Group controlId="formSignUpPassword">
                <Form.Label>{TextFC('FORM_PASSWORD')}</Form.Label>
                <Form.Control type="password" placeholder="********"/>
            </Form.Group>
            <Button variant="primary" type="button" size="lg" block>
                {TextFC('MODAL_SIGNUP')}
            </Button>
        </Form>
    )
};

export default SignUpForm;