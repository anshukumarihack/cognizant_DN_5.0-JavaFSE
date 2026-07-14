import React from 'react';

// Odd/Even Players Array
const indianPlayersList = ["Sachin Tendulkar", "MS Dhoni", "Virat Kohli", "Rohit Sharma", "Ravindra Jadeja", "KL Rahul"];

// T20 and Ranji Trophy arrays to merge
const T20players = ["Hardik Pandya", "Jasprit Bumrah", "Suryakumar Yadav"];
const RanjiTrophyPlayers = ["Cheteshwar Pujara", "Ajinkya Rahane", "Hanuma Vihari"];

function IndianPlayers() {
  // Display the Odd Team Player and Even Team players using the Destructuring features of ES6
  const [first, second, third, fourth, fifth, sixth] = indianPlayersList;
  
  const oddTeam = [first, third, fifth];
  const evenTeam = [second, fourth, sixth];

  // Merge the two arrays and display them using the Merge feature (Spread Operator) of ES6
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div className="cricket-card">
      <div className="card-icon">🇮🇳</div>
      <h2>Indian Team Players</h2>

      <div className="stats-section">
        <h3>Team Division (Destructured)</h3>
        <div className="team-split">
          <div className="split-col">
            <h4>Odd Team Players</h4>
            <ul className="player-list">
              {oddTeam.map((player, index) => (
                <li key={index} className="player-item odd-item">{player}</li>
              ))}
            </ul>
          </div>
          <div className="split-col">
            <h4>Even Team Players</h4>
            <ul className="player-list">
              {evenTeam.map((player, index) => (
                <li key={index} className="player-item even-item">{player}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="stats-divider"></div>

      <div className="stats-section">
        <h3>Merged T20 &amp; Ranji Trophy Players</h3>
        <ul className="player-list merged-list">
          {mergedPlayers.map((player, index) => (
            <li key={index} className="player-item merge-item">{player}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default IndianPlayers;
