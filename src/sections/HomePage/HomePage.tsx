import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Posts from '../../components/Posts/Posts';
const HomePage = ()=>{
    return (
        <Container fluid="xl">
            <Row>
                <Col sm={9}>
                    <Posts/>
                </Col>
                <Col sm={3} style={{background:"black"}} className="d-none d-sm-block"> {/** Hidden when on Mobile */}
                    Something here
                </Col>
            </Row>
        </Container>
    )
};
export default HomePage;