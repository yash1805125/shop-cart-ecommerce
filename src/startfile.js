import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
// import { useNavigate } from "react-router-dom";

const Startfile = () => {
  const navigate = useNavigate();
  useEffect(() => navigate("/shop"), []);
  return (
    <div>
      <ShopContextProvider>{/* <Navbar /> */}</ShopContextProvider>
    </div>
  );
};

export default Startfile;
