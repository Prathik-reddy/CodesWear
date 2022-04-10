import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [cart, setcart] = useState({});
  const [total, settotal] = useState(0);

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setcart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));

      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
  }, []);

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    settotal(subt);
  };
  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if (itemCode in cart) {
      console.log("addworinkg");

      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant };
    }
    setcart(newCart);
    saveCart(newCart);
  };
  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if (itemCode in cart) {
      console.log("remworinkg");
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode];
    }
    setcart(newCart);
    saveCart(newCart);
  };
  const clearCart = () => {
    setcart({});
    saveCart({});
    console.log("cart has been cleared");
  };
  return (
    <>
      <Navbar key={total} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} total={total} />
      <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} total={total} {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
