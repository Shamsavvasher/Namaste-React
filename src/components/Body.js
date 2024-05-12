import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
const Body = () => {
    return (
        <div className="body">


            <div className="filter">
                <button className="filter-btn"
                onClick={() => { console.log("button clicked") }} onMouseOver={()=>{console.log("hover")}}>Top Rated Restaurant</button>
            </div>


            <div className="res-container">
                {
                    resList.map((Restaurant) => (
                        <RestaurantCard key={Restaurant.info.id } resData={Restaurant}/>
                    ))}
                
            </div>
        </div>
    );
};
export default Body;