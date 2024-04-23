import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import signupphoto from "./signup.svg";
import { Link } from "react-router-dom";
import { LiaUserSolid } from "react-icons/lia";
import { RiShieldUserLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const Signuppage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
    address: "",
    gender: "",
    phone: "", // Default role
  });
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      console.error("Passwords don't match");
      // Handle password mismatch (display error message, etc.)
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8080/users/create",
        formData // Pass formData as the request body
      );
      console.log("Signup successful:", response.data);
      // Redirect or show success message here
    } catch (error) {
      console.error("Signup error:", error.response.data);
      // Display error message to the user
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPassword(!confirmPassword);
  };

  return (
    <div className="SignUp">
      <div className="signup-page">
        <div className="signup-right">
          <img src={signupphoto} alt="img" />
        </div>
        <div className="signup-left">
          <h3 className="signup-head">Create Your Account</h3>
          <form onSubmit={handleSubmit} className="signup-content">
            <label htmlFor="signup-name">
              <LiaUserSolid />
              Name
            </label>
            <input
              id="signup-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your Name"
            />
            <label htmlFor="signup-email" className="signup-email">
              <MdOutlineMailOutline />
              Email
            </label>
            <input
              type="email"
              id="signup-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email"
            />
            <label htmlFor="signup-pass" className="">
              <FiLock />
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="signup-pass"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your Password"
            />
            <span onClick={togglePasswordVisibility} className="eye-button">
              {showPassword ? <VscEyeClosed /> : <VscEye />}
            </span>
            <label htmlFor="conf-pass" className="">
              <FiLock />
              Confirm Password
            </label>
            <input
              type={confirmPassword ? "text" : "password"}
              id="conf-pass"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your Password"
            />
            <span
              onClick={toggleConfirmPasswordVisibility}
              className="eye-button"
            >
              {confirmPassword ? <VscEyeClosed /> : <VscEye />}
            </span>

            <label htmlFor="signup-address">Address</label>
            <input
              id="signup-address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your Address"
            />

            <label htmlFor="signup-gender">Gender</label>
            <input
              id="signup-gender"
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              placeholder="Enter your Gender"
            />
            <label htmlFor="signup-phone">Phone</label>
            <input
              id="signup-phone"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your Phone Number"
            />

            <div className="signup-footer">
              <h6>
                Already have an Account? <Link to="/login">Login here</Link>
              </h6>
            </div>
            <div className="signup-submit-button">
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signuppage;
