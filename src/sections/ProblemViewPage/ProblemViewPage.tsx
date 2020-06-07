import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import ProblemContent from '../../components/ProblemContent/ProblemContent';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import CommentsBox from '../../components/CommentsBox/CommentsBox';
const ProblemViewPage: React.FC = () => {
    const {id} = useParams();
    return (
        <Container fluid="xl" className="mt-3">
            <Row>
                <Col md={{ span: 6, order: 1 }} xs={{ span: 12, order: 1 }}>
                    <ProblemContent id={id}/>
                </Col>
                <Col md={{ span: 6, order: 2 }} xs={{ span: 12, order: 2 }}> {/** Move under the post when on mobile */}
                    <CodeEditor id={id}/>
                </Col>
            </Row>
            <Row>
                <CommentsBox id={id}/>
            </Row>
        </Container>
    )
};
export default ProblemViewPage;
