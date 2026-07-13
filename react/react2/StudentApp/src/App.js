import React from 'react';
import './App.css';
import Home from './Components/Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="App-container">
      <div className="glow-orb"></div>
      
      <header className="portal-header">
        <h1>Student Management Portal</h1>
        <p className="subtitle">Secure, fast, and modern student registry dashboard</p>
      </header>

      <main className="dashboard-grid">
        <Home />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
