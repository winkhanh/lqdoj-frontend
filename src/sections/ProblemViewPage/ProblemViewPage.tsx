import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProblemContent from '../../components/ProblemContent/ProblemContent';
import PostComments from '../../components/PostComments/PostComments';

const ProblemViewPage: React.FC = () => {
    return (
        <Container fluid="xl" className="mt-3">
            <Row>
                <Col md={{ span: 8, order: 1 }} xs={{ span: 12, order: 1 }}>
                    <ProblemContent />
                </Col>
                <Col md={{ span: 4, order: 2 }} xs={{ span: 12, order: 2 }}> {/** Move under the post when on mobile */}
                    <PostComments />
                </Col>
            </Row>
        </Container>
    )
};
export default ProblemViewPage;
