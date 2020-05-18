import React from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
const normalize:Function = (url:string)=>{
    if (url.endsWith("/"))
      return normalize(url.slice(0,-1));
    else 
      return url;
  }
const Body : React.FC = ()=>{
    const location=useLocation();
    if (normalize(location.pathname).endsWith("/authorizing"))  
        location.pathname=location.pathname.replace("/authorizing","");
    return(
        <div>
            <Switch location={location}>
                <Route exact path="/">
                    <A/>
                </Route>
                <Route path="/ab">
                    <div>ab</div>
                </Route>
            </Switch>
        </div>
    );
};
const A:React.FC =()=>{
    const loc=useLocation();
    console.log(loc);
    return(<div>aaaa</div>);
}
export default Body;