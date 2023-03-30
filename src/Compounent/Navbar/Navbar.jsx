import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { logout } from "../../Redux/connection/actions";
import ball from "../Assets/Vector (4).png";
import word from "../Assets/World.png";
import { MdNotifications,MdLanguage } from 'react-icons/md';
import "./Navbar.css";
function Navbar() {

  return (
    <div className=" fixdnavbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-white  ">
        <div className="container-fluid p-0  m-0 align-itens-center  ">
          <Link to="/Dashboard_admin" className="navbar-brand fs-2 ps-2">
            Logo
          </Link>
          <button
            className="navbar-toggler me-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse bg-white" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div className="d-lg-flex justify-content-between align-items-center d-block ">
              <div className="me-2 mt-md-0 mt-4 mb-3 mb-md-0 pt-md-0 pt-3 me-3">
                <input
                  className="nosubmit input_search  mt-lg-0 mt-md-2 ms-2 mt-sm-2 "
                  type="search"
                  placeholder="Search..."
                />
              </div>
              <div className="mt-lg-0 mt-md-2 mt-sm-2 pt-md-0 pt-3">
                <Link
                  to="/Points_user"
                  className="fw-bold text-decoration-none hoverPLLN text-dark me-3 "
                >
                  <span
                    data-bs-target="#navbarSupportedContent"
                    data-bs-toggle="collapse"
                  >
                    Point
                  </span>
                </Link>
              </div>
              <div className="mt-lg-0 mt-md-2 mt-sm-2 pt-md-0 pt-3 ">
      <Link to="/Notification">     <MdNotifications className="me-2 hoverPLLN" style={{fontSize:"25px"}}/ ></Link>

            
              </div>
              <div className="mt-lg-0 mt-md-2 mt-sm-2 pt-md-0 pt-3">
           
            <div className="dropdown indexBalance">
  <span class="" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <MdLanguage className="me-2 hoverPLLN"  style={{fontSize:"25px"}}/>
  </span>
  <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">English</a></li>
    <li><a className="dropdown-item" href="#">Koren</a></li>
 
  </ul>
</div>
              </div>
              <div className="mt-lg-0 mt-md-2 mt-sm-2 pt-md-0 pt-3">
                {/* {isAuthenticatin ?<>
                  <Link
                  to=""
                  className="text-decoration-none fw-bold text-dark me-3 mt-md-0 mt-3"
                >
                  <span
                    data-bs-target="#navbarSupportedContent"
                    data-bs-toggle="collapse"
                    onClick={()=>loogout()}
                  >
                    logout
                  </span>
                </Link></>:<>
                <Link
                  to="/"
                  className="text-decoration-none fw-bold text-dark me-3 mt-md-0 mt-3"
                >
                  <span
                    data-bs-target="#navbarSupportedContent"
                    data-bs-toggle="collapse"
                  >
                    login
                  </span>
                </Link></>
                }
                */}
                 <Link
                  to="/"
                  className="text-decoration-none hoverPLLN fw-bold text-dark me-3 mt-md-0 mt-3"
                >
                  <span
                    data-bs-target="#navbarSupportedContent"
                    data-bs-toggle="collapse"
                   
                  >
                    login
                  </span></Link>
              </div>
              <div className="mt-2 mt-lg-0 mt-md-2 pt-md-0 pt-3">
                <Link to="/Register" className="text-decoration-none">
                  <button className="btn_register  me-2 my-md-0 my-2 mb-4">
                    <span
                      data-bs-target="#navbarSupportedContent"
                      data-bs-toggle="collapse"
                    >
                      Register
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
