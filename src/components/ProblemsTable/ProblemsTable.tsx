import React, { useState, useContext, useEffect } from 'react';
import ShadowedBox from '../ShadowedBox/ShadowedBox';
import { Table, InputGroup, FormControl, Container, Row, Col } from 'react-bootstrap';
import { ResponseDataType, ProblemType } from '../../models';
import DifficultyButton from '../DifficultyButton/DifficultyButton';
import { FilterState } from '../ProblemFilter/ProblemFilter';
import Paginator from '../Paginator/Paginator';
import { FetchContext } from '../../contexts/GlobalFunctions/FetchingFunctions';

interface TableRowProps {
    problem: ProblemType

}
interface ProblemsTableProps {
    filterState: FilterState
}
const TableRow: React.FC<TableRowProps> = ({ problem }: TableRowProps) => {

    return (
        <tr>
            <td>{problem.task_code}</td>
            <td>{problem.title}</td>
            <td><DifficultyButton difficulty={problem.difficulty} /></td>
            <td>{problem.tags.reduce((pre, cur) => pre + "," + cur)} </td>
            <td>{problem.percent}</td>
        </tr>
    )
}

const initialProblems: ResponseDataType<Array<ProblemType>> = {
    count: 1,
    previous: "",
    next: "",
    results: []
};

const ProblemsTable: React.FC<ProblemsTableProps> = ({ filterState }: ProblemsTableProps) => {
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState("25");
    const [problemsData, setProblemsData] = useState(initialProblems);
    const { fetcher } = useContext(FetchContext);
    let numPerPage: number;

    useEffect(() => {
        fetcher.fetchProblems((problems: ResponseDataType<Array<ProblemType>>) => {
            setProblemsData(problems);
        }, (error: Error) => {
            console.log(error);
            setProblemsData(initialProblems);
        });
    }, [fetcher, page, perPage]);

    if (isNaN(parseInt(perPage)) || parseInt(perPage) <= 0) {
        numPerPage = 25;
    } else {
        numPerPage = parseInt(perPage);
    }

    const handleChangePerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPerPage(e.target.value);
    }
    let filteredProblems = problemsData.results.filter(
        (problem) => {
            if (filterState.difficult) {
                return problem.difficulty === filterState.difficult;
            } else return true;
        }
    ).filter(
        (problem) => {
            if (filterState.title && filterState.title !== "") {
                return (problem.title.toLocaleLowerCase().search(filterState.title.toLocaleLowerCase()) !== -1);
            } else return true;
        }
    ).filter(
        (problem) => {
            if (filterState.author && filterState.author !== "") {
                return (problem.author.toLocaleLowerCase().search(filterState.author.toLocaleLowerCase()) !== -1);
            } else return true;
        }
    ).filter(
        (problem) => {
            if (filterState.tag && filterState.tag !== "") {
                return (problem.tags.includes(filterState.tag));
            } else return true;
        }
    );
    let slicedProblem = filteredProblems.slice((page - 1) * numPerPage, Math.min(page * numPerPage, filteredProblems.length));
    return (
        <ShadowedBox>
            <Table hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Difficulty</th>
                        <th>Tags</th>
                        <th>%</th>
                    </tr>
                </thead>
                <tbody>
                    {slicedProblem.map((problem, idx) =>
                        <TableRow key={idx} problem={problem} />
                    )}
                </tbody>
            </Table>
            <Container fluid>
                <Row>
                    <Col md={3}>
                        <InputGroup>
                            <FormControl type="number" min="1" onChange={handleChangePerPage} value={perPage} />
                            <InputGroup.Append>
                                <InputGroup.Text>
                                    per Page
                                </InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                    <Col md={{ span: 3, offset: 6 }}>
                        <Paginator
                            page={page}
                            setPage={setPage}
                            totalPages={Math.round((filteredProblems.length - 1) / numPerPage) + 1}
                            id="problems"
                        />
                    </Col>
                </Row>
            </Container>
        </ShadowedBox>
    );
}
export default ProblemsTable;