import React from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App-container">
      <div className="glow-orb"></div>
      <div className="card">
        <div className="react-badge">
          <img src={logo} className="react-logo-mini" alt="react logo" />
          <span>Session 1</span>
        </div>
        <h1 className="heading">welcome to the first session of React</h1>
        <p className="subheading">
          Explore the power of component-driven UI design. Build fast, scalable, and beautiful modern web experiences.
        </p>
      </div>
    </div>
  );
}

export default App;
