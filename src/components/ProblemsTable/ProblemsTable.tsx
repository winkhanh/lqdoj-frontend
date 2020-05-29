import React, { useState } from 'react';
import ShadowedBox from '../ShadowedBox/ShadowedBox';
import { Table, InputGroup, FormControl, Container, Row, Col } from 'react-bootstrap';
import { ProblemType } from '../../models';
import DifficultyButton from '../DifficultyButton/DifficultyButton';
import { FilterState } from '../ProblemFilter/ProblemFilter';
import Paginator from '../Paginator/Paginator';
interface TableRowProps {
    problem: ProblemType,

}
interface ProblemsTableProps {
    filterState: FilterState
}
const TableRow: React.FC<TableRowProps> = ({ problem }: TableRowProps) => {
    return (
        <tr>
            <td>{problem.id}</td>
            <td>{problem.title}</td>
            <td><DifficultyButton difficulty={problem.difficulty} /></td>
            <td>{problem.tags.reduce((pre, cur) => pre + "," + cur)} </td>
            <td>{problem.percent}</td>
        </tr>
    )
}
const constProblems: ProblemType[] = [
    {
        id: "LQDID1",
        author: "bang",
        title: "Find LQD in the map",
        difficulty: "easy",
        tags: ["dp", "binary", "recursion"],
        percent: 100
    },
    {
        id: "LQDID2",
        author: "bang",
        title: "Find Fibonacci fucking easy man",
        difficulty: "hard",
        tags: ["dp", "matrix"],
        percent: 69
    }
];
const ProblemsTable: React.FC<ProblemsTableProps> = ({ filterState }: ProblemsTableProps) => {
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState("25");
    let numPerPage: number;
    if (isNaN(parseInt(perPage)) || parseInt(perPage) === 0) {
        numPerPage = 25;
    } else {
        numPerPage = parseInt(perPage);
    }
    const handleChangePerPage = (e: any) => {
        setPerPage(e.target.value);
    }
    let filteredProblems = constProblems.filter(
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
            <Table>
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
                    <Col>
                        <InputGroup>
                            <FormControl type="text" onChange={handleChangePerPage} value={perPage} />
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    per Page
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                        </InputGroup>
                    </Col>
                    <Col />
                    <Col>
                        <Paginator 
                            page={page} 
                            setPage={setPage} 
                            totalPages={Math.round((filteredProblems.length-1)/numPerPage)+1}
                            id="problems"
                            />
                    </Col>
                </Row>
            </Container>
        </ShadowedBox>
    );
}
export default ProblemsTable;