import React, { useState } from 'react';
import './App.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

// Mock flight details
const flightDetails = [
  { id: 1, flightName: "Air India", flightNo: "AI-101", from: "Mumbai (BOM)", to: "New Delhi (DEL)", time: "08:30 AM", price: "₹5,500" },
  { id: 2, flightName: "IndiGo", flightNo: "6E-502", from: "Bengaluru (BLR)", to: "Mumbai (BOM)", time: "11:15 AM", price: "₹4,200" },
  { id: 3, flightName: "Vistara", flightNo: "UK-985", from: "New Delhi (DEL)", to: "Singapore (SIN)", time: "11:45 PM", price: "₹24,800" },
  { id: 4, flightName: "SpiceJet", flightNo: "SG-304", from: "Kolkata (CCU)", to: "Chennai (MAA)", time: "03:40 PM", price: "₹4,900" }
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [bookingMessage, setBookingMessage] = useState(null);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
    setBookingMessage(null);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    setBookingMessage(null);
  };

  const handleBookTicket = (flightNo) => {
    setBookingMessage(`Ticket successfully booked for flight ${flightNo}! Have a safe journey.`);
  };

  return (
    <div className="App-container">
      <div className="glow-orb"></div>

      <header className="page-header">
        {/* Render different header based on login status */}
        <h1>{isLoggedIn ? "Welcome back" : "Please sign up."}</h1>
        
        <div className="auth-box">
          {isLoggedIn ? (
            <LogoutButton onClick={handleLogoutClick} />
          ) : (
            <LoginButton onClick={handleLoginClick} />
          )}
        </div>
      </header>

      {bookingMessage && (
        <div className="booking-toast">
          <span className="toast-icon">✈️</span>
          <span>{bookingMessage}</span>
        </div>
      )}

      <main className="flight-dashboard">
        <div className="cricket-card">
          <div className="card-icon">🛫</div>
          <h2>Available Flight Details</h2>
          
          <div className="flight-list">
            {flightDetails.map((flight) => (
              <div key={flight.id} className="flight-item">
                <div className="flight-info">
                  <div className="flight-name-row">
                    <span className="flight-carrier">{flight.flightName}</span>
                    <span className="flight-number">{flight.flightNo}</span>
                  </div>
                  <div className="flight-route">
                    <span>{flight.from}</span>
                    <span className="route-arrow">➔</span>
                    <span>{flight.to}</span>
                  </div>
                  <div className="flight-time">Departure: {flight.time}</div>
                </div>

                <div className="flight-pricing">
                  <span className="price-tag">{flight.price}</span>
                  {/* Logged in users can book tickets, guest users cannot */}
                  {isLoggedIn ? (
                    <button 
                      className="book-btn active-btn" 
                      onClick={() => handleBookTicket(flight.flightNo)}
                    >
                      Book Ticket
                    </button>
                  ) : (
                    <button className="book-btn disabled-btn" disabled>
                      Login to Book
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
