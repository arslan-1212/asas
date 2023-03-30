import React, { useState } from "react";
import "./Admin_page1.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CheckIcon from "@mui/icons-material/Check";

import edits from "../Assets/Vector (14).png"
function Admin_page1() {
  const [count, setCount] = useState(0);
    
  
  return (
    <div>

{/* <!-- Button trigger modal --> */}
<span type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
<img src={edits} alt="" />
</span>

{/* <!-- Modal --> */}
<div className="modal  fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body responsiveSIZE">
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
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody className="text_size">
                  <tr></tr>
                  <tr>
                    <td >01</td>
                    <td>Steve</td>
                    <td>Sky</td>
                    <td>Sky</td>
                    <td className="d-flex align-items-center">
                      <h4
                        className="btn  me-2 incrasing_btn"
                        onClick={() => setCount(count - 1)}
                      >
                        <RemoveIcon />
                      </h4>
                      <span>{count}</span>
                      <h4
                        className="btn  ms-2  incrasing_btn"
                        onClick={() => setCount(count + 1)}
                      >
                        <AddIcon />
                      </h4>
                    </td>
                    <td>steve@gmail.com</td>
                    <td>Id</td>
                    <td>2023-01-jan</td>
                    <td>15000</td>
                    <td>5000</td>
                    <td>10000</td>
                    <td className="">
                      <CheckIcon className="fw-bold" />
                      <button className="btn btn_danger">cancel</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
      </div>
     
    </div>
  </div>
</div>
    
    </div>
     
  )
}

export default Admin_page1;
