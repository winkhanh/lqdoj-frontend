import React, { useContext, useState, useEffect } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { LoadState, doSignUp } from '../../Global/GlobalFunctions/FetchingActions';
import { LanguageContext, FetchContext } from '../../Global/GlobalStates/GlobalStates';
import { ResponseDataType, FormDataType, StringIndexed } from '../../models';
import StatusButton from '../StatusButton/StatusButton';

const initialFormData = {
    username: "",
    email: "",
    password1: "",
    password2: "",
    firstname: "",
    lastname: ""
} as StringIndexed<FormDataType>;

const SignUpForm: React.FC = () => {
    const language = useContext(LanguageContext);
    const { apiFetcher } = useContext(FetchContext);
    const [formData, setFormData] = useState(initialFormData);
    const [loadState, setLoadState] = useState(LoadState.NOTLOADING);
    useEffect(()=>{
        if (loadState === LoadState.LOADING) {
            doSignUp(
                apiFetcher,
                formData,
                (signUpResponse: ResponseDataType<{}>) => {
                    
                    setLoadState(LoadState.NOTLOADING);                    
                },
                (error: Error) => {
                    console.log(error);
                    setLoadState(LoadState.NOTLOADING);
                }
            );
        }
    },[loadState, apiFetcher,formData])
    const formDataHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(Object.entries(formData).map(([key, value]) => {
            if (key === event.target.id) {
                return [key, event.target.value];
            } else {
                return [key, value];
            }
        }).reduce<StringIndexed<FormDataType>>((res, [key, value]) => {
            res[key] = value;
            return res;
        }, initialFormData));
    };

    const signUpHandler = () => {
       setLoadState(LoadState.LOADING); 
    }

    return (
        <Col>
            <Form className="mt-3">
                <Row>
                    <Col>
                        <Form.Group controlId="lastname">
                            <Form.Label>{language.dictionary['FORM_LASTNAME']}</Form.Label>
                            <Form.Control type="text" onChange={formDataHandler} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="firstname">
                            <Form.Label>{language.dictionary['FORM_FIRSTNAME']}</Form.Label>
                            <Form.Control type="text" onChange={formDataHandler} />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId="username">
                    <Form.Label>{language.dictionary['FORM_USERNAME']}</Form.Label>
                    <Form.Control type="text" onChange={formDataHandler}
                        placeholder={language.dictionary['FORM_USERNAME_PLACE_HOLDER']} />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>{language.dictionary['FORM_EMAIL']}</Form.Label>
                    <Form.Control type="email" placeholder={language.dictionary['FORM_EMAIL_PLACE_HOLDER']} />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group controlId="password1">
                            <Form.Label>{language.dictionary['FORM_PASSWORD_1']}</Form.Label>
                            <Form.Control type="password" onChange={formDataHandler} placeholder="********" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="password2">
                            <Form.Label>{language.dictionary['FORM_PASSWORD_2']}</Form.Label>
                            <Form.Control type="password" onChange={formDataHandler} placeholder="********" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId="formSignUpButton">
                    <StatusButton loadState={loadState} onClick={signUpHandler}>
                        {language.dictionary['MODAL_SIGNUP']}
                    </StatusButton>
                </Form.Group>
            </Form>
        </Col>
    )
};

export default SignUpForm;