import React from 'react';
import {Form, Button} from 'react-bootstrap';
const SignUpForm : React.FC = ()=>{
    return(
        <Form>
            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="What is your name"/>
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email"/>
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="********"/>
            </Form.Group>
            <Button variant="primary" type="button" size="lg" block>
                Register
            </Button>
        </Form>
    )
};

export default SignUpForm;