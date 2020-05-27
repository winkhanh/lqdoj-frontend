import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {HomePage, ProblemsPage, ContestsPage, SubmissionsPage, FaqPage, NotFound} from '../subSection';
/* const NullComponent:React.FC = ()=>{
    return null;
} */
const Body : React.FC = ()=>{
    return(
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/problems" component={ProblemsPage}/>
            <Route path="/contests" component={ContestsPage}/>
            <Route path="/submissions" component={SubmissionsPage}/>
            <Route path="/FAQ" component={FaqPage}/>

            {/*4040 Page*/}
            <Route component={NotFound}/> 
        </Switch>
    );
};
export default Body;