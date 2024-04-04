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
        <div >
           <h3 class="mt-5" id='heading' >Create Your Account</h3>
           <form action="">
           <div class="card-body col-md-12" style={{marginRight:'60%'}}>
            <label for="" class="mb-2 mt-2">Name</label>
            <input type="text" class="form-control"/>
            <label for="" class="mb-2 mt-2">Email</label>
            <input type="email" class="form-control"/>
            <label for="" class="mb-2 mt-2">Role</label>
            <select class="form-control">
            <option value="customer">Customer</option>
            <option value="vendor">Vendor</option>
            </select>
            <label for="" class="mb-2 mt-2">Password</label>
            <input type="password" class="form-control"/>
            <label for="" class="mb-2 mt-2">Confirm Password</label>
            <input type="password" class="form-control"/>
        </div>
        <div class="card-footer text-center mt-2" style={{marginLeft:'60px'}}>
            <h6>Already have Account?? <Link to='/login'>Login here</Link></h6>
        </div>
        <div class="text-center main">
            <input type="submit" class="btn btn-outline-primary" id="btn1"/>
            </div>
        </form>
        </div>
        </div>
</div>

    
  )
}

export default Signuppage;