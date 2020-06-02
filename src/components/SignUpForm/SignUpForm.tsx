import React,{useContext} from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { LanguageContext} from '../../Global/GlobalStates/GlobalStates';


const SignUpForm: React.FC = () => {
    const language=useContext(LanguageContext);
    return (
        <Col>
            <Form className="mt-3">
                <Form.Group controlId="formName">
                    <Form.Label>{language.dictionary['FORM_NAME']}</Form.Label>
                    <Form.Control type="text" placeholder={language.dictionary['FORM_NAME_PLACE_HOLDER']} />
                </Form.Group>
                <Form.Group controlId="formSignUpEmail">
                    <Form.Label>{language.dictionary['FORM_EMAIL']}</Form.Label>
                    <Form.Control type="email" placeholder={language.dictionary['FORM_EMAIL_PLACE_HOLDER']} />
                </Form.Group>
                <Form.Group controlId="formSignUpPassword">
                    <Form.Label>{language.dictionary['FORM_PASSWORD']}</Form.Label>
                    <Form.Control type="password" placeholder="********" />
                </Form.Group>
                <Form.Group controlId="formSignUpButton">
                    <Button variant="primary" type="button" block>
                        {language.dictionary['MODAL_SIGNUP']}
                    </Button>
                </Form.Group>
            </Form>
        </Col>
    )
};

export default SignUpForm;