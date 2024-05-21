import { CDN_URL } from "../utils/contants";
const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        areaName
    } = resData?.info;
    const { 
        deliveryTime
    } = resData?.info.sla;

    return (
        <div className="res-main">
        <div className="res-card">
                <img src={CDN_URL + cloudinaryImageId} />
                <h4>{name}</h4>
                <div className="avg">

                <span><i className="ri-star-s-fill"></i>{avgRating}</span>
                </div>
                <p>{cuisines.join(", ")}</p>
                <h4>{areaName }</h4>
                <div className="res-card-info">
                    <h4>{costForTwo}</h4>
                    <h4 className="delivery">Delivery in-{deliveryTime}mins</h4>
                    
                </div>
                
                
           
            
            </div>
            </div>
    )
}
export default RestaurantCard;