import React from "react";
import "../logged in/items.css";
const Items = ({ title, price, img, quantity, description, Rating }) => {
  const handleClick = () => {
    return (document.location.href = img);
  };
  return (
    <div className="card box">
      <div className="imgs" onClick={handleClick}>
        <img src={img} alt="jsx-a11y/alt-text" className="card-img-top image" />
      </div>
      <p className="para">
        <div className="title">
          <h5 className="card-title">{title}</h5>
        </div>
        <div className="container-fluid description">
          <h6>{description}</h6>
        </div>
        <h5>Price: ₹{price} / item</h5>
        <h5>Rating: {Rating}</h5>
      </p>
    </div>
  );
};

export default Items;
