import React,{useState, useEffect, useContext} from 'react';
import {Container, Col, Row, Table} from 'react-bootstrap';
import ShadowedBox from '../../components/ShadowedBox/ShadowedBox';
import { LoadState, fetchSubmissions } from '../../Global/GlobalFunctions/FetchingActions';
import { ResponseDataType, SubmissionType } from '../../models';
import {FetchContext} from '../../Global/GlobalStates/GlobalStates';
interface SubmissionsRowProps{
    submission:SubmissionType
}
const SubmissionRow : React.FC<SubmissionsRowProps> = ({submission})=>{
    return(
        <div>{submission.something}</div>//need to edit 
    )
}
const SubmissionsPage : React.FC = ()=>{
    const {apiFetcher} = useContext(FetchContext);
    const [submissionsData, setSubmissionsData]=useState(new Array<SubmissionType>());
    const [loadState, setLoadState]= useState(LoadState.LOADING);
    useEffect(()=>{
        if (loadState === LoadState.LOADING){
            fetchSubmissions(apiFetcher,
                (submissions: ResponseDataType<Array<SubmissionType>>)=>{
                    setSubmissionsData(submissions.results);
                    setLoadState(LoadState.NOTLOADING);
                },
                (error:Error)=>{
                    console.log(error);
                    setLoadState(LoadState.NOTLOADING);
                }
            );
        }
    },[apiFetcher, loadState]);
    return (
        <Container fluid>
            <Row>
                <Col>
                    <ShadowedBox>
                        <Table hover responsive>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Problem</th>
                                    <th>User</th>
                                    <th>Result</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {submissionsData.map((submission,idx)=>
                                <SubmissionRow submission={submission} key={idx}/>)}
                            </tbody>
                        </Table>
                    </ShadowedBox>
                </Col>
            </Row>
        </Container>
    )
};
export default SubmissionsPage;