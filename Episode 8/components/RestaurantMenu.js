import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { offerLogo_URL } from "../../utils/Constant";
const RestaurantMenu = () =>{

    const [restinfo,setrestInfo] = useState(null)
    const [restDeals , setrestDeals] = useState(null)
    
    useEffect(() => {Fetchinfo();}, []);
    const {resId}= useParams();


    const Fetchinfo = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.406963&lng=77.8498292&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
    const data1 = await data.clone().json();
  
    const json = await data.json();
    
    setrestInfo(json.data.cards[2].card.card.info)
    setrestDeals(data1.data.cards[3].card.card.gridElements.infoWithStyle.offers)
    
};

if (restinfo === null ) return 
 const {name,avgRating,totalRatings,costForTwoMessage,sla,cuisines} = restinfo
//  const {header , couponCode} = restDeals.info
 //[0].info.couponCode
   return (
     <div>     
      <h2>{name}</h2>
      <div className="resInfocard">
      <h4>{avgRating} ({(totalRatings)}) ratings  -  Rs. {costForTwoMessage}
      </h4>
      {cuisines.map((item)=><a href="" key={restinfo.id}>{(item)}, </a>)}
       
      <h5>{sla.minDeliveryTime}-{sla.maxDeliveryTime} min</h5>
      
      </div>
      <div className="deals">
       {restDeals.map((deal)=><div className="res-deal">
        <div className="mydiv">
        <img className='offerLogo'     
        src={offerLogo_URL+deal.info.offerLogo}/>
       
        <h4 className="head">{deal.info.header}</h4>
        <p className='para' >{deal.info.couponCode}</p>

        </div>
        </div>
       )
      }
    </div>

   </div>
  
)
}
export default RestaurantMenu;