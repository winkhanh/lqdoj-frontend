import React from 'react';
import {useLocation, useRouteMatch, Link} from 'react-router-dom';
import './Authorizing.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
const normalize:Function = (url:string)=>{
    if (url.endsWith("/"))
      return normalize(url.slice(0,-1));
    else 
      return url;
  }
const Authorizing : React.FC = ()=>{
    const location=useLocation();
    const {url}=useRouteMatch();
    const check : Function = ()=>{
        return normalize(location.pathname).endsWith("/authorizing");
    }
    console.log(check());
    console.log(location);
    return (
        <div className={`authorizing-page ${(check())?"":"authorizing-page--hide"}`}>
            <div className="authorizing-page_background"></div>
            <div className="authorizing-page_form">
                <Link to={url.replace("/authorizing","")}>x</Link>
                <LoginForm/>
            </div>
        </div>
    );
}

export default Authorizing;