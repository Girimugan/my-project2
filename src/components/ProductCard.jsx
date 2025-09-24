import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ name, price, img }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ name, price, img });
  };

  return (
    <div className="product-card">
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <p>₹{price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;

