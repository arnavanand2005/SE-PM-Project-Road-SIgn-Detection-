import {Link} from 'react-router-dom';
import './Navbar.css';
import React from 'react'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <h1>🚦 ROAD SIGN DETECTION🚦</h1>
        <div>
            <Link to="/">PREDICTION</Link>
            <Link to="/dataset">DATASET INFO</Link>
        </div>
    </nav>
  )
}
