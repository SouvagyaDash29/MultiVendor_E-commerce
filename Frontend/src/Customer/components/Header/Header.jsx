import React from "react";
import { MdSearch } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import "../style/Header.css"
// import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
    <header className="header">
      <div className="logo">
        <img src="../assets/Quick_Mart_Logo.png" alt="img" />
      </div>
      <div className="search">
        <input type="search" name="text" id="search-box" />
        <MdSearch fontSize="1.6vw" className="search-btn"/>
      </div>
      <div className="cart-btn">
       <IoCartOutline fontSize="2.3vw" />
      </div>
    </header>
    </>
  );
};

export default Header;
