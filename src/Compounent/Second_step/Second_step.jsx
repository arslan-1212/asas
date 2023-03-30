import React from "react";
import bnb from "../Assets/CandleChart 1.png";
import carve_line from "../Assets/Vector (5).png";
import speker from "../Assets/Vector (6).png";
import Position_data_card from "../Position_data_card/Position_data_card";
import Table_main from "../Table_main/Table_main";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import "./Second_step.css";
import { Link } from "react-router-dom";
function SecondStep() {
  return (
    <div className="">
      <div className="container-fluid px-md-5 px-3 pt-5">
        <div className="row ">
          <div className="col-lg-8 col-md-7  mb-md-0 mb-4 col-sm-12">
            {/* <div className="graph_size"> */}

            <TradingViewWidget
                symbol={"ETHUSD"}
                theme={Themes.DARK}
                interval="D"
                locale="en"
                timezone="America/New York"
                hideSideToolbar={true}
                details
                autosize
                news={["headlines"]}
                className=""
              />
     
          </div>
          <div className="col-lg-4 col-md-5 col-sm-12 margin_resposnsive">
            <div className="card card_shadow">
              <div className="card-body d-flex justify-content-evenly align-items-center">
                <img src={carve_line} width="30px" alt="" />
                <div>
                  <input id="checkbox1" type="checkbox" className="checkbox" />

                  <label for="checkbox1" className="switch">
                    <span className="switch__circle">
                      <span className="switch__circle-inner"></span>
                    </span>
                    <span className="switch__left">Off</span>
                    <span className="switch__right">On</span>
                  </label>
                </div>
                <img src={speker} width="30px" alt="" />

                <div>
                  <input id="checkbox2" type="checkbox" className="checkbox" />

                  <label for="checkbox2" className="switch">
                    <span className="switch__circle">
                      <span className="switch__circle-inner"></span>
                    </span>
                    <span className="switch__left">Off</span>
                    <span className="switch__right">On</span>
                  </label>
                </div>
              </div>
            </div>
            {/* second card  */}
            <div className="card mt-3 card_shadow">
              <div className="card-body d-flex justify-content-between align-items-center">
                <h6 className="fw-bold">Pair</h6>
                <div className="dropdown">
                  <button
                    className="btn text-white color_btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    BTC/USDT
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link to="/" className="dropdown-item">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item" href="#">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item" href="#">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <Position_data_card />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-sm-12">
            <Table_main />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondStep;
