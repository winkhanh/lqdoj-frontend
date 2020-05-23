import React from 'react';
import { Modal, Tab, Nav, TabContainer } from 'react-bootstrap';
import SignInForm from '../SignInForm/SignInForm';
import SignUpForm from '../SignUpForm/SignUpForm';
import './AuthModal.css'

const tabsMapping: [number, string, string, JSX.Element] [] = [
    [0, "sign-in", "Sign in", <SignInForm/>],
    [1, "sign-up", "Sign up", <SignUpForm/>]
];

interface AuthModalProps {
    authModalDisplay: Boolean;
    authModalToggle: Function;
}

const AuthModal: React.FC<AuthModalProps> = (props: AuthModalProps) => {
    return (
        <Modal
            show={props.authModalDisplay}
            onHide={props.authModalToggle}
        >
            <Modal.Body>
                <TabContainer
                    id="auth-tab"
                    defaultActiveKey="sign-in"
                >
                    <Nav
                        variant="pills"
                        className="with-arrow lined flex-column flex-sm-row text-center"
                    >
                        {tabsMapping.map((tab) => {
                            return (
                                <Nav.Item key={tab[0]} className="flex-sm-fill">
                                    <Nav.Link
                                        eventKey={tab[1]}
                                        className="nav-link text-uppercase font-weight-bold mr-sm-3 rounded-0"
                                    >
                                        {tab[2]}
                                    </Nav.Link>
                                </Nav.Item>
                            )
                        })}
                    </Nav>
                    <Tab.Content>
                        {tabsMapping.map((tab) => {
                            return (
                                <Tab.Pane key={tab[0]} eventKey={tab[1]} children={tab[3]}></Tab.Pane>
                            )
                        })}                        
                    </Tab.Content>
                </TabContainer>
            </Modal.Body>
        </Modal>
    )
};

export default AuthModal;
