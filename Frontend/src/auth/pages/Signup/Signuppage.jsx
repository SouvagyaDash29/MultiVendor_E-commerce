import React, { useState, useEffect } from "react";
import axios from "axios";
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
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    roleId: "",
    address: "", 
    gender: "", 
    phone: "" 
  });
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      const response = await axios.get("http://localhost:8080/roles");
      setRoles(response.data);
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };

  const handleRoleSelection = (selectedRoleId) => {
    setUserData({ ...userData, roleId: selectedRoleId });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPassword(!confirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData.password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      await axios.post("http://localhost:8080/users/create", userData);
      // Redirect to login page or handle success
      console.log("User registered successfully");
    } catch (error) {
      // Handle error response
      console.error("Error registering user:", error);
    }
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
              value={userData.name}
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
              value={userData.email}
              onChange={handleChange}
              placeholder="Enter your Email"
            />
            <label htmlFor="signup-role" className="">
              <RiShieldUserLine />
              Role
            </label>
            <select
              id="signup-role"
              className=""
              name="role"
              value={userData.role}
              onChange={(e) => handleRoleSelection(e.target.value)}
            >
              <option value="">Select Role</option>
              {roles.map((role) => (
                <option key={role.roleId} value={role.roleId}>
                  {role.roleName}
                </option>
              ))}
            </select>
            <label htmlFor="signup-pass" className="">
              <FiLock />
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="signup-pass"
              name="password"
              value={userData.password}
              onChange={handleChange}
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
              type={confirmPassword ? "text" : "password"}
              id="conf-pass"
              name="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className=""
              style={{ display: "block" }}
            />
            <span
              onClick={toggleConfirmPasswordVisibility}
              className="eye-button"
            >
              {confirmPassword ? <VscEyeClosed /> : <VscEye />}
            </span>
            <label htmlFor="signup-name">
              <LiaUserSolid />
              Address
            </label>
            <input
              id="signup-address"
              type="text"
              name="address"
              value={userData.address}
              onChange={handleChange}
              placeholder="Enter your address"
            />
            <label htmlFor="signup-name">
              <LiaUserSolid />
              Gender
            </label>
            <input
              id="signup-gender"
              type="text"
              name="gender"
              value={userData.gender}
              onChange={handleChange}
              placeholder="Enter your gender"
            />
            <label htmlFor="signup-name">
              <LiaUserSolid />
              Phone NUmber
            </label>
            <input
              id="signup-phone"
              type="text"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              placeholder="Enter your Name"
            />

            <div className="signup-footer">
              <h6>
                Already have an Account? <Link to="/login">Login here</Link>
              </h6>
            </div>
            <div className="signup-submit-button">
              <input type="submit" value="Sign Up" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signuppage;
