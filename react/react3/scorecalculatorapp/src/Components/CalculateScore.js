import React from 'react';

function CalculateScore({ Name, School, Total, goal }) {
  const studentName = Name || "N/A";
  const schoolName = School || "N/A";
  const totalScore = Number(Total) || 0;
  const targetGoal = Number(goal) || 1;

  // Calculate average score
  const average = (totalScore / targetGoal).toFixed(2);

  return (
    <div className="score-card">
      <div className="badge-icon">🎓</div>
      <h2>Student Report</h2>
      
      <div className="info-grid">
        <div className="info-row">
          <span className="label">Name:</span>
          <span className="value">{studentName}</span>
        </div>
        <div className="info-row">
          <span className="label">School:</span>
          <span className="value">{schoolName}</span>
        </div>
        <div className="info-row">
          <span className="label">Total Score:</span>
          <span className="value highlight-total">{totalScore}</span>
        </div>
        <div className="info-row">
          <span className="label">Goal:</span>
          <span className="value">{targetGoal}</span>
        </div>
      </div>
      
      <div className="result-divider"></div>
      
      <div className="average-display">
        <span className="avg-label">Calculated Average</span>
        <span className="avg-value">{average}</span>
      </div>
    </div>
  );
}

export default CalculateScore;
