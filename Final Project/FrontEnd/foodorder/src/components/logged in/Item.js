import React, { useState, useEffect } from "react";
import "./items.css";
import { products } from "./Products";
const Items = ({ id, title, price, img, quantity, description, Rating }) => {
  const [item] = useState(products);
  const handleClick = () => {
    return (document.location.href = img);
  };
  const handleAdd=()=>{
    let i
    for(i=0;i<products.length;i++){
      if(products[i].id==id){
        products[i].quantity=quantity+1
        if(products[i].quantity>0){
          products[i].price=products[i].price*products[i].quantity
        }
      }
    }
  }
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
        <h5>Price: ₹{price}</h5>
        <h5>Rating: {Rating}</h5>
      </p>
      <button className="buttons button1" onClick={handleAdd}>ADD TO CART</button>
      <br />
      {/* <button className="buttons button1 buy">BUY NOW</button>
      <br /> */}
    </div>
  );
};

export default Items;
