import React from "react";
import "./Header.css";
import LoGo from "../../../assets/Quick_Mart_Logo.png";
import { FiSearch } from "react-icons/fi";
import { HiOutlineHeart } from "react-icons/hi2";
import { RiShoppingCartLine } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = ({ handleInputChange, query }) => {
  return (
    <div className="header-section">
      <div className="header">
        <Link to="/" className="logo-section">
          <img src={LoGo} alt="icon" />
        </Link>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search your Product "
            onChange={handleInputChange}
            value={query}
          />
          <FiSearch />
        </div>
        <div className="icon-section">
          <HiOutlineHeart />
          <RiShoppingCartLine />
          <BiUser />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
