import React from "react";

import { Routes, Route } from "react-router-dom";
import CartPage from "../Pages/CartPage";
import Home from "../Pages/Home";
import ProductPage from "../Pages/ProductPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default AllRoutes;
