import React, { useState } from "react";
import './Login.css'
import loginphoto from './login.svg'
import Signuppage from "../Signup/Signuppage";
import { Link,useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate()
    const[role,setrole]=useState('');
    const handlechange = (event) =>{
        event.preventDefault();
        alert(role)
        if(role==="customer"){navigate("/customer")}
        else {navigate("/vender")}
    }
  return <div>
     <div class="parent">
        <div class="child1">
            <img id="limg" src={loginphoto} alt="" height="500px " width="500px" class="rounded-lg"/>
        </div>
        <div style={{marginLeft:'15px'}} id="customerDetails" >
           <h3 class="" id="heading">Please Login here!!!!!!</h3>
           <div class="" >
            <label for="" class="">Name here</label>
            <input type="text" class=""/>
            <label for="" class="">Email here</label>
            <input type="email" class=""/>
            <label for="" class="">Role</label>
            <select class="" onChange={(e)=>setrole(e.target.value)}>
            <option value="customer">Customer</option>
            <option value="vendor">Vendor</option>
            </select>
            <label for="" class="">Password</label>
            <input type="password" class=""/>
            
        </div>
        <div class="">
            <h6>Do'nt have Account?? <Link to='/signup'>SignUp here</Link></h6>
        </div>
        <div class="">
            <button class="" id="btn1" onClick={handlechange}>Login</button>
        </div>
        </div>
    </div>
    
  </div>;
};

export default LoginPage;
