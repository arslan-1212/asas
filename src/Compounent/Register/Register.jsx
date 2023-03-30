// import { FormControlLabel } from '@mui/material'
import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "./Register.css"
import { Link } from 'react-router-dom';
function Register() {
  return (
    <div className='background_image '>
      
      <div className="card card_responsive mt-5 marginfornavber" style={{margin:"auto"}}>
  <h4 className='mt-3'>Register</h4>
  <div className="card-body">
  

  <form className='d-flex justify-content-between'>
  <input type="search" placeholder="ID"/>
  <button type="submit2">Search</button>
</form>
  <form className='d-flex justify-content-between'>
  <input type="search" placeholder="Nick Name"/>
  <button type="submit2">Search</button>
</form>
  <form className='d-flex justify-content-between'>
  <input type="search" placeholder="Full Name"/>
  <button type="submit2">Search</button>
</form>
<form className='d-flex justify-content-between'>
  <input type="search" placeholder="Email"/>
  <button type="submit">Search</button>
</form>
  <form className='d-flex justify-content-between'>
  <input type="search" placeholder="Phone No"/>
  <button type="submit3">Search</button>
</form>
  <form className='d-flex justify-content-between'>
  <input type="search" placeholder="Password"/>
  <button type="submits">Search</button>
</form>
  <form className='d-flex justify-content-between'>
  <input type="search" placeholder="Confirm Password"/>
  <button type="submits">Search</button>
</form>
<div className="text-start forgit">
 
</div>
<div className="text-start">
<FormControlLabel control={<Checkbox defaultChecked />} label="I agree to the Terms and Conditions" />


<Link to="/Verify"><button className='btn btn_same py-2 mt-3 w-100 text-white'>Register</button></Link>
<div className="text-center">
<h6 className="rre mt-4">Already have an account?  <Link to="/"  className='text-decoration-none color-text  '>Login</Link> </h6>
</div></div>
</div>
</div>
    </div>
  )
}

export default Register
