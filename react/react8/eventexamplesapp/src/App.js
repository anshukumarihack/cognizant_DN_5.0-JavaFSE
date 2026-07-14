import React, { useState } from 'react';
import './App.css';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [counter, setCounter] = useState(0);
  const [logs, setLogs] = useState([]);

  const addLog = (message) => {
    setLogs(prevLogs => [message, ...prevLogs].slice(0, 5));
  };

  // 1a. Method to increment the counter
  const incrementCounter = () => {
    setCounter(prev => prev + 1);
  };

  // 1b. Method to say Hello followed by static message
  const sayHello = () => {
    addLog("Hello! Welcome to React Events.");
  };

  // Increment/Increase invokes multiple methods
  const handleIncrease = () => {
    incrementCounter();
    sayHello();
  };

  // Decrement counter
  const handleDecrement = () => {
    setCounter(prev => prev - 1);
  };

  // 2. Invokes function taking argument
  const handleSayWelcome = (arg) => {
    addLog(`Function invoked with argument: "${arg}"`);
  };

  // 3. Invokes synthetic event OnPress display
  const handleOnPress = (e) => {
    addLog(`Synthetic Event (type: ${e.type}) - "I was clicked"`);
  };

  return (
    <div className="App-container">
      <div className="glow-orb"></div>
      
      <header className="page-header">
        <h1>React Events App</h1>
        <p className="subtitle">Interactive Event Handlers &amp; Utility Tools</p>
      </header>

      <main className="dashboard-grid">
        {/* Events Examples Panel */}
        <div className="cricket-card">
          <div className="card-icon">⚡</div>
          <h2>Interactive Events</h2>

          {/* Counter Panel */}
          <div className="stats-section">
            <h3>Counter: <span className="counter-val">{counter}</span></h3>
            <div className="btn-group">
              <button onClick={handleIncrease} className="action-btn inc-btn">
                Increment (Multiple Methods)
              </button>
              <button onClick={handleDecrement} className="action-btn dec-btn">
                Decrement
              </button>
            </div>
          </div>

          <div className="stats-divider"></div>

          {/* Say Welcome Panel */}
          <div className="stats-section">
            <h3>Custom Function Arguments</h3>
            <button onClick={() => handleSayWelcome('welcome')} className="action-btn welcome-btn">
              Say Welcome
            </button>
          </div>

          <div className="stats-divider"></div>

          {/* Synthetic Event Panel */}
          <div className="stats-section">
            <h3>Synthetic Event</h3>
            <button onClick={handleOnPress} className="action-btn press-btn">
              OnPress Click Handler
            </button>
          </div>
        </div>

        {/* Logs Panel */}
        <div className="cricket-card log-card">
          <div className="card-icon">📝</div>
          <h2>Event Message Logger</h2>
          <div className="log-area">
            {logs.length === 0 ? (
              <p className="no-logs">No events triggered yet. Click buttons to see messages.</p>
            ) : (
              <ul className="log-list">
                {logs.map((log, idx) => (
                  <li key={idx} className="log-item">{log}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Currency Converter Panel */}
        <CurrencyConvertor />
      </main>
    </div>
  );
}

export default App;
