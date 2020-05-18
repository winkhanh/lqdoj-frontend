import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Header, Body, Footer, Authorizing} from './sections';
import './App.scss';
const App : React.FC = () => {
  return (
    <div className="App">
      <Authorizing/>
      <BrowserRouter>
        <Header/>
        <Body/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
