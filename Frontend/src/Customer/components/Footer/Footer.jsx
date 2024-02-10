import React from "react";
import { Link } from "react-router-dom";
import { LiaFacebookF } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="social">
          Fashion
          <label>Complete your style with awesome clothes from us.</label>
          <Link to="#">
            <LiaFacebookF />
          </Link>
          <Link to="#">
            <FaInstagram />
          </Link>
          <Link to="#">
            <RiTwitterXLine />
          </Link>
        </div>
        <div className="navigation">
          <ul>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Contact Us</Link>
            </li>
            <li>
              <Link to="#">Support</Link>
            </li>
            <li>
              <Link to="#">Careers</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>get help</h4>
          <ul>
            <li>
              <Link to="#">FAQ</Link>
            </li>
            <li>
              <Link to="#">shipping</Link>
            </li>
            <li>
              <Link to="#">returns</Link>
            </li>
            <li>
              <Link to="#">order status</Link>
            </li>
            <li>
              <Link to="#">payment options</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
