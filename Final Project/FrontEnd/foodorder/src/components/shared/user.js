import React, { useState } from "react";
import coverImage from "../images/cover.jpg";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../App.css";
import Items from "./Item";
import { products } from "../logged in/Products";
const User = () => {
  const [item] = useState(products);
  return (
    <>
      <div className="hw">
        {/* <img
          className="img2"
          src="https://image.freepik.com/free-photo/indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18716.jpg"
          alt="jsx-a11y/alt-text"
          aria-disabled="true"
          draggable="false"
        />{" "} */}
      </div>
      <div className="container1">
        {item.map((currItem) => {
          return <Items key={currItem.id} {...currItem} />;
        })}
      </div>
    </>
  );
};
export default User;
