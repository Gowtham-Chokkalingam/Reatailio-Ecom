import React, { useCallback, useEffect, useState } from "react";
import "./ProductCard.css";
import { BiCategory } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { GiPriceTag } from "react-icons/gi";
const ProductCard = ({ data, handleAddCart }) => {
  const [qty, setQty] = useState(1);

  return (
    <div className="prodCardContainer">
      <div className="innerBox">
        <h5>{data.title}</h5>
      </div>
      <img src={data.image} alt={data.category}></img>
      <div style={{ display: "flex", gap: "2px", marginLeft: "4px" }}>
        <BiCategory></BiCategory>
        <h5>Category: {data.category}</h5>
      </div>
      <div style={{ display: "flex", gap: "2px", marginLeft: "4px" }}>
        <GiPriceTag></GiPriceTag>
        <h5>Price: {(data.price * qty).toFixed(2)}</h5>
      </div>
      <div style={{ display: "flex", gap: "2px", marginLeft: "4px" }}>
        <AiOutlineStar></AiOutlineStar>
        <h5>Rating: {data.rating.rate}</h5>
      </div>
      <div className="addtoCart">
        <button
          onClick={() => {
            handleAddCart(data.id, qty);
          }}
        >
          Add To Cart
        </button>

        <div>
          <label htmlFor="qty">Qty: </label>
          <input
            id="qty"
            style={{ width: "50px" }}
            value={qty}
            placeholder="Qty"
            type="number"
            min="1"
          
            onChange={(e) => setQty(e.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
