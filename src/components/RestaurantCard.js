import { IMAGE_URL } from "../utils/constants";

const RestaurantCard = () => {
  return (
    <div style={{ backgroundColor: "#f0f0f0" }} className="res-card">
      <img className="res-logo" alt="res-logo" src={IMAGE_URL} />
      <h2></h2>
      <h4></h4>
      <h4></h4>
      <span>
        <h4>
          <i className="fa-solid fa-star"></i>
        </h4>
        <h4></h4>
        <h4></h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
