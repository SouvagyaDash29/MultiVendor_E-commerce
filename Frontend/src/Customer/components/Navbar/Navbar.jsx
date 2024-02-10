import React from "react";
// import { NavLink } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./Navbar.css";
import Home from "../../pages/Home/Home";
import Fashion from "../../pages/Fashion/Fashion";
import Electronics from "../../pages/Electronics/Electronics";
import Mobiles from "../../pages/Mobiles/Mobiles";
import Furniture from "../../pages/Furniture/Furniture";
import Applience from "../../pages/Appliance/Appliance";
import Grocery from "../../pages/Grocery/Grocery";
// import FashionDropdown from "../../Dropdown/FashionDropdown";

const Navbar = () => {
  return (
    <Router>
      <nav>
        <ul className="nav-section">
          <li className="nav-list">
            <NavLink to="/fashion" className="nav-item">
              <img src="../assets/fashion.png" alt="img" />
              <div className="item">
                Fashion <MdKeyboardArrowDown fontSize="1.2vw"/>
                {/* <FashionDropdown /> */}
              </div>
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/mobiles" className="nav-item">
              <img src="../assets/mobiles-nav.webp" alt="img" />
              <div className="item">
                Mobiles <MdKeyboardArrowDown fontSize="1.2vw"/>
              </div>
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/ELectronic" className="nav-item">
              <img src="../assets/Electroni-nav.webp" alt="img" />
              <div className="item">
                Electronic <MdKeyboardArrowDown fontSize="1.2vw"/>
              </div>
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/Furniture" className="nav-item">
              <img src="../assets/Home&Applience-nav.webp" alt="img" />
              <div className="item">
                Home & Applience <MdKeyboardArrowDown fontSize="1.2vw"/>
              </div>
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/Applience" className="nav-item">
              <img src="../assets/Applience-nav.webp" alt="img" />
              <div className="item">
              Applience <MdKeyboardArrowDown fontSize="1.2vw"/>
              </div>
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/Grocery" className="nav-item">
              <img src="../assets/grocery-nav.webp" alt="img" />
              <div className="item">
              Grocery <MdKeyboardArrowDown fontSize="1.2vw"/>
              </div>
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
