import React from 'react';
import logo from './logo.svg';
import './App.css';
import StrictComponent from "./StrictComponent";
import LazyComponent from "./LazyComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <StrictComponent/>
        <LazyComponent/>
      </header>
    </div>
  );
}

export default App;
