import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { Text } from '../Text/Text';

const SignUpForm: React.FC = () => {
    return (
        <Col>
            <Form className="mt-3">
                <Form.Group controlId="formName">
                    <Form.Label>{Text('FORM_NAME')}</Form.Label>
                    <Form.Control type="text" placeholder={Text('FORM_NAME_PLACE_HOLDER')} />
                </Form.Group>
                <Form.Group controlId="formSignUpEmail">
                    <Form.Label>{Text('FORM_EMAIL')}</Form.Label>
                    <Form.Control type="email" placeholder={Text('FORM_EMAIL_PLACE_HOLDER')} />
                </Form.Group>
                <Form.Group controlId="formSignUpPassword">
                    <Form.Label>{Text('FORM_PASSWORD')}</Form.Label>
                    <Form.Control type="password" placeholder="********" />
                </Form.Group>
                <Form.Group controlId="formSignUpButton">
                    <Button variant="primary" type="button" block>
                        {Text('MODAL_SIGNUP')}
                    </Button>
                </Form.Group>
            </Form>
        </Col>
    )
};

export default SignUpForm;