import React, { useState } from "react";
import "./App.css";

// Card component for displaying user info
const Card = ({ name, vegetables, contacts, review, moreDetails, toggleDetails, onNameClick, onVegetablesClick, onContactsClick }) => {
  return (
    <div className="card">
      <div className="card-details">
        {/* Name button */}
        <button className="card-button" onClick={() => onNameClick(name)}>
          Name: {name}
        </button>
        {/* Vegetables button */}
        <button className="card-button" onClick={() => onVegetablesClick(vegetables)}>
          Vegetables: {vegetables.join(", ")}
        </button>
        {/* Contacts button */}
        <button className="card-button" onClick={() => onContactsClick(contacts)}>
          No of contacts: {contacts}
        </button>
        <p className="review">Review: {review}/5.0</p>
      </div>

      {/* More Details Button */}
      <button className="more-details-btn" onClick={toggleDetails}>
        {moreDetails ? "Less Details" : "More Details"}
      </button>

      {/* Conditionally render more details */}
      {moreDetails && (
        <div className="extra-details">
          <p><strong>Address:</strong> Placeholder Address, City</p>
          <p><strong>Phone:</strong> +1-234-567-890</p>
          <p><strong>Email:</strong> example@domain.com</p>
        </div>
      )}
    </div>
  );
};

// Main component
function App() {
  const data = [
    {
      name: "Biju",
      vegetables: ["Tomato", "Onion", "Wheat"],
      contacts: 10,
      review: 4.5,
    },
    {
      name: "Santhosh",
      vegetables: ["Rice", "Banana", "Chilly"],
      contacts: 1,
      review: 2.4,
    },
    {
      name: "Udhay",
      vegetables: ["Brinjal", "Watermelon"],
      contacts: 0,
      review: 0.0,
    },
  ];

  // State to manage expanded details for each card
  const [expanded, setExpanded] = useState(Array(data.length).fill(false));

  // Handlers for button interactions
  const handleNameClick = (name) => {
    alert(`You clicked on the name: ${name}`);
  };

  const handleVegetablesClick = (vegetables) => {
    alert(`Vegetables selected: ${vegetables.join(", ")}`);
  };

  const handleContactsClick = (contacts) => {
    alert(`This person has ${contacts} contacts.`);
  };

  // Toggle more details for a specific card
  const toggleDetails = (index) => {
    setExpanded(expanded.map((item, i) => (i === index ? !item : item)));
  };

  return (
    <div className="app-container">
      <h1>Pre-Harvesting Contract</h1>
      <div className="card-container">
        {data.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            vegetables={item.vegetables}
            contacts={item.contacts}
            review={item.review}
            moreDetails={expanded[index]}
            toggleDetails={() => toggleDetails(index)}
            onNameClick={handleNameClick}
            onVegetablesClick={handleVegetablesClick}
            onContactsClick={handleContactsClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
