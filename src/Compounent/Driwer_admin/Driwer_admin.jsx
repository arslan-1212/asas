import React from 'react'
import { Link, NavLink} from 'react-router-dom'


import "./Driwer_admin.css"
function Driwer_admin() {
  return (
    <div className=''>
      <div className="sidebar fw-bold">
  <NavLink className="" to="/Dashboard_admin">Dashboard</NavLink>
  <NavLink className="" to="/Admin_notic_board ">Notice Board</NavLink>
  
</div>

    </div>
  )
}

export default Driwer_admin
