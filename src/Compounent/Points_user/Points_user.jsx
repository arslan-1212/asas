import { Pagination } from '@mui/material'
import React from 'react'

function Points_user() {
  return (
    <div className='background_color '>
      <div className="container px-md-5 px-2 py-4 pt-5">
        <div className="card indexBalanceq mt-5">
            <div className="card-body d-flex justify-content-between align-items-center pt-4">
                <h6>Point Balance</h6>
                <h6>10,000</h6>
            </div>
        </div>

<div className="points text-start my-4">
    <h5>POINT PURCHASE HiSTORY</h5>
</div>


<div className="card">
    <div className="card-body table-responsive">
    <table className="table">
  <thead>
    <tr className='table_back'>
      <th scope="col">No</th>
      <th scope="col">Point Amount</th>
      <th scope="col">Payment Type</th>
      <th scope="col">Date</th>
      <th scope="col">Time</th>
      <th scope="col">Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">01</td>
      <td>0</td>
      <td>Free</td>
      <td>2023-01-jan</td>
      <td>15:40</td>
      <td>Paid</td>
    </tr>
    <tr>
      <td scope="row">01</td>
      <td>0</td>
      <td>Free</td>
      <td>2023-01-jan</td>
      <td>15:40</td>
      <td>Paid</td>
    </tr>
    <tr>
      <td scope="row">01</td>
      <td>0</td>
      <td>Free</td>
      <td>2023-01-jan</td>
      <td>15:40</td>
      <td>Paid</td>
    </tr>
    
  </tbody>
</table>
    </div>
</div>
<div className="mt-3 d-flex justify-content-center">
<Pagination count={10} variant="outlined" shape="rounded" />
</div>
<div className="points text-start my-4">
    <h5>POINT USE HISTORY</h5>
</div>


<div className="card">
    <div className="card-body table-responsive">
    <table className="table">
  <thead>
    <tr className='table_back'>
      <th scope="col">No</th>
      <th scope="col">Pair</th>
      <th scope="col"> Used</th>
      <th scope="col">Date</th>
      <th scope="col">Time</th>
      <th scope="col">Signal</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">01</td>
      <td>BTC</td>
      <td>500</td>
      <td>2023-01-jan</td>
      <td>15:40</td>
      <td>A</td>
      <td className='Success_color'>Success</td>
    </tr>
    <tr>
      <td scope="row">02</td>
      <td>BTC</td>
      <td>500</td>
      <td>2023-01-jan</td>
      <td>15:40</td>
      <td>A</td>
      <td className='Success_color'>Success</td>
    </tr>
    <tr>
      <td scope="row">03</td>
      <td>BTC</td>
      <td>500</td>
      <td>2023-01-jan</td>
      <td>15:40</td>
      <td>A</td>
      <td className='Success_color'>Success</td>
    </tr>
    
    
  </tbody>
</table>
    </div>
</div>
<div className="mt-3 d-flex justify-content-center">
<Pagination count={10} variant="outlined" shape="rounded" />
</div>
      </div>

    </div>
  )
}

export default Points_user
