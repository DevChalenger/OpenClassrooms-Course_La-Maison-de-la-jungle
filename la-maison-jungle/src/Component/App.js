import { useState, useEffect } from "react";
import Banner from "./Banner";
import logo from "../assets/logo.png";
import Cart from "./Cart";
import Footer from "./Footer";
import ShoppingList from "./ShoppingList";
import "../styles/Layout.css";
import Welcome from "./Welcome";
function App() {
  const saveCart = localStorage.getItem("cart");
  const [cart, updateCart] = useState(saveCart ? JSON.parse(saveCart) : []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  });
  return (
    <div>
      <Welcome />
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <div className="lmj-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />

        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
