import React, { useState } from "react";
import "./Login.css";
import loginPhoto from "./login.svg";
import { Link, useNavigate } from "react-router-dom";
import { LiaUserSolid } from "react-icons/lia";
import { RiShieldUserLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const LoginPage = () => {
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === "customer") {
      navigate("/customer");
    } else if (role === "vendor") {
      navigate("/vendor");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="Login-page">
      <div className="Login-content">
        <div className="Login-left">
          <h3 className="Login-Head">Please Login here!!!!!!</h3>
          <div className="Login-Input">
            <label htmlFor="id">
              <LiaUserSolid />
              Name
            </label>
            <input id="id" type="text" placeholder="Enter your Name" />

            <label htmlFor="email" className="Email">
              <MdOutlineMailOutline />
              Email
            </label>
            <input type="email" id="email" placeholder="Enter your Email" />
            <label htmlFor="role">
              <RiShieldUserLine />
              Role
            </label>
            <select id="Role" onChange={(e) => setRole(e.target.value)}>
              <option value="customer">Customer</option>
              <option value="vendor">Vendor</option>
            </select>
            <label htmlFor="password" className="passWord">
              <FiLock />
              Password
            </label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
              />
              <span
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <VscEyeClosed /> : <VscEye />}
              </span>
            </div>
          </div>
          <div className="signUp-section">
            <h6>
              Don't have an Account? <Link to="/SignUp">Sign Up here</Link>
            </h6>
          </div>
          <div className="Login-button">
            <button className="button" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
        <div className="Login-right">
          <img src={loginPhoto} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
