import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Posts from '../../components/Posts/Posts';
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import Recentboard from '../../components/Recentboard/Recentboard';
const HomePage = ()=>{
    return (
        <Container fluid="xl">
            <Row>
                <Col sm={8}>
                    <Posts/>
                </Col>
                <Col sm={4} className="d-none d-sm-block"> {/** Hidden when on Mobile */}
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