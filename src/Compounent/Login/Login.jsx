import React from 'react'
import "./Login.css"
import talk from "../Assets/KakaoTalk_logo 1.png"
import google from "../Assets/Google.png"

import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
// import { useSelector,useDispatch } from 'react-redux';
// import {login} from "../../Redux/connection/actions"
import { useNavigate } from "react-router-dom";

function Login() {
//   const {isAuthenticatin} = useSelector((state)=> state.connect);

//   const dispatch = useDispatch()
//   const navigate = useNavigate();


// const loog   = async()=>{
//    await dispatch(login())
//    navigate("/Main_page")

// }

return(
  
 
    

    <div className='background_image'>
     <div className="card card_responsive mt-5 marginfornavber" style={{ margin:"auto"}}>
  <h4 className='mt-3'>Login</h4>
  <div className="card-body">
  <form className='d-flex justify-content-between'>
  <input type="search" placeholder="Email"/>
  <button type="submit">Search</button>
</form>

  <form className='d-flex justify-content-between'>
  <input type="search" placeholder="Password"/>
  <button type="submits">Search</button>
</form>
<div className="text-end forgit">
  <Link to='/Reset_password' className="fw-bold text-dark">
  Forgot your Password?
  </Link>
</div>
<button className='btn btn_same py-2 mt-3 w-100 text-white' >Login</button>


<div className="mt-3">
<Divider>or</Divider>
  </div>
  <div className='text-start d-flex align-items-center mt-4' >
    <img width="50"  src={talk} alt="" className=""/>
<h6 className='ms-4 color-text'>Connect With KakaoTalk</h6>
  </div>


  <div className='text-start d-flex align-items-center mt-4' >
    <img width="40"  src={google} alt="" className="ms-1 me-1"/>
<h6 className='ms-4 color-text'>Connect With Google</h6>
  </div>

   <h6 className="rre mt-4">Don’t have an account?<Link to="/Register" className='color-text'>Register</Link> </h6>
  </div>
</div>
    </div>
  )
}

export default Login
