import {BrowserRouter, Route, Router, Routes} from "react-router-dom"
import './App.css';
import Driwer_admin from "./Compounent/Driwer_admin/Driwer_admin";
import Navbar from "./Compounent/Navbar/Navbar";
import Register from "./Compounent/Register/Register";
import Reset_password from "./Compounent/Reset_password/Reset_password";
import Verify from "./Compounent/Verify/Verify";
import Admin_notic_board from "./Compounent/Admin_notic_board/Admin_notic_board";
import Dashboard_admin from "./Compounent/Dashboard_admin/Dashboard_admin";
import Login from "./Compounent/Login/Login";
import Points_user from "./Compounent/Points_user/Points_user";
import Notification from "./Compounent/Notification/Notification";
import ModelAdminPost from "./Compounent/ModelAdminPost/ModelAdminPost";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/Reset_password" element={<Reset_password />} />
          <Route exact path="/Notification" element={<Notification />} />
          <Route exact path="/Admin_notic_board" element={<Admin_notic_board />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Verify" element={<Verify />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Points_user" element={<Points_user />} />
          <Route exact path="/Dashboard_admin" element={<Dashboard_admin />} />
          <Route exact path="/ModelAdminPost" element={<ModelAdminPost />} />
       
        
        </Routes> 
       
      </BrowserRouter>
    </div>
  );
}

export default App;
