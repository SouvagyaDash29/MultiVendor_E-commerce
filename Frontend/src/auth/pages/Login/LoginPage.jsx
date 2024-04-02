import React from "react";
import './Login.css'
import loginphoto from './login.svg'
import Signuppage from "../Signup/Signuppage";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return <div>
     <div class="parent">
        <div class="child1">
            <img src={loginphoto} alt="" height="500px " width="500px" class="rounded-lg"/>
        </div>
        <div style={{marginLeft:'20px'}} >
           <h3 class="mt-5 me-4" >Please Login here!!!!!!</h3>
           <div class="card-body me-3" >
            <label for="" class="mb-2 mt-2">Name</label>
            <input type="text" class="form-control"/>
            <label for="" class="mb-2 mt-2">Email</label>
            <input type="email" class="form-control"/>
            <label for="" class="mb-2 mt-2">Password</label>
            <input type="password" class="form-control"/>
            
        </div>
        <div class="card-footer text-center mt-2">
            <h6>Do'nt have Account?? <Link to='/signup'>SignUp here</Link></h6>
        </div>
        <div class="text-center main mt-3">
            <button class="btn btn-outline-warning" id="btn1">Login</button>
        </div>
        </div>
    </div>
    
  </div>;
};

export default LoginPage;
