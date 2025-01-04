import { useState } from "react";
import {IMG_URL} from "../../utils/Constant"
import { Link } from "react-router-dom";
import Aboutus from "./Aboutus";
import Contact from "./Contact";
const Header = () =>{
    const [btnname,setbtnname]=useState("Login");
    
    return(

     <div className="header">
       <div className="logo-container">
          <img className="logo" src={IMG_URL}/>
       </div>
       <div className="menu-bar">
         <ul>
         <li><Link to="/" className="menu-item">Home</Link></li>
         <li><Link to="/About"className="menu-item">About us</Link></li>
         <li><Link to="/Contact" className="menu-item">Contact</Link></li>
         <li>Cart</li>
         <button className="btn" onClick={()=>{
          btnname ==="Login" ? setbtnname("Logout"):setbtnname("Login");
         }}><Link to="/Login" className="btn">{btnname}</Link></button>
      
         </ul>
       </div>
  
     </div>
  
    )
  }
export default Header;  