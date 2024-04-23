import React, { useState } from "react";
import "./Signup.css";
import signupphoto from "./signup.svg";
import { Link } from "react-router-dom";
import { LiaUserSolid } from "react-icons/lia";
import { RiShieldUserLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const Signuppage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confrimPassword, setconfrimPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const confrimPasswordVisibity = () => {
    setconfrimPassword(!confrimPassword);
  };

  return (
    <div className="SignUp">
      <div className="signup-page">
        <div className="signup-right">
          <img src={signupphoto} alt="img" />
        </div>
        <div className="signup-left">
          <h3 className="signup-head">Create Your Account</h3>
          <form action="" className="signup-content">
            <label htmlFor="signup-name">
              <LiaUserSolid />
              Name
            </label>
            <input id="signup-name" type="text" placeholder="Enter your Name" />
            <label htmlFor="signup-email" className="signup-email">
              <MdOutlineMailOutline />
              Email
            </label>
            <input
              type="email"
              id="signup-email"
              placeholder="Enter your Email"
            />
            <label htmlFor="signup-role" className="">
              <RiShieldUserLine />
              Role
            </label>
            <select id="signup-role" className="">
              <option value="customer">Customer</option>
              <option value="vendor">Vendor</option>
            </select>
            <label htmlFor="signup-pass" className="">
              <FiLock />
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="signup-pass"
              className=""
            />
            <span onClick={togglePasswordVisibility} className="eye-button">
              {showPassword ? <VscEyeClosed /> : <VscEye />}
            </span>
            <label htmlFor="conf-pass" className="">
              <FiLock />
              Confirm Password
            </label>
            <input
              type={confrimPassword ? "text" : "password"}
              id="conf-pass"
              className=""
              style={{ display: "block" }}
            />
            <span onClick={confrimPasswordVisibity} className="eye-button">
              {confrimPassword ? <VscEyeClosed /> : <VscEye />}
            </span>

            <div className="signup-footer">
              <h6>
                Already have an Account? <Link to="/login">Login here</Link>
              </h6>
<<<<<<< HEAD
=======

>>>>>>> a4081a521a57f83f9243347b41b702f7d8f368aa
            </div>
            <div className="signup-submit-button">
              <input type="submit" id="" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signuppage;
