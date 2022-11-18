import React, { useState, useEffect } from "react";
import { products } from "../logged in/Products";
import Items1 from "./cartitems";
import { useHistory } from "react-router-dom";
const Cart = () => {
  const [item] = useState(products);
  let t = 0;
  let p = 0;
  const history = useHistory();
  return (
    <>
      <div className="container2">
        {item.map((currItem) => {
          if (currItem.quantity !== 0) {
            return <Items1 key={currItem.id} {...currItem} />;
          }
        })}
      </div>
      <div style={{ justifyContent: "center", textAlign: "center" }}>
        <footer
          className="card"
          style={{
            position: "fixed",
            bottom: "-3px",
            zIndex: "1",
            minWidth: "96%",
            marginLeft: "2%",
            minHeight: "120px",
            borderRadius: "0px",
            borderBottom: "none",
            borderRight: "none",
            borderLeft: "none",
            borderTop: "1px solid red !important",
          }}
        >
          <h1
            className="footer"
            style={{ top: "15%", left: "3%", position: "absolute" }}
          >
            cart
          </h1>
          <h3
            className="footer"
            style={{ top: "20%", left: "47%", position: "absolute" }}
          >
            items:{" "}
            {item.map((currItem) => {
              if (currItem.quantity !== 0) {
                p += currItem.quantity;
              }
            })}
            {p}
          </h3>
          <h3
            className="footer"
            style={{ top: "20%", left: "85%", position: "absolute" }}
          >
            total: ₹{" "}
            {item.map((currItem) => {
              if (currItem.quantity !== 0) {
                t += currItem.price;
              }
            })}
            {t}
          </h3>
        </footer>
      </div>
    </>
  );
};

export default Cart;
