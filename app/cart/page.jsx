"use client";

import { useState } from "react";
import useCart from "../use-cart";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
   

  return (
    <div>
      <h1 className="py-12 text-center"> Your Cart</h1>

    
      
      {cart.map((product, index) => (
        <div className="border-2" key={index}>
          <div className="w-1/2 mx-auto my-12 space-y-4">
            <h2>Product name: {product.description}</h2>
            <p className="flex gap-4">Image <img className="w-14" src={product.image} alt="" /></p>
             
            <p>Quanitity: {product.quantity} </p>
            <p>Price: ${product.quantity*product.price }</p>
            <button className="bg-violet-800 px-2 py-1 rounded-md text-white" onClick={() => removeFromCart(index)}>Remove</button>
          </div>

        </div>
      ))}
    </div>
  );
};

export default CartPage;