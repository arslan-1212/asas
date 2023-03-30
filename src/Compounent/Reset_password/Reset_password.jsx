import React from 'react'
import "./Reset_password.css"
function Reset_password() {
  return (
    <div className='background_image'>
      
    <div className="card card_responsive" style={{ margin:"auto"}}>
<h4 className='mt-3'>RESET PASSWORD</h4>
<div className="card-body">


<form className='d-flex justify-content-between'>
<input type="search" placeholder="ID"/>
<button type="submit2">Search</button>
</form>

<form className='d-flex justify-content-between'>
<input type="search" placeholder="Email"/>
<button type="submit">Search</button>
</form>

<form className='d-flex justify-content-between'>
<input type="search" placeholder="New Password"/>
<button type="submits">Search</button>
</form>
<form className='d-flex justify-content-between'>
<input type="search" placeholder="Confirm Password"/>
<button type="submits">Search</button>
</form>
<div className="text-start forgit">

</div>




<button className='btn btn_same py-2 mt-3 w-100 text-white'>Reset</button>

</div>
</div>
  </div>
  )
}

export default Reset_password
