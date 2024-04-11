import React, { useState } from "react";
import "./Header.css";
import LoGo from "../../../assets/Quick_Mart_Logo.png";
import { FiSearch } from "react-icons/fi";
import { HiOutlineHeart } from "react-icons/hi2";
import { RiShoppingCartLine } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const Header = ({cart}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    e.preventDefault();
    navigate(`/Search/${searchTerm}`);
    setSearchTerm("");

    console.log({searchTerm});
  };
  return (
    <div className="header-section">
      <div className="Header">
        <Link to="/" className="logo-section">
          <img src={LoGo} alt="icon" />
        </Link>

        <form onSubmit={handleInputChange} className="search-box">
          <input
            type="text"
            placeholder="Search your Product "
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <FiSearch onClick={handleInputChange}/>
        </form>

        <div className="icon-section">
          <HiOutlineHeart />
         <Link to='/cart'> <RiShoppingCartLine />
         <span>{cart.length}</span></Link>
          <BiUser />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
