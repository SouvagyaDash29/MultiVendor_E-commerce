import React from "react";
import { MdSearch } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import "./Header.css";
import { IoIosArrowDown } from "react-icons/io";
import { MdStorefront } from "react-icons/md";
import { NavLink } from "react-router-dom";
// import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <NavLink to="/">
            <img src="../assets/Quick_Mart_Logo.png" alt="img" />
          </NavLink>
        </div>
        <div className="search">
          <input
            type="search"
            name="text"
            id="search-box"
            placeholder="Search for Products"
          />
          <MdSearch fontSize="1.6vw" className="search-btn" />
        </div>
        <div className="login-section">
          <FaRegUserCircle fontSize="1.2vw" />
          Login
          <IoIosArrowDown fontSize="1.2vw" className="login-arrow" />
        </div>
        <div className="cart-btn">
          <IoCartOutline fontSize="1.8vw" />
          Cart
        </div>
        <div className="seller-section">
          <MdStorefront fontSize="2vw" />
          Become a Seller
        </div>
      </header>
    </>
  );
};

export default Header;
