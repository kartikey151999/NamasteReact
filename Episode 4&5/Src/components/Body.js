import Restaurantcard from "./Restaurantcard"
import ResObj from "../../utils/ResData"
import { useState } from "react"
const Body = () =>{
  const [listofRestaurant,setlistofRestaurant]=useState(ResObj) ; 
  return(
      <div className="body">
         <div className="search">
          <button className="search-btn"
          onClick={()=>{
            const ResObj1 = ResObj.filter((res)=>
              res.info.avgRating > 4
            );
            setlistofRestaurant(ResObj1);
          }}
          >Top Rated Restaurant</button>
         </div>
         <div className="restaurant-container">
          {listofRestaurant.map((Restcard)=>(
            <Restaurantcard key={Restcard.info.id} resData={Restcard}/>
            ))}
         </div>
        </div>
    )
  } 
export default Body;  