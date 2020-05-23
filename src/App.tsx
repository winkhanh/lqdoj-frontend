import React,{useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Header, Body, Footer} from './sections';
import './App.scss';
import {AuthorizingPageContext} from './contexts/GlobalFunctions/GlobalState';
const BaseApp : React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Body/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
const App : React.FC = ()=>{
  const [isAuthPageDisplay,setAuthPageDisplay]=useState(false);
  return(
    <AuthorizingPageContext.Provider value={{
      isDisplay: isAuthPageDisplay,
      toggle: ()=>{
        setAuthPageDisplay(
          prev=>!prev
        );
      }}
    }>
      <BaseApp/>
    </AuthorizingPageContext.Provider>
  )
}
export default App;
