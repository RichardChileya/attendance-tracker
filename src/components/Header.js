import React from 'react';

const Header = () => (
  <header className="header">
    <h1 className="logo">AAAZ Tracker</h1>
    <nav className="nav-bar">
      <ul className="nav-list">
        <a href="###">
          {' '}
          <li className="nav-item">Dashboard</li>
        </a>

        <a href="###">
          <li className="nav-item">Attendance</li>
        </a>
        <a href="requests">
          <li className="nav-item">Requests</li>
        </a>

      </ul>
    </nav>
  </header>
);

export default Header;
