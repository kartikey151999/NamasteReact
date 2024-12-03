import {IMG_URL} from "../../utils/Constant"
const Header = () =>{
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
         
         </ul>
       </div>
  
     </div>
  
    )
  }
export default Header;  