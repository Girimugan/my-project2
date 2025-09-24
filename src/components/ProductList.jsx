import React from "react";
import ProductCard from "./ProductCard";
import med1 from "../assets/timedealprod1.jpg";
import med2 from "../assets/timedealprod1.jpg";
import med3 from "../assets/timedealprod1.jpg";
import "./ProductList.css";

function ProductList() {
  const products = [
    { id: 1, name: "Paracetamol 500mg", price: 35, img: med1 },
    { id: 2, name: "Vitamin C Tablets", price: 120, img: med2 },
    { id: 3, name: "Cough Syrup", price: 85, img: med3 },
  ];

  return (
    <div className="product-list">
      <h2>Popular Medicines</h2>
      <div className="products">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            price={item.price}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
