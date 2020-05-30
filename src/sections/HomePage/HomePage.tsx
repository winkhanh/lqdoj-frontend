import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Posts from '../../components/Posts/Posts';
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import Recentboard from '../../components/Recentboard/Recentboard';
const HomePage = ()=>{
    return (
        <Container fluid="xl" className="mt-3">
            <Row>
                <Col md={{span: 8, order: 1}} xs={{span: 12, order: 2}}>
                    <Posts/>
                </Col>
                <Col md={{span: 4, order: 2}} xs={{span: 12, order: 1}}> {/** Move upon the Table when on Mobile */}
                    <Row>
                        <Leaderboard/>
                    </Row>
                    <Row>
                        <Recentboard/>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
};
export default HomePage;