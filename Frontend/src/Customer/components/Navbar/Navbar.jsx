import React from "react";
// import { NavLink } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./Navbar.css";
import Home from "../../pages/Home/Home";
import Fashion from "../../pages/Fashion/Fashion";
import Electronics from "../../pages/Electronics/Electronics";
import Mobiles from "../../pages/Mobiles/Mobiles";
import Furniture from "../../pages/Furniture/Furniture";
import Applience from "../../pages/Appliance/Appliance";
import Grocery from "../../pages/Grocery/Grocery";

const Navbar = () => {
  return (
    <Router>
      <nav>
        <ul className="navbar-section">
          {/* <li>
                <NavLink to="/" className='nav-list'>Home</NavLink>
            </li> */}
          <li className="fashion">
            <NavLink to="/Fashion" className="nav-list">
              {/* <img src="../../assets/fashion-nav.webp" alt="img" /> */}
              <Fashion />
            </NavLink>
          </li>
          <li className="fashion">
            <NavLink to="/Mobiles" className="nav-list">
              <img src="../../assets/mobiles-nav.webp" alt="img" />
              Mobiles
            </NavLink>
          </li>
          <li className="fashion">
            <NavLink to="/Electronics" className="nav-list">
              <img src="../../assets/Electroni-nav.webp" alt="img" />
              Electronics
            </NavLink>
          </li>
          <li className="fashion">
            <NavLink to="/Furniture" className="nav-list">
              <img src="../../assets/Home&Applience-nav.webp" alt="img" />
              Home & Furniture
            </NavLink>
          </li>
          <li className="fashion">
            <NavLink to="/Applience" className="nav-list">
              <img src="../../assets/Applience-nav.webp" alt="img" />
              Applience
            </NavLink>
          </li>
          <li className="fashion">
            <NavLink to="/Grocery" className="nav-list">
              <img src="../../assets/grocery-nav.webp" alt="img" />
              Grocery
            </NavLink>
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
  );
};

export default Navbar;
