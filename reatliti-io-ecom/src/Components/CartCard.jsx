import React, { useState } from "react";
import "./ProductCard.css";
import { BiCategory } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import { GiPriceTag } from "react-icons/gi";

const CartCard = ({ data, handleRemove, handleQty }) => {
  const [qty, setQty] = useState(parseInt(data.qty));
  // console.log("qtyCartCard:", qty);

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
        <h5>Price: {data.price}</h5>
      </div>
      <div style={{ display: "flex", gap: "2px", marginLeft: "4px" }}>
        <BsFillCartCheckFill></BsFillCartCheckFill>
        <h5>Total: {(data.price * qty).toFixed(2)}</h5>
      </div>
      <div style={{ display: "flex", gap: "2px", marginLeft: "4px" }}>
        <AiOutlineStar></AiOutlineStar>
        <h5>Rating: {data.rating.rate}</h5>
      </div>

      <div className="addtoCart">
        <button onClick={() => handleRemove(data.id)}>Remove</button>

        <div>
          <button
            disabled={qty < 2}
            onClick={(e) => {
              setQty((pre) => pre - 1);
              handleQty(data.id, qty - 1);
            }}
          >
            -
          </button>
          <input
            id="qty"
            style={{ width: "50px" }}
            value={qty}
            placeholder="Qty"
            type="number"
            min="1"
            
            onChange={(e) => {
              const value = parseInt(e.target.value);
              setQty(value);
              handleQty(data.id, value);
            }}
          ></input>
          <button
            onClick={(e) => {
              setQty((pre) => pre + 1);
              handleQty(data.id, qty + 1);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
