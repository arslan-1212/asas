import React from "react";
import "./Table_main.css";
function Table_main() {
  return (
    // <></>
    <div className="card mt-5 card_shadow text-white">
      <div className="table-responsive">
        <table className="table  mt-2 ">
          <thead>
            <tr className="table_back pt-2 responsive_table_head">
              <th scope="col">Pair</th>
              <th scope="col">Position</th>
              <th scope="col">Leverage</th>
              <th scope="col">Mark Price</th>
              <th scope="col">Entry Price</th>
              <th scope="col">Sell</th>
              <th scope="col">Holding Time</th>
              <th scope="col">Date</th>
              <th scope="col">Profit %</th>
            </tr>
          </thead>
          <tbody className=" text-white responsive_table_data">
            <tr></tr>
            <tr>
              <td>BTC/USDT</td>
              <td>Long</td>
              <td>X4</td>
              <td>20000</td>
              <td>27,630</td>
              <td>30000</td>
              <td>2 days 5h 10m</td>
              <td>2022.12.18 11:10:45</td>
              <td>
                <span className="dollor px-3 py-1 text-white">530$ </span>
              </td>
            </tr>
            <tr>
              <td>BTC/USDT</td>
              <td>Long</td>
              <td>X4</td>
              <td>20000</td>
              <td>27,630</td>
              <td>30000</td>
              <td>2 days 5h 10m</td>
              <td>2022.12.18 11:10:45</td>
              <td>
                <span className="dollor px-3 py-1 text-white">530$ </span>
              </td>
            </tr>
            <tr>
              <td >BTC/USDT</td>
              <td>Long</td>
              <td>X4</td>
              <td>20000</td>
              <td>27,630</td>
              <td>30000</td>
              <td>2 days 5h 10m</td>
              <td>2022.12.18 11:10:45</td>
              <td>
                <span className="dollor px-3 py-1 text-white">530$ </span>
              </td>
            </tr>
            <tr>
              <td>BTC/USDT</td>
              <td>Long</td>
              <td>X4</td>
              <td>20000</td>
              <td>27,630</td>
              <td>30000</td>
              <td>2 days 5h 10m</td>
              <td>2022.12.18 11:10:45</td>
              <td>
                <span className="dollor px-3 py-1 text-white">530$ </span>
              </td>
            </tr>
            <tr>
              <td >BTC/USDT</td>
              <td>Long</td>
              <td>X4</td>
              <td>20000</td>
              <td>27,630</td>
              <td>30000</td>
              <td>2 days 5h 10m</td>
              <td>2022.12.18 11:10:45</td>
              <td>
                <span className="dollor px-3 py-1 text-white">530$ </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table_main;
