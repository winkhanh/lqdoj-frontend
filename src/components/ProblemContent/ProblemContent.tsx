import React, { useContext, useState, useEffect } from 'react';
import { FetchContext } from '../../Global/GlobalStates/GlobalStates';
import { fetchSingleProblem, LoadState } from '../../Global/GlobalFunctions/FetchingActions';
import { ResponseDataType, ProblemType } from '../../models';
import HtmlContent from '../../components/HtmlContent/HtmlContent';
import LoadingPlaceholder from '../../components/LoadingPlaceholder/LoadingPlaceholder';

const initialProblem: ProblemType = {
    id: "",
    problem_code: "",
    title: "",
    author: "",
    difficulty: "",
    tags: [""],
    description:"",
    percent: 0
}
interface ProblemContentProps{
    id:string
}
const ProblemContent: React.FC<ProblemContentProps> = ({id}) => {
    
    const { apiFetcher } = useContext(FetchContext);
    const [problem, setProblem] = useState(initialProblem);
    const [loadState, setLoadState] = useState(LoadState.LOADING);
    
    useEffect(() => {
        if (loadState === LoadState.LOADING) {
            
            fetchSingleProblem(apiFetcher, id, (problem: ResponseDataType<ProblemType>) => {
                setProblem(problem.results);
                setLoadState(LoadState.NOTLOADING);
            }, (error: Error) => {
                console.log(error);
                setProblem(initialProblem);
                setLoadState(LoadState.NOTLOADING);
                //tid = setTimeout(()=>setLoadState(LoadState.NOTLOADED)); //Uncomment if want to have infinite fetching
            });
        }
    }, [id, loadState, apiFetcher]);

    if (loadState === LoadState.LOADING) {
        return (<LoadingPlaceholder />);
    } else {
        console.log(problem);
        return (
            <>
                <h1>{problem.title}</h1>
                <HtmlContent content={problem.description} />
            </>
        )
    }
};
export default ProblemContent;
