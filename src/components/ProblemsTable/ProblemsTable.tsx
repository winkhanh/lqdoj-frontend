import React from 'react';
import ShadowedBox from '../ShadowedBox/ShadowedBox';
import {Table} from 'react-bootstrap';
import {ProblemType} from '../../models';
import DifficultyButton from '../DifficultyButton/DifficultyButton';
import {FilterState} from '../ProblemFilter/ProblemFilter';
interface TableRowProps{
    problem:ProblemType,
    
}
interface ProblemsTableProps{
    filterState:FilterState,
    NoP: number
}
const TableRow:React.FC<TableRowProps> = ({problem}:TableRowProps) =>{
    return(
        <tr>
            <td>{problem.id}</td>
            <td>{problem.title}</td>
            <td><DifficultyButton difficulty={problem.difficulty}/></td>
            <td>{problem.tags.reduce((pre,cur)=>pre+","+cur)} </td>
            <td>{problem.percent}</td>
        </tr>
    )
}
const constProblems: ProblemType[] = [
    {
        id:"LQDID1",
        author:"bang",
        title:"Find LQD in the map",
        difficulty:"easy",
        tags:["dp","binary","recursion"],
        percent:100
    },
    {
        id:"LQDID2",
        author:"bang",
        title:"Find Fibonacci fucking easy man",
        difficulty:"hard",
        tags:["dp","matrix"],
        percent:69
    }
];
const ProblemsTable:React.FC<ProblemsTableProps>= ({filterState, NoP}:ProblemsTableProps)=>{
    let filteredProblems=constProblems.filter(
        (problem)=>{
            if (filterState.difficult){
                return problem.difficulty===filterState.difficult;
            }else return true;
        }
    ).filter(
        (problem)=>{
            if (filterState.title && filterState.title!==""){
                return (problem.title.toLocaleLowerCase().search(filterState.title.toLocaleLowerCase())!==-1);
            }else return true;
        }
    ).filter(
        (problem)=>{
            if (filterState.author && filterState.author!==""){
                return (problem.author.toLocaleLowerCase().search(filterState.author.toLocaleLowerCase())!==-1);
            }else return true;
        }
    ).filter(
        (problem)=>{
            if (filterState.tag && filterState.tag!==""){
                return (problem.tags.includes(filterState.tag));
            }else return true;
        }
    );
    return(
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
                    {filteredProblems.map( (problem,idx )=>
                        <TableRow key={idx} problem={problem}/>
                    )}
                </tbody>
            </Table>
        </ShadowedBox>
    );
}
export default ProblemsTable;