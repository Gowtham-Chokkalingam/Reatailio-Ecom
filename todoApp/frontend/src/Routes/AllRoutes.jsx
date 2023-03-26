import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";
import TodoPage from "../Pages/TodoPage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<SignUpPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Todo" element={<TodoPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
