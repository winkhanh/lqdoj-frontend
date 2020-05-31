import React from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Text } from '../Text/Text';

const SignInForm: React.FC = () => {
    return (
        <Col>
            <Form className="mt-3">
                <Form.Group controlId="formSignInEmail">
                    <Form.Label>{Text('FORM_USERNAME')}</Form.Label>
                    <Form.Control type="email" placeholder={Text('FORM_USERNAME_PLACE_HOLDER')} />
                </Form.Group>
                <Form.Group controlId="formSignInPassword">
                    <Form.Label>{Text('FORM_PASSWORD')}</Form.Label>
                    <Form.Control type="password" placeholder="********" />
                </Form.Group>
                <Form.Group controlId="formSignInCheckbox">
                    <Form.Check type="checkbox" label={Text('FORM_CHECKBOX')} />
                </Form.Group>
                <Form.Group controlId="formSignInCheckbox">
                    <Button variant="primary" type="button" block>
                        {Text('MODAL_SIGNIN')}
                    </Button>
                </Form.Group>
                <Form.Group>
                    <Link to="">{Text('FORGET_PASSWORD')}</Link>
                </Form.Group>
            </Form>
        </Col>
    )
};

export default SignInForm;