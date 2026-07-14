import React, { useState } from 'react';

function CurrencyConvertor() {
  const [inr, setInr] = useState('');
  const [euro, setEuro] = useState('');
  const [inrToEuroResult, setInrToEuroResult] = useState(null);
  const [euroToInrResult, setEuroToInrResult] = useState(null);

  // Exchange rate approximation: 1 Euro = 90 INR
  const EXCHANGE_RATE = 90;

  const handleInrSubmit = (e) => {
    e.preventDefault();
    if (!isNaN(inr) && inr !== '') {
      const converted = (parseFloat(inr) / EXCHANGE_RATE).toFixed(2);
      setInrToEuroResult(`${inr} INR = ${converted} EUR`);
    } else {
      setInrToEuroResult('Please enter a valid INR amount.');
    }
  };

  const handleEuroSubmit = (e) => {
    e.preventDefault();
    if (!isNaN(euro) && euro !== '') {
      const converted = (parseFloat(euro) * EXCHANGE_RATE).toFixed(2);
      setEuroToInrResult(`${euro} EUR = ${converted} INR`);
    } else {
      setEuroToInrResult('Please enter a valid EUR amount.');
    }
  };

  return (
    <div className="cricket-card currency-card">
      <div className="card-icon">💶</div>
      <h2>Currency Convertor</h2>

      <div className="stats-section">
        <h3>INR to Euro Converter</h3>
        <form onSubmit={handleInrSubmit} className="currency-form">
          <div className="input-group">
            <input 
              type="number" 
              placeholder="Amount in INR" 
              value={inr} 
              onChange={(e) => setInr(e.target.value)} 
              className="currency-input"
            />
            <button type="submit" className="action-btn convert-btn">Convert to EUR</button>
          </div>
          {inrToEuroResult && <p className="conversion-result">{inrToEuroResult}</p>}
        </form>
      </div>

      <div className="stats-divider"></div>

      <div className="stats-section">
        <h3>Euro to INR Converter (handleSubmit)</h3>
        <form onSubmit={handleEuroSubmit} className="currency-form">
          <div className="input-group">
            <input 
              type="number" 
              placeholder="Amount in EUR" 
              value={euro} 
              onChange={(e) => setEuro(e.target.value)} 
              className="currency-input"
            />
            <button type="submit" className="action-btn convert-btn">Convert to INR</button>
          </div>
          {euroToInrResult && <p className="conversion-result">{euroToInrResult}</p>}
        </form>
      </div>
    </div>
  );
}

export default CurrencyConvertor;
