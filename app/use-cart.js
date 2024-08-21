 

import { useState, useEffect } from "react";

const CART_KEY = "cart";

const useCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load cart data from localStorage on component mount
    const storedCart = localStorage.getItem(CART_KEY);
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
  };

  return { cart, addToCart, removeFromCart };
};

export default useCart;