import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./authComponents/Login";
import { Signup } from "./authComponents/Signup";
import Authpage from "./Authpage";
import { auth } from "./authComponents/firebase";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import Checkout from "./pages/checkout";

function App() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        setUserEmail(user.email);
      } else {
        setUserName("");
        setUserEmail("");
      }
    });
  }, [userName]);

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Authpage name={userName} />} />
          </Routes>

          <Routes>
            <Route path="/shop" element={<Shop user={userName} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart user={userName} />} />
            <Route
              path="/checkout"
              element={<Checkout user={userName} email={userEmail} />}
            />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
