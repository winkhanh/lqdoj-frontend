import React from 'react';
import {Form, Button} from 'react-bootstrap';
const SignInForm : React.FC = ()=>{
    return(
        <Form>
            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email"/>
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="********"/>
            </Form.Group>
            <Form.Group controlId="formCheck">
                <Form.Check type="checkbox" label="login forever"/>
            </Form.Group>
            <Button variant="primary" type="button" size="lg" block>
                Log In
            </Button>
        </Form>
    )
};

export default SignInForm;