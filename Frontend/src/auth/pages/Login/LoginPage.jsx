import React, { useEffect, useState } from "react";
import "./Login.css";
import loginPhoto from "./login.svg";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiShieldUserLine } from "react-icons/ri";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { FiLock } from "react-icons/fi";
import axios from "axios";

const LoginPage = () => {
  const [role, setRole] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const loginUser = (data) => {
    return axios.post(`http://localhost:8080/auth/login`, data).then((response) => response.data);
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      const response = await axios.get("http://localhost:8080/roles");
      setRole(response.data);
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };

  const handleLogin = async () => {
    const loginData = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      roleId: role
    };

    try {
      const userData = await loginUser(loginData);
      console.log(userData);

      if (userData.token) {
        if (role === "customer") {
          navigate("/customer");
        } else if (role === "vendor") {
          navigate("/vendor");
        }
      } else {
        console.error("Login failed:", userData.message);
      }
    } catch (error) {
      console.log("Login failed:", error);
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
            <label htmlFor="email" className="Email">
              <MdOutlineMailOutline />
              Email
            </label>
            <input type="email" id="email" placeholder="Enter your Email" />
            <label htmlFor="signup-role" className="">
              <RiShieldUserLine />
              Role
            </label>
            <select
              id="signup-role"
              className=""
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select Role</option>
              {role.map((role) => (
                <option key={role.roleId} value={role.roleId}>
                  {role.roleName}
                </option>
              ))}
            </select>
            <label htmlFor="password" className="passWord">
              {/* <FiLock /> */}
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
