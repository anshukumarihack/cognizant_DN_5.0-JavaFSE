import React from 'react';
import './App.css';
import { CohortsData } from './Cohort';
import CohortDetails from './CohortDetails'; 

function App() {
  return (
    <div className="App-container">
      <h1 className="section-title">Cohorts Details</h1>
      <div className="cohorts-flex">
        {CohortsData.map(cohort => (
          <CohortDetails key={cohort.cohortCode} cohort={cohort} />
        ))}
      </div>
    </div>
  );
}

export default App;
