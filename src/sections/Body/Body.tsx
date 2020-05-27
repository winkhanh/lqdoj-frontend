import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {HomePage, ProblemsPage, ContestsPage, SubmissionsPage, FaqPage, NotFound} from '../subSection';
import './Body.scss';
const NullComponent:React.FC = ()=>{
    return null;
} 
const Body : React.FC = ()=>{
    return(
        <div id="Body">
            <Switch>
                {/*Main route*/}
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/problems" component={ProblemsPage}/>
                <Route exact path="/contests" component={ContestsPage}/>
                <Route exact path="/submissions" component={SubmissionsPage}/>
                <Route exact path="/FAQ" component={FaqPage}/>
                {/*Sub route*/}
                <Route path="/post" component={NullComponent}/>
                <Route path="/problems" component={NullComponent}/>
                <Route path="/contests" component={NullComponent}/>
                {/*4040 Page*/}
                <Route component={NotFound}/> 
            </Switch>
        </div>
    );
};
export default Body;