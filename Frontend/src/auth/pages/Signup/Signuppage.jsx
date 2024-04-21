import React from 'react'
import './Signup.css'
import signupphoto from './signup.svg'
import { Link } from 'react-router-dom'
const Signuppage = () => {
  return (
    <div>
        <div class="parent">
        <div class="child1">
            <img id='simg' src={signupphoto} alt="" height="500px " width="500px"/>
        </div>
        <div id='customerDetails'>
           <h3 class="" id='heading' >Create Your Account</h3>
           <form action="">
           <div class="" style={{marginRight:'60%'}}>
            <label for="" class="">Name</label>
            <input type="text" class=""/>
            <label for="" class="">Email</label>
            <input type="email" class=""/>
            <label for="" class="">Role</label>
            <select class="">
            <option value="customer">Customer</option>
            <option value="vendor">Vendor</option>
            </select>
            <label for="" class="">Password</label>
            <input type="password" class=""/>
            <label for="" class="">Confirm Password</label>
            <input type="password" class=""/>
        </div>
        <div class="" style={{marginLeft:'60px'}}>
            <h6>Already have Account?? <Link to='/login'>Login here</Link></h6>
        </div>
        <div class="text-center main">
            <input type="submit" class="" id="btn1"/>
            </div>
        </form>
        </div>
        </div>
</div>

    
  )
}

export default Signuppage;