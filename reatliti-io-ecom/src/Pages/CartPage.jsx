import React, { useEffect, useState } from "react";
import CartCard from "../Components/CartCard";
import "./Styles/Cart.css";

const CartPage = () => {
  let cartList = JSON.parse(localStorage.getItem("cart")) || [];
  const [prodData, setProdData] = useState(cartList);
  prodData.sort((a, b) => a.id - b.id);

  const handleRemove = (id) => {
    let deleted = cartList.filter((ele) => ele.id !== id);
    localStorage.setItem("cart", JSON.stringify(deleted));
    setProdData(deleted);
  };

  const handleItemInCart = (id, qty) => {
    let exist = cartList.find((ele) => ele.id === id);

    exist = { ...exist, qty: parseInt(qty) };
    let updated = cartList.filter((ele) => ele.id !== id);
    updated = [...updated, exist];
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  return (
    <div className="cart-container">
      <div className="cartBox">
        {prodData &&
          prodData.map((prod, i) => {
            return <CartCard key={"s" + i} data={prod} handleRemove={handleRemove} handleQty={handleItemInCart}></CartCard>;
          })}
      </div>
    </div>
  );
};

export default CartPage;
