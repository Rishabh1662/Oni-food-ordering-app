import React from "react";
import RestaurantCard from "./RestaurantCard";

const body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
      </div>
    </div>
  );
};

export default body;
