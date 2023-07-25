import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <>
    <header className="header">
      <h1 className="logo">WorkiT</h1>
      <nav className="nav-bar">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link className="nav-item" to="/Dashboard">Dashboard</Link></li>
          <li><Link className="nav-item" to="/Requests">Request</Link></li>
          <li><Link className="nav-item" to="/Attendance">Attendance</Link></li>
        </ul>
      </nav>
    </header>
  </>
);

export default Header;
