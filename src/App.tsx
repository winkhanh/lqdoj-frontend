import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Header, Body, Footer, Authorizing} from './sections';
import './App.scss';
const App : React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Authorizing}/>
        <Header/>
        <Body/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
