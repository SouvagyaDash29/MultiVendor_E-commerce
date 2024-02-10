import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from "react-router-dom";
import "./Footer.css"
// import About from '../Navbar/MainBody/AboutUs/About';
// import Contact from '../Navbar/MainBody/Contact/Contact';
// import Home from '../Navbar/MainBody/Home/Home';
const Footer = () => {

  return (
    // <Router>
    <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="footer-col">
        <h4>company</h4>
        <ul>
          <li>
            <Link to="/About">about us</Link>
          </li>
          <li>
            <Link to="/Contact">our services</Link>
          </li>
          <li>
            <Link to="#">privacy policy</Link>
          </li>
          <li>
            <Link to="#">affiliate program</Link>
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
      <div className="footer-col">
        <h4>online shop</h4>
        <ul>
          <li>
            <Link to="#">watch</Link>
          </li>
          <li>
            <Link to="#">bag</Link>
          </li>
          <li>
            <Link to="#">shoes</Link>
          </li>
          <li>
            <Link to="#">dress</Link>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>follow us</h4>
        <div className="social-links">
          <Link to="#">
          <FaFacebook/>
          </Link>
          <Link to="#">
          <FaTwitter/>
          </Link>
          <Link to="#">
          <FaInstagram/>
          </Link>
          <Link to="#">
          <FaLinkedin/>
           </Link>
        </div>
      </div>
    </div>
  </div>
  {/* <Routes>
    <Route path="/">
    <Route path="/About" elements={<About/>} />
    <Route path="/Contact" elements={<Contact/>} />

    </Route>

  </Routes> */}
  
  {/* </Router> */}
</footer>

  );
}

export default Footer