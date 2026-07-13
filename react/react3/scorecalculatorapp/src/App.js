import React from 'react';
import './Stylesheets/mystyle.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App-container">
      <div className="glow-orb"></div>
      <CalculateScore 
        Name="David Miller" 
        School="Lincoln High School" 
        Total="420" 
        goal="5" 
      />
    </div>
  );
}

export default App;
