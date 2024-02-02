import React from "react";
import "./Fashion.css";
import { MdKeyboardArrowDown } from "react-icons/md";

const Fashion = () => {
  return (
    <>
    <div className="fashion-section">
      <img src="../../assets/fashion-nav.webp" alt="img" />
      <div className="fashion-dropdown">
        Fashion <MdKeyboardArrowDown className="fashion-arrow" />
      </div>
      </div>
      <div className="fashion-list">
        <ul>
          <li className="fashion-item">Men</li>
          <li className="fashion-item">Women</li>
          <li className="fashion-item">Kid</li>
          <li className="fashion-item">Watchs</li>
          <li className="fashion-item">Winter</li>
        </ul>
      </div>
    </>
  );
};

export default Fashion;
