import { useState } from "react";
import { LOGO_URL } from "../utils/contants";
// import RestaurantCard from "./RestaurantCard";


const Header = () => {
    // const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [btnName, setbtnName] = useState('login');
    console.log("header render")
    
    return (
        <div className="header" >
            <div className="logo-container">
                <img src={LOGO_URL} />
            </div>
            
            <div className="nav-items">
                <ul>
                    <li>Home<i className="ri-home-line"></i></li>
                    <li>About us</li>
                    <li>Contact<i className="ri-contacts-line"></i></li>
                    <li>cart<i className="ri-shopping-cart-2-fill"></i></li>
                    <button className="login"
                        onClick={() => {
                            btnName === "login" ? setbtnName("Logout") : setbtnName("login")
                    }}>
                        {btnName}<i className="ri-user-3-line"></i>
                    </button>
                    
                </ul>
            </div>
        </div>
    )
}
export default Header;