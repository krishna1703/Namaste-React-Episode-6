import React from "react";
import {CDN_LINK} from "../utils/constants";
const RestaurentCard = (props) => {
  const { resData } = props;
  const {  cloudinaryImageId, name,cuisines, avgRating, deliveryTime, costForTwo } =
    resData?.data;
  return (
    <div className="res-card">
      <img
        className="res-img"
        alt="res-img"
        src={
          CDN_LINK+
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <br></br>
      <h3>{cuisines.join(" ," )}</h3> 
      <br></br>
      <div className="res-feature">
      <h5>{avgRating} stars</h5>
    
      <h5>{deliveryTime}min</h5>
     
      <h5>₹{costForTwo / 100}For Two</h5>
      </div>
    </div>
  );
};

export default RestaurentCard;
