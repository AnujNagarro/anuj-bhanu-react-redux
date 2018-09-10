import React, { Component } from 'react';
import './App.css';

import { Link } from 'react-router-dom';
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App">
         <header className="App-header">
            <a href="/apply">Apply</a>
            <a href="/documents">Documents</a>
            <a href="/dashboard">Dashboard</a>
            <h1 className="App-title">Welcome to Demo</h1>
            <button className="">Click Me </button>
            <input type="text" />
         </header>
         <Routes></Routes>
         <footer>
            footer
         </footer>
      </div>
    );
  }
}

export default App;
