import React,{useContext} from 'react';
import { Modal, Tab, Nav, TabContainer } from 'react-bootstrap';
import SignInForm from '../SignInForm/SignInForm';
import SignUpForm from '../SignUpForm/SignUpForm';
import './AuthModal.css'
import {LanguageContext} from '../../Global/GlobalStates/GlobalStates';

interface AuthModalProps {
    authModalDisplay: Boolean;
    authModalToggle: Function;
}

const AuthModal: React.FC<AuthModalProps> = (props: AuthModalProps) => {
    const language=useContext(LanguageContext);
    const tabsMapping: [number, string, string, JSX.Element][] = [
        [0, "sign-in", "MODAL_SIGNIN", <SignInForm authModalToggle={props.authModalToggle} />],
        [1, "sign-up", "MODAL_SIGNUP", <SignUpForm />]
    ];
    return (
        <Modal
            animation={false}
            show={props.authModalDisplay}
            onHide={props.authModalToggle}
        >
            <Modal.Body>
                <TabContainer
                    transition={false}
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
                                        {language.dictionary[ tab[2] ]}
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
