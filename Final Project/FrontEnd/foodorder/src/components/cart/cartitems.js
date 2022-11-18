import React from "react";
import "./cart.css";
const Items1 = ({ title, price, img, quantity }) => {
  return (
    <div className="card box1">
      <div className="imgs1">
        <img src={img} alt="jsx-a11y/alt-text" className="card-img-top image1" />
      </div>
      <p className="para1">
        <div className="title1">
          <h5 className="card-title">{title}</h5>
        </div>
        <h5 className="quantity">Quantity: {quantity} item</h5>
        <h5 className="price">Price: ₹{price}</h5>
      </p>
    </div>
  );
};

export default Items1;
