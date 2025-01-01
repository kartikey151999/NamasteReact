import { useState } from "react";
import {IMG_URL} from "../../utils/Constant"
const Header = () =>{
    const [btnname,setbtnname]=useState("Login");
    
    return(

     <div className="header">
       <div className="logo-container">
          <img className="logo" src={IMG_URL}/>
       </div>
       <div className="menu-bar">
         <ul>
         <li>Home</li>
         <li>About us</li>
         <li>Contact</li>
         <li>Cart</li>
         <button className="btn" onClick={()=>{
          btnname ==="Login" ? setbtnname("Logout"):setbtnname("Login");
         }}>{btnname}</button>
         </ul>
       </div>
  
     </div>
  
    )
  }
export default Header;  