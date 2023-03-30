import { TextField } from '@mui/material'
import React from 'react'
import "./Verify.css"
function Verify() {
  return (
    <div className='new_back'>
      <div className="card card_responsive m-auto" >
      <h4 className='mt-3'>verification</h4>
        <div className="card-body d-flex" style={{gap:"5px"}}>
        <TextField
          id="outlined-number"
          className="verfy-color"
          type="number"
          // InputLabelProps={{
          //   shrink: true,
          // }}
        />
        <TextField
          id="outlined-number"
          className="verfy-color"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          
        />
        <TextField
          id="outlined-number"
          className="verfy-color"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-number"
          className="verfy-color"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-number"
          className="verfy-color"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-number"
          className="verfy-color"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        
        </div>
        <div className="text-center text_size">
          <p>Resend IN 01:45</p>
        </div>
        <div className="pb-5 px-3">
        <button className='btn btn_same py-2 mt-3 w-100 text-white'>Reset</button>
        </div>
       
      </div>
    </div>
  )
}

export default Verify
