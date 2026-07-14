import React from 'react';

const players = [
  { name: "Virat Kohli", score: 85 },
  { name: "Rohit Sharma", score: 92 },
  { name: "KL Rahul", score: 45 },
  { name: "Shikhar Dhawan", score: 68 },
  { name: "MS Dhoni", score: 72 },
  { name: "Hardik Pandya", score: 50 },
  { name: "Rishabh Pant", score: 95 },
  { name: "Ravindra Jadeja", score: 60 },
  { name: "Jasprit Bumrah", score: 15 },
  { name: "Mohammed Shami", score: 20 },
  { name: "Suryakumar Yadav", score: 80 }
];

function ListofPlayers() {
  // Filter out players with scores below 70 using arrow functions of ES6
  const filteredPlayers = players.filter(player => player.score >= 70);

  return (
    <div className="cricket-card">
      <div className="card-icon">🏏</div>
      <h2>Player Statistics</h2>
      
      <div className="stats-section">
        <h3>All Players and Scores</h3>
        <ul className="player-list">
          {players.map((player, index) => (
            <li key={index} className="player-item">
              <span className="player-name">{player.name}</span>
              <span className="player-score">{player.score}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="stats-divider"></div>

      <div className="stats-section">
        <h3>Top Performers (Score &ge; 70)</h3>
        <ul className="player-list filtered-list">
          {filteredPlayers.map((player, index) => (
            <li key={index} className="player-item top-performer">
              <span className="player-name">{player.name}</span>
              <span className="player-score badge">{player.score}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListofPlayers;
