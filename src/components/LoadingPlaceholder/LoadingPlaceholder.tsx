import React from 'react';
import {Spinner} from 'react-bootstrap';
const LoadingPlaceholder : React.FC = ()=>{
    return(
        <div> <Spinner animation="border"/> Loading </div>
    )
};
export default LoadingPlaceholder;