import React, { useState, useEffect, useContext } from 'react';
import { Container, Col, Row, Table } from 'react-bootstrap';
import ShadowedBox from '../../components/ShadowedBox/ShadowedBox';
import { LoadState, fetchSubmissions } from '../../Global/GlobalFunctions/FetchingActions';
import { ResponseDataType, SubmissionType } from '../../models';
import { FetchContext } from '../../Global/GlobalStates/GlobalStates';
interface SubmissionsRowProps {
    submission: SubmissionType
}
const SubmissionRow: React.FC<SubmissionsRowProps> = ({ submission }) => {
    /* 

        submission.status from backend
        class SubmissionStatus(object):
            PENDING = "PENDING_STATUS"
            COMPILING = "COMPILING_STATUS"
            JUDGING = "JUDGING_STATUS"
            COMPILE_ERROR = "COMPILE_ERROR_STATUS"
            FINISHED = "FINISHED_STATUS"

        Neu finished, submission.result se co cac gia tri sau:
        JUDGER_ERRORS = [
            "ACCEPTED",
            "TIME_LIMIT_EXCEEDED",
            "MEMORY_LIMIT_EXCEEDED",
            "RUNTIME_ERROR",
            "WRONG_ANSWER"
        ]

        submission.test_counts: so luong test da pass

    */
    return (
        <tr>
            <td>{submission.id}</td>
            <td>{submission.author}</td>
            <td>{submission.problem}</td>
            <td>{(submission.status == "JUDGING_STATUS") ? ("Judged " + submission.test_counts) : submission.result}</td>
            <td>{submission.time}</td>
        </tr>
    )
}
const SubmissionsPage: React.FC = () => {
    const { apiFetcher } = useContext(FetchContext);
    const [submissionsData, setSubmissionsData] = useState(new Array<SubmissionType>());
    const [loadState, setLoadState] = useState(LoadState.LOADING);
    useEffect(() => {
        if (loadState === LoadState.LOADING) {
            fetchSubmissions(apiFetcher,
                (submissions: ResponseDataType<Array<SubmissionType>>) => {
                    console.log(submissions.results);
                    setSubmissionsData(submissions.results);
                    setLoadState(LoadState.NOTLOADING);
                },
                (error: Error) => {
                    console.log(error);
                    setLoadState(LoadState.NOTLOADING);
                }
            );
        }
    }, [apiFetcher, loadState]);
    return (
        <Container fluid className="mt-3">
            <Row>
                <Col md={{span: 10, offset: 1}}>
                    <ShadowedBox>
                        <Table hover responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Author</th>
                                    <th>Problem</th>
                                    <th>Status</th>
                                    <th>Submitted at</th>
                                </tr>
                            </thead>
                            <tbody>
                                {submissionsData.map((submission, idx) =>
                                    <SubmissionRow submission={submission} key={idx} />)}
                            </tbody>
                        </Table>
                    </ShadowedBox>
                </Col>
            </Row>
        </Container>
    )
};
export default SubmissionsPage;