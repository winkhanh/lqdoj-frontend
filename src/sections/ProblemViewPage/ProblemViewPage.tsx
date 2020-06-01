import React from 'react';
import {useParams} from 'react-router-dom';



const ProblemViewPage : React.FC = ()=>{
    const {id}=useParams();
    return (
        <div>
            Viewing Problem, id = {id}
        </div>
    )
};
export default ProblemViewPage;
