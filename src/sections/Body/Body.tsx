import React from 'react';
import {Switch, Route} from 'react-router-dom';

const NullComponent:React.FC = ()=>{
    return null;
}
const Body : React.FC = ()=>{
    return(
        <Switch>
            <Route exact path="/" component={NullComponent}/>
            <Route path="/problems" component={NullComponent}/>
            <Route path="/contests" component={NullComponent}/>
            <Route path="/submissions" component={NullComponent}/>
            <Route path="/FAQ" component={NullComponent}/>

            {/*4040 Page*/}
            <Route component={NullComponent}/> 
        </Switch>
    );
};
export default Body;