import { Pagination } from "@mui/material";
import React from "react";
import Admin_page1 from "../Admin_page1/Admin_page1";
import edits from "../Assets/Vector (14).png";
import delet from "../Assets/Vector (15).png";
import Driwer_admin from "../Driwer_admin/Driwer_admin";
function Dashboard_admin() {
  return (
    <div>
      <div className="container-fluid">
     <div className="row">
      <div className="col-lg-2 col-md-12 marginfornavber">
        <Driwer_admin/>
      </div>
    <div className="col-lg-10 col-md-12 pb-md-5 pb-2 back_mainsss  min-vh-100 marginfornavber ">
      <div className="container">
        <div className="card  mt-5">
          <div className="card-body"><div className="mt-3 d-flex justify-content-center">

</div>
            <div className="row align-items-center">
              <div className="col-md-9 text-start">
                <div className="input-group mb-3 mt-2">
                  <input
                    type="text"
                    className="form-control py-3 mt-2"
                    placeholder="Search"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>

              <div className="col-md-3">
                <button className="btn_registers   ">Search</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-5 my-3 text-start">
            <h5>USER LIST</h5>
          </div>
        <div className="card mt-3">
          <div className="card-body">
        
            <div className="table-responsive">
              <table className="table bg-white mt-2 ">
                <thead>
                  <tr className="table_back pt-2">
                    <th scope="col">No</th>
                    <th scope="col">Id</th>
                    <th scope="col">Nick Name</th>
                    <th scope="col">Name</th>
                    <th scope="col">Point</th>
                    <th scope="col">Email</th>
                    <th scope="col">Joint Type</th>
                    <th scope="col">Joined</th>
                    <th scope="col">Point Balance</th>
                    <th scope="col">Used</th>
                    <th scope="col">Remain</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody className="text_size">
                  <tr></tr>
                  <tr>
                    <td >01</td>
                    <td>Steve</td>
                    <td>Sky</td>
                    <td>Sky</td>
                    <td className="">0</td>
                    <td>steve@gmail.com</td>
                    <td>Id</td>
                    <td>2023-01-jan</td>
                    <td>15000</td>
                    <td>5000</td>
                    <td>10000</td>
                    <td>
                     <Admin_page1/>
                   
                    </td>
                    <td>
                      <img src={delet} alt="" />
                    </td>
                  </tr>
                  <tr>
                    <td >01</td>
                    <td>Steve</td>
                    <td>Sky</td>
                    <td>Sky</td>
                    <td className="">0</td>
                    <td>steve@gmail.com</td>
                    <td>Id</td>
                    <td>2023-01-jan</td>
                    <td>15000</td>
                    <td>5000</td>
                    <td>10000</td>
                    <td>
                    <Admin_page1/>
                    </td>
                    <td>
                      <img src={delet} alt="" />
                    </td>
                  </tr>
                  <tr>
                    <td >01</td>
                    <td>Steve</td>
                    <td>Sky</td>
                    <td>Sky</td>
                    <td className="">0</td>
                    <td>steve@gmail.com</td>
                    <td>Id</td>
                    <td>2023-01-jan</td>
                    <td>15000</td>
                    <td>5000</td>
                    <td>10000</td>
                    <td>
                    <Admin_page1/>
                    </td>
                    <td>
                      <img src={delet} alt="" />
                    </td>
                  </tr>
                  <tr>
                    <td >01</td>
                    <td>Steve</td>
                    <td>Sky</td>
                    <td>Sky</td>
                    <td className="">0</td>
                    <td>steve@gmail.com</td>
                    <td>Id</td>
                    <td>2023-01-jan</td>
                    <td>15000</td>
                    <td>5000</td>
                    <td>10000</td>
                    <td>
                    <Admin_page1/>
                    </td>
                    <td>
                      <img src={delet} alt="" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
          </div>
        </div>

<div className="mt-3 d-flex justify-content-center">
<Pagination count={10} variant="outlined" shape="rounded" />
</div>

        <div className="row">
          <div className="col-5 my-3 text-start">
            <h5>POINT APPROVE</h5>
          </div>

          <div
            className="col-7 d-flex justify-content-end align-items-center"
            style={{ gap: "12px" }}
          >
            <h5>Filter</h5>
            <div className="dropdown">
              <button
                className="btn text-white color_btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Approved
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Pending
                  </a>
                </li>
               
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body table-responsive">
            <table className="table">
              <thead>
                <tr className="table_back" >
                  <th scope="col">No</th>
                  <th scope="col">Id</th>
                  <th scope="col">Nick Name</th>
                  <th scope="col">Name</th>
                  <th scope="col">Point</th>
                  <th scope="col">Payment</th>
                  <th scope="col">Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Point </th>
                </tr>
              </thead>
              <tbody className="text_size">
                <tr>
                  <td >01</td>
                  <td>Steve</td>
                  <td>Sky</td>
                  <td>Steve</td>
                  <td>0</td>
                  <td>Cent</td>
                  <td>2023-01-jan</td>
                  <td>Waiting</td>
                  <td>pending</td>
                </tr>
                <tr>
                  <td >01</td>
                  <td>Steve</td>
                  <td>Sky</td>
                  <td>Steve</td>
                  <td>0</td>
                  <td>Cent</td>
                  <td>2023-01-jan</td>
                  <td>Waiting</td>
                  <td>pending</td>
                </tr>
                <tr>
                  <td >01</td>
                  <td>Steve</td>
                  <td>Sky</td>
                  <td>Steve</td>
                  <td>0</td>
                  <td>Cent</td>
                  <td>2023-01-jan</td>
                  <td>Waiting</td>
                  <td>pending</td>
                </tr>
                <tr>
                  <td >01</td>
                  <td>Steve</td>
                  <td>Sky</td>
                  <td>Steve</td>
                  <td>0</td>
                  <td>Cent</td>
                  <td>2023-01-jan</td>
                  <td>Waiting</td>
                  <td>pending</td>
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
                <tr className="table_back">
                  <th scope="col">No</th>
                  <th scope="col">Id</th>
                  <th scope="col">Nick Name</th>
                  <th scope="col">Name</th>
                  <th scope="col">Pair</th>
                  <th scope="col"> Used</th>
                  <th scope="col">Date</th>
                  <th scope="col">Signal</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody className="text_size">
                <tr>
                  <td >01</td>
                  <td>Steve</td>
                  <td>Sky</td>
                  <td>Steve</td>
                  <td>BTC</td>
                  <td>500</td>
                  <td>2023-01-jan</td>
                  <td>A</td>
                  <td className="Success_color">Success</td>
                </tr>
                <tr>
                  <td >01</td>
                  <td>Steve</td>
                  <td>Sky</td>
                  <td>Steve</td>
                  <td>BTC</td>
                  <td>500</td>
                  <td>2023-01-jan</td>
                  <td>A</td>
                  <td className="Success_color">Success</td>
                </tr>
                <tr>
                  <td >01</td>
                  <td>Steve</td>
                  <td>Sky</td>
                  <td>Steve</td>
                  <td>BTC</td>
                  <td>500</td>
                  <td>2023-01-jan</td>
                  <td>A</td>
                  <td className="Success_color">Success</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-3 d-flex justify-content-center">
<Pagination count={10} variant="outlined" shape="rounded" />
</div>
        </div></div>
      </div>
    </div></div> 
  );
}

export default Dashboard_admin;
