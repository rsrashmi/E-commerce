import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import AllShop from "../pages/AllShop";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<AllShop />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Routers;
