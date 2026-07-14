import React, { useState } from 'react';
import './App.css';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div className="App-container">
      <div className="glow-orb"></div>
      
      <header className="app-header">
        <h1>Cricket Dashboard</h1>
        <div className="toggle-container">
          <span className="toggle-label">Current View:</span>
          <button 
            className="toggle-btn"
            onClick={() => setFlag(!flag)}
          >
            {flag ? 'Show Indian Players (Set Flag = False)' : 'Show Players List (Set Flag = True)'}
          </button>
        </div>
      </header>

      <main className="component-view">
        {flag ? <ListofPlayers /> : <IndianPlayers />}
      </main>
    </div>
  );
}

export default App;
