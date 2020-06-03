import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PostContent from '../../components/PostContent/PostContent';
import PostComments from '../../components/PostComments/PostComments';

const PostViewPage: React.FC = () => {    
    return (
        <Container fluid="xl" className="mt-3">
            <Row>
                <Col md={{ span: 8, order: 1 }} xs={{ span: 12, order: 1 }}>
                    <PostContent />
                </Col>
                <Col md={{ span: 4, order: 2 }} xs={{ span: 12, order: 2 }}> {/** Move under the post when on mobile */}
                    <PostComments />
                </Col>
            </Row>
        </Container>
    )
};
export default PostViewPage;
