import { Link } from "react-router-dom";
import Restaurantcard from "./Restaurantcard";
// import ResObj from "../../utils/ResData"
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";


const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filterlistofRestaurants, setfilterlistofRestaurants] = useState([]);
  

  useEffect(() => {
    Fetch();
  }, []);

  const Fetch = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.406963&lng=77.8498292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setlistofRestaurants(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    //data.cards[1].card.card.gridElements.infoWithStyle.restaurants

    setfilterlistofRestaurants(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  
  return listofRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-input"
          value={searchText}
          onChange={(val) => {
            setsearchText(val.target.value);
          }}
        />
        <button
          onClick={() => {
            const filterres = listofRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilterlistofRestaurants(filterres);
          }}
        >
          search
        </button>
      </div>
      <button
        className="search-btn"
        onClick={() => {
          const ResObj1 = listofRestaurants.filter(
            (res) => res.info.avgRating > 4.3
          );
          setlistofRestaurants(ResObj1);
         
        }}
      >
        Top Rated Restaurant
      </button>
      <div className="restaurant-container">
        {filterlistofRestaurants.map((Restcard) => (
         <Link to={"restaurant/"+Restcard.info.id} key={Restcard.info.id} className="card"> <Restaurantcard resData={Restcard} /></Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
