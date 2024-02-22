import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <div className="Navbar">
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Fashion">Fashion</NavLink></li>
            <li><NavLink to="/Electronics">Electronic</NavLink></li>
            <li><NavLink to="/Watch">Watch</NavLink></li>
            <li><NavLink to="/Shoes">Shoes</NavLink></li>
            <li><NavLink to="/Home Applience">Home Applience</NavLink></li>
        </ul>
    </div>
    </>
  )
}

export default Navbar