import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {TextFC} from '../Text/Text';

const SignInForm : React.FC = ()=>{
    return(
        <Form>
            <Form.Group controlId="formSignInEmail">
                <Form.Label>{TextFC('FORM_EMAIL')}</Form.Label>
                <Form.Control type="email" placeholder={TextFC('FORM_EMAIL_PLACE_HOLDER')}/>
            </Form.Group>
            <Form.Group controlId="formSignInPassword">
                <Form.Label>{TextFC('FORM_PASSWORD')}</Form.Label>
                <Form.Control type="password" placeholder="********"/>
            </Form.Group>
            <Form.Group controlId="formSignInCheckbox">
                <Form.Check type="checkbox" label={TextFC('FORM_CHECKBOX')}/>
            </Form.Group>
            <Button variant="primary" type="button" size="lg" block>
                {TextFC('MODAL_SIGNIN')}
            </Button>
        </Form>
    )
};

export default SignInForm;