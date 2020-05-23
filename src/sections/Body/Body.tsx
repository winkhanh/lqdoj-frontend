import React from 'react';
import {Switch, Route} from 'react-router-dom';
const NullComponent:React.FC = ()=>{
    return null;
}
const Body : React.FC = ()=>{
    return(
        <Switch>
            <Route path="/problems" component={NullComponent}/>
        </Switch>
    );
};

export default Body;