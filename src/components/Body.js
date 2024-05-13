import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";


const Body = () => {
    const [listOfRestaurants, setlistOfRestaurants] = useState(resList);
 
    return (
        <div className="body">


            <div className="filter">
                <button className="filter-btn"
                    onClick={() => { 
                        
                        const filterdList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.5
                        );
                        setlistOfRestaurants(filterdList)
                }}>Top Rated Restaurant</button>
            </div>


            <div className="res-container">
                {
                    listOfRestaurants.map((Restaurant) => (
                        <RestaurantCard key={Restaurant.info.id } resData={Restaurant}/>
                    ))}
                
            </div>
        </div>
    );
};
export default Body;