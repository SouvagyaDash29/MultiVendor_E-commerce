import React from "react";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
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
            <NavLink to="/Electronics" className="nav-item">
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

    </>
  );
};

export default Navbar;
