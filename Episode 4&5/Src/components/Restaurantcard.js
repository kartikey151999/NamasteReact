import {CDN_URL} from "../../utils/Constant"
const Restaurantcard = (props)=>{
    const {resData} = props;
    const {cloudinaryImageId,name,avgRating,cuisines,costForTwoMessage,deliveryTime}=resData.info
  
    return(
      <div className="res-card"> 
          <img className="res-image" src={CDN_URL+cloudinaryImageId}/>
          <h3>{name}</h3>
        <h4>{cuisines.join(" , ")}</h4>
        <h4>{avgRating} Star</h4>
        <h4>{costForTwoMessage}</h4>
        <h4>{deliveryTime} Min</h4>
      </div>
      )
  }

export default Restaurantcard;  