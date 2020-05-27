import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
const ProblemsPage = ()=>{
    return (
        <Container fluid="xl">
            <Row>
                <Col sm={{span:9, order:1}} xs={{span:12, order:2}}>
                    Table here
                </Col>
                <Col sm={{span:3, order:2}} style={{background:"black"}} xs={{span:12, order:1}}> {/** Move upon the Table when on Mobile */}
                    Filter Here
                </Col>
            </Row>
        </Container>
    )
};
export default ProblemsPage;