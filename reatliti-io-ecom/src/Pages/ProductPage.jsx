import React, { useState } from "react";
import ProductCard from "../Components/ProductCard";
import data from "../data/productsData.json";
import "./Styles/ProductPage.css";

const ProductPage = () => {
  const [prodData, setProdData] = useState(data);
  let cartList = JSON.parse(localStorage.getItem("cart")) || [];

  const handleAddCart = (id, q) => {
    console.log("q:", q);
    console.log("id:", id);
    let productCart = prodData.find((ele) => ele.id === id);
    console.log("productCart:", productCart);
    let exist = cartList.find((ele) => ele.id === id);

    if (!exist) {
      productCart = { ...productCart, qty: parseInt(q) };

      cartList.push(productCart);
      localStorage.setItem("cart", JSON.stringify(cartList));

      alert("Product Added To Cart Successfully");
    } else {
      alert("Already Added To Cart");
    }
  };

  return (
    <div className="product-container">
      <div className="prodBox">
        {prodData &&
          prodData.map((prod, i) => {
            return <ProductCard handleAddCart={handleAddCart} key={i} data={prod}></ProductCard>;
          })}
      </div>
    </div>
  );
};

export default ProductPage;
