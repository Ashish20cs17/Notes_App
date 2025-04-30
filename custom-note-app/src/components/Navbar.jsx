import React from 'react';
import './Navbar.css'; // Make sure to import the CSS

const Navbar = ({ currentView, setCurrentView }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">📝 Custom Notes</h1>
        <div className="navbar-buttons">
          <button
            className={`navbar-btn ${currentView === 'add' ? 'active' : ''}`}
            onClick={() => setCurrentView('add')}
          >
            Add Note
          </button>
          <button
            className={`navbar-btn ${currentView === 'view' ? 'active' : ''}`}
            onClick={() => setCurrentView('view')}
          >
            View Notes
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
