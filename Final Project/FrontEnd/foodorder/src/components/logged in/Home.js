import React, { useState } from "react";
import coverImage from "../images/cover.jpg";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../App.css";
import Items from "./Item";
import { products } from "./Products";
const Home = () => {
  const [item] = useState(products);
  return (
    <>
      <div className="hw">
      </div>
      <div className="container1">
        {item.map((currItem) => {
          return <Items key={currItem.id} {...currItem} />;
        })}
      </div>
    </>
  );
};
export default Home;
