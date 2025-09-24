import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartPage() {
  const { cartItems } = useContext(CartContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <img src={item.img} alt={item.name} width="50" />
            <span style={{ marginLeft: "10px" }}>{item.name}</span>
            <span style={{ marginLeft: "10px" }}>₹{item.price}</span>
          </div>
        ))
      )}
    </div>
  );
}

export default CartPage;
