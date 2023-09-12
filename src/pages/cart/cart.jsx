import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
import { Navbar } from "../../components/navbar";

export const Cart = (props) => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div>
      {props.user.length !== 0 ? (
        <div className="cart">
          <Navbar name={props.user} />
          <div>
            <h1>Your Cart Items</h1>
          </div>
          <div className="cart">
            {PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem data={product} />;
              }
            })}
          </div>

          {totalAmount > 0 ? (
            <div className="checkout">
              <h2 style={{ textAlign: "center" }}>
                {" "}
                Subtotal: ${totalAmount}{" "}
              </h2>
              <button onClick={() => navigate("/shop")}>
                {" "}
                Continue Shopping{" "}
              </button>
              <button
                onClick={() => {
                  // checkout();
                  navigate("/checkout");
                }}
              >
                {" "}
                Checkout{" "}
              </button>
            </div>
          ) : (
            <h1> Your Shopping Cart is Empty</h1>
          )}
        </div>
      ) : (
        navigate("/")
      )}
    </div>
  );
};
