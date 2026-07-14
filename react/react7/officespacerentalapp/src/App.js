import React from 'react';
import './App.css';

// 4. List of Object representing office space items
const officeSpaces = [
  {
    name: "DBS House",
    rent: 55000,
    address: "Fort, Mumbai, MH - 400001",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&h=250&q=80"
  },
  {
    name: "Regus Centre",
    rent: 85000,
    address: "Bandra Kurla Complex, Mumbai, MH - 400051",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=400&h=250&q=80"
  },
  {
    name: "WeWork Space",
    rent: 60000,
    address: "Andheri East, Mumbai, MH - 400069",
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=400&h=250&q=80"
  },
  {
    name: "Spaces Co-working",
    rent: 48000,
    address: "Lower Parel, Mumbai, MH - 400013",
    image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=400&h=250&q=80"
  },
  {
    name: "IndiQube Centre",
    rent: 72000,
    address: "Sector 5, Salt Lake, Kolkata, WB - 700091",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=400&h=250&q=80"
  },
  {
    name: "Awfis Space",
    rent: 59000,
    address: "Connaught Place, New Delhi, DL - 110001",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&h=250&q=80"
  }
];

function App() {
  return (
    <div className="App-container">
      <div className="glow-orb"></div>
      
      {/* 1. Element to display the heading of the page */}
      <header className="page-header">
        <h1>Office Space Rentals</h1>
        <p className="subtitle">Premium workspaces at competitive rates</p>
      </header>

      {/* 4. Loop through the office space items to display data */}
      <main className="offices-grid">
        {officeSpaces.map((office, index) => {
          // 5. Display color of Rent in Red if below 60000, Green if above/equal to 60000
          const rentColorClass = office.rent < 60000 ? 'rent-red' : 'rent-green';

          return (
            <div key={index} className="office-card">
              {/* 2. Attribute to display the image of the office space */}
              <div className="image-container">
                <img src={office.image} alt={office.name} className="office-img" />
              </div>
              
              {/* 3. Object details display */}
              <div className="card-details">
                <h3>{office.name}</h3>
                <p className="address">{office.address}</p>
                <div className="rent-box">
                  <span className="rent-label">Monthly Rent:</span>
                  <span className={`rent-val ${rentColorClass}`}>
                    ₹{office.rent.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default App;
