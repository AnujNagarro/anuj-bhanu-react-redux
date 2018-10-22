import React, { Component } from 'react';
import './app.css';

import { Link } from 'react-router-dom';
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App">
         <header className="App-header">
            <Link to="/apply">Apply | </Link>
            <Link to="/documents">Documents | </Link>
            <Link to="/dashboard">Dashboard</Link>
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
