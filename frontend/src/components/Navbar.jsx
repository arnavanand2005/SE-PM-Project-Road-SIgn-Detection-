import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Left: Logo / Title */}
      <div className="navbar-left">
        <span className="traffic-icon">🚦</span>
        <h1 className="navbar-title">Road Sign Detection</h1>
      </div>

      {/* Right: Navigation Links */}
      <div className="navbar-links">
        <NavLink to="/" className="nav-link">
          Prediction
        </NavLink>

        <NavLink to="/dataset" className="nav-link">
          Dataset Info
        </NavLink>
      </div>
    </nav>
  );
}
