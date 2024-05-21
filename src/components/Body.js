import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [filteredResturants, setfilteredResturants]= useState([]);
    const [searchText, setsearchText] = useState("");

    
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.3388615&lng=75.1133644&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json();
        console.log(json);
        setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredResturants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    // if (listOfRestaurants.length === 0) {
    //     return <Shimmer/>
    // }
    
    
   
    return listOfRestaurants.length ===0 ?  <Shimmer/> : (

        
        <div className="body">
        
            <div className="search-bar">
                <input type="text" placeholder="Search a restaurant you want..." className="searchbox" value={searchText} onChange={(e) => {
                    setsearchText(e.target.value);
                }} ></input>
                <button onClick={() => {
                    console.log(searchText)
                    const filteredResturants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setlistOfRestaurants(filteredResturants);
                }}>search</button>
            </div>
            
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => { 
                        
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setlistOfRestaurants(filteredList)
                        console.log("button clicked")
                        console.log(filteredList)
                }}>Top Restaurant</button>
            </div>
           
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id } resData={restaurant}/>
                    ))}
                
                </div>
                </div>
                
       
    );
};
export default Body;