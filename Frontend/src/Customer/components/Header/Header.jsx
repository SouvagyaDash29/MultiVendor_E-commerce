import React from "react";
import { MdSearch } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import "./Header.css";
import { IoIosArrowDown } from "react-icons/io";
import { MdStorefront } from "react-icons/md";
// import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="../assets/Quick_Mart_Logo.png" alt="img" />
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
          <FaRegUserCircle fontSize="1.4vw" />
          <h3>Login</h3>
          <IoIosArrowDown fontSize="1.2vw" />
        </div>
        <div className="cart-btn">
          <IoCartOutline fontSize="2.2vw" />Cart
        </div>
        <div className="seller-section">
        <MdStorefront fontSize="1.9vw"/>
        Become a Seller
        </div>
      </header>
    </>
  );
};

export default Header;
