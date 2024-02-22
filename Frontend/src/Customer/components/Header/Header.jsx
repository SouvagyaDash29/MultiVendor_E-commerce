import React from 'react';
import './Header.css';
import LoGo from '../../../assets/Quick_Mart_Logo.png';
import { FiSearch } from "react-icons/fi";
import { HiOutlineHeart } from "react-icons/hi2";
import { RiShoppingCartLine } from "react-icons/ri";
import { BiUser } from "react-icons/bi";

const Header = () => {
  return (
    <>
    <div className='header'>
    <div className="logo-section">
      <img src= {LoGo} alt="icon" />
    </div>
    <div className="search-box">
      <input type="text" placeholder='Search '/> <FiSearch />
    </div>
    <div className="icon-section">
    <HiOutlineHeart />
    <RiShoppingCartLine />
    <BiUser />
    </div>
    </div>
    <hr />
    </>
  )
}

export default Header