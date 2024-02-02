import React from 'react';
// import { NavLink } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  
} from "react-router-dom";
import '../style/Navbar.css';
import Home from '../pages/Home';
import Fashion from '../pages/Fashion';
import Electronics from '../pages/Electronics';
import Mobiles from '../pages/Mobiles';
import Furniture from '../pages/Furniture';
import Applience from '../pages/Appliance';
import Grocery from '../pages/Grocery';

const Navbar = () => {
  return (
    <Router>
      <nav>
        <ul className='navbar-section'>
            <li>
                <NavLink to="/" className='nav-list'>Home</NavLink>
            </li>
            <li className='fashion'>
              {/* <img src="../images/fashion.png" alt="img" /> */}
              <NavLink to="/Fashion" className='nav-list'> Fashion</NavLink>
            </li>
            <li>
                <NavLink to="/Mobiles" className='nav-list'>Mobiles</NavLink>
            </li>
            <li>
                <NavLink to="/Electronics" className='nav-list'>Electronics</NavLink>
            </li>
            <li>
                <NavLink to='/Furniture' className='nav-list'>Home & Furniture</NavLink>
            </li>
            <li>
                <NavLink to='/Applience' className='nav-list'>Applience</NavLink>
            </li>
            <li>
                <NavLink to='/Grocery' className='nav-list'>Grocery</NavLink>
            </li>
        </ul>
       
      </nav>
      <Routes>
      <Route path="/">
      <Route index element={<Home />} />
      <Route path="/Fashion" element={<Fashion />} />
      <Route path="/Mobiles" element={<Mobiles />} />
      <Route path="/Electronics" element={<Electronics />} />
      <Route path="/Furniture" element={<Furniture />} />
      <Route path="/Applience" element={<Applience />} />
      <Route path="/Grocery" element={<Grocery />} />
      </Route>
      </Routes>

    </Router>
  )
}

export default Navbar